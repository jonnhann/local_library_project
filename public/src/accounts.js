function findAccountById(accounts, id) {
  return accounts.find(account => account.id ===id)
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((a,b) => {
    return a.name.last.toLowerCase() < b.name.last.toLowerCase() ? -1 : 1
  })
}

function getTotalNumberOfBorrows(account, books) {
  let total = 0

  for (let book in books) {
    books[book].borrows.forEach(element => {
      if(element.id===account.id) {
        total++
      }
    })
  }
  
  return total

}

function getAuthorsById (authors, id){
  return authors.find((author) => author.id === id);
};

function getBooksPossessedByAccount(account, books, authors) {

  let result = []

  result = books.filter((book)=> {
    return book.borrows.some((borrow) => borrow.id === account.id && !borrow.returned);
  }).map((book)=> {
    const author = getAuthorsById(authors, book.authorId)
    const newBook = {
      ...book, author
    }

    return newBook
  })

  return result

  
  


}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
