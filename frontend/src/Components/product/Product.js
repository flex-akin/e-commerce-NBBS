import React from 'react'
import { Link,  } from 'react-router-dom'
import {Cloudinary} from "@cloudinary/url-gen";
import {AdvancedImage} from '@cloudinary/react';

const Product = ( {product}) => {


  const cld = new Cloudinary({
    cloud: {
      cloudName: 'ddaoml7e8'
    }
  });

  const convert = (number) => {
    if (!number){
      return 0
    }
    else {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    }

  }

  

  return (
    <div className="col-sm-12 col-md-6 col-lg-2 my-2">
    <div className="card border-0 p-1 rounded" >

<AdvancedImage className=".card-img-top" cldImg={cld.image(`nbbs/${product.frontPic}`)} />

      <div className="card-body d-flex flex-column">
        <h6 className="card-title">
          <Link to={`/product/${product._id}`}>{product.name}</Link>
        </h6>
        <div className="ratings mt-auto">
          <div className="rating-outer">
            <div className="rating-inner"></div>
          </div>
        </div>
        <h6 className='card-text'>₦{convert(product.price)}</h6>
        <Link to={`/product/${product._id}`} id="view_btn" className="btn btn-block">view</Link>
      </div>
    </div>
  </div>

  )
}

export default Product