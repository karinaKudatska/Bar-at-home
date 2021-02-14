import React, {useEffect, useState} from 'react';
import Modal from '@material-ui/core/Modal';
import { motion } from "framer-motion"
import styles from '../styles/Product.module.scss'
import Button from "./Button";
import {sets, videoGuides} from '../data.js'
import { Swiper, SwiperSlide } from 'swiper/react';
import Tabs from '../components/Tabs'
import Gallery from "../components/Gallery";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

export default function Product({isProductOpen, setIsProductOpen, product, addToCart}) {
  const handleClickAway = () => {
    setIsProductOpen(false);
  };
  return (
    <Modal open={isProductOpen}>
      <ClickAwayListener onClickAway={handleClickAway}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className={styles.product__wrapper}
        >
          <div className={styles.product__close}>
            <img src="images/icons/close.svg" onClick={() => setIsProductOpen(false)} />
          </div>
          <Swiper
            className="product"
            slidesPerView={1}
            loop={true}
            centeredSlides={true}
            navigation
            grabCursor={true}
            initialSlide={product}
          >
            {sets.map(product => (
              <SwiperSlide key={product.title}>
                <motion.div className={styles.product}>
                  <div className={styles.product__content}>
                    <Gallery product={product} />
                    <div className={styles.product__main}>
                      <h2>{product.title}</h2>
                      <p className={styles.product__subtitle}>{product.subtitle}</p>
                      <div className={styles.product__raiting}>
                        <img src="images/icons/rate.svg" />
                        <div style={{width: `${100 - product.rating}%`}} />
                      </div>
                      <div className={styles.product__buy}>
                        {product.discount &&
                        <div className={styles.product__price}>
                          <div className={styles.product__discount}>
                            <span style={{textDecoration: "line-through"}}>{product.price} грн</span>
                            <span>-{product.discount}</span>
                          </div>
                          <span>{product.price - product.discount} грн</span>
                        </div>
                        }
                        {!product.discount &&
                          <span className={styles.product__item_price}>{product.price} грн</span>
                        }
                        <Button onClick={() => addToCart(product)} text="Купити" />
                      </div>
                      <div className={styles.product__components}>
                        <p>Склад набору</p>
                        <ul>
                          {product.components.map(item => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div className={styles.product__delivery}>
                        <p>Доставка і оплата:</p>
                        <p>Після оформлення заказу ми зв’яжемось та надамо можливість оплатити покупку готівкою, картою чи безготівковим розрахунком.</p>
                        <p>Доставляємо Новою Поштою в будь-яке відділення.</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.product__bottom} id="product">
                    <Tabs tabs={[
                      {
                        name: "Опис",
                        content: product.description
                      },
                      {
                        name: `Відгуки ${product.reviews.length}`,
                        content: product.reviews
                      }]} />
                      <div className={styles.product__video}>
                        <Swiper
                          slidesPerView={3}
                          loop={true}
                          spaceBetween={15}
                          grabCursor={true}
                          direction={'vertical'}
                        >
                          {videoGuides.map((item, i) => (
                            <SwiperSlide
                              key={i}
                              className={styles.product__video_image}
                              onClick={() => setActiveVideo(item)}
                            >
                              <img
                                src={`https://i.ytimg.com/vi/${item.img}/maxresdefault.jpg`}
                                width="160"
                                height="90" />
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={styles.product__decor} />
        </motion.div>
      </ClickAwayListener>
    </Modal>
  );
}