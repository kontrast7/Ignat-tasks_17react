import { UserType } from "../HW8";

export const homeWorkReducer = (
  state: UserType[],
  action: AllType
): UserType[] => {
  switch (action.type) {
    case "sort": {
      const newState = [...state].sort((a, b) => {
        let nameA = a.name.toLowerCase();
        let nameB = b.name.toLowerCase();
        if (nameA < nameB) return -1;
        else if (nameA > nameB) return 1;
        else return 0;
      });
      return action.payload === "up" ? newState : newState.reverse();
    }
    case "check": {
      return state.filter((f) => f.age >= action.payload);
    }
    default:
      return state;
  }
};

export type AllType = SortACType | CheckACType;
export type SortACType = ReturnType<typeof SortAC>;
export type CheckACType = ReturnType<typeof CheckAC>;

export const SortAC = (payload: string) => {
  return {
    type: "sort",
    payload,
  } as const;
};
export const CheckAC = (payload: number) => {
  return {
    type: "check",
    payload,
  } as const;
};
