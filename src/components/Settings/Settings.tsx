/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './Settings.module.css';

interface ISettingsProps {
  lang: string,
  isChangePassword: boolean,
  onChangeLanguage: (newLang: string) => void,
}

const Settings:React.FC<ISettingsProps> = ({ lang, isChangePassword, onChangeLanguage }) => (
  <div className={styles.container}>
    <div className={styles['title-language']}>Сменить язык</div>
    <div className={styles.dropdown}>
      <button type="submit" className={styles.dropbtn}>
        <div className={styles['button-content']}>{lang}</div>
      </button>
      <div className={styles['dropdown-content']}>
        <span onClick={() => onChangeLanguage('ru')}>ru</span>
        <span onClick={() => onChangeLanguage('en')}>en</span>
      </div>
    </div>
  </div>
);

export default Settings;
