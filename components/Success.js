import Modal from '@material-ui/core/Modal';
import styles from '../styles/Modal.module.scss'
import { motion } from "framer-motion"
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Button from "./Button";

export default function Success({isSuccessOpen, setIsSuccessOpen}) {
  const handleClickAway = () => {
    setIsSuccessOpen(false);
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
        >
          <div className={styles.modal__top}>
            <h2>
              <img src="images/icons/success.svg" />
              Ваше замовлення надіслано
            </h2>
            <img src="images/icons/close.svg" onClick={() => setIsSuccessOpen(false)} />
          </div>
          <div className={styles.modal__main}>
            <p>Дякуємо! Ваше замовлення успішно надіслано. Ми зв’яжемось з вами протягом 15 хвилин.</p>
            <Button text="Дякую" onClick={() => setIsSuccessOpen(false)} />
          </div>
        </motion.div>
      </ClickAwayListener>
    </Modal>
  );
}