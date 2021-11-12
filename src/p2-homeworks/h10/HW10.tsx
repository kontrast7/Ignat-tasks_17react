import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { AppStoreType } from "./bll/store";
import { loadingAC, loadingACType } from "./bll/loadingReducer";
import load from "./bll/load.gif";

function HW10() {
  const dispatch = useDispatch<Dispatch<loadingACType>>();
  const selectAllState = (store: AppStoreType) => store.loading;
  const { loading } = useSelector(selectAllState);

  const setLoading = () => {
    dispatch(loadingAC(true));
    setTimeout(() => dispatch(loadingAC(false)), 2000);
  };

  return (
    <div>
      <hr />
      homeworks 10
      {/*should work (должно работать)*/}
      {loading ? (
        <div>
          <img src={load} alt={"load"}/>
        </div>
      ) : (
        <div>
          <SuperButton onClick={setLoading}>set loading...</SuperButton>
        </div>
      )}
      <hr />
      {/*для личного творчества, могу проверить*/}
      {/*<Alternative/>*/}
      <hr />
    </div>
  );
}

export default HW10;
