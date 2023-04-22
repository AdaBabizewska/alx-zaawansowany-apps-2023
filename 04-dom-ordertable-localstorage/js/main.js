const tableBody = document.querySelector('#orderTableBody')
const orderForm = document.querySelector('#orderForm');
const orderId = document.querySelector('#id');
const orderName = document.querySelector('#name')
const orderPrice = document.querySelector('#price')
const removeOrdersButton = document.querySelector('#removeOrdersButton');
const calculate  = document.querySelector('#calculate');
const sum = document.querySelector('#sum');
const averagePrice = document.querySelector('#averagePrice');


// Struktura danych: tablica obiektów
// 1. Obiekty muszą mieć takie same pola
// 2. Kolejność zamówień ma znaczenie pod kątem dodania do HTML

// Odczyt z LS
let orders = JSON.parse(localStorage.getItem('orders'));

if(orders === null) {
  orders = [];
}

// let orders = [
//   {
//     id: 1,
//     name: "Banan",
//     price: 9.99
//   },
//   {
//     id: 2,
//     name: "Wiśnie",
//     price: 19.99
//   }
// ]

const renderOrders = () => {
  // for of
  tableBody.innerHTML = '';

  for(let order of orders) {
    tableBody.innerHTML += `
      <tr>
        <td>${order.id}</td>
        <td>${order.name}</td>
        <td>${order.price}zł</td>
      </tr>
    `
    }
}
  // forEach
  // orders.forEach(order => {
  //   table.innerHTML += `
  //     <tr>
  //       <td>${order.id}</td>
  //       <td>${order.name}</td>
  //       <td>${order.price}zł</td>
  //     </tr>
  //   `
  // })

const validate = (newOrder) => {
  if(newOrder.name.length < 2) {
    alert ('Pole produkt musi miec wiecej niz 2 znaki')
    return false;
  }

  if(newOrder.price < 0) {
    alert('Pole cena nie moze być mniejsze od 0')
    return false;
  }

  for(let order of orders) {
    if(order.id === newOrder.id) {
      alert('Pole ID nie moze sie powtarzac')
      return false
    }
  }
  return true;
}

const handleSubmit = (event) => {
  event.preventDefault();

  const newOrder = {
    id: parseInt(orderId.value),
    name: orderName.value,
    price: parseFloat(orderPrice.value)
  }

  const isValid = validate(newOrder)
  if(!isValid) return;
  
  orders.push(newOrder);
  //JSON.stringify potrzebujemy, ponieważ chcemy zapisać to w formacie JS do JSONa
  localStorage.setItem('orders', JSON.stringify(orders));

  renderOrders();

  orderId.value = "";
  orderName.value = "";
  orderPrice.value = "";
}

const removeOrders = () => {
  orders = [];
  localStorage.removeItem('orders');
  renderOrders();
}

const handleTitleClick = () => {

  let sumaProduktow = 0;

  for (let order of orders) {
    sumaProduktow = sumaProduktow + order.price;
  }

  sum.innerHTML = sumaProduktow.toFixed(2);
  averagePrice.innerHTML = (sumaProduktow/orders.length).toFixed(2);

}

renderOrders();
orderForm.addEventListener("submit", handleSubmit);
removeOrdersButton.addEventListener('click', removeOrders);
calculate.addEventListener('click',handleTitleClick);

// Napisz kod, ktory wykona nastepujace zadania

// 1. W momencie klikniecia przycisku Calculate, wstaw do HTML w miejscu Sum - sume produktow, w miejscu Average Price - Srednia cene produktow z koszyka.

  // `${sum.toFixed(2)}zł`;

    // ternary operator (operator trojargumentowy)
    // orderAverage.innerHTML = orders.length === 0
    // ? `0zł`
    // : `${(sum / orders.length).toFixed(2)}zł`


// 2. Napisz to w taki sposob, aby mozna bylo dodawac/usuwac elementy i przeliczac aktualna wartosc koszyka
// 3*. Przerob walidacje na ID, zeby dzialala obslugujac strukture tablicy obiektow


// JS a JSON


// JS - jezyk programowania
// JSON - sposob zapisu danych, majacy okreslona strukture (brat JSON to XML)

// Fragment JS

// const table = {
//   id: 1,
//   name: 'Pod oknem',
//   people: 4
// }

// JSON

// {
//   "id": 1,
//   "name": "Pod oknem",
//   "people": 4
// }


// JS posiada wbudowane metody do zamian JS do JSON i na odwrot.

// Tablica obiektow
console.log(orders);

// JSON
const ordersAsJSON = JSON.stringify(orders);
console.log(ordersAsJSON)

const ordersFromJSON = JSON.parse(ordersAsJSON);
console.log(ordersFromJSON);


// localStorage

// localStorage jest dostepny w obiekcie window, ale ze window jest domyslnym slowem przed kazda funkcja, to nie trzeba tego wpisywac

// localStorage.getItem('klucz') // pobranie wartosci ze schowka
// localStorage.setItem('klucz', 'wartosc') // zapisanie do schowka
// localStorage.removeItem('klucz') // usuniecie ze schowka