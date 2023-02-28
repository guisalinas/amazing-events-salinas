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
