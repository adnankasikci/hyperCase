import { API_KEY, BASE_API_URL } from "./constants.js";
import { fetchJSON } from "./utils.js";


export class ProductCreate{

    constructor(apiURL){
        if(!apiURL.length){
            throw new Error("URL Doldurulması zorunludur.")
        }
        this.apiURL= apiURL;
    }

    async fetchData(page, limit){
        // const DataList2 = await fetchJSON(`${BASE_API_URL}/Customer/Get`, "GET", API_KEY, "application/json");
        const DataList = await fetchJSON(`${BASE_API_URL}/Products/List`, "POST", API_KEY, "application/json", "application/json");
        if(page && limit)
        {
            limit = page * limit
            return DataList.data.slice(0, limit);
        }
        return DataList.data;
    }

    async findByName(searchValue) {
        const allProducts = await this.fetchData();
        return allProducts.filter(product =>
            product.productName.toLowerCase().includes(searchValue.toLowerCase())
        );
    }

    async fetchProductById(id){
        const DataList = await fetchJSON(`${BASE_API_URL}/Products/List`, "POST", API_KEY, "application/json", "application/json");
        const allProduct = DataList.data;
        const product = allProduct.find(item => item.productID === id);
        return product;
    }

}
