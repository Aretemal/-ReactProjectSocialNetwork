/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './Settings.module.css';

interface ISettingsProps {
  t: (a: string) => any,
  lang: string,
  isChangePassword: boolean,
  onChangeLanguage: (newLang: string) => void,
}

const Settings:React.FC<ISettingsProps> = ({
  lang, t, isChangePassword, onChangeLanguage,
}) => (
  <div className={styles.container}>
    <div>{t('Settings')}</div>
    <hr className={styles['hr-line']} />
    <div className={styles['block-language']}>
      <div className={styles['title-language']}>{t('Change the language')}</div>
      <div className={styles.dropdown}>
        <button type="submit" className={styles.dropbtn}>
          <div className={styles['button-content']}>{t(lang)}</div>
        </button>
        <div className={styles['dropdown-content']}>
          <span onClick={() => onChangeLanguage('ru')}>{t('ru')}</span>
          <span onClick={() => onChangeLanguage('en')}>{t('en')}</span>
        </div>
      </div>
    </div>
  </div>
);

export default Settings;
