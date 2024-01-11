function resolveAfter2Seconds() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function fetchProducts() {
    const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
    const products = await response.json()
    return products
}

// const fetchProducts = async () => {
//     ...
// }


/* Here are the calls #################*/
async function loadProducts() {
    const products = await fetchProducts()
    console.log(products)
}

async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // Expected output: "resolved"
}

asyncCall();

//loadProducts();