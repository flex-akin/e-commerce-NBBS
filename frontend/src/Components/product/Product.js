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

  return (
    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
    <div className="card p-3 rounded" >

<AdvancedImage className=".card-img-top" cldImg={cld.image(`nbbs/${product.frontPic}`)} />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">
          <Link to={`/product/${product._id}`}>{product.name}</Link>
        </h5>
        <div className="ratings mt-auto">
          <div className="rating-outer">
            <div className="rating-inner"></div>
          </div>
          <span id="no_of_reviews">(5 Reviews)</span>
        </div>
        <p className="card-text">₦{product.price}</p>
        <Link to={`/product/${product._id}`} id="view_btn" className="btn btn-block">View Details</Link>
      </div>
    </div>
  </div>

  )
}

export default Product