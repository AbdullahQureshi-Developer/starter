// src/components/Stopwatch.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { start, stop, reset, tick } from '../features/cart/cartSlice';

const Stopwatch = () => {
  const time = useSelector((state) => state.time);
  const running = useSelector((state) => state.running);
  const dispatch = useDispatch();

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        dispatch(tick());
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [running, dispatch]);

  return (
    <div>
      <h1>Stopwatch: {time} seconds</h1>
      <span>______________________<br/></span>
      <button className='btn' onClick={() => dispatch(start())} disabled={running}>
        Start
      </button>
      <button className='btn' onClick={() => dispatch(stop())} disabled={!running}>
        Stop
      </button>
      <button className='btn' onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Stopwatch;
