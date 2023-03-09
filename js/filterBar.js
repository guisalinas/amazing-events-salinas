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

// filters:

const btnSearch = document.getElementById('btnSearch');
const searcher = document.getElementById('searcher');
const checkBoxes = document.querySelectorAll('.check_box');

let categoriesCheck = [];

btnSearch.addEventListener('click', (event) => {

    event.preventDefault();

    checkBoxes.forEach((category) => {
        if (category.checked) {
            categoriesCheck.push(category.value);
        }
    });

    let filteredEvents = filterEventsByNameAndDate(searcher.value, currentDate);

    if (categoriesCheck.length > 0) {
        filteredEvents = filteredEvents.filter(event => {
            return categoriesCheck.includes(event.category)
        });
    };

    if (filteredEvents.length == 0 || filteredEvents == null) {
        cardContainer.innerHTML = notFoundMessage();
    } else {
        cardContainer.innerHTML = addCard(filteredEvents);
    };

    categoriesCheck = [];
});

//reset button
const btnReset = document.getElementById('btnReset');
btnReset.addEventListener('click',()=> {
    checkBoxes.forEach((category) => category.checked = false);
    searcher.value = null;
    btnSearch.click();
});

//notFoundMesage
const titleSection = document.getElementById("section-title").textContent;

function notFoundMessage() {
    return divMessage = `<div class="container ps-2 d-flex justify-content-center flex-wrap align-items-center">
        <div class="img-notFound">
            <img src="../assets/notFound.png" alt="message: not found">
        </div>
        <div>
            <h3>Oops! Nothing to show here...</h3>
            <p>Sorry, we couldn't find the content you're looking for.<p>
        </div>
    </div>`

};