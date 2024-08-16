import React from 'react';
// import { useDispatch, useSelector } from 'react-redux'
// import Navbar from './components/navbar'
// import { setTotal } from './features/cart/cartSlice'
import Stopwatch from './components/Stopwatch';

function App() {
  // const total = useSelector((state) => state.cart.total)
  // console.log('total', total)
  // const dispatch = useDispatch()
  // const handleClick = () => {
  //   dispatch(setTotal(total + 1))
  // }
  return (
    <>
      <div className="App">
        <Stopwatch />
      </div>
    </>
    // <main>
    // <Navbar />
    // <button className="btn" onClick={handleClick}>Click</button>
    // <p className="btn">{total}</p>
    // </main>
  )
}
export default App
