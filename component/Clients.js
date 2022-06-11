import React from "react";
import Image from "next/image";
import styles from "../styles/Clients.module.css";

const Clients = () => {
  return (
    <div className="container">
      <div>
        <h1 className="Our">Our Clients</h1>
      </div>
      <div className="clients">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card border-0">
              <img src="/img/client2.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Thomas</h5>

                <p className="card-text">
                  This is a longer card with supporting text below as a natural lead-in to
                  additional content.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0">
              <img src="/img/client5.jpg" className="card-img-top" alt="..."  />
              <div className="card-body">
                <h5 className="card-title">Alexa</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0">
              <img src="/img/client3.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Jhon</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural lead-in to
                  additional content.This content is a little bit longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
