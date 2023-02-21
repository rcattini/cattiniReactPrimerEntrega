import styles from "./navbar.module.css";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  return (
    <div>
      <header className={styles.cuerpo}>
        <div className={styles.imagen}>
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </div>
        <nav className={styles.menu}>
          <ul>
            <li>
              <a href="">Menu</a>
            </li>
            <li>
              <a href=""></a>
            </li>
            <li>
              <ShoppingCartIcon />
            </li>
            <li>
              <a href="">Contacto</a>
            </li>
          </ul>
        </nav>
      </header>
      <div></div>
    </div>
  );
};

export default Navbar;
