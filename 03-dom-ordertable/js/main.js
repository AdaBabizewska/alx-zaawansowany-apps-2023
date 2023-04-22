// 1. Napisz kod JS, ktory dodaje elementy do tabeli
// 2. Po wyslaniu formularza, wyczysc pola formularza

// łapanie po klasie ".", łapanie po id #, łapanie wszystkich elementów "spacja"
//table.remove - usuwa cały element, table.innerHTML ="" - usuwa wnętrze z elementu

// dodawanie elementów HTML w JS:

const table = document.querySelector('#orderTable');
const orderForm = document.querySelector('#orderForm');
const orderId = document.querySelector('#id');
const orderName = document.querySelector('#name');
const orderPrice = document.querySelector('#price');

const handleSubmit = (event) => {
    //preventDefaul() jest to metoda, która zatrzyma domyślny event przeglądarki
    event.preventDefault();

    table.innerHTML += `
    <tr>
        <td id="produkt">${orderId.value}</td>
        <td>${orderName.value}</td>
        <td>${orderPrice.value}zł</td>
    </tr>
`
orderId.value ="";
orderName.value ="";
orderPrice.value ="";

const elements = document.querySelectorAll('#produkt');
console.log(elements)

if (orderPrice.value > 0 && orderName.value.length > 2 && elements.some(orderId.value = td)){
    orderForm.submit ();
}

}

orderForm.addEventListener("submit", handleSubmit);

// 3. Pod tabela dodaj przycisk usun rekordy, ktory usunie wszystkie elementy z tabeli

const buttonClear = document.querySelector('#buttonClear');
const handleTitleClick = (event) => {
   table.innerHTML = "";
}

buttonClear.addEventListener('click',handleTitleClick);

// 4*. Napisz walidacje formularza spelniajaca dane kryteria
  // - Pole price musi byc wieksze od 0
  // - Pole name musi miec wiecej niz 2 znaki
  // - Pole ID musi byc unikalne (nie moze sie powtarzac)





// else console.log("Błędna wartość")
