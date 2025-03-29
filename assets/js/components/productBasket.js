import { formatPrice } from "../utils.js";

export function addToBasket(product) {

    let basket = JSON.parse(localStorage.getItem('basket')) || [];
    const productIndex = basket.findIndex(item => item.productID === product.productID);

    if (productIndex !== -1) {
        basket[productIndex].quantity += 1;
    } else {
        basket.push({...product, quantity: 1});
    }

    localStorage.setItem('basket', JSON.stringify(basket));
    alert('Ürün sepete eklendi!');
    listToBasket();
    updateBasketLength()
}

function removeFromBasket(productID) {
    let basket = JSON.parse(localStorage.getItem('basket')) || [];
    basket = basket.filter(product => product.productID !== productID);
    localStorage.setItem('basket', JSON.stringify(basket));
    listToBasket();
}

function listToBasket() {
    const products = JSON.parse(localStorage.getItem('basket')) || [];
    const basketContainer = document.getElementById('basketContainer');
    let currentCurrency = localStorage.getItem("selectedLanguage") === "tr" ? "TRY" : "USD";

    if (basketContainer) {
        basketContainer.innerHTML = '';

        console.log(products)
        if(products.length == 0){
            const emptyMessage = document.createElement('p');
            emptyMessage.classList.add('bg-white', 'py-3','text-center', 'text-gray-500', 'mt-12', 'mb-24');
            emptyMessage.textContent = "Sepetinizde şu an ürün bulunmuyor...";
            basketContainer.appendChild(emptyMessage);
            return;
        }

        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <div class="bg-white dark:bg-gray-800 flex flex-col md:flex-row p-2 rounded-md items-center gap-10">
                    <img class="rounded-md h-24 mt-4 md:mt-0" src="${product.productData.productMainImage}" >
                    <div class="flex flex-col w-full">
                        <div class="flex flex-col md:flex-row items-end md:items-center justify-between">
                            <div class="flex flex-col gap-2">
                                <h2 class="product-name">${product.productName}</h2>
                                <p class="text-sm opacity-25 font-light">${product.productData.productInfo}</p>
                            </div>
                            <div class="flex items-center flex-row gap-3">
                                <div class="product-price">${formatPrice(product.salePrice, currentCurrency)}</div>
                                <div class="mr-4">
                                    <div id="remove-btn-${product.productID}" class="bg-red-500 text-white h-8 w-8 flex items-center justify-center rounded-md cursor-pointer">
                                        <i class="fa-solid fa-trash"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            basketContainer.appendChild(productCard);

            const removeButton = document.getElementById(`remove-btn-${product.productID}`);
            if (removeButton) {
                removeButton.addEventListener('click', () => {
                    removeFromBasket(product.productID);
                    updateBasketLength()
                });
            }
        });
    }
}

function updateBasketLength() {
  const basket = JSON.parse(localStorage.getItem('basket')) || [];
  const basketLength = basket.length;
  const basketLengthElement = document.getElementById('basketLength');

  if (basketLengthElement) {
    basketLengthElement.textContent = basketLength;
  }
}

updateBasketLength()
listToBasket();
