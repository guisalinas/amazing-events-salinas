// This function extracts the categories from the array events, in dataEvents object.
function getCategories() {
    let uniqueCategory = [...new Set(dataEvents.events.map(event => event.category))];
    return uniqueCategory;
}

// categories list view
const checkCategory = document.getElementById('checkCategory');

function addCategoryCheckBox(arrayCategories) {
    let inputCategory = " ";

    for (let category of arrayCategories) {
        inputCategory += `<div>
                        <label> <input type="checkbox" name="categoryCheck" class="check_box" id="${category}" value="${category}"> ${category} </label>
                        </div>`
    }
    return inputCategory;
}

let categoryElement = addCategoryCheckBox(getCategories());
checkCategory.innerHTML = categoryElement;

// Searcher-bar filter:

//const searcher = document.getElementById('searcher');

// searcher.addEventListener("change", () => {
//     let filteredEvents = filterEventsByNameAndDate(searcher.value, currentDate);

//     if (filteredEvents.length == 0 || filteredEvents == null) {
//         cardContainer.innerHTML = notFoundMessage(searcher.value);
//     } else {

//         cardContainer.innerHTML = addCard(filteredEvents);
//     }
// });

const btnSearch = document.getElementById('btnSearch');
const searcher = document.getElementById('searcher');
const checkBoxes = document.querySelectorAll('.check_box'); 

btnSearch.addEventListener('click', (event)=>{
    
    event.preventDefault();

    checkBoxes.forEach((category)=>{
        if (category.checked == true){
            console.log(category.value);
        }})


    let filteredEvents = filterEventsByNameAndDate(searcher.value, currentDate);

    if (filteredEvents.length == 0 || filteredEvents == null) {
        cardContainer.innerHTML = notFoundMessage(searcher.value);
    } else {

        cardContainer.innerHTML = addCard(filteredEvents);
    }
});


//notFoundMesage
const titleSection = document.getElementById("section-title").textContent;

function notFoundMessage(searchText) {
    return divMessage = `<div class="container ps-2 d-flex justify-content-between align-items-center">
        <div class="img-notFound">
            <img src="../assets/notFound.png" alt="message: not found">
        </div>
        <div>
            <h3>Vaya! No encontramos <span class="search-text-message">"${searchText}"</span>!</h3>
            <p>Parece que no el evento no existe, o no está disponible en la sección "${titleSection.toLowerCase()}".</p>
            <p>Intenta utilizar diferentes filtros por categorias de acuerdo a tus eventos favoritos, o chequea en otras secciones de la web!<p>
        </div>
    </div>`
};


