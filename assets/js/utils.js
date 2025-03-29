

export async function fetchJSON(url, method, apiKey, accept, contentType){

    const headers = {};

    if (apiKey) {
        headers['Authorization'] = `Bearer ${apiKey}`;
    }

    if (accept) {
        headers['Accept'] = accept;
    }

    if(contentType){
        headers['Content-Type'] = contentType;
    }

    const response = await fetch(url, {
            method: method,
            headers: headers
        });

    const data = await response.json();
    return data
}

export async function includes(searchIn, searchFor){
    if(searchFor.length <3) return searchIn
    return searchIn.toLowerCase().includes(searchFor.toLowerCase)
}

export function formatPrice(price, currency = "USD") {
    const exchangeRate = 32;

    if (currency === "TRY") {
        return `${(price * exchangeRate)} TL`;
    } else {
        return `${price} $`;
    }
}

