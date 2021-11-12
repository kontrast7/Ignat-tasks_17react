import React from "react";
import s from "./Message.module.css";

type propsTypes = {
  avatar: string;
  name: string;
  message: string;
  time: string;
};

export const AlternativeMessage = (props: propsTypes) => {
  return (
    <div className={s.wrapper_alternative}>
      <div className={s.message_wrapper}>
        <div className={s.text_center_alt}>
          <div className={s.name}>{props.name}</div>
          <div className={s.text_wrapper}>
            <div className={s.message}>{props.message}</div>
            <span className={s.time}>{props.time}</span>
            <div className={s.alt_block}></div>
          </div>
        </div>
      </div>
      <img className={s.avatar} src={props.avatar} alt={props.name} />
    </div>
  );
};
