import React from 'react';
import { useParams } from 'react-router-dom';

const ListedBook = () => {

    const {bookId} = useParams()
    



    return (
        <div>
            hii list
        </div>
    );
};

export default ListedBook;