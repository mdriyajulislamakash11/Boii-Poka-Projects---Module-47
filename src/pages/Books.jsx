import React, { useEffect, useState } from "react";
import Book from "../components/Book";

const Books = () => {
  const [books, setBooks] = useState([]);
//   

  useEffect(() => {
    fetch("/booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 ">
        {books.map((book) => (
          <Book key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
