import React from "react";
import ReactDOM  from "react-dom";
import PlaceList  from "./PlaceList";//this is how you export something from a file
import './index.css';//we import this like this bc we made this file 













  // function ItemDetail(){
  //   return (
  //     <section>
  //       {PlaceList.map((place)=>{
  //         return (
  //           <BuyProductCell img={place.img} title={place.title} price={place.price}/>
  //         )
  //       })}

  //     </section>
  //   )
  // }

//other way to do render multiple similar objects on a screen:
function ItemDetail(){
  return(
    <section>
      {PlaceList.map((place)=>{
        return <BuyProductCell key={place.id} place={place}/>
      })}
    </section>
  )
}
//you will also need to modify the buyproductcell part to deconstruct the prop sent in it properly
const BuyProductCell = (props) => {//doing destructuring her
  // const { img, title, price } = props;//just a way to structure code , so you don't need to write like props.img and props.title everywhere
  const {img, title, price} = props.place;
  return (<>
  <section className="buy-product-cell">
    <img src={img} alt=""  className="image-item"/>
    <h3>{title}</h3>
    <h5>{price}</h5>
    

  </section>

  
  </>);

}










const UpperHeading = () =>{
  return(
    <>
    <h1>Here are a few tour packages we provide</h1>
    </>
  )
}

//syntax to deconstruct - ({propertyName1,propertyName2 })={objectName}now you can use the properties directly

// const BuyProductCell = ({img, title, price,children}) => {//doing destructuring her
//   // const { img, title, price } = props;//just a way to structure code , so you don't need to write like props.img and props.title everywhere
//   return (<>
//   <section className="buy-product-cell">
//     <img src={img} alt=""  className="image-item"/>

//     <h3>{title}</h3>

//     <h5>{price}</h5>
//     {children}

//   </section>

  
//   </>);

// }



ReactDOM.render(<ItemDetail/>,document.getElementById('root'));


//how to put stuff in between the the html type element of a react component funciton

