import styles from '../styles/Button.module.scss'

export default function Button({text, arrow, onClick, type, disabled}) {
  return (
    <button disabled={disabled} type={type} className={styles.button} onClick={onClick}>
      {text}
      {arrow &&
        <img alt="" src="images/icons/arrow.svg" />
      }
    </button>
  )
}