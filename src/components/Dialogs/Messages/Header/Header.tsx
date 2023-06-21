import React from 'react';
import styles from './Header.module.css';
import LeftArrow from '../../../../assets/images/icons/LeftArrow.png';
import Points from '../../../../assets/images/icons/Points.png';

interface IProps {
  usersCount: number,
  onBack: () => void,
  t: (a: string) => any, // eslint-disable-line no-unused-vars
}
const Header: React.FC<IProps> = ({ usersCount, onBack, t }) => {
  let online;
  if (usersCount === 1) online = `${usersCount} ${t('user online')}`;
  else if (usersCount > 1 && usersCount < 5) online = `${usersCount} ${t('users` online')}`;
  else if (usersCount >= 5) online = `${usersCount} ${t('users online')}`;
  return (
    <div className={styles.container}>
      <div onClick={onBack} className={styles['block-exit']}>
        <img className={styles['block-exit_icon']} src={LeftArrow} alt="Exit arrow" />
        <span className={styles['block-exit_title']}>{t('Exit')}</span>
      </div>
      <div className={styles.title}>Dialog name</div>
      <div className={styles['block-settings']}>
        <img className={styles['block-settings_icon']} src={Points} alt="Settings" />
        <div className={styles['block-settings_content']}>
          <div className={styles['block-settings_item']}>
            {online}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
