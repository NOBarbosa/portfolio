import { useState } from "react";
import Menu from "../../assets/menu.svg";
import Close from "../../assets/close.svg";
import s from "./header.module.scss";

export function Header() {
  const [open, setOpen] = useState(false);

  const openMenu = () => {
    setOpen((prev) => !prev);
  };
  return (
    <header className={s.header}>
      <h2>Natalia</h2>

      <img src={open ? Close : Menu} alt="Menu icon" onClick={openMenu} />
      <div className={open ? s.active : s.closed}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </header>
  );
}
