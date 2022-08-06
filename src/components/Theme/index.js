import React from 'react'
import styles from './theme.module.css'
import { useTheme } from '../../context/ThemeContext'
import { useState } from 'react'
import  Bubble  from '../chat/chatBubble'

const ThemeMenu = () => {
  const {theme, changeTheme, saveTheme, reset} = useTheme();
  
  const [isOpen, setIsOpen] = useState(false);

  const [themeBefore, setThemeBefore] = useState({});

  const HandelOpenTheme = () => {
    setThemeBefore(theme);
    setIsOpen(!isOpen);
  }


  const cancelChange = () => {
    changeTheme(themeBefore);
    setIsOpen(!isOpen);
  }

  const save = () => {
    saveTheme();
    setIsOpen(!isOpen);
  }

  const ResetTheme = () => {
    window.confirm('Are you sure you want to reset the theme?') && reset(); setIsOpen(!isOpen);
  }

  return (
    <div className={styles.main}>
      <button onClick={HandelOpenTheme} className={styles.themeBtn}>Manage Theme</button>

      {isOpen &&
        <div className={styles.themeMenu}>
        <span className={styles.themeMenuTitle}>Theme Menu</span>

        <div className={styles.Background} style={{background: `linear-gradient(239.26deg, ${theme.background1} 63.17%, ${theme.background2} 94.92%)`}}>
          <Bubble type="botMsg" msg="This is a Bot" />
          <Bubble type="userMsg" msg="This will be you" />
        </div>
        
        <div className={styles.themeItem}>
          <span>Background gradient 1 </span>
          <input
            type="color"
            className={styles.colorPicker}
            value={theme.background1}
            onChange={(e) => {
              changeTheme({
                ...theme,background1:e.target.value
              });}}
              />
        </div>

        <div className={styles.themeItem}>
          <span>Background gradient 2 </span>
          <input
            type="color"
            className={styles.colorPicker}
            value={theme.background2}
            onChange={(e) => {
              changeTheme({
                ...theme,background2:e.target.value
              });}}
            />
        </div>
        
        <div className={styles.themeItem}>
          <span>Bot Bubble Background </span>
          <input
            type="color"
            className={styles.colorPicker}
            value={theme.botBg}
            onChange={(e) => {
              changeTheme({
                ...theme,botBg:e.target.value
              });}}
            />
        </div>

        <div className={styles.themeItem}>
          <span>Bot Text Color </span>
          <input
            type="color"
            className={styles.colorPicker}
            value={theme.botColor}
            onChange={(e) => {
              changeTheme({
                ...theme,botColor:e.target.value
              });}}
            />
        </div>

        <div className={styles.themeItem}>
          <span>User Bubble Background </span>
          <input
            type="color"
            className={styles.colorPicker}
            value={theme.userBg}
            onChange={(e) => {
              changeTheme({
                ...theme,userBg:e.target.value
              });}}
            />
        </div>

        <div className={styles.themeItem}>
          <span>User Text Color </span>
          <input
            type="color"
            className={styles.colorPicker}
            value={theme.userColor}
            onChange={(e) => {
              changeTheme({
                ...theme,userColor:e.target.value
              });}}
            />
        </div>

        <div className={styles.themeItem}>
          <button onClick={save}>Save Theme</button>
          <button onClick={cancelChange}>Cancel Changes</button>
        </div>

        <div className={styles.themeItem}>
          <span>Reset to Default</span>
          <button onClick={ResetTheme}>Reset Theme</button>
        </div>


      </div>
      }

    </div>
  );
}

export default ThemeMenu