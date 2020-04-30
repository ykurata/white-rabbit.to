import React from "react";
import Navbar from './Navbar';
import cafe from '../images/cafe.jpg';
import veggies from '../images/veggies.jpg';

const Blog = () => {
  return (
    <div id="blog">
      <Navbar></Navbar>
      <div className="container padding">
        <div className="row"> 
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card" >
              <img className="card-img-top" src={veggies} alt="Card image cap" />
              <div className="card-body">
                <h4 className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</h4>
                <cite className="name-date">April 30, 2020</cite>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card" >
              <img className="card-img-top" src={cafe} alt="Card image cap" />
              <div className="card-body">
                <h4 className="card-text">Blog title comes here ....</h4>
                <cite className="name-date">April 30, 2020</cite>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card" >
              <img className="card-img-top" src={veggies} alt="Card image cap" />
              <div className="card-body">
                <h4 className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</h4>
                <cite className="name-date">April 30, 2020</cite>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>  
  );
};

export default Blog;