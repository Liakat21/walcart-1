import React from 'react';
import Image from "next/image";
import styles from "../styles/Clients.module.css";

const Clients = () => {
    return (
        <div className='container'>
        <div>
           <h1 className='Our'>Our Clients</h1>
        </div>
            <div className='clients'> 
            <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card border-0">
            <img src="/img/Badhon.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Badhon</h5>
              
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card border-0">
            <img src="/img/Ferdous.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Ferdous</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card border-0">
            <img src="/img/Girls.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Shabnam</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
            </div>
          </div>
        </div>
      </div>
            </div>
        </div>
    );
};

export default Clients;