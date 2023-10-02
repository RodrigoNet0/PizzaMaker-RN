const pizzaType = document.getElementById('pizza-type');
const pizzaTopping = document.getElementById('pizza-topping');
const totalDisplay = document.getElementById('total');
const pizzaImage = document.getElementById('pizza-image');

const pizzaPrices = {
    margherita: 10.00,
    pepperoni: 12.00,
    veggie: 11.00
};

const toppingPrices = {
    queijo: 1.50,
    tomate: 1.00,
    cebola: 0.75
};

const pizzaImages = {
    margherita: './images/margherita.jpg',
    peperoni: './images/peperoni.webp',
    vegetariana: './images/vegetariana.jpg'
};

function updateTotal() {
    const pizzaPrice = pizzaPrices[pizzaType.value] || 0;
    const toppingPrice = toppingPrices[pizzaTopping.value] || 0;
    const total = pizzaPrice + toppingPrice;
    totalDisplay.textContent = total.toFixed(2);
    updatePizzaImage(pizzaType.value);
}

function updatePizzaImage(pizzaType) {
    const imageUrl = pizzaImages[pizzaType];
    pizzaImage.src = imageUrl;
}

pizzaType.addEventListener('change', updateTotal);
pizzaTopping.addEventListener('change', updateTotal);
