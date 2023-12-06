import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { BookState } from '../redux/book/bookState';

const Book: React.FC = (): JSX.Element => {

    const book = useSelector((state:BookState)=>state.books);
    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch({type: 'books/add'})
    };


    return(
        <div>
            <h1>Book List</h1>
            <p>Book:</p>
            <input type="text" />
            <button onClick={handleAdd }>books/add</button>
            <button>books/delete</button>
            <button>books/editTitle</button>
        </div>
    )

};
export default Book;