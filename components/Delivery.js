import Modal from '@material-ui/core/Modal';
import styles from '../styles/Modal.module.scss'
import { motion } from "framer-motion"
import { delivery, payment } from '../data'
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

export default function Delivery({isDeliveryOpen, setIsDeliveryOpen}) {
  const handleClickAway = () => {
    setIsDeliveryOpen(false);
  };
  return (
      <Modal
        open={isDeliveryOpen}
      >
        <ClickAwayListener onClickAway={handleClickAway}>
          <motion.div
            className={styles.modal}
            initial={{ transform: "translateY(-100%)" }}
            animate={{ transform: "translateY(-50%)" }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.modal__top}>
              <h2>Доставка і оплата</h2>
              <img src="images/icons/close.svg" onClick={() => setIsDeliveryOpen(false)} />
            </div>
            <div className={styles.modal__main}>
              <h3>Доставка</h3>
              <p>{delivery}</p>
              <h3>Оплата</h3>
              <p>{payment}</p>
            </div>
          </motion.div>
        </ClickAwayListener>
      </Modal>
  );
}