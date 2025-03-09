let form = document.getElementById('form');

const submit = (event) => {
    event.preventDefault();

    let fName = document.querySelector('[name="fname"]');
    let lName =document.querySelector('[name="lname"]');
    console.log(`Imie: ${fName.value}, Nazwisko: ${lName.value}`);
}

form.addEventListener('submit', submit);
