import React, {Fragment, useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import MetaData from '../Layouts/Metadata'
import { useParams, useNavigate } from 'react-router-dom'
import { register, clearErrors} from '../../actions/userActions'



const Register = () => {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber,] = useState('')  
    const [address, setAddress] = useState('')
    const [state, setState] = useState('')

    let history = useNavigate();
   
    const alert = useAlert()
    const dispatch = useDispatch()


    const { isAuthenticated, error, loading } = useSelector(state => state.auth);

    useEffect(() => {

    if (isAuthenticated) {
        history('/')
    }

    if (error) {
        alert.error(error);
        dispatch(clearErrors());
    }

}, [dispatch, alert, isAuthenticated, error, history])

const submitHandler = (e) => {
    e.preventDefault();    
    dispatch(register(name, password, email, phoneNumber, state, address))
}


  return (
    <Fragment>

            <MetaData title={'Register User'} />

            <div className="row wrapper">
                <div className="col-10 col-lg-5">
                    <form className="shadow-lg" onSubmit={submitHandler} >
                        <h1 className="mb-3">Register</h1>

                        <div className="form-group">
                            <label htmlFor="name_field">Name</label>
                            <input
                                type="name"
                                id="name_field"
                                className="form-control"
                                name='name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email_field">Email</label>
                            <input
                                type="email"
                                id="email_field"
                                className="form-control"
                                name='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>


                        <div className="form-group">
                            <label htmlFor="address_field">Address</label>
                            <input
                                type="address"
                                id="address_field"
                                className="form-control"
                                name='address'
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="state_field">state</label>
                            <input
                                type="state"
                                id="state_field"
                                className="form-control"
                                name='state'
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                                
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password_field">Password</label>
                            <input
                                type="password"
                                id="password_field"
                                className="form-control"
                                name='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}

                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phoneNumber_field">phoneNumber</label>
                            <input
                                type="phoneNumber"
                                id="phoneNumber_field"
                                className="form-control"
                                name='phoneNumber'
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}

                            />
                        </div>

      


                        <button
                            id="register_button"
                            type="submit"
                            className="btn btn-block py-3"
                            disabled={loading ? true : false}
                        >
                            REGISTER
                        </button>
                    </form>
                </div>
            </div>

        </Fragment>
  )
}

export default Register