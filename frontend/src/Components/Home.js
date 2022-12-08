import React, { Fragment, useEffect } from 'react'
import Metadata from './Layouts/Metadata'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../actions/productActions'
import {Cloudinary} from "@cloudinary/url-gen";
import {AdvancedImage} from '@cloudinary/react';


const Home = () => {

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'ddaoml7e8'
    }
  });


    const dispatch = useDispatch();

    const { loading, products, error, count} = useSelector(state => state.products) 

    useEffect(() => {
    dispatch(getProducts());
    }, [dispatch])


  return (
    <Fragment>
        <Metadata title={"Best Christain Books Shopping"} />

    <h1 id="products_heading">Latest Products</h1>

<section id="products" className="container mt-5">
  <div className="row">
    {products && products.map(product => (
           <div key={product._id} className="col-sm-12 col-md-6 col-lg-3 my-3">
           <div className="card p-3 rounded" >
      
<AdvancedImage className=".card-img-top" cldImg={cld.image(`nbbs/${product.frontPic}`)} />
     
             <div className="card-body d-flex flex-column">
               <h5 className="card-title">
                 <a href="">{product.name}</a>
               </h5>
               <div className="ratings mt-auto">
                 <div className="rating-outer">
                   <div className="rating-inner"></div>
                 </div>
                 <span id="no_of_reviews">(5 Reviews)</span>
               </div>
               <p className="card-text">₦{product.price}</p>
               <a href="#" id="view_btn" className="btn btn-block">View Details</a>
             </div>
           </div>
         </div>
    ))}


  </div>
</section>
    </Fragment>
  )
}

export default Home