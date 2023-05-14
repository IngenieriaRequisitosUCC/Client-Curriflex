let inputs = document.getElementsByTagName("input");

let textAreas = document.getElementsByTagName("textarea");

const UPDATE_CV = (event, ID) => {
    event.preventDefault();
    console.log(ID);
    let inputValue = document.getElementById(ID).value;

    document.getElementById(`${ID}CV`).innerText = inputValue;

};

function addEventListToUpdateCV(array){
    for (let i = 0; i < array.length; i++){
        const ID = array[i].id;
        if (ID != ""){
            array[i].addEventListener("keyup", (event) => UPDATE_CV(event,ID));
        }
    }
}

addEventListToUpdateCV(inputs);
addEventListToUpdateCV(textAreas);
