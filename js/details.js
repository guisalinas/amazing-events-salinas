const queryString = location.search;
console.log(queryString);

const params = new URLSearchParams(queryString);

const id = params.get("_id");

const eventToDetail = dataEvents.events.find(event => event.id == id);

const divDetails = document.getElementById("divDetails");

divDetails.innerHTML = ` <div class="row d-flex align-items-center">
                            <div class="col-md-6 d-flex justify-content-center">
                                <figure class="figure">
                                    <img src=${eventToDetail.image} class="figure-img img-fluid rounded" alt="default image">
                                    <figcaption class="figure-caption"></figcaption>
                                </figure>
                            </div>
                            <div class="col-md-6 d-flex justify-content-center">
                                <div class="description-detail m-3">
                                    <h2 class="text-center">${eventToDetail.name}</h2>
                                    <div class="description">
                                        <p class="text-justify">${eventToDetail.description}</p>
                                        <p class="d-flex align-items-center">${dateIcon} Date: ${eventToDetail.date}</p>
                                        <p class="d-flex align-items-center">${locationIcon} Place: ${eventToDetail.place}</p>
                                        <p class="d-flex align-items-center">${userIcon} Capacity: ${eventToDetail.capacity}</p>
                                        <p class="d-flex align-items-center">${tagIcon} Price: $${eventToDetail.price}</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>`

