// This function is used from filterBar.js, to filter the events according to their date (search bar). 
function filterEventsByNameAndDate(name, date, array) {
    return array.filter(event => event.name.toLowerCase().includes(name.toLowerCase()) && event.date < date);
}

window.filterEventsByNameAndDate = filterEventsByNameAndDate;