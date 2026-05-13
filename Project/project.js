const loadallProducts = ()=>{
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
        displayProducts(data);
;    })
}
const displayProducts = product =>{
    const productcontainer = document.getElementById("product-container");
    product.forEach(element => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
        <img src="${element.image}" alt="${element.title}">
        <h4>${element.title}</h4>
        <p>${element.description}</p>
        <button>Details</button>
        <button onclick="HandleAddToCart('${element.title}', ${element.price})"> Add to Cart </button>
        `;
        productcontainer.appendChild(div);
    });
}
const HandleAddToCart = (title, price) => {
    const cartmaincontainer = document.getElementById("cart-main-container");
    const div = document.createElement('div');
    div.classList.add("cart-item");
    div.innerHTML = `
        <h4>${title}</h4>
        <p>${price}</p>
    `;
    console.log(title);
    cartmaincontainer.appendChild(div);
};
loadallProducts(); 