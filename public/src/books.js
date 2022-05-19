function findAuthorById(authors, id) {
  return authors.find((author)=> author.id === id)
}

function findBookById(books, id) {
  return books.find(book => book.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  const checkedOutBooks = books.filter(book=> book.borrows[0].returned === false )
  const returnedBooks = books.filter(book=> book.borrows[0].returned === true )

  const result = []

  result.push(checkedOutBooks, returnedBooks)

  
  
  return result

}

function getBorrowersForBook(book, accounts) {
  const borrowers = book.borrows

  const result = borrowers.map(borrower => {

    const findAccountById = (accounts, id) => {
      return accounts.find(account=> account.id === id)
    }

    const accountInfo = findAccountById(accounts, borrower.id)

    const newBorrower = {
      ...borrower, 
      ...accountInfo
    }

    return newBorrower

  })

  result.splice(10)

  return result
  

}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
