import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToLocalStorage, addWishListToLocalStorage } from "../utils/localStorage";

const BookDetails = () => {
  const [book, setBook] = useState(null);
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();

  useEffect(() => {
    const foundBook = data.find((book) => book.bookId === id);
    setBook(foundBook);
  }, [data, id]);

  if (!book) {
    return <div className="text-center py-10">Loading...</div>;
  }

  const {
    yearOfPublishing,
    publisher,
    tags,
    category,
    rating,
    totalPages,
    review,
    image,
    author,
    bookName,
  } = book;


  const handleReadList = () => {
    addToLocalStorage(book)
  }

  const handleWistList = () => {
    addWishListToLocalStorage(book)
  }
  return (
    <div className="max-w-5xl mx-auto py-[80px] px-4 grid md:grid-cols-2 gap-8 ">
      {/* Left: Image */}
      <div>
        <img
          src={image}
          alt={bookName}
          className="rounded-xl w-full h-[550px] object-cover"
        />
      </div>

      {/* Right: Info */}
      <div className="space-y-4">
        <h2 className="text-3xl font-bold">{bookName}</h2>
        <p className="text-gray-600">by {author}</p>
        <p>
          <span className="font-semibold">Category:</span> {category}
        </p>
        <p>
          <span className="font-semibold">Publisher:</span> {publisher} (
          {yearOfPublishing})
        </p>
        <p>
          <span className="font-semibold">Pages:</span> {totalPages}
        </p>
        <p>
          <span className="font-semibold">Rating:</span> {rating}/5
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
        <p className="text-sm text-gray-700">{review}</p>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <button
          onClick={handleReadList}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md font-semibold">
            Read
          </button>
          <button
          onClick={handleWistList}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-semibold">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
