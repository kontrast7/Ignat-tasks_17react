import React from "react";
import { PATH } from "./Routes";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

function Header() {
  
    return (
    <div className={s.wrapper}>
      <NavLink
        to={PATH.PRE_JUNIOR}
        className={s.link}
        activeClassName={s.active}
      >
        pre_Junior
      </NavLink>
      
      <NavLink to={PATH.JUNIOR}
               className={s.link}
               activeClassName={s.active}>
        Junior
      </NavLink>
      <NavLink
        to={PATH.JUNIOR_PLUS}
        className={s.link}
        activeClassName={s.active}
      >
        Junior_Plus
      </NavLink>
      <img
        className={s.marker}
        src={"https://cdn-icons-png.flaticon.com/512/3075/3075977.png"}
        alt={"menu"}
      />
    </div>
  );
}

export default Header;
