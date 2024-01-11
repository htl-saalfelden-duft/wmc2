
const { from } = rxjs
const { tap, mergeMap } = rxjs.operators


function resolveAfter2Seconds() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}


const fetchProducts = () => {
    const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
    
    return from(fetchPromise).pipe(
        mergeMap(response => response.json())
    )
}


/* Here are the calls #################*/
async function loadProducts() {
    fetchProducts()
    .subscribe(products => {
        console.log(products)
    })
}

function asyncCall() {
    console.log('calling');
    from(resolveAfter2Seconds())
    .subscribe(products => {
        console.log(products)
    })
    // Expected output: "resolved"
}


asyncCall();

// loadProducts();