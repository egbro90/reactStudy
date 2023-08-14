import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { plus, minus} from '../modules/counter.js';

const CounterEx = () => {
  // 이벤트 주려면 써야되나봄
  const dispatch = useDispatch();
  // 리듀서 받아옴
  const count = useSelector((state) => state.counter.number);
  return (
    <div>
      <button onClick={() => dispatch(minus())}> - </button>
      <div>{count}</div>
      <button onClick={() => dispatch(plus())}> + </button>
    </div>
  );
};

export default CounterEx;