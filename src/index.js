import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css'
import {books} from './Arrays.js';
import Book from './Components.js'

function BookList() {
  const getBook = (id)=>
      {
        const book = books.find((param)=> param.id ===id );
        console.log(book);
      };
    return (
     <> <h1 className='pgTitle'>Amazon BestSellers</h1>;
      <section className='booklist'>
        {books.map((book ,index) => {
          console.log(book);
          const { img, title, author, id } = book;
        return <Book {...book} getBook={getBook} number={index} />;
        })}
      </section>
    ;</>)
      
  }
 
  // component 2 We need three things for user interaction - element event callback function
  // Data flow in react
  const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);