import React, {useEffect, useState} from 'react';
import Modal from '@material-ui/core/Modal';
import styles from '../styles/Cart.module.scss'
import { motion } from "framer-motion"
import InputMask from "react-input-mask";
import Button from "./Button";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Div100vh from "react-div-100vh";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';

export default function Cart({isCartOpen, setIsCartOpen, items, unFixBody, setIsBigLoaderVisible, setIsSuccessOpen, setIsProductOpen }) {
  const [order, setOrder] = useState(items)
  const [total, setTotal] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [disabledButton, setDisabledButton] = useState(true);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickAway = () => {
    setIsCartOpen(false);
    unFixBody()
  };

  useEffect(() => {
    if (phone.replace(/-|_/g, "").length === 19 && name.length > 0) {
      setDisabledButton(false)
    } else {
      setDisabledButton(true)
    }
  }, [phone, name])


  useEffect(() => {
    if (items) {
      setOrder(items)
      localStorage.setItem('goods', JSON.stringify(items))
      let sum = 0;
      let discountSum = 0;
      items.map(item => {
        sum += (item.price * item.amount)
        if (item.discount) {
          discountSum += (item.discount * item.amount)
        }
      })
      setTotal(sum)
      setDiscount(discountSum)
    }
  }, [items])

  const addItem = (item) => {
    item.amount++
    setTotal(total + item.price)
    if (item.discount) {
      setDiscount(discount + item.discount)
    }
    setOrder([...order])
    localStorage.setItem('goods', JSON.stringify(order))
  }

  const subtractItem = (item) => {
    if (item.amount > 1) {
      item.amount--
      setTotal(total - item.price)
      if (item.discount) {
        setDiscount(discount - item.discount)
      }
      setOrder([...order])
      localStorage.setItem('goods', JSON.stringify(order))
    }
  }

  const removeItem = (item) => {
    let index = order.indexOf(item);
    order.splice(index, 1)
    setOrder([...order])
    localStorage.setItem('goods', JSON.stringify(order))
    setTotal(total - item.price * item.amount)
    if (item.discount) {
      setDiscount(discount - item.discount * item.amount)
    }
  }

  function onSubmit(e) {
    e.preventDefault()
    let text = `@lasgrate @Silence_side%0A%0A<b>Нове замовлення:</b>%0A`
    order.map(item => {
      text += ` - ${item.title}: ${item.amount} шт.%0A`
    })
    text += `%0A<b>Сума:</b> ${total} грн.%0A%0A<b>Ім'я:</b> ${name}%0A<b>Телефон:</b> ${phone}`

    if(email.length > 0) {
      text += `%0A<b>Email:</b> ${email}`
    }
    setIsBigLoaderVisible(true)
    setTimeout(() => {
      setIsBigLoaderVisible(false)
      setIsProductOpen(false)
      setIsCartOpen(false)
      setIsSuccessOpen(true)
    }, 1000)
    let url = `https://api.telegram.org/bot1626405477:AAHlMsUQr7-iLatbhXYBoJvpW5jV93zF1_E/sendMessage?chat_id=-493963602&text=${text}&parse_mode=HTML`
    fetch(url).then(r => console.log(r))
  }

  return (
      <Modal
        open={isCartOpen}
        style={{zIndex: 99999}}
      >
          <ClickAwayListener onClickAway={handleClickAway}>
            <motion.div
              className={styles.cart}
              initial={{ top: "-100%" }}
              animate={{ top: "50%" }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.cart__top}>
                <h2>Ваше замовлення</h2>
                <img src="images/icons/close.svg" onClick={() => {setIsCartOpen(false); unFixBody()}} />
              </div>
              {order && order.length > 0 && (
                <div className={styles.cart__order}>
                  {order.map(item => (
                    <div key={item.title} className={styles.cart__order_item}>
                      <div className={styles.cart__order_item_left}>
                        <div>
                          <img className={styles.cart__order_item_image} src={item.images[0]} />
                          <p>{item.title}</p>
                        </div>
                        <img className={styles.removeMobile} src="images/icons/remove.svg" onClick={() => removeItem(item)} />
                      </div>
                      <div className={styles.cart__order_item_right}>
                        <div className={styles.cart__order_item_count}>
                          <img src="images/icons/minus.svg" onClick={() => subtractItem(item)} />
                          <span>{item.amount}</span>
                          <img src="images/icons/plus.svg" onClick={() => addItem(item)}/>
                        </div>
                        <div>
                          {item.discount &&
                          <div className={styles.cart__order_item_price}>
                            <span style={{textDecoration: "line-through"}}>{item.price} грн</span>
                            <span>{item.price - item.discount} грн</span>
                          </div>
                          }
                          {!item.discount &&
                          <div className={styles.cart__order_item_price}>
                            <span>{item.price} грн</span>
                          </div>
                          }
                        </div>
                        <img className={styles.remove} src="images/icons/remove.svg" onClick={() => removeItem(item)} />
                      </div>
                    </div>
                  ))}
                  <div className={styles.cart__payment}>
                    <div>
                      <span>Разом:</span>
                      <span>{total} ₴</span>
                    </div>
                    <div>
                      <span>Знижка:</span>
                      <span>{discount} ₴</span>
                    </div>
                    <div>
                      <span>Всього:</span>
                      <span>{total - discount} ₴</span>
                    </div>
                  </div>
                  <div className={styles.cart__form}>
                    <p>Залиште свої контакти і ми зв’яжемось з вами найближчим часом для підтвердження замовлення:</p>
                    <form autoComplete="off" method="POST" onSubmit={e => onSubmit(e)}>
                      <label htmlFor="name">Ім’я</label>
                      <input onChange={(e) => setName(e.target.value)} id="name" name="name" type="text" placeholder="Введіть ім’я" required/>
                      <label htmlFor="phone">Телефон</label>
                      <InputMask onChange={(e) => setPhone(e.target.value)} mask="+3\80 (99) 999 99 99" name="phone" placeholder="+380 (00) 000 00 00" required/>
                      <label htmlFor="email">Email</label>
                      <input onChange={(e) => setEmail(e.target.value)} id="email" type="email" name="email" placeholder="Введіть email"/>
                      <Button disabled={disabledButton} id="cart-submit" type="submit" text="Підтвердити замовлення" />
                    </form>
                  </div>
                </div>
              )}
              {!order || order.length === 0 && (
                <p className={styles.cart__empty}>Ваш кошик порожній.</p>
              )}
            </motion.div>
          </ClickAwayListener>
      </Modal>
  );
}

