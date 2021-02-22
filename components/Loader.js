import styles from '../styles/Loader.module.scss'

export default function Loader({isBigLoaderVisible}) {
  return (
    <>
      {isBigLoaderVisible &&
        <div className={styles.loader} />
      }
    </>
  )
}