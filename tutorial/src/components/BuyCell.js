const BuyCell = (props)=>{
    const {img , price, detail} = props;
    return(
        <>
        <div className="buy-cell">
        <img src={img} alt="" />
        <div className="price">{price}</div>
        <div className="product-details">{detail}</div>
        </div>
        
        </>
    )
};

export default BuyCell