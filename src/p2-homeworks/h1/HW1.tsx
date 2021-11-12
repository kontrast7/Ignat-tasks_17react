import React from "react";
import { Message } from "./Message";
import { AlternativeMessage } from "./AlternativeMessage";

const messageData = {
  avatar:
    "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
  name: "Max",
  message: "hi my name Max!",
  time: "22:00",
};
const alternativeData = {
  avatar:
    "https://cdnb.artstation.com/p/assets/images/images/008/802/747/large/anton-chernoskutov-5.jpg?1515414305",
  name: "Piter",
  message: "Hi",
  time: "22:05",
};

function HW1() {
  return (
    <div>
      <hr />
      homeworks 1
      <Message
        avatar={messageData.avatar}
        name={messageData.name}
        message={messageData.message}
        time={messageData.time}
      />
      <hr />
      <AlternativeMessage
        avatar={alternativeData.avatar}
        name={alternativeData.name}
        message={alternativeData.message}
        time={alternativeData.time}
      />
      <hr />
    </div>
  );
}

export default HW1;
