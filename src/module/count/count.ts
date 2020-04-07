export function counterReducer(
  state = {
    count: 0,
  },
  action
) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

export const countUp = () => {
  return { type: "INCREMENT" };
};

export const countDown = () => {
  return { type: "DECREMENT" };
};
