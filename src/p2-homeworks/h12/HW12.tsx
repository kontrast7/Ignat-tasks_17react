import React, {ChangeEvent, useState} from 'react';
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import { useDispatch, useSelector } from "react-redux";
import { AppStoreType } from "../h10/bll/store";
import { changeThemeC, themeType } from "./bll/themeReducer";

const themes = ["dark", "red", "some"];

function HW12() {
  // const [theme, onChangeCallback] = useState(themes[2]);
  //const theme = "some"; // useSelector

  const theme = useSelector<AppStoreType, themeType>((state) => state.theme);
  const dispatch = useDispatch();
  const onChangeCallback = (e: string) => {
          console.log(e)
          dispatch(changeThemeC(e));
    //  console.log("callback =>   " + theme);
  };

  return (
    <div className={s[theme]}>
      <hr />
      <span className={s[theme + "-text"]}>homeworks 12</span>
      <SuperSelect
        options={themes}
        value={theme}
        onChangeOption={onChangeCallback}
      />
      {/*should work (должно работать)*/}
      {/*SuperSelect or SuperRadio*/}

      <hr />
    </div>
  );
}

export default HW12;
