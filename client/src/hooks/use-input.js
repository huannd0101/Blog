import { useReducer } from "react";

const initialState = {
  value: "",
  isTouched: false,
};

const actionConstants = {
  INPUT: "INPUT",
  BLUR: "BLUR",
  RESET: "RESET",
};

const inputStateReducer = (state, action) => {
  switch (action.type) {
    case actionConstants.INPUT:
      return {
        value: action.value,
        isTouched: state.isTouched,
      };
    case actionConstants.BLUR:
      return {
        value: state.value,
        isTouched: true,
      };
    case actionConstants.RESET:
      return initialState;
    default:
      return initialState;
  }
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, initialState);

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (val) => {
    dispatch({
      type: actionConstants.INPUT,
      value: val,
    });
  };

  const inputBlurHandler = (e) => {
    dispatch({ type: actionConstants.BLUR });
  };

  const reset = () => {
    dispatch({ type: actionConstants.RESET });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
