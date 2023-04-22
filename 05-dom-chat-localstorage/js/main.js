const chat = document.querySelector('#chat');
const chatAuthor = document.querySelector('#author')
const chatMessage = document.querySelector('#message')
const ul = document.querySelector('#allMessages')
const search = document.querySelector('#search')

// Stwórz aplikacje Chat, która spełnia następujące kryteria:
 
// - Stworz liste pod formularzem i spraw, zeby mozna bylo dodawac nowe wiadomosci

let messages = JSON.parse(localStorage.getItem('messages'));

if(messages === null) {
    messages = [];
  }

const renderMessages = () => {
    ul.innerHTML = '';
  
    for(let message of messages) {
      ul.innerHTML += `
          <li>${message.author}: ${message.message}</li>
      `
      }
  }

  const validate = (newMessage) => {
    if(newMessage.author.length < 1) {
      alert ('Author field cannot be empty')
      return false;
    }
  
    if(newMessage.message.length <= 2) {
      alert('Please type at least 3 characters')
      return false;
    }

    return true;
  }
  
    const handleSubmit = (event) => {
    event.preventDefault();

    const newMessage = {
      author: chatAuthor.value,
      message: chatMessage.value,
    }

    const isValid = validate(newMessage)
    if(!isValid) return;

    messages.push(newMessage);
    localStorage.setItem('messages', JSON.stringify(messages));
    renderMessages();
}

renderMessages();

// const handleTitleClick = () => {
//     for (let message of messages) {
//         if ()
//     }

chat.addEventListener("submit", handleSubmit);
search.addEventListener("click", handleTitleClick)

const messagesAsJSON = JSON.stringify(messages);
console.log(messagesAsJSON)

// - Nowe wiadomosci dodaj na gore listy
// - Zrob walidacje na formularz, ze pole author nie moze byc puste i pole message musi wiecej niz 2 znaki
// - Dane zapisuj do localStorage

// * Nad formularzem dodaj input i przycisk, ktory umozliwi wyszukiwanie wiadomosci. Jesli wpiszesz jakas fraze i wcisniesz przycisk, wyswietl tylko te wiadomości, gdzie tekst pokrywa się z wyszukiwaną frazą





// ** Rozszerz aplikację do projektu npm, dodaj bibliotekę Parcel i firebase, a następnie zrób połączenie z Firebase aby pobierać i wysyłać wiadomości -->


