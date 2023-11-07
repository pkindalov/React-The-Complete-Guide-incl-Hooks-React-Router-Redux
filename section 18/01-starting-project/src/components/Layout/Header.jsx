import logo from '../../assets/logo.jpg';

const Header = () => {
    return (
        <header id="main-header">
            <div id="title">
                <img src={logo} alt="logo image"/>
                <h1>ReactFood</h1>
            </div>
            <button>Cart(0)</button>
        </header>
    )
}

export default Header;