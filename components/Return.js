import Modal from '@material-ui/core/Modal';
import styles from '../styles/Modal.module.scss'
import { motion } from "framer-motion"
import { returnRules } from '../data'
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

export default function Return({isReturnOpen, setIsReturnOpen, unFixBody}) {
  const handleClickAway = () => {
    setIsReturnOpen(false);
    unFixBody()
  };
  return (
    <Modal
      open={isReturnOpen}
    >
      <ClickAwayListener onClickAway={handleClickAway}>
        <motion.div
          className={styles.modal}
          initial={{ transform: "translateY(-100%)" }}
          animate={{ transform: "translateY(-50%)" }}
          transition={{ duration: 0.3 }}
        >
          <div className={styles.modal__top}>
            <h2>Правила повернення</h2>
            <img alt="" src="images/icons/close.svg" onClick={() => {setIsReturnOpen(false); unFixBody()}} />
          </div>
          <div className={styles.modal__main}>
            <p>{returnRules}</p>
          </div>
        </motion.div>
      </ClickAwayListener>
    </Modal>
  );
}