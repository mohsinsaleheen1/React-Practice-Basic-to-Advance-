import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./reduxtoolkit/counterSlice";
function App() {
  const mystate = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <>
      <h1>REDUX TOOL KIT</h1>
      <button onClick={() => dispatch(increment())}>plus</button>
      <p>{mystate}</p>
      <button onClick={() => dispatch(decrement())}>Minus</button>
    </>
  );
}

export default App;
