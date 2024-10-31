import React, { useContext } from 'react';

import { StoreContext } from '../../context/StoreContext';
import BookItem from '../BookItem/BookItem';
import './BookDisplay.css';

export const BookDisplay = ({category}) => {
    const {book_list}=useContext(StoreContext)
  return (
    <div className='book-display' id='book-display'>
        <h2>Top Books For You</h2>
        <div className="book-display-list">
            {book_list.map((item,index)=>{
                if(category==="All"||category===item.category){
                    return  <BookItem key={index} id={item._id}
                    name={item.name }
    description={item.description} price={item.price} image={item.image} />  
                }
               
            })}
        </div>
    </div>
  )
}
