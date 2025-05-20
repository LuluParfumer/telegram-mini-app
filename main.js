
const products = [{"id": 1, "name": "Ganymede Marc-Antoine Barrois", "description": "унисекс аромат, древесный пряный. Верхние ноты: Шафран, Итальянский мандарин. Средние: Османтус, Бессмертник, Лист фиалки. Базовые: Минеральные ноты, Замша, Akigalawood, Мускус, Кедр, Пачули.", "volumes": [{"size": "3мл", "price": 200}, {"size": "6мл", "price": 400}, {"size": "10мл", "price": 600}, {"size": "15мл", "price": 800}, {"size": "20мл", "price": 1200}, {"size": "30мл", "price": 1500}]}, {"id": 2, "name": "Aldebaran Marc-Antoine Barrois", "description": "унисекс аромат, цветочный. Верхняя нота: Тубероза. Средние ноты: Мате, Паприка. Базовая нота: Бобы тонка.", "volumes": [{"size": "3мл", "price": 300}, {"size": "6мл", "price": 500}, {"size": "10мл", "price": 800}, {"size": "15мл", "price": 1100}, {"size": "20мл", "price": 1400}, {"size": "30мл", "price": 1700}]}, {"id": 3, "name": "Encelade Marc-Antoine Barrois", "description": "унисекс аромат, фужерно-зелёный. Верхняя нота: Ревень. Средняя нота: Кедр. Базовые ноты: Ветивер, Сандал, Бобы тонка, Кожа.", "volumes": [{"size": "3мл", "price": 200}, {"size": "6мл", "price": 400}, {"size": "10мл", "price": 600}, {"size": "15мл", "price": 800}, {"size": "20мл", "price": 1200}, {"size": "30мл", "price": 1500}]}, {"id": 4, "name": "Bal d’Afrique Byredo", "description": "унисекс аромат, восточно-древесный. Верхние ноты: Лимон, Бархатцы, Бергамот, Черная смородина, Африканский апельсиновый цвет. Средние: Фиалка, Цикламен, Жасмин. Базовые: Ветивер, Мускус, Амбра, Вирджинский кедр.", "volumes": [{"size": "3мл", "price": 200}, {"size": "6мл", "price": 400}, {"size": "10мл", "price": 600}, {"size": "15мл", "price": 800}, {"size": "20мл", "price": 1200}, {"size": "30мл", "price": 1500}]}, {"id": 5, "name": "Open Sky Byredo", "description": "унисекс аромат, древесный пряный. Верхние ноты: Помело, Черный перец. Средняя нота: Конопля. Базовые ноты: Ветивер, Пало Санто.", "volumes": [{"size": "3мл", "price": 200}, {"size": "6мл", "price": 400}, {"size": "10мл", "price": 600}, {"size": "15мл", "price": 800}, {"size": "20мл", "price": 1200}, {"size": "30мл", "price": 1500}]}, {"id": 6, "name": "Sellier Byredo", "description": "унисекс аромат, кожаный. Верхние ноты: Кашмеран, Черный чай. Средние ноты: Кожа, Лист табака. Базовые ноты: Береза, Дубовый мох.", "volumes": [{"size": "3мл", "price": 150}, {"size": "6мл", "price": 300}, {"size": "10мл", "price": 500}, {"size": "15мл", "price": 750}, {"size": "20мл", "price": 1000}, {"size": "30мл", "price": 1500}]}, {"id": 7, "name": "Blanche Byredo", "description": "аромат для женщин, цветочные альдегидные. Верхние ноты: Альдегиды, Роза, Розовый перец. Средние ноты: Пион, Фиалка, Африканский апельсиновый цвет. Базовые ноты: Мускус, Древесные ноты, Сандал.", "volumes": [{"size": "3мл", "price": 150}, {"size": "6мл", "price": 300}, {"size": "10мл", "price": 500}, {"size": "15мл", "price": 750}, {"size": "20мл", "price": 1000}, {"size": "30мл", "price": 1500}]}, {"id": 8, "name": "Byredo Marijuana", "description": "аромат по мотивам Byredo Marijuana. Верхние ноты: каннабис, перец, бурбонская ваниль, паприка, кофе. Ноты сердца: эбеновое дерево, табак, мексиканский шоколад. База: кедр, пачули, сандал.", "volumes": [{"size": "3мл", "price": 150}, {"size": "6мл", "price": 300}, {"size": "10мл", "price": 500}, {"size": "15мл", "price": 750}, {"size": "20мл", "price": 1000}, {"size": "30мл", "price": 1500}]}, {"id": 9, "name": "Pulp Byredo", "description": "унисекс аромат, цветочно-фруктовый. Верхние ноты: Черная смородина, Бергамот, Кардамон. Средние ноты: Инжир, Красное яблоко, Тиаре. Базовые ноты: Пралине, Цвет персика, Кедр.", "volumes": [{"size": "3мл", "price": 150}, {"size": "6мл", "price": 300}, {"size": "10мл", "price": 500}, {"size": "15мл", "price": 750}, {"size": "20мл", "price": 1000}, {"size": "30мл", "price": 1500}]}, {"id": 10, "name": "Mojave Ghost Byredo", "description": "унисекс аромат, восточно-цветочный. Верхние ноты: Саподилла, Амбретта. Средние ноты: Магнолия, Фиалка, Сандал. Базовые ноты: Серая амбра, Кедр, Мускус.", "volumes": [{"size": "3мл", "price": 150}, {"size": "6мл", "price": 300}, {"size": "10мл", "price": 500}, {"size": "15мл", "price": 750}, {"size": "20мл", "price": 1000}, {"size": "30мл", "price": 1500}]}, {"id": 11, "name": "Musk Kashmir Attar Collection", "description": "унисекс аромат, цветочно-древесно-мускусный. Верхняя нота: Белый перец. Средние ноты: Гардения, Сандал. Базовая нота: Белый мускус.", "volumes": [{"size": "3мл", "price": 200}, {"size": "6мл", "price": 400}, {"size": "10мл", "price": 600}, {"size": "15мл", "price": 800}, {"size": "20мл", "price": 1200}, {"size": "30мл", "price": 1500}]}];
const cart = [];

