


function fetchBooks() {
  let allBooks = ''

  fetch("https://anapioficeandfire.com/api/books")
      .then(res => res.json())
      .then(books => {
      allBooks = books
   })
 }

function renderBooks(allBooks ) {

  const main = document.querySelector('main')
  allBooks.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
