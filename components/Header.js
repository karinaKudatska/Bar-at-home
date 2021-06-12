import styles from '../styles/Header.module.scss'
import Logo from './Logo'

export default function Header({setIsCartOpen, setIsMenuOpen, fixBody}) {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__left}>
          <Logo />
        </div>
        <div className={styles.header__right}>
          <nav className={styles.header__nav}>
            <ul>
              <li><a href="#about">Про нас</a></li>
              <li><a href="#catalog">Каталог</a></li>
              <li><a href="#reviews">Відгуки</a></li>
              <li><a href="#video-guide">Відео-гайди</a></li>
              <li onClick={() => {setIsCartOpen(true); fixBody()}}>
                <a>
                  Кошик
                  <img alt="" src="images/icons/cart.svg" />
                </a>
              </li>
            </ul>
          </nav>
          <nav className={styles.header__nav_mobile}>
            <div>
              <img alt="" onClick={() => {setIsMenuOpen(true); fixBody()}} src="images/icons/burger.svg" />
            </div>
            <div>
              <img alt="" onClick={() => {setIsCartOpen(true); fixBody()}} src="images/icons/cart.svg" />
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}