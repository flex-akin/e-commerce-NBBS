import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

import { productsReducer, newProductReducer, productReducer, productDetailsReducer, newReviewReducer, productReviewsReducer, reviewReducer } from './reducers/productReducers'
import { authReducer } from './reducers/userReducers';

const reducer = combineReducers({
    products: productsReducer,
    productDetails : productDetailsReducer,
    auth : authReducer
 
})


let initialState = {
 
}


const middlware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlware)))

export default store;