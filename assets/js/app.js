

import { API_KEY, BASE_API_URL} from "./constants.js";
import { ProductCreate } from "./productCreate.js";
import { formatPrice } from "./utils.js";
import { addToBasket } from "./components/productBasket.js";


const ProductCreateControl = new ProductCreate(`${BASE_API_URL}?key=${API_KEY}`);
const productsCards = document.querySelector(".cards");
const pageCreaseButton = document.querySelector(".pageCreaseButton");
let currentCurrency = localStorage.getItem("selectedLanguage") === "tr" ? "TRY" : "USD";
let pageNumber = 1;



window.addEventListener('load', loadPageRender);

async function loadPageRender() {
    productsCards.innerHTML = "";
    if (productId) {
    } else {
    const Data = await ProductCreateControl.fetchData(pageNumber,8);
    Data.forEach(product => { createProductCard(product);});
    }
}

if (pageCreaseButton) pageCreaseButton.addEventListener("click", pageCrease);

function pageCrease() {
    pageNumber += 1;
    loadPageRender();
}

function createProductCard(product){
    const cardElement = document.createElement("div");
    cardElement.classList.add("productCard");
    cardElement.innerHTML = buildHtmlProduct(product.productID, product.productName, product.productData.productMainImage, product.productData.productInfo ,product.salePrice);
    productsCards.appendChild(cardElement);
}

function buildHtmlProduct(productId, productName, productImage, productDetails, productMoney){
    return `
    <div class="bg-white dark:bg-gray-800 dark:text-gray-300 rounded-md flex flex-col h-full group">
        <div class="p-3 flex-grow">
            <img class="w-full h-44 object-cover rounded-md duration-300 group-hover:scale-110" src="${productImage}" alt="">
            <div class="flex items-center mt-4 w-full justify-between">
                <div class="cardList_item_title font-medium line-clamp-1 w-4/6">${productName}</div>
                <div class="w-2/6 flex justify-end">
                    <div class="italic bg-blue-500 text-white rounded-md p-2 text-sm">
                    ${formatPrice(productMoney,currentCurrency)}
                    </div>
                </div>
            </div>
            <p class="text-sm my-3 line-clamp-2">${productDetails}</p>
        </div>
        <a href="/pages/productDetail.html?id=${productId}" class="text-sm text-blue-500 font-medium border-t text-center border-blue-500 py-2 hover:bg-blue-500 hover:text-white duration-500 rounded-b-md cursor-pointer">Ürün Detayını Görüntüle</a>
    </div>
    `
}


const searchInput = document.querySelector(".searchInput");

if (searchInput) {
    searchInput.addEventListener("input", async () => {
        productsCards.innerHTML = "";
        const searchValue = searchInput.value.trim();
        if (searchValue.length > 3) {
            const filteredProducts = await ProductCreateControl.findByName(searchValue);
            filteredProducts.forEach(createProductCard);
        } else if (searchValue.length >= 0 ){
            let pageNumber = 1;
            loadPageRender();
        }
    });
}


const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

if (productId) {
    const product = await ProductCreateControl.fetchProductById(parseInt(productId));
    createProductCardDetails(product)
}

function createProductCardDetails(product){
    const cardElement = document.createElement("div");
    cardElement.classList.add("productCard");
    cardElement.innerHTML =
    `
        <div class="flex flex-col lg:flex-row gap-4 p-5 lg:p-0">
            <div class="w-full md:w-1/2">
                <img class="rounded-md" src="${product.productData.productMainImage}" >
            </div>
            <div class="w-full bg-white dark:bg-gray-800 rounded-md px-7 pt-12 flex flex-col justify-center">
                <div class="flex flex-col md:flex-row items-center gap-8 mb-10 text-xs font-semibold">
                    <div class="flex flex-row items-center gap-2 text-green-700 dark:text-green-300">
                        <span>Toplam Stok</span>
                        <span>${product.totalStock}</span>
                    </div>
                    <div class="flex flex-row items-center gap-2 dark:text-cyan-300 text-cyan-700">
                        <span>Ürün Değeri</span>
                        <span>${product.buyPrice}</span>
                    </div>
                    <div class="flex flex-row items-center gap-2 dark:text-orange-300 text-orange-700">
                        <span>Platform Listesi</span>
                        <span>${product.platformList}</span>
                    </div>
                </div>
                <div class="grow flex justify-center flex-col">
                    <h1 class="text-2xl font-bold">${product.productName}</h1>
                    <p class="text-sm mt-4">${product.productData.productInfo}</p>
                </div>
                <div class="flex flex-row items-center justify-between">
                    <div class="flex">
                        <button id="addToBasketBtn" class="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white duration-300 cursor-pointer rounded-full px-4 py-2">Ürünü Sepete Ekle</button>
                    </div>
                    <div class="mb-10 mt-8 text-3xl font-bold">${formatPrice(product.salePrice,currentCurrency)}</div>
                </div>
            </div>
        </div>
    `
    const addToBasketButton = cardElement.querySelector('#addToBasketBtn');
    addToBasketButton.addEventListener('click', () => addToBasket(product));

    productsCards.appendChild(cardElement);
}
