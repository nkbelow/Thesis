import React from 'react';
import {Link} from 'react-router-dom';

const SinglePageNavBar = (props) => {
  return (
    <div className='container-fluid'>
      <div className='row'>
      <div className='col-md-6 col-sm-6 col-xs-6' >
      <Link to='/'><h1>HOME</h1></Link>
      </div>
      <div className='col-md-6 col-sm-6 col-xs-6'>
      <h1 className='logout-link'>Logout</h1>
      </div>
      </div>
      </div>
    )
}

export default SinglePageNavBar;