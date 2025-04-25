const getStoredBook = () => {
    const getBook = localStorage.getItem("readList");
    
    if(getBook){
        return JSON.parse(getBook);
    }else{
        return [];
    }
};

const addToLocalStorage = (id) => {
    const bookReadList = getStoredBook()
    const isExist = bookReadList.find((item) => item.bookId === id);

    if(isExist){
        alert("aldeary exist")
    }else{
        bookReadList.push(id);
        localStorage.setItem("readList", JSON.stringify(bookReadList))
        alert("Book added to Read List!");
    }

}


// wislist to LocalStorage
const getStoredWishList = () => {
    const storedWishList = localStorage.getItem("wishList")

    if(storedWishList){
        return JSON.parse(storedWishList);
    }
    return [];
};

const addWishListToLocalStorage = (book) => {
    const wishList = getStoredWishList();
    const isExist = wishList.find((item) => item.bookId === book.bookId);
  
    if (isExist) {
      alert("Item already exists in the wishlist.");
    } else {
      wishList.push(book);
      // Corrected: JSON.stringify(wishList)
      localStorage.setItem("wishList", JSON.stringify(wishList));
      alert("Successfully added to the Wishlist!");
    }
  };
  


export {addToLocalStorage, getStoredBook, addWishListToLocalStorage, getStoredWishList}