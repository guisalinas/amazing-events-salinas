(async function () {

    const dataEvents = await getData();
    const events = dataEvents.events;
    const currentDate = dataEvents.currentDate;
    const arrayCategories = getCategories(events);

    let arrayUpcoming = [];
    let arrayPast = [];

    for (const event of events) {
        if (event.date >= currentDate) {
            arrayUpcoming.push(event);
        }
        else if (event.date < currentDate) {
            arrayPast.push(event);
        }
    }

    // 'events statistics' table: 
    const statictisTBody = document.getElementById("statictis-tBody");

    function addTrStatictis(array) {
        let trStatictis = "";

        const arrayAsc = array.slice().sort((a, b) => (getPercentage(b.capacity, b.assistance) - getPercentage(a.capacity, a.assistance)));
        const arrayDesc = arrayAsc.slice().reverse();
        const arrayLargerCapacity = array.slice().sort((a, b) => b.capacity - a.capacity);

        for (let i = 0; i <= 2; i++) {
            trStatictis += `<tr>
                                <td>${arrayAsc[i].name} <span>(${getPercentage(arrayAsc[i].capacity, arrayAsc[i].assistance)}%) </span></td>
                                <td>${arrayDesc[i].name} <span>(${getPercentage(arrayDesc[i].capacity, arrayDesc[i].assistance)}%) </span></td>
                                <td>${arrayLargerCapacity[i].name} <span>(${arrayLargerCapacity[i].capacity} max. capacity)</td>
                            </tr>`
        }
        return trStatictis;
    }

    let dtElement = addTrStatictis(arrayPast);
    statictisTBody.innerHTML = dtElement;

    // 'statictis by category' table
    const statictisUpcomingTbody = document.getElementById('statictisUpcomingTbody');
    const statictispastTbody = document.getElementById('statictisPastTbody')

    function addTrStatictisByCategory(arrayCategories, arrayEvents, propertyAssistanceName) {
        let trStatictisCategory = "";

        for (let category of arrayCategories) {
            let total_revenues = 0;
            let total_capacity = 0;
            let total_assistance = 0;

            arrayEvents.forEach((event) => {
                if (event.category == category) {
                    total_revenues += (event.price * event[propertyAssistanceName]);
                    total_capacity += event.capacity;
                    total_assistance += event[propertyAssistanceName];
                }
            })

            trStatictisCategory += `<tr>
                                        <td><span>${category}</span></td>
                                        <td>$ ${total_revenues}</td>
                                        <td>${getPercentage(total_capacity, total_assistance)} %</td>
                                        </tr>`

        }

        return trStatictisCategory;
    }

    let dtUpcomingElement = addTrStatictisByCategory(arrayCategories, arrayUpcoming, 'estimate');
    statictisUpcomingTbody.innerHTML = dtUpcomingElement;

    let dtPastElement = addTrStatictisByCategory(arrayCategories, arrayPast, 'assistance');
    statictispastTbody.innerHTML = dtPastElement;

    // Percentage
    function getPercentage(capacity, assistance) {
        if (capacity != 0) {
            let percentage = Number.parseFloat((assistance / capacity) * 100).toFixed(2);
            return percentage;
        }
        else {
            return 0;
        }
    }

    // Categories

    function getCategories(arrayEvents) {
        let categories = [];
        arrayEvents.forEach(event => {
            if (!categories.includes(event.category)) {
                categories.push(event.category);
            }
        })
        return categories;
    }

})();




