import styles from '../styles/PulseButton.module.scss'

export default function PulseButton() {
  return (
    <a href="tel: +380 (63) 112 20 22" className={styles.pulseButton}>
      <img alt="" src="images/icons/phone.svg" />
    </a>
  )
}