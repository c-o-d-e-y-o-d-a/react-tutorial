import React from 'react'
import ReactDOM from 'react-dom'
import { ItemList } from './ItemList'
import'./index.css'
import Navbar from './components/Navbar';
import { ClothList } from './ItemList';
import BuyCell from './components/BuyCell';
import MainBody from './components/Mainbody';
import Footer from './components/Footer';





function App(){
  return(
    <>
    <Navbar  img = {`.\logo512.png`} name={'Leepo'}/>
    <MainBody>
      {ClothList.map((cloth)=>{
        return <BuyCell img={cloth.img} price={cloth.price} detail={cloth.name}/>
      })}
    </MainBody>


    <Footer/>

    
    </>
  );
}

ReactDOM.render(<App/>,document.getElementById('root'));
