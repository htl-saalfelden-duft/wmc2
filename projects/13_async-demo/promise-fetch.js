function resolveAfter2Seconds() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

const fetchProducts = () => {
    const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
    
    return fetchPromise
    .then((response) => response.json())
}


/* Here are the calls #################*/
async function loadProducts() {
    fetchProducts()
    .then((data) => {
        console.log(data)
    })
}

function asyncCall() {
    console.log('calling');
    resolveAfter2Seconds()
    .then((data) => {
        console.log(data)
    })
    // Expected output: "resolved"
}


asyncCall();

//loadProducts();
