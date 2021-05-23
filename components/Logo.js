import styles from '../styles/Logo.module.scss'

export default function Logo() {
  return (
    <a className={styles.logo} href="/">
      <img src="images/logo.png" alt="logo"/>
      <span>Bar at home</span>
    </a>
  )
}