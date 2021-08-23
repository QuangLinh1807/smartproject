import './App.css';
import React from "react";
// import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Product from "./component/product.js";

function App() {
  return (
    <div className="App">
     <div className="demo">
        <div
          style={{
            marginLeft: 100,
            clear: "both",
            whiteSpace: "nowrap",
            display: "flex",
          }}
          className="products"
        >
          <Product key="1" />
          <Product key="2" />
          <Product key="3" />
          <Product key="4" />
          <Product key="5" />
          <Product key="6" />
          <Product key="7" />
          <Product key="8" />
          <Product key="9" />
          <Product key="10" />
          <Product key="11" />
          <Product key="12" />
          <Product key="13" />
          <Product key="14" />
          <Product key="15" />
          <Product key="16" />
          <Product key="17" />
          <Product key="18" />
          <Product key="19" />
          <Product key="20" />
          <Product key="21" />
          <Product key="22" />
          <Product key="23" />
          <Product key="24" />
          <Product key="25" />
          <Product key="26" />
          <Product key="27" />
          <Product key="28" />
          <Product key="29" />
          <Product key="30" />
          <Product key="31" />
          <Product key="32" />
        </div>
      </div>
    </div>
  );
}

export default App;
