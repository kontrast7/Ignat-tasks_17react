const initState: themeType = "some";
export type themeType = "dark" | "red" | "some";

export const themeReducer = (
  state: themeType = initState,
  action: changeThemeCType
): themeType => {
  switch (action.type) {
    case "CHANGE_THEME_AC": {
      return action.change;
    }
    default:
      return state;
  }
};

export type changeThemeCType = ReturnType<typeof changeThemeC>;

export const changeThemeC = (change: string): any => {
  return {
    type: "CHANGE_THEME_AC",
    change,
  } as const;
};
