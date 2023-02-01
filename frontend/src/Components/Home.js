import React, { Fragment, useEffect } from 'react'
import Metadata from './Layouts/Metadata'
import Product from  './product/Product'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../actions/productActions'
import Loader from './Layouts/Loader'
import { useAlert } from 'react-alert'



const Home = () => {

    const alert = useAlert()
    const dispatch = useDispatch();

    const { loading, products, error, count} = useSelector(state => state.products) 

    useEffect(() => {

    if(error) {
      return alert.error(error)
    }

    dispatch(getProducts());


    }, [dispatch, alert, error])


  return (
    <Fragment>
      {loading ? <Loader />: (
        <Fragment>
          <Metadata title={"Best Christain Books Shopping"} />

<h1 id="products_heading">Latest Products</h1>

<section id="products" className="container mt-5">
<div className="row">
{products && products.map(product => (
  <Product key={product._id} product={product} />

))}


</div>
</section>
          </Fragment>
      )}
        
    </Fragment>
  )
}

export default Home