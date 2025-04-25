import React, { useEffect, useState } from "react";
import { getStoredBook, getStoredWishList } from "../utils/localStorage";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Book from "../components/Book";

const ListedBook = () => {
  const [readList, setReadList] = useState([]);
  const [wishList, setWishlist] = useState([]);
  const [sort, setSort] = useState("");
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
  }, [data]);

  const handleSortedBy = (typeBy) => {
    setSort(typeBy);
    if (typeBy == "pages") {
      const pages = [...readList].sort((a, b) => a.totalPages - b.totalPages);
      setReadList(pages);
    }
    if (typeBy === "rating") {
      const rating = [...readList].sort((a, b) => a.rating - b.rating);
      setReadList(rating);
    }
  };

  return (
    <div className="py-[100px]">
      <h2 className="text-3xl font-bold py-12 bg-slate-100 text-center my-2">
        Books
      </h2>
      {/* sort dropdon menu  */}
      <div className="flex justify-center h-52">
        <div className="dropdown dropdown-hover">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-green-600 text-white font-semibold"
          >
            Sort By - {sort ? sort : ""}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li className="bg-slate-200">
              <a onClick={() => handleSortedBy("pages")}>Pages</a>
            </li>
            <li className="bg-slate-200">
              <a onClick={() => handleSortedBy("rating")}>Ratings</a>
            </li>
          </ul>
        </div>
      </div>

      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 my-11">
            {readList.map((book) => (
              <Book key={book.bookId} book={book} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 my-11">
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
