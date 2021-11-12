const initState = {
  loading: false,
  //arr: null as null | Array<ArrType>,
};
type InitStateType = typeof initState

export const loadingReducer = (
  state = initState,
  action: loadingACType
): InitStateType => {
  switch (action.type) {
    case "LOADING": {
      return { ...state, loading: action.value };
    }
    default:
      return state;
  }
};
export type loadingACType = ReturnType<typeof loadingAC>;

export const loadingAC = (value: boolean) => {
  return {
    type: "LOADING",
    value,
  } as const
};
