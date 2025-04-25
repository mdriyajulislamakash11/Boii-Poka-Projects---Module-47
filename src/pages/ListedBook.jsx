import React, { useEffect, useState } from "react";
import { getStoredBook } from "../utils/localStorage";
import { useLoaderData } from "react-router-dom";

const ListedBook = () => {
  const [readList, setReadList] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    const readList = getStoredBook();
    const ConvertedStoredBooks = readList.map((id) => parseInt(id));
    const myReadList = data.filter(
      (book) => book.bookId == ConvertedStoredBooks.includes(book.bookId)
    );
    setReadList(myReadList)
  }, []);




  return <div>
    
  </div>;
};

export default ListedBook;
