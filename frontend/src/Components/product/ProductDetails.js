import React, {Fragment, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetails, clearErrors } from '../../actions/productActions'
import { useAlert } from 'react-alert'
import Loader from '../Layouts/Loader'
import Metadata from '../Layouts/Metadata'
import { useParams  } from 'react-router-dom'


const ProductDetails = () => {
    const urlParams = useParams()

    const alert = useAlert()
    const dispatch = useDispatch();

    const { loading, products , error, count} = useSelector(state => state.productDetails) 

    useEffect(() => {

    if(error) {
       alert.error(error)
       dispatch(clearErrors())
    }

    dispatch(getProductDetails(urlParams.id));


    }, [dispatch, alert, error, urlParams.id])

  return (
<Fragment>
    {loading ? <Loader /> : (
        <Fragment>
        <div className="row f-flex justify-content-around">
        <div className="col-12 col-lg-3" id="product_image">
         
            <img src="https://res.cloudinary.com/ddaoml7e8/image/upload/v1669887512/nbbs/76b.jpg" alt="sdf" height="400" width="300" />
        </div>
        <div className="col-12 col-lg-3 " id="product_image">
         
            <img src="https://res.cloudinary.com/ddaoml7e8/image/upload/v1669887506/nbbs/76.jpg" alt="sdf" height="400" width="300" />
        </div>
    
        <div className="col-12 col-lg-5 mt-5">
            <h3> {products.name} </h3>
            <p id="product_id">Product #{products._id}</p>
    
            <hr />
    
            <div className="rating-outer">
                <div className="rating-inner"></div>
            </div>
            <span id="no_of_reviews">(5 Reviews)</span>
    
            <hr />
    
            <p id="product_price">₦{products.price}</p>
            <div className="stockCounter d-inline">
                <span className="btn btn-danger minus">-</span>
    
                <input type="number" className="form-control count d-inline" value="1" readOnly />
    
                <span className="btn btn-primary plus">+</span>
            </div>
             <button type="button" id="cart_btn" className="btn btn-primary d-inline ml-4">Add to Cart</button>
    
            <hr />
    
            <p>Year: <span id="stock_status">{products.year}</span></p>
    
            <hr />
            <p>Number of Pages: <span id="stock_status">{products.pages}</span></p>
    
            <hr />

            <p>ISBN or ISSN: <span id="stock_status">{products.isbn}</span></p>
    
            <hr />
            <p>Remarks: <span id="stock_status">{products.remarks}</span></p>
    
            <hr />
    
            <h4 className="mt-2">Description:</h4>
            <p> This book tiltled {products.name} was writtedn by {products.author}</p>
            <hr />
            <p id="product_seller mb-3">Author: <strong>{products.author}</strong></p>
            
            <button id="review_btn" type="button" className="btn btn-primary mt-4" data-toggle="modal" data-target="#ratingModal">
                        Submit Your Review
            </button>
            <<p>payments should be made to:</p>
            <H2>
                <P>ZENITH BANK</P>
                <p>NIEGRIA BAPTIST BOOKSTORE</p>
                <P>1010642637</P>
            </H2>
            
            <div className="row mt-2 mb-5">
                <div className="rating w-50">
    
                    <div className="modal fade" id="ratingModal" tabIndex="-1" role="dialog" aria-labelledby="ratingModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="ratingModalLabel">Submit Review</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
    
                                    <ul className="stars" >
                                        <li className="star"><i className="fa fa-star"></i></li>
                                        <li className="star"><i className="fa fa-star"></i></li>
                                        <li className="star"><i className="fa fa-star"></i></li>
                                        <li className="star"><i className="fa fa-star"></i></li>
                                        <li className="star"><i className="fa fa-star"></i></li>
                                    </ul>
    
                                    <textarea name="review" id="review" className="form-control mt-3">
    
                                    </textarea>
    
                                    <button className="btn my-3 float-right review-btn px-4 text-white" data-dismiss="modal" aria-label="Close" > Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
    
                </div>
                    
        </div>
    
        </div>
        </div>
        </Fragment>
    )}
   </Fragment>

  )
}

export default ProductDetails