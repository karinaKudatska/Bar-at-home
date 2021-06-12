import Modal from '@material-ui/core/Modal';
import styles from '../styles/MobileMenu.module.scss'
import { motion } from "framer-motion"
import Logo from "./Logo";
import React from "react";
import Div100vh from "react-div-100vh";

export default function MobileMenu({isMenuOpen, setIsMenuOpen, setIsCartOpen, unFixBody, fixBody}) {
  return (
    <Modal
      open={isMenuOpen}
      style={{zIndex: 99999}}
    >
      <Div100vh style={{outline: 'none'}}>
        <motion.div
          className={styles.menu}
          initial={{ transform: "translateY(-100%)" }}
          animate={{ transform: "translateY(-50%)" }}
          transition={{ duration: 0.3 }}
        >
          <div className={styles.menu__top}>
            <Logo />
            <img alt="" src="images/icons/close.svg" onClick={() => {setIsMenuOpen(false); unFixBody()}} />
          </div>
          <div className={styles.menu__main}>
            <nav>
              <ul>
                <li onClick={() => {setIsMenuOpen(false); unFixBody()}}><a href="#about">Про нас</a></li>
                <li onClick={() => {setIsMenuOpen(false); unFixBody()}}><a href="#catalog">Каталог</a></li>
                <li onClick={() => {setIsMenuOpen(false); unFixBody()}}><a href="#reviews">Відгуки</a></li>
                <li onClick={() => {setIsMenuOpen(false); unFixBody()}}><a href="#video-guide">Відео-гайди</a></li>
                <li onClick={() => {setIsMenuOpen(false); setIsCartOpen(true); fixBody()}}>
                  <a>
                    Кошик
                    <img alt="" src="images/icons/cart.svg" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </motion.div>
      </Div100vh>
    </Modal>
  );
}