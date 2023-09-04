//things to add to create events in react
// attributes , eventhandler ,

<button type="button" onClick={functionName}></button>

// syntax like:



const BuyProductCell = (props) => {//doing destructuring her

  const clickHandler = () =>{
    alert('maheshdjfj');
  };


  const complexFunction = (argument1) =>{
    console.log(argument1);

  };

  
  return (<>
  <section className="buy-product-cell">
    <img src={img} alt=""  className="image-item"/>
    <h3>{title}</h3>
    <h5>{price}</h5>
    <button type="button" onClick={clickHandler}></button>
     {/* can also write like onclick={()=>{function things}} */}
    <button type="button" onClick={complexFunction(argumentWeWannaGive)}></button>
  </section>

  
  </>);

}
