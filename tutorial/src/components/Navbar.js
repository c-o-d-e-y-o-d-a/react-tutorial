
const Navbar = (props)=>{
    const {img, name } = props;
    return (
        <>
        <nav className="navbar">
            <div className="left-side">
                {/* <img src='' alt=""  className="logo-nav" /> */}
                <div className="logo-text">{name}</div>


            </div>
            <div className="right-side">
                <div className="link-text">Home</div>
                <div className="link-text">About Us</div>
                <div className="link-text">Explore</div>
                <div className="link-text">contact us</div>

            </div>
        </nav>
        </>
    )
};
export default Navbar