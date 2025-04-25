import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
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
    bookId
  } = book;

  return (
    <Link to={`/book/${bookId}`} className="">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-md overflow-hidden transition transform hover:scale-105 hover:shadow-lg duration-300">
        <img src={image} alt={bookName} className="w-full h-64 object-cover" />

        <div className="p-5 space-y-3">
          <h2 className="text-xl font-bold text-gray-800">{bookName}</h2>
          <p className="text-sm text-gray-600">by {author}</p>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="text-sm text-gray-600">
            <p>📚 Category: {category}</p>
            <p>
              🏢 Publisher: {publisher} ({yearOfPublishing})
            </p>
            <p>⭐ Rating: {rating}/5</p>
            <p>📄 Pages: {totalPages}</p>
          </div>

          <p className="text-gray-700 text-sm line-clamp-3">{review}</p>
        </div>
      </div>
    </Link>
  );
};

export default Book;
