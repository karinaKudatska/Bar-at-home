import styles from '../styles/Tabs.module.scss'
import {useEffect, useState} from 'react'

export default function Tabs({tabs}) {
  const [activeTab, setActiveTab] = useState({})
  useEffect(() => {
    setActiveTab(tabs[0])
  }, tabs)

  return (
    <div className={styles.tabs}>
      <div className={styles.tabs__top}>
        {tabs.map(tab => (
          <div
            className={activeTab === tab ? styles.tabs__active : ''}
            key={tab.name}
            onClick={() => setActiveTab(tab)}
          >
            {tab.name}
          </div>
        ))}
      </div>
      <div className={styles.tabs__main}>
        {activeTab === tabs[0] &&
        <div className={styles.tabs__description}>
          {tabs[0].content}
        </div>
        }
        {activeTab === tabs[1] &&
        <div className={styles.tabs__reviews}>
          {tabs[1].content.map(tab => (
            <div key={tab} className={styles.tabs__review}>
              <span>{tab.author}</span>
              <div>{Array(tab.stars).fill(<img alt="" src="images/icons/star.svg" /> )}</div>
              <p>{tab.text}</p>
            </div>
          ))}
        </div>
        }
      </div>
    </div>
  )
}
