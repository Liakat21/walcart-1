import React from 'react';
import styles from "../styles/ProductList.module.css";
import ProductCard from "./ProductCard"

const ProductList = () => {
    return (
        <div className={styles.container}>
      <h1 className={styles.title}>WALCART THE BEST PRODUCT IN BANGLADESH</h1>
      <p className={styles.desc}>
      Walcart, with the slogan of Shohoje, Sobkhane, Nirapode (Easy, Everywhere, Safely), is a business-to-business and business-to-customer e-commerce platform through which the company is providing countrywide delivery services of the products and services in more than 30 categories, including Walton products.
      </p>
      <h1 className='smart'>Walton Fan</h1>
      <div className={styles.wrapper}>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          
          
      </div>

          <div className='container'>
               <h1>Walton Fridge</h1>
               <div>
               <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card h-100 ">
      <img src="/img/fridge1.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">WHD4544</h5>
        <h3>Price : $350</h3>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="/img/fridge2.jpg" class="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">WTG445</h5>
        <h3>Price : $300</h3>
        <p className="card-text">This is a short card.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="img/fridge3.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">WRG541</h5>
        <h3>Price : $450</h3>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="/img/fridge4.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">WNB321</h5>
        <h3>Price : $500</h3>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="/img/fridge5.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">WB251</h5>
        <h3>Price : $550</h3>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="/img/fridge6.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">W12456</h5>
        <h3>Price : $650</h3>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
               </div>
            </div>
    
      <div className='container'>
           <h1 className='text center'>Walton Ac</h1>
           <div>
           <div className="row row-cols-1 row-cols-md-2 g-4">
  <div className="col">
    <div className="card">
      <img src="/img/AC1.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">WBAC653</h5>
        <h3>Price : $500</h3>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This content is a little bit longer.This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="/img/AC2.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">WDHAC333</h5>
        <h3>Price : $1000</h3>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="/img/AC3.jpg" class="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">WAC123</h5>
        <h3>Price : $1200</h3>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.This content is a little bit longer.This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="/img/AC4.jpg" class="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">WlAC634</h5>
        <h3>Price : $1500</h3>
        <p classNames="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
           </div>
      </div>

            
    </div>
    );
};

export default ProductList;