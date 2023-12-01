const myDiv = document.getElementById('proDucts');

fetch('https://655e356a9f1e1093c59ab81c.mockapi.io/Api3/Api4')
  .then(res => res.json())
  .then(data => {
    data.forEach(item => {
      const card = document.createElement('div');
      card.className = 'cardBox';
      card.innerHTML = `
        <div class="myDivz" data-id="${item.id}">
          <img src="${item.image}" alt="">
          <h2>${item.title}</h2>
          <p>${item.description}</p>
          <p>${item.price} $</p>
          <button class="btn" onclick="onbir(${item.id})">Add to cart</button>
          <button onclick="removeOne(${item.id})">Remove</button>
        </div>`;
      myDiv.appendChild(card);
    });
  });

function onbir(itemId) {
  console.log('Add to cart clicked for item with ID:', itemId);
}

function removeOne(itemId) {
  console.log('Remove clicked for item with ID:', itemId);

  const cardToRemove = document.querySelector(`.myDivz[data-id="${itemId}"]`);
  if (cardToRemove) {
    cardToRemove.remove();
  }

  fetch(`https://655e356a9f1e1093c59ab81c.mockapi.io/Api3/Api4/${itemId}`, {
    method: 'DELETE',
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to delete item with ID ${itemId}`);
      }
      console.log(`Item with ID ${itemId} deleted successfully from the API.`);
    })
    .catch(error => console.error(error));
}
