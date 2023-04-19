import { useSelector } from "react-redux";

const Header = () => {
    const cart = useSelector((state) => state.cartData);
    console.log("🚀 ~ file: Header.js:5 ~ Header ~ result:", cart)
    
    return (
        <div style={{ borderBottom: "1px solid black" }}>
            Items in shopping cart: <span>{cart.length}</span>
        </div>
    )
}

export default Header