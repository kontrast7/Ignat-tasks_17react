import React from "react";
import s from "./Message.module.css";

type propsTypes = {
  avatar: string;
  name: string;
  message: string;
  time: string;
};

export const Message = (props: propsTypes) => {
  return (
    <div className={s.wrapper_message}>
      <img className={s.avatar} src={props.avatar} alt={props.name} />

      <div className={s.message_wrapper}>
        <div className={s.text_center}>
          <div className={s.name}>{props.name}</div>
          <div className={s.text_wrapper}>
            <div className={s.message}>{props.message}</div>
            <span className={s.time}>{props.time}</span>
            <div className={s.block}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
