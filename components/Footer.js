import styles from '../styles/Footer.module.scss'
import Logo from './Logo'
import {sets} from '../data.js'
import Accordion from "./Accordion";

export default function Footer({setIsDeliveryOpen, setIsReturnOpen, fixBody}) {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__left}>
          <Logo />
          <div className={styles.footer__left_phone}>
            <p>Телефонуйте з 10:00 до 21:00</p>
            <a href="tel: +380 (63) 112 20 22">+380 (63) 112 20 22</a>
          </div>
          <div className={styles.footer__left_socials}>
            <p>Приєднуйтесь до нас!</p>
            <a href="#"><img src="images/icons/facebook.svg"/></a>
            <a href="https://www.instagram.com/bar_at_home.ua/"><img src="images/icons/instagram.svg"/></a>
            <a href="https://www.youtube.com/channel/UCWBDl0QWDxHpslavIcn2MgQ"><img src="images/icons/youtube.svg"/></a>
          </div>
        </div>
        <Accordion fixBody={fixBody} setIsDeliveryOpen={setIsDeliveryOpen} setIsReturnOpen={setIsReturnOpen}/>
        <div className={styles.footer__right}>
          <div className={styles.footer__right_menu}>
            <h2>Про нас</h2>
            <ul>
              <li><a href="#about">Хто ми</a></li>
              <li><a href="#offer">Що ми пропонуємо</a></li>
              <li><a href="#benefits">Чому варто придбати наш продукт</a></li>
              <li><a href="#customer">Кому підійде наш продукт</a></li>
            </ul>
          </div>
          <div className={`${styles.footer__right_menu} ${styles.catalog}`}>
            <h2>Каталог</h2>
            <ul>
              {sets.map(set => (
                <li>
                  <a href="#catalog">
                    {set.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.footer__right_menu}>
            <h2>Потрібна допомога?</h2>
            <ul>
              <li onClick={() => {setIsDeliveryOpen(true); fixBody()}}><a>Доставка і оплата</a></li>
              <li onClick={() => {setIsReturnOpen(true); fixBody()}}><a>Правила повернення</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}