function renderProducts() {{
    const list = document.getElementById('product-list');
    list.innerHTML = '';
    products.forEach(product => {{
        const item = document.createElement('div');
        item.innerHTML = `<h3>\${{product.name}}</h3><p>\${{product.description}}</p>`;
        product.volumes.forEach(opt => {{
            const btn = document.createElement('button');
            btn.textContent = `\${{opt.size}} — \${{opt.price}}₽`;
            btn.onclick = () => addToCart(product.name, opt);
            item.appendChild(btn);
        }});
        list.appendChild(item);
    }});
}}

function addToCart(name, opt) {{
    cart.push({{ name, ...opt }});
    renderCart();
}}

function renderCart() {{
    const items = document.getElementById('cart-items');
    items.innerHTML = '';
    let total = 0;
    cart.forEach(({ name, size, price }) => {{
        const li = document.createElement('li');
        li.textContent = `\${{name}} — \${{size}} — \${{price}}₽`;
        items.appendChild(li);
        total += price;
    }});
    document.getElementById('total').textContent = `\${{total}}₽`;
}}

document.getElementById('checkout-btn').onclick = () => {{
    document.getElementById('order-form').classList.remove('hidden');
}};

document.getElementById('form').onsubmit = async (e) => {{
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {{
        name: formData.get('name'),
        username: formData.get('username'),
        address: formData.get('address'),
        phone: formData.get('phone'),
        order: cart
    }};
    await fetch('https://api.telegram.org/bot7752682493:AAGmk_I2YvfXDBLWipLwHE6UM3y_f6qZ7ZM/sendMessage', {{
        method: 'POST',
        headers: {{ 'Content-Type': 'application/json' }},
        body: JSON.stringify({{
            chat_id: '@LuMnsn',
            text: `Новый заказ от \${{data.name}} (@\${{data.username}}):\n\${{data.order.map(item => `\${{item.name}} — \${{item.size}} — \${{item.price}}₽`).join('\n')}}\nАдрес: \${{data.address}}\nТелефон: \${{data.phone}}`,
            reply_markup: {{
                inline_keyboard: [[{{ text: "Связаться", url: "https://t.me/\${{data.username}}" }}]]
            }}
        }})
    }});
    alert('Заказ отправлен!');
}};
renderProducts();
