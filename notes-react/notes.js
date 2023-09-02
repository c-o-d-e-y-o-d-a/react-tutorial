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