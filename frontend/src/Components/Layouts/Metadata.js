import React from 'react'
import {Helmet} from 'react-helmet'

const Metadata = (props) => {
  return (
    <Helmet>
        <title>
          {props.title} - Nigerian Baptist Bookstore
        </title>

    </Helmet>
  )
}

export default Metadata