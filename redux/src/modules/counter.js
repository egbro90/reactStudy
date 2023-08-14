// 액션 타입 생성
const PLUS = "PLUS";
const MINUS = "MINUS";
export const plus = () => {
  return {
    type: PLUS
  }
}
export const minus = () => {
  return {
    type: MINUS
  }
}


// 초기값
const initialState = {
  number: 0,
}


// 리듀서 생성
export default function counter(state=initialState, action) {
  switch (action.type) {
    case PLUS:
      return {
        number: state.number + 1
      }
    case MINUS:
      return {
        number: state.number - 1
      }
    default:
      return state;
  }
}
