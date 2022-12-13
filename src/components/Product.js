import React from 'react'
import StarRateOutlinedIcon from '@mui/icons-material/StarRateOutlined';
import TextTruncate from "react-text-truncate";
import "./Product.css";

function Product({ item, compare, setCompare, handleClick}) {

  // {
  //   "id": 1,
  //   ."title": "iPhone 9",
  //   ."description": "An apple mobile which is nothing like apple",
  //   . "price": 549,
  //   . "discountPercentage": 12.96,
  //   . "rating": 4.69,
  //   ."stock": 94,
  //   ."brand": "Apple",
  //   . "category": "smartphones",
  //   . "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  //   "images": [
  //   "https://i.dummyjson.com/data/products/1/1.jpg",
  //   "https://i.dummyjson.com/data/products/1/2.jpg",
  //   "https://i.dummyjson.com/data/products/1/3.jpg",
  //   "https://i.dummyjson.com/data/products/1/4.jpg",
  //   "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
  //   ]
  //   },

  const addToCompare = () => {
    // console.log("The item is", item);
    if(compare.length == 4) {
      console.log("cannot add")
    } else if(compare.includes(item)) {
      console.log("Already included")
    } else {
      compare.push(item);
      setCompare(compare);
      // console.log("compare is", compare)
    }
    handleClick();
  }

  return (
    <div
      initial="initial"
      animate="in"
      exit="out"
      layout
      onClick={addToCompare}
      //   onClick={() => history.push(`/product/${id}`, { product: item })}
      className="product"
    >
      <div
        //   layoutId={id}
        className="product__image">
        {item.discount && <span className="banner">Offer!</span>}
        <img src={item.thumbnail} />
      </div>
      <div className="product__details">
        <div style={{ display: "flex" }}>
          <span className="product__category">{item.category}</span>
          <span className="product__category">{item.brand}</span>
          <span className="product__category">{item.stock} left</span>
        </div>
        <p style={{ margin: "0" }}>{item.title}</p>
        <TextTruncate
          line={3}
          element="h6"
          containerClassName="product__name"
          truncateText="…"
          text={item.description}
        />
        <div className="product__footer">
          <p className="product__price">
            <b>${(item.price - item.price * item.discountPercentage / 100).toFixed(0)}</b>{" "}
            <small>
              <del>${item.price}</del>
            </small>
          </p>
          <div className="product__rating">
            <StarRateOutlinedIcon style={{ color: "#f90", justifyContent: "center !important" }} />
            {item.rating}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product