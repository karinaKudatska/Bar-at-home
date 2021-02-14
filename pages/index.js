import styles from '../styles/Main.module.scss'
import Header from '../components/Header'
import Footer from "../components/Footer";
import Button from "../components/Button";
import Product from "../components/Product";
import Delivery from "../components/Delivery";
import Accordion from "../components/Accordion";
import Cart from "../components/Cart";
import {sets, reviews, videoGuides} from '../data.js'
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import InputMask from 'react-input-mask';
SwiperCore.use([Navigation]);
import React, {useEffect, useState} from 'react'
import Success from "../components/Success";
import Return from '../components/Return'
import MobileMenu from "../components/MobileMenu";
import PulseButton from "../components/PulseButton";

export default function Home() {
  const [activeVideo, setActiveVideo] = useState(videoGuides[0])
  const [selectedGoods, setSelectedGoods] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({})

  //Modal
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isDeliveryOpen, setIsDeliveryOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isReturnOpen, setIsReturnOpen] = useState(false);

  //Catalog
  const [itemsCount, setItemsCount] = useState(4);
  const [videosCount, setVideosCount] = useState(3);

  //Form
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [disabledButton, setDisabledButton] = useState(true);


  const addToCart = (item) => {
    if(selectedGoods.includes(item)) {
      selectedGoods[selectedGoods.indexOf(item)].amount++
    } else {
      item.amount = 1
      setSelectedGoods([...selectedGoods, item])
    }
    setIsCartOpen(true)
    localStorage.setItem('goods', JSON.stringify(selectedGoods))
  }
  const selectProduct = (item) => {
    setSelectedProduct(item)
    setIsProductOpen(true)
  }

  useEffect(() => {
    if (phone.replace(/-|_/g, "").length === 19 && name.length > 0) {
      setDisabledButton(false)
    } else {
      setDisabledButton(true)
    }
  }, [phone, name])

  function onSubmit(e) {
    e.preventDefault()
    let text = `@lasgrate @Silence_side%0A%0A<b>Форма зворотнього зв'язку</b>%0A`
    text += `%0A<b>Ім'я:</b> ${name}%0A<b>Телефон:</b> ${phone}`
    console.log(text)
    let url = `https://api.telegram.org/bot1626405477:AAHlMsUQr7-iLatbhXYBoJvpW5jV93zF1_E/sendMessage?chat_id=-493963602&text=${text}&parse_mode=HTML`
    fetch(url).then(r => console.log(r))
  }
  return (
    <div>
      <Header setIsCartOpen={setIsCartOpen} setIsMenuOpen={setIsMenuOpen}/>
      <main className={styles.main}>
        <section className={styles.top}>
          <h1>Універсальні набори для бару</h1>
          <p>Спробуй себе у ролі бартендера — влаштовуй власний бар та пий улюблені коктейлі вдома в 3 рази дешевше!</p>
          <a href="#catalog">
            <Button text="Придбати набір" arrow={true}/>
          </a>
        </section>
        <section id="about" className={styles.about}>
          <h2>Хто ми?</h2>
          <img className={styles.about__image} src="images/who-we-are.png" />
          <div className={styles.about__text}>
            <p>Привіт, я Богдан — винахідник ідеї наборів “Bar at home". Мій досвід у барній справі вже 5 років, саме тому я маю нагоду навчати бартендерів та створювати авторське меню кожного сезону.</p>
            <p>Моє захоплення барною індустрією перетворилося на справжнє покликання, накопичивши знання і досвід, я вирішив, що прийшов час ділитися з вами!</p>
            <p>Моя основна місія — просувати культуру споживання та міксології в маси, прищеплювати кожному любов до вишуканих коктейлів та навчати всіх охочих. Саме тому, я зібрав для вас <a href="#">набори “Bar at home"</a>, котрі стануть вашим незамінним помічником!</p>
          </div>
        </section>
        <section id="offer" className={styles.offer}>
          <h2>Що ми пропонуємо?</h2>
          <div className={styles.offer__text}>
            <p>Серед тисяч товарів я і моя команда відібрали для вас наякісніший інвентрарь для бару та зібрали це все в<br /><a href="#catalog">4 різних набори</a>. Кожен набір включає в себе інвентарь за допомогою якого ти можеш приготувати будь-який класичний або авторський коктейль в домашніх умовах. Ми пропонуємо 4 різних кольори на вибір, тож не переймайся — ти точно знайдеш те, що ідеально підійде до твого інтер’єру.</p>
            <a href="#catalog">
              <Button  text="Обрати свій набір" arrow={true} />
            </a>
          </div>
          <img className={styles.offer__image} src="images/we-offer.png" />
        </section>
        <section id="benefits" className={styles.benefits}>
          <h2>Чому варто придбати саме наш продукт?</h2>
          <ul className={styles.benefits__list}>
            <li>
              <img src="images/icons/present.svg" />
              <div>
                <h3>Ми пропонуємо універсальні набори</h3>
                <p>З нашим набором ви приготуєте будь-який класичний або авторський коктейль. Жодних додаткових витрат.</p>
              </div>
            </li>
            <li>
              <img src="images/icons/medal.svg" />
              <div>
                <h3>Ми гарантуємо якість нашого товару</h3>
                <p>Ми відібрали для вас найкращі товари, які рекомендують професійні бартендери.</p>
              </div>
            </li>
            <li>
              <img src="images/icons/price.svg" />
              <div>
                <h3>Ми надаємо найкращі ціни</h3>
                <p>Наша міссія — просувати культуру споживання, тож ми зробили для тебе все, щоб ти отримав кращу ціну на ринку.</p>
              </div>
            </li>
            <li>
              <img src="images/icons/time.svg" />
              <div>
                <h3>Ми швидко доставляємо</h3>
                <p>Відправляємо набори в день оформлення замовлення. Доставляємо найшвидшою кур’єрською службою — Нова Пошта.</p>
              </div>
            </li>
          </ul>
        </section>
        <section id="customer" className={styles.customer}>
          <h2>Набори чудово підійдуть якщо ти:</h2>
          <ul>
            <li>
              <img src="images/icons/check.svg" />
              Завжди мріяв спробувати себе в ролі бартендера
            </li>
            <li>
              <img src="images/icons/check.svg" />
              Вже досвідчений бармен і хочеш робити коктейлі вдома
            </li>
            <li>
              <img src="images/icons/check.svg" />
              Новачок і хочеш навчитися міксології вдома
            </li>
            <li>
              <img src="images/icons/check.svg" />
              Захоплюєшся барною культурою
            </li>
            <li>
              <img src="images/icons/check.svg" />
              Хочеш зекономити гроші та створити домашній бар
            </li>
            <li>
              <img src="images/icons/check.svg" />
              Мрієш створити власний коктейль
            </li>
            <li>
              <img src="images/icons/check.svg" />
              Скоро локдаун, а ти не хочеш відмовлятися від улюблених коктейлів
            </li>
            <li>
              <img src="images/icons/check.svg" />
              Шукаєш крутий подарунок для людини, в “якої все і так є”
            </li>
          </ul>
        </section>
        {/*<img src="https://i.ytimg.com/vi/ogU8amrmdWI/maxresdefault.jpg" />*/}

        <section id="catalog" className={`${styles.catalog} ${styles.catalog__desktop}`}>
          <h2>Каталог</h2>
          <div className={styles.catalog__list}>
            {sets.map(set => (
              <div key={set.title} className={styles.catalog__item}>
                <img className={styles.catalog__item_image} src={set.images[0]} />
                <div className={styles.catalog__item_info}>
                  <div className={styles.catalog__item_top}>
                    <h3>{set.title}</h3>
                    <p>{set.subtitle}</p>
                    <div className={styles.catalog__item_reviews}>
                      <div className={styles.catalog__item_raiting}>
                        <img src="images/icons/rate.svg" />
                        <div style={{width: `${100 - set.rating}%`}}></div>
                      </div>
                      <div className={styles.catalog__item_comments}>
                        <img src="images/icons/comment.svg" />
                        {set.reviews.length}
                      </div>
                    </div>
                  </div>
                  <div className={styles.catalog__item_bottom}>
                    {set.discount &&
                    <div className={styles.catalog__item_price}>
                      <div className={styles.catalog__item_discount}>
                        <span style={{textDecoration: "line-through"}}>{set.price} грн</span>
                        <span>-{set.discount}</span>
                      </div>
                      <span>{set.price - set.discount} грн</span>
                    </div>
                    }
                    {!set.discount &&
                    <span className={styles.catalog__item_price}>{set.price} грн</span>
                    }
                    <Button onClick={() => selectProduct(set)} text="Купити" />
                  </div>
                </div>
                <div className={styles.button__big}>
                  <Button onClick={() => selectProduct(set)} text="Купити" />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="catalog" className={styles.catalog__mobile}>
          <h2>Каталог</h2>
          <div className={styles.catalog__list}>
            {sets.slice(0, itemsCount).map(set => (
              <div id={set.id} key={set.title} className={styles.catalog__item}>
                <img className={styles.catalog__item_image} src={set.images[0]} />
                <div className={styles.catalog__item_info}>
                  <div className={styles.catalog__item_top}>
                    <h3>{set.title}</h3>
                    <p>{set.subtitle}</p>
                    <div className={styles.catalog__item_reviews}>
                      <div className={styles.catalog__item_raiting}>
                        <img src="images/icons/rate.svg" />
                        <div style={{width: `${100 - set.rating}%`}}></div>
                      </div>
                      <div className={styles.catalog__item_comments}>
                        <img src="images/icons/comment.svg" />
                        {set.reviews.length}
                      </div>
                    </div>
                  </div>
                  <div className={styles.catalog__item_bottom}>
                    {set.discount &&
                    <div className={styles.catalog__item_price}>
                      <div className={styles.catalog__item_discount}>
                        <span style={{textDecoration: "line-through"}}>{set.price} грн</span>
                        <span>-{set.discount}</span>
                      </div>
                      <span>{set.price - set.discount} грн</span>
                    </div>
                    }
                    {!set.discount &&
                    <span className={styles.catalog__item_price}>{set.price} грн</span>
                    }
                    <Button onClick={() => selectProduct(set)} text="Купити" />
                  </div>
                </div>
                <div className={styles.button__big}>
                  <Button onClick={() => selectProduct(set)} text="Купити" />
                </div>
              </div>
            ))}
          </div>
          {itemsCount === 4 &&
          <Button text="Показати більше" onClick={() => setTimeout(() => setItemsCount(sets.length), 1000)}/>
          }
          {itemsCount > 4 &&
          <Button text="Приховати" onClick={() => setTimeout(() => {setItemsCount(4)}, 1000)}/>
          }
        </section>

        <section id="reviews" className={styles.reviews}>
          <h2>Відгуки</h2>
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
            }}
            loop={true}
            centeredSlides={true}
            navigation
            grabCursor={true}
          >
            {reviews.map(review => (
              <SwiperSlide key={review}>
                <img src={review} />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
        <section id="video-guide" className={styles.videoGuide}>
          <h2>Відео-гайди</h2>
          <div className={styles.videoGuide__content}>
            <iframe width="800" height="450" src={activeVideo.video} frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen/>
            {videoGuides.length > 1 &&
            <Swiper
              slidesPerView={4}
              loop={true}
              spaceBetween={15}
              grabCursor={true}
              direction={'vertical'}
            >
              {videoGuides.map((item, i) => (
                <SwiperSlide
                  key={i}
                  className={styles.videoGuide__image}
                  onClick={() => setActiveVideo(item)}
                >
                  <img
                    src={`https://i.ytimg.com/vi/${item.img}/maxresdefault.jpg`}
                    width="160"
                    height="90" />
                </SwiperSlide>
              ))}
            </Swiper>
            }
          </div>
          <div className={styles.videoGuide__content_mobile}>
              {videoGuides.slice(0, videosCount).map((item, i) => (
                <div  style={{marginBottom: 30}}>
                <iframe key={i} width="100%" height="300" src={item.video} frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen/>
                        <h3>{item.title}</h3>
                </div>
              ))}
            {videosCount === 3 &&
              <p onClick={() => setVideosCount(videoGuides.length)}>Показати всі відео</p>
            }
            {videosCount > 3 &&
            <p onClick={() => setVideosCount(3)}>Приховати відео</p>
            }
          </div>
        </section>
        <section id="contact-us" className={styles.contact}>
          <h2>Ще не визначився?</h2>
          <p>Залиш свої контакти і ми підберемо найкращий набір виходячи з твоіх індвидуальних потреб!</p>
          <form autoComplete="off" method="POST" onSubmit={e => onSubmit(e)}>
            <label htmlFor="name">Ім’я</label>
            <input onChange={(e) => setName(e.target.value)} id="name" type="text" placeholder="Введіть ім’я" required/>
            <label htmlFor="phone">Телефон</label>
            <InputMask onChange={(e) => setPhone(e.target.value)} mask="+3\80 (99) 999 99 99" placeholder="+380 (00) 000 00 00" required/>
            <Button disabled={disabledButton} type="submit" text="Відправити" />
          </form>
        </section>
      </main>
      <Footer setIsDeliveryOpen={setIsDeliveryOpen} setIsReturnOpen={setIsReturnOpen}/>
      <Product product={sets.indexOf(selectedProduct)} setIsProductOpen={setIsProductOpen} isProductOpen={isProductOpen} setSelectedProduct={setSelectedProduct} addToCart={addToCart}/>
      <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} items={selectedGoods} setIsSuccessOpen={setIsSuccessOpen} />
      <Delivery isDeliveryOpen={isDeliveryOpen} setIsDeliveryOpen={setIsDeliveryOpen} />
      <Success isSuccessOpen={isSuccessOpen} setIsSuccessOpen={setIsSuccessOpen} />
      <Return isReturnOpen={isReturnOpen} setIsReturnOpen={setIsReturnOpen} />
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} setIsCartOpen={setIsCartOpen}/>
      <PulseButton />
    </div>
  )
}