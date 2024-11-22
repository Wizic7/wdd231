// params.js
const products = [
    { id: 1, name: "Product 1", price: 3, image: "https://placehold.co/300" },
    { id: 2, name: "Product 2", price: 5, image: "https://placehold.co/300" },
    { id: 3, name: "Product 3", price: 1, image: "https://placehold.co/300" }
  ];

getProductDetails();

function getParams(param)
{
    const paramString = window.location.search;
    const param_list = new URLSearchParams(paramString);
    return param_list.get(param);
}

function productTemplete(product)
{
    return `<img src="${product.image}" alt="Some Product">
            <div class="product-details">
                <h3>${product.name}</h3>
                <p>Price: $${product.price}</p>
            </div>`
}

function getProductDetails()
{
    const id = getParams("productId");
    const product = products.find((p) => p.id == id);
    const product_section = document.querySelector(".product");
    if(product) 
        {
            product_section.innerHTML = productTemplete(product);
        }
}