import Modal from '@material-ui/core/Modal';
import styles from '../styles/MobileMenu.module.scss'
import { motion } from "framer-motion"
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Button from "./Button";
import Logo from "./Logo";

export default function MobileMenu({isMenuOpen, setIsMenuOpen, setIsCartOpen}) {
  return (
    <>
      {isMenuOpen &&
        <motion.div
          className={styles.menu}
          initial={{ transform: "translateY(-100%)" }}
          animate={{ transform: "translateY(-50%)" }}
          transition={{ duration: 0.3 }}
        >
          <div className={styles.menu__top}>
            <Logo />
            <img src="images/icons/close.svg" onClick={() => setIsMenuOpen(false)} />
          </div>
          <div className={styles.menu__main}>
            <nav>
              <ul>
                <li onClick={() => setIsMenuOpen(false)}><a href="#about">Про нас</a></li>
                <li onClick={() => setIsMenuOpen(false)}><a href="#catalog">Каталог</a></li>
                <li onClick={() => setIsMenuOpen(false)}><a href="#reviews">Відгуки</a></li>
                <li onClick={() => setIsMenuOpen(false)}><a href="#video-guide">Відео-гайди</a></li>
                <li onClick={() => {setIsMenuOpen(false), setIsCartOpen(true)}}>
                  <a>
                    Кошик
                    <img src="images/icons/cart.svg" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </motion.div>
      }
    </>
  );
}