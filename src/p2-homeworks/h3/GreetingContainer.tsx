import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import Greeting from "./Greeting";
import { UserType } from "./HW3";

type GreetingContainerPropsType = {
  users: UserType[]; // need to fix any
  addUserCallback: (name: string) => void; // need to fix any
};

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
  users,
  addUserCallback,
}) => {
  // деструктуризация пропсов
  const [name, setName] = useState<string>(""); // need to fix any
  const [error, setError] = useState<string>(""); // need to fix any

  const setNameCallback = (event: ChangeEvent<HTMLInputElement>) => {
    // need to fix any
    setName(event.target.value);
  };
  const onKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      addUser();
    }
  };

  const addUser = () => {
    if (name.match(/^[a-zа-яё\s]+$/iu) && name !== "" && name !== " ") {
      alert(`Hello ${name}!`); // need to fix
      addUserCallback(name);
      setName("");
      setError("");
    } else {
      setError("Error");
    }
  };

  const totalUsers = users.length; // need to fix

  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      error={error}
      totalUsers={totalUsers}
      onKeyPress={onKeyPress}
    />
  );
};

export default GreetingContainer;
