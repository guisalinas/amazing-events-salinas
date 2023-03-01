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
                            <input type="checkbox" name="_${category}" id="category" value="${category}">
                            <label for="category">${category}</label>
                            </div>`
    }
    return inputCategory;
}

let categoryElement = addCategoryCheckBox(getCategories());
checkCategory.innerHTML = categoryElement;
