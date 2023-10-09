import { Form,Button } from 'react-bootstrap'
import React from 'react'
import Rating from './Rating'
import { CartState } from '../Context/Context'

const Fliters = () => {
    // const[rate,setrate]= useState(0) //star rating mate

    const {productState:{byStock,byFastDelivery,sort,byRating}, ProductDispatch} =CartState()

    // console.log(productState);
    console.log(byStock,byFastDelivery,sort,byRating);
  return (
    <div className='filters'>
      <span className='title'>Filter Products</span>
      <span>
        <Form.Check 
        inline
        label="Ascending"
        name="group1"
        type="radio"
        id={`inline-1`} 
        onChange={()=>
        ProductDispatch({
          type:"SORT_BY_PRICE",
          payload:"lowToHigh"
        })}
        checked={sort ==="lowToHigh"?true:false}
        />
      </span>
      <span>
        <Form.Check 
        inline 
        label="Descending"
        name="group1"
        type="radio"
        id={`inline-2`} 
        onChange={()=>
          ProductDispatch({
            type:"SORT_BY_PRICE",
            payload:"highToLow"
          })}
          checked={sort ==="highToLow"?true:false}
        />
      </span>
      <span>
        <Form.Check 
        inline
        label="Include Out of Stock"
        name="group1"
        type="checkbox"
        id={`inline-3`} 
          onChange={()=>
          ProductDispatch({
            type:"FILTER_BY_STOCK",
          })}
          checked={byStock}
        />
      </span>
      <span>
        <Form.Check 
        inline 
        label="Fast Delivery only"
        name="group1"
        type="checkbox"
        id={`inline-4`} 
        onChange={()=>
          ProductDispatch({
            type:"FILTER_BY_DELIVERY",
          })}
          checked={byFastDelivery}
        />
      </span>
      <span>
        <label style={{paddingRight:10}} >Rating: </label>
        <Rating rating={byRating} onClick={(i)=>
        ProductDispatch({
          type:"FILTER_BY_RATING",
          payload:i+1,
        })} style={{ cursor:"pointer"}} />
      </span>
      <Button variant="light" onClick={()=>
      ProductDispatch({
        type:"CLEAR_FILTERS",
      })}>Clear Filters</Button>
    </div>
  )
}

export default Fliters
