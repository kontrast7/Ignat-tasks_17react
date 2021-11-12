import React, { ChangeEvent, KeyboardEvent } from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
  name: string; // need to fix any
  setNameCallback: (event: ChangeEvent<HTMLInputElement>) => void; // need to fix any
  addUser: () => void; // need to fix any
  error: string; // need to fix any
  totalUsers: number; // need to fix any
  onKeyPress: (event: KeyboardEvent<HTMLInputElement>) => void;
};

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
  { name, setNameCallback, addUser, error, totalUsers, onKeyPress } // деструктуризация пропсов
) => {
  const inputClass = error ? s.error : s.someClass; // need to fix with (?:)
  const buttonClass = error ? s.errorBtn : s.someClassBtn; // need to fix with (?:)

  return (
    <div>
      <input
        value={name}
        onChange={setNameCallback}
        onKeyPress={onKeyPress}
        className={inputClass}
      />
      <button className={buttonClass} onClick={addUser}>
        add
      </button>
      <span className={s.totalUsers}>{totalUsers}</span>
      <div className={s.spanError}>{error}</div>
    </div>
  );
};

export default Greeting;
