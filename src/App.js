import { addToCart } from "./redux/action";
import { useDispatch } from "react-redux";


function App() {
  const dispatch = useDispatch();

  const product = {
    name: "NVIDIA GTX 4090",
    category: "GPU",
    price: 1500,
    color: "white"
  }

  return (
    <div className="App">
      <h1>Shopping Cart</h1>
      <p>{product.name} (${product.price})</p>
      <button onClick={() => dispatch(addToCart(product))}>Add to cart</button>
    </div>
  );
}

export default App;
