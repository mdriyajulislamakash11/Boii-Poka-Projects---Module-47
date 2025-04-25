import React, { useEffect, useState } from "react";
import { getStoredBook, getStoredWishList } from "../utils/localStorage";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Book from "../components/Book";

const ListedBook = () => {
  const [readList, setReadList] = useState([]);
  const [wishList, setWishlist] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    const readList = getStoredBook();
    const ConvertedStoredBooks = readList.map((id) => parseInt(id));
    const myReadList = data.filter((book) =>
      ConvertedStoredBooks.includes(book.bookId)
    );
    setReadList(myReadList);
  }, [data]);

  useEffect(() => {
    const wishListBook = getStoredWishList();
    const convertToWishListData = wishListBook.map((id) => parseInt(id));
    const myWishList = data.filter((book) =>
      convertToWishListData.includes(book.bookId)
    );
    setWishlist(myWishList);
  }, []);

  return (
    <div className="py-[100px]">
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-2xl font-semibold my-12 text-center">
            Read List Item:{" "}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {readList.map((book) => (
              <Book key={book.bookId} book={book} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2 className="text-2xl font-semibold my-12 text-center">Wish List Item: </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {wishList.map((book) => (
              <Book key={book.bookId} book={book} />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBook;
