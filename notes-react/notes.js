import React from "react";
import ReactDom from "react-dom";

//stateless functional componenet
//always return JSX
const Greeting = ()=>{
  return React.createElement('h4',{},'hello');
};// this gets messier very fast , bc of nesting and stuff

//upper one is what happens under the hood for the second function
function Greetin2 (){
  return <h2>blah blah</h2>
}

ReactDom.render(<Greeting/>,document.getElementById('root'
));//you always need to close the taga in any way



//jsx rules 
// return a single element , you can put whatever you want inside that particular element
//use camelCase for html attributes ex-classes and ids
//class becomes className
//onclick becomes onClick
//function / component names shall always start with a capital letter
//all tages need a closing tag , ex- img tag too - <img src=""/>
function Greetin2 (){
  return (
    <>
    <h1>hello world</h1>
    
    </>
  )
}

<></>//called react fragment


//react is all abut seperating our application into smaller parts


//Nested componenets in react
//you can create components and then use them inside other components 
function HeroPage(){//the one that gets rendered is the root component
  return (
    <>
    <Navbar/>
    <MainPart/>
    
    
    
    </>
  )
}

const Navbar = () =>{
  return(
    <h2>This is navbar</h2>
  )
};

const MainPart = () =>{
  return (
    <h1>This is the main part</h1>
  )
};


//props etc -
const Book = (props) =>{
  return(
    <article>
      <img src={img} alt="" />
      <h1>{BookName}</h1>
      <h4>{author}</h4>
      <p>{props.job}</p> 
    </article>
  )
}

const ImageItem = () =>{
  return (
    <>
    <img src="https://th.bing.com/th/id/OIP.nFtlTeqHyG2yQqh5olfSLgHaEK?pid=ImgDet&rs=1" alt=""  className="image-item"/>
    </>
  );
};

const buyMessage = "Click here to buy a tour"

const BuyLink = () =>{
  return (
    <>
    <h3>{buyMessage}</h3>
    </>

  );
}

const ProductPrice = (props3) =>{
  return (
    <>
    <h5>{props3.price}</h5>
    </>
  );
} 

function ItemDetail(){
  return (
    <>

    
    
      {/* better way to display a lot of similar objects with different prop values- store in array and then loop over to display */}
      
        

        
      
      {/* /* { <BuyProductCell img={PlaceList[0].img} title={PlaceList[0].title} price={PlaceList[0].price}/>
      <BuyProductCell img={PlaceList[1].img} title={PlaceList[1].title} price={PlaceList[1].price}/>

      <BuyProductCell img={PlaceList[2].img} title={PlaceList[2].title} price={PlaceList[2].price}>
        <p>stuff that we want to add directly between the tage </p>
  </BuyProductCell>     old way of doing stuff */ }
      

      
    
      
</>
    
  )

};

// what we want to put in between tags wont just appear on the screen magically
// we need to put a special argument and use that inside the function to make any
// extra stuff appear inside the component {children}we add children as argument in the function of the component and then put {children} where we want the extra stuff to appear



const BuyProductCell = (props) => {
  return (<>
  <section className="buy-product-cell">
    <img src={props.img} alt=""  className="image-item"/>
    <h3>{props.title}</h3>
    <h5>{props.price}</h5>

  </section>
  
  </>);

}
