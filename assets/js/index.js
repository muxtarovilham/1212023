const myDiv = document.getElementById('products');

fetch('https://655e356a9f1e1093c59ab81c.mockapi.io/Api3/Api3')
    .then(res => res.json())
    .then(data => {
        data.forEach(item => {
            const card = document.createElement('div');
            card.className = "cardBox";
            card.innerHTML = `
                <div class="myDivz">
                    <img class="imgz" src="${item.image}" alt="">
                    <h2 class="h2z">${item.title}</h2>
                    <p class="pz">${item.description}</p>
                    <p class="pz1">${item.price} $</p>
                    <button class="btn" data-id="${item.id}">Add to cart</button>
                </div>`;
            myDiv.appendChild(card);
        });

        myDiv.addEventListener('click', (event) => {
            if (event.target.classList.contains('btn')) {
                const itemId = event.target.getAttribute('data-id');
                onbir(itemId, data);
            }
        });
    });

function onbir(id, data) {
    const selectedItem = data.find(item => item.id === id);

    fetch('https://655e356a9f1e1093c59ab81c.mockapi.io/Api3/Api4', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: selectedItem.title,
            description: selectedItem.description,
            price: selectedItem.price,
            image: selectedItem.image,
        }),
    })
    .then((res) => res.json())
    .then((responseData) => {
        console.log("Data sent: ", responseData);
    });
}