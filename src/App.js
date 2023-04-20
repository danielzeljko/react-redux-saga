import Header from "./components/Header";
import { addToCart, removeFromCart, resetCart } from "./redux/cartAction";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./redux/productAction";

function App() {
  const dispatch = useDispatch();
  const productData = useSelector(state => state.productData);
  console.log("🚀 ~ file: App.js:10 ~ App ~ productData:", productData)

  const product = {
    name: "NVIDIA GTX 4090",
    category: "GPU",
    price: 1500,
    color: "white"
  }

  return (
    <div className="App">
      <Header />
      <h1>Shopping Cart</h1>
      <p>{product.name} (${product.price})</p>
      <button onClick={() => dispatch(addToCart(product))}>Add to cart</button>
      <button onClick={() => dispatch(removeFromCart())}>Remove from cart</button>
      <button onClick={() => dispatch(resetCart())}>Reset cart</button>

      <button onClick={() => dispatch(fetchProducts())}>Fetch Products</button>

      <hr />

      <h2>Fetched Products</h2>
      {productData.map(product => <div>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>${product.price}</p>
      </div>)}
    </div>
  );
}

export default App;
