import React, {useEffect, useState} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../styles/Product.module.scss'

export default function Gallery({product}) {
  const [activeImage, setActiveImage] = useState(null)
  useEffect(() => {
    setActiveImage(0)
  }, [product])
  return (
    <div className={styles.product__images} id="gallery">
      <Swiper
        slidesPerView={4}
        loop={true}
        grabCursor={true}
        direction={'horizontal'}
        spaceBetween={0}
        breakpoints={{
          768: {
            spaceBetween: 50
          },
          1024: {
            direction: 'vertical',
          },
        }}
      >
        {product.images.map(img => (
          <SwiperSlide>
            <img className={product.images[activeImage] === img ? styles.product__images_current : ''} src={img} onClick={() => setActiveImage(product.images.indexOf(img))}/>
          </SwiperSlide>
        ))}
      </Swiper>
      <img className={styles.product__images_active} src={product.images[activeImage]} />
    </div>
  )
}