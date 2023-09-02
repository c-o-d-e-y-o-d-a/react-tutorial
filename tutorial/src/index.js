import React from "react";
import ReactDOM  from "react-dom";

import './index.css';//we import this like this bc we made this file 

function ItemDetail(){
  return (
    <>
    <section>
      <BuyProductCell/>
      <BuyProductCell/>
      <BuyProductCell/>
      
    
      

    </section>
    </>
  )

};

const BuyProductCell = () => {
  return (<>
  <section className="buy-product-cell">
    <ImageItem/>
  <BuyLink/>
  <ProductPrice/>

  </section>
  
  </>);

}

const ImageItem = () =>{
  return (
    <>
    <img src="https://th.bing.com/th/id/OIP.nFtlTeqHyG2yQqh5olfSLgHaEK?pid=ImgDet&rs=1" alt=""  className="image-item"/>
    </>
  );
};

const BuyLink = () =>{
  return (
    <>
    <h3>Click here to buy a tour</h3>
    </>

  );
}

const ProductPrice = () =>{
  return (
    <>
    <h5>55$</h5>
    </>
  );
}

ReactDOM.render(<ItemDetail/>,document.getElementById('root'));


