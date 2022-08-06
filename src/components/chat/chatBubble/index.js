import React from 'react'
import styles from './bubble.module.css'
import { useTheme } from "../../../context/ThemeContext";

const Bubble = ({type,msg,imgSrc}) => {

  const {theme} = useTheme();

  return (
    <div className={styles.bul}>
      {
        type == 'botMsg' &&
        <div className={`${styles.botMsg}`} style={{background:`${theme.botBg}`,color:`${theme.botColor}`}}>
          {msg}
        </div>
      }
      {
        type == 'botImg' &&
        <div className={`${styles.botImg}`}>
          {/*eslint-disable-next-line @next/next/no-img-element */}
          <img src={imgSrc} alt="botImg"/>
        </div>

      }
      {
        type == 'userMsg' &&
        <div className={`${styles.userMsg}`} style={{background:`${theme.userBg}`,color:`${theme.userColor}`}}>
          {msg}
        </div>

      }
    </div>
  )
}

export default Bubble