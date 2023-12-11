import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/book/bookSlice';

const CreateBookRTK = () => {
    const [title, setTitle] = useState<string>("");
    const [author, setAuthor] = useState<string>("");
    const [year, setYear] = useState<string>("");
  
    const dispatch = useDispatch();
  
  
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(addBook({
          title, author, year,
          isbn: ''
      }));
  
      setTitle(''); 
      setAuthor('');
      setYear('');
    }
  
    return (
      <div className='div'>
        <h1 className='h1'>Create book</h1>
  
        <form onSubmit={handleSubmit}>
          <input className='input1'
            type="text"
            placeholder="title"
            value={title}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
          />
          <input className='input2'
            type="text"
            placeholder="author"
            value={author}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setAuthor(e.target.value)
            }
          />
          <input className='input3'
            type="text"
            placeholder="year"
            value={year}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setYear(e.target.value)
            }
          />
  
          <button className='button1' type ="submit">Add Book</button>
        </form>
      </div>
    );
}

export default CreateBookRTK