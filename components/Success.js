import Modal from '@material-ui/core/Modal';
import styles from '../styles/Modal.module.scss'
import { motion } from "framer-motion"
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Button from "./Button";

export default function Success({isSuccessOpen, setIsSuccessOpen, unFixBody}) {
  const handleClickAway = () => {
    setIsSuccessOpen(false);
    unFixBody()
  };
  return (
    <Modal
      open={isSuccessOpen}
    >
      <ClickAwayListener onClickAway={handleClickAway}>
        <motion.div
          className={styles.modal}
          initial={{ transform: "translateY(-100%)" }}
          animate={{ transform: "translateY(-50%)" }}
          transition={{ duration: 0.3 }}
          style={{minHeight: 'auto'}}
        >
          <div className={styles.modal__top}>
            <h2>
              <img alt="" src="images/icons/success.svg" />
              Ваше замовлення надіслано
            </h2>
            <img alt="" src="images/icons/close.svg" onClick={() => {setIsSuccessOpen(false); unFixBody()}} />
          </div>
          <div className={styles.modal__main}>
            <p>Дякуємо! Ваше замовлення успішно надіслано. Ми зв’яжемось з вами протягом 15 хвилин.</p>
            <Button text="Дякую" onClick={() => {setIsSuccessOpen(false); unFixBody()}} />
          </div>
        </motion.div>
      </ClickAwayListener>
    </Modal>
  );
}