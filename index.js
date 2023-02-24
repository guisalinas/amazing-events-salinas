const cardContainer = document.getElementById('cardContainer');

function addCard(data) {
  let card = "";

  for (const event of data) {
    card += `<div id="eventCard" class="card m-2" style="width: 16rem;">
                  <img src=${event.image} class="card-img-top" alt="...">
                  <div class="card-body">
                      <h5 class="card-title fs-4 text-center">${event.name}</h5>
                      <p class="card-text text-center">${event.description}</p>
                  </div>
                  <div class="d-flex justify-content-end">
                      <a href="#" class="btn btn-sm btn-card me-3 mb-3">Show More</a>
                  </div>
              </div>`
  }
  return card;
}

let cardElement = addCard(dataEvents.events);

cardContainer.innerHTML = cardElement;