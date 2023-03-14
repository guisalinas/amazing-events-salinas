/* --- Array data --- */

let ApiUrl = 'https://mindhub-xj03.onrender.com/api/amazing';

async function getData(){
    try{
        const response = await fetch(ApiUrl);
        let data = await response.json();
        return data;
    }
    catch(error){
        console.log("Error: ", error);
    }
}