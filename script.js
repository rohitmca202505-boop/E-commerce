const products = [

    {
        id: 1,
        name: "Modern Shoes",
        price: "$99",
        image:
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },

    {
        id: 2,
        name: "Stylish Watch",
        price: "$149",
        image:
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    },

    {
        id: 3,
        name: "Headphones",
        price: "$79",
        image:
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
    },

    {
        id: 4,
        name: "Fashion Jacket",
        price: "$120",
        image:
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
    }

];

const container =
    document.getElementById("products-container");

let cartCount = 0;

products.forEach(product => {

    container.innerHTML += `

        <div class="product-card">

            <img src="${product.image}" alt="">

            <div class="product-info">

                <h3>${product.name}</h3>

                <p class="price">${product.price}</p>

                <button onclick="addToCart()">
                    Add To Cart
                </button>

            </div>

        </div>

    `;

});

function addToCart() {

    cartCount++;

    document.getElementById("cart-count")
        .innerText = cartCount;

}

function scrollToProducts() {

    document.getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });

}