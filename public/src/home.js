function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  const borrowedBooks = books.filter(
    (book) => book.borrows[0].returned === false
  );
  // console.log(borrowedBooks)
  return borrowedBooks.length;
}

//helper function for getting top five
function getTopFive(array) {
  array.sort((a, b) => b.count - a.count).splice(5);
  return array;
}

function getMostCommonGenres(books) {
  const result = books.reduce((acc, book) => {
    const genre = book.genre;

    const genreInfo = acc.find((element) => element.name === genre);

    if (!genreInfo) {
      const newGenreInfo = {
        name: genre,
        count: 1,
      };
      acc.push(newGenreInfo);
    } else {
      genreInfo.count++;
    }
    // console.log('--',acc)
    return acc;
  }, []);

  // console.log(result)

  return getTopFive(result);
}

function getMostPopularBooks(books) {
  const result = books.map((book) => {
    const popularBooks = {
      name: book.title,
      count: book.borrows.length,
    };
    // console.log(popularBooks)
    return popularBooks;
  });
  return getTopFive(result);
}

//helper function
function _getBooksByAuthorId(books, authorId) {
  return books.filter((book) => book.authorId === authorId);
}

function getMostPopularAuthors(books, authors) {
  const result = authors.map((author) => {
    const booksByAuthor = _getBooksByAuthorId(books, author.id);
    const totalBorrows = booksByAuthor.reduce(
      (acc, book) => acc + book.borrows.length,
      0
    );

    const newAuthorInfo = {
      name: `${author.name.first} ${author.name.last}`,
      count: totalBorrows,
    };
    // console.log(newAuthorInfo)
    return newAuthorInfo;
  });

  return getTopFive(result);
}



module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
