import React from 'react';
import styles from '../styles/Accordion.module.scss'
import classes from '../styles/Footer.module.scss'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {sets} from "../data";


export default function SimpleAccordion({setIsDeliveryOpen, setIsReturnOpen, fixBody}) {

  return (
    <div className={styles.accordion}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Про нас</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.footer__right_menu}>
          <ul>
            <li><a href="#about">Хто ми</a></li>
            <li><a href="#offer">Що ми пропонуємо</a></li>
            <li><a href="#benefits">Чому варто придбати наш продукт</a></li>
            <li><a href="#customer">Кому підійде наш продукт</a></li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Каталог</Typography>
        </AccordionSummary>
        <AccordionDetails className={`${classes.footer__right_menu} ${classes.catalog}`}>
          <ul>
            {sets.map(set => (
              <li>
                <a href="#catalog">
                  {set.title}
                </a>
              </li>
            ))}
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Потрібна допомога?</Typography>
        </AccordionSummary>
        <AccordionDetails className={`${classes.footer__right_menu}`}>
          <ul>
            <li onClick={() => {setIsDeliveryOpen(true); fixBody()}}><a>Доставка і оплата</a></li>
            <li onClick={() => {setIsReturnOpen(true); fixBody()}}><a>Правила повернення</a></li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
