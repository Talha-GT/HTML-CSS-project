let allProducts = []; // Global variable to hold all fetched products

let cnt=0;
const AllProduct = () => {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => {
            allProducts = data; // Save all products globally
            DisplayProduct(data);
        });
};

// Display products
const DisplayProduct = (products) => {                                         
    const container = document.getElementById("product-cont");                                                  
    container.innerHTML = ""; // Clear container before displaying products

    if (products.length === 0) {
        container.innerHTML = `<h5 class="text-danger text-center">No items found</h5>`;
        return;
    }

    products.forEach(product => {
        const div = document.createElement("div");
        div.classList.add("col-md-3", "mb-4");
        div.innerHTML = `
            <div class="card h-100">
                <img class="card-img-top" src="${product.image}" alt="" style="height: 150px; object-fit: contain;">
                <div class="card-body">
                    <h5>${product.title.slice(0, 20)}</h5>
                    <h6>Price: $${product.price}</h6>
                    <button class="btn btn-info" onclick="ViewDetails(${product.id})">Details</button>
                    <button class="btn btn-success" onclick="handleAdd('${product.title}', ${product.price})">Add to Cart</button>
                </div>
            </div>`;
        container.appendChild(div);
    });
};

    const searchProducts = () => {
    const query = document.getElementById("search-input").value.toLowerCase();
    const filteredProducts = allProducts.filter(product =>
        product.title.toLowerCase().includes(query)
    );

    DisplayProduct(filteredProducts);
};

// Cart Functions (unchanged)
const handleAdd = (title, price) => {
    const container = document.getElementById("cart-main-container");
    const div = document.createElement("div");
    div.classList.add("d-flex", "justify-content-between", "border-bottom", "p-2");
    div.innerHTML = `<p>${title}</p><h5 class="prices">$${price}</h5>`;
    container.appendChild(div);

    updateModalCart(title, price);
    updateCartTotals();
    Toatalcount();

};
let count = 0;
const Toatalcount = () => {
    const cnt = document.getElementById("cart-item");
    count += 1;
    document.getElementById("cart-item").innerText = count;
};

const updateModalCart = (title, price) => {
    const modalContainer = document.getElementById("cart-modal-container");
    const div = document.createElement("div");
    div.classList.add("d-flex", "justify-content-between", "border-bottom", "p-2");
    div.innerHTML = `<p>${title}</p><h5>$${price}</h5>`;
    modalContainer.appendChild(div);
};

const updateCartTotals = () => {
    let sum = 0;
    const prices = document.getElementsByClassName("prices");
    for (const price of prices) {
        sum += parseFloat(price.innerText.slice(1));
    }
    document.getElementById("summ").innerText = sum.toFixed(2);
    document.getElementById("modal-summ").innerText = sum.toFixed(2);
};

// Details Modal Functions
let detailsCart = [];
const ViewDetails = (id) => {
    fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(product => {
            document.getElementById("details-image").src = product.image;
            document.getElementById("details-title").innerText = product.title;
            document.getElementById("details-description").innerText = product.description;
            document.getElementById("details-price").innerText = product.price;

            const modal = new bootstrap.Modal(document.getElementById("detailsModal"));
            modal.show();

            document.getElementById("add-to-details-cart").onclick = () => addToDetailsCart(product.title, product.price);
        });
};

const addToDetailsCart = (title, price) => {
    detailsCart.push({ title, price });
    const cart = document.getElementById("details-cart");
    cart.innerHTML = "";
    detailsCart.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("d-flex", "justify-content-between", "border-bottom", "p-2");
        div.innerHTML = `<p>${item.title}</p><h5>$${item.price}</h5>`;
        cart.appendChild(div);
    });
};

AllProduct();
