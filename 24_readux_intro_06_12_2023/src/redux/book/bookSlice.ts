import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import { Book } from "./bookState";
import { uid } from "uid";

const initialState = {
    books: [
        { isbn: '1', title: 'Harry Potter', author: 'J.Rowling', year: '1997 '}
    ]
}

export const bookSlice = createSlice ({
    name: 'books',
    initialState,
    reducers: {
        addBook: (state,action: PayloadAction<Book>) => {
            const newBook = { ...action.payload}; // isb na petq grel !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! nayi 
            state.books.push(newBook);
        },

        deleteBook: (state, action: PayloadAction<string>) => {
            state.books = state.books.filter(book => book.isbn !== action.payload)

        },

        editTitleBook: (state,action: PayloadAction<{isbn:string, title:string}>) => {
            state.books.map(book => {
                if (book.isbn === action.payload.isbn) {
                    return{...book,title:action.payload.title}
                }
                return book;
            })

        }
    }

})

export const {addBook,editTitleBook,deleteBook} = bookSlice.actions

export default bookSlice.reducer;