
const products = [{"id": 1, "name": "Аромат 1", "description": "Описание аромата", "image": "product_1.jpg", "volumes": [{"size": "3мл", "price": 200}, {"size": "6мл", "price": 400}]}, {"id": 2, "name": "Аромат 2", "description": "Описание аромата", "image": "product_2.jpg", "volumes": [{"size": "3мл", "price": 200}, {"size": "6мл", "price": 400}]}, {"id": 3, "name": "Аромат 3", "description": "Описание аромата", "image": "product_3.jpg", "volumes": [{"size": "3мл", "price": 200}, {"size": "6мл", "price": 400}]}, {"id": 4, "name": "Аромат 4", "description": "Описание аромата", "image": "product_4.jpg", "volumes": [{"size": "3мл", "price": 200}, {"size": "6мл", "price": 400}]}, {"id": 5, "name": "Аромат 5", "description": "Описание аромата", "image": "product_5.jpg", "volumes": [{"size": "3мл", "price": 200}, {"size": "6мл", "price": 400}]}, {"id": 6, "name": "Аромат 6", "description": "Описание аромата", "image": "product_6.jpg", "volumes": [{"size": "3мл", "price": 200}, {"size": "6мл", "price": 400}]}, {"id": 7, "name": "Аромат 7", "description": "Описание аромата", "image": "product_7.jpg", "volumes": [{"size": "3мл", "price": 200}, {"size": "6мл", "price": 400}]}, {"id": 8, "name": "Аромат 8", "description": "Описание аромата", "image": "product_8.jpg", "volumes": [{"size": "3мл", "price": 200}, {"size": "6мл", "price": 400}]}, {"id": 9, "name": "Аромат 9", "description": "Описание аромата", "image": "product_9.jpg", "volumes": [{"size": "3мл", "price": 200}, {"size": "6мл", "price": 400}]}, {"id": 10, "name": "Аромат 10", "description": "Описание аромата", "image": "product_10.jpg", "volumes": [{"size": "3мл", "price": 200}, {"size": "6мл", "price": 400}]}, {"id": 11, "name": "Аромат 11", "description": "Описание аромата", "image": "product_11.jpg", "volumes": [{"size": "3мл", "price": 200}, {"size": "6мл", "price": 400}]}, {"id": 12, "name": "Аромат 12", "description": "Описание аромата", "image": "product_12.jpg", "volumes": [{"size": "3мл", "price": 200}, {"size": "6мл", "price": 400}]}, {"id": 13, "name": "Аромат 13", "description": "Описание аромата", "image": "product_13.jpg", "volumes": [{"size": "3мл", "price": 200}, {"size": "6мл", "price": 400}]}];
const cart = [];

function renderProducts() {
    const list = document.getElementById('product-list');
    list.innerHTML = '';
    products.forEach(function(product) {
        const item = document.createElement('div');
        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;
        img.className = 'product-img';
        item.appendChild(img);

        const title = document.createElement('h3');
        title.textContent = product.name;
        item.appendChild(title);

        const desc = document.createElement('p');
        desc.textContent = product.description;
        item.appendChild(desc);

        product.volumes.forEach(function(opt) {
            const btn = document.createElement('button');
            btn.textContent = opt.size + ' — ' + opt.price + '₽';
            btn.onclick = function() {
                addToCart(product.name, opt);
            };
            item.appendChild(btn);
        });
        list.appendChild(item);
    });
}

function addToCart(name, opt) {
    cart.push({ name: name, size: opt.size, price: opt.price });
    renderCart();
}

function renderCart() {
    const items = document.getElementById('cart-items');
    items.innerHTML = '';
    let total = 0;
    cart.forEach(function(item) {
        const li = document.createElement('li');
        li.textContent = item.name + ' — ' + item.size + ' — ' + item.price + '₽';
        items.appendChild(li);
        total += item.price;
    });
    document.getElementById('total').textContent = total + '₽';
    document.getElementById('cart').style.display = cart.length ? 'block' : 'none';
}

document.getElementById('checkout-btn').onclick = function() {
    document.getElementById('order-form').classList.remove('hidden');
};

document.getElementById('form').onsubmit = async function(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
        name: formData.get('name'),
        username: formData.get('username'),
        address: formData.get('address'),
        phone: formData.get('phone'),
        order: cart
    };
    await fetch('https://api.telegram.org/bot7752682493:AAGmk_I2YvfXDBLWipLwHE6UM3y_f6qZ7ZM/sendMessage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: '@LuMnsn',
            text: "Новый заказ от " + data.name + " (@" + data.username + "):\n" +
                  data.order.map(i => i.name + ' — ' + i.size + ' — ' + i.price + '₽').join('\n') +
                  "\nАдрес: " + data.address + "\nТелефон: " + data.phone,
            reply_markup: {
                inline_keyboard: [[{ text: "Связаться", url: "https://t.me/" + data.username }]]
            }
        })
    });
    alert('Заказ отправлен!');
};
renderProducts();
