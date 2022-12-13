import React from 'react'
import CarouselComponent from './CarouselComponent'
import Products from './Products'

function ProductPage({data, compare, setCompare}) {

  return (
    <div style={{marginTop: "4rem"}}>
        <CarouselComponent />
        <Products data={data} compare={compare} setCompare={setCompare}/>
    </div>
  )
}

export default ProductPage