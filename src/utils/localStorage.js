const getStoredBook = () => {
  const getBook = localStorage.getItem("readList");

  if (getBook) {
    return JSON.parse(getBook);
  }
  return [];
};

const addToLocalStorage = (id) => {
  const bookReadList = getStoredBook();

  if (bookReadList.includes(id)) {
    alert("aldeary exist");
  } else {
    bookReadList.push(id);
    localStorage.setItem("readList", JSON.stringify(bookReadList));
    alert("Book added to Read List!");
  }
};

// wislist to LocalStorage
const getStoredWishList = () => {
  const storedWishList = localStorage.getItem("wishList");

  if (storedWishList) {
    return JSON.parse(storedWishList);
  }
  return [];
};

const addWishListToLocalStorage = (id) => {
  const wishList = getStoredWishList();

  if (wishList.includes(id)) {
    alert("Item already exists in the wishlist.");
  } else {
    wishList.push(id);
    localStorage.setItem("wishList", JSON.stringify(wishList));
    alert("Successfully added to the Wishlist!");
  }
};

export {
  addToLocalStorage,
  getStoredBook,
  addWishListToLocalStorage,
  getStoredWishList,
};
