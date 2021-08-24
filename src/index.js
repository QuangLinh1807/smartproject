import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from 'react';
// import image0 from "./image/0000045091520_0000000000000_0.png";
// import image01 from "./image/0000045091520_0000000000000_135.JPG";
// import image02 from "./image/0000045091520_0000000000000_45.JPG";
// import image03 from "./image/0000045091520_0000000000000_90.JPG";
// import image04 from "./image/0000045091520_0000000000000_180.JPG";
// import image05 from "./image/0000045091520_0000000000000_225.JPG";
// import image06 from "./image/0000045091520_0000000000000_270.JPG";



import Product from "./component/product.js";
class App extends React.Component {
  state = {
    visible: false,
  };
  hide = () => {
    this.setState({
      visible: false,
    });
  };
  handleVisibleChange = (visible) => {
    this.setState({ visible });
  };
  
  render() {
    return (
      <div className="demo">
        <div
          style={{
            marginLeft: 70,
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
    );
  }
}

ReactDOM.render(<App />, document.getElementById("container"));
