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
        <h3>${element.title}</h3>
        <h4>${element.price}</h4>
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
        <p >${title.slice(0, 20)}...</p>
        <h4 class = "price">${price}</h4>
    `;
    console.log(title);
    cartmaincontainer.appendChild(div);
    UpdateTotal();
};
const UpdateTotal = () => {
    const allprice = document.getElementsByClassName("price");
    let count = 0;
    for (const element of allprice) {
        count = count + parseFloat(element.innerText);
    }
    document.getElementById("total").innerText = count.toFixed(2);
};
loadallProducts(); 