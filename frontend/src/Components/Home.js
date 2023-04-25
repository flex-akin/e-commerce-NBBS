import React, { Fragment, useEffect, useState } from 'react'
import Metadata from './Layouts/Metadata'
import Product from  './product/Product'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../actions/productActions'
import Loader from './Layouts/Loader'
import { useAlert } from 'react-alert'
import Pagination from 'react-js-pagination'
import { useParams  } from 'react-router-dom'



const Home = () => {
  const urlParams = useParams()

  const [currentPage, setCurrentPage] = useState(1)

    const alert = useAlert()
    const dispatch = useDispatch();

    const { loading, products, error,  productsCount, resPerPage, filteredProductscount } = useSelector(state => state.products) 
    const keyword =  urlParams.keyword
    useEffect(() => {

    if(error) {
      return alert.error(error)
    }

    dispatch(getProducts(keyword, currentPage));


    }, [dispatch, alert, error, keyword, currentPage])

    function setCurrentPageNo(pageNumber) {
      setCurrentPage(pageNumber)
  }

let count = productsCount
if(keyword) {
  count = filteredProductscount
}


  return (
    <Fragment>
      {loading ? <Loader />: (
        <Fragment>
          <Metadata title={"Best Christain Books Shopping"} />
          <div className="jumbotron jumbotron-fluid">

</div>
<h4 id="products_heading">Available Products</h4>
<hr />

<section id="products" className="container-fluid mt-5">
<div className="row">
{products && products.map(product => (
  <Product key={product._id} product={product} />

))}

</div>
</section>
{resPerPage <= count && (
                        <div className="d-flex justify-content-center mt-5">
                            <Pagination
                                activePage={currentPage}
                                itemsCountPerPage={resPerPage}
                                totalItemsCount={productsCount}
                                onChange={setCurrentPageNo}
                                nextPageText={'Next'}
                                prevPageText={'Prev'}
                                firstPageText={'First'}
                                lastPageText={'Last'}
                                itemClass="page-item"
                                linkClass="page-link"
                            />
                        </div>
)}
          </Fragment>

      )}
        
    </Fragment>
  )
}

export default Home