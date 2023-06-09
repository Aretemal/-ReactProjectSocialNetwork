import React from 'react';
import styles from './Header.module.css';
import LeftArrow from '../../../../assets/images/icons/LeftArrow.png';
import Points from '../../../../assets/images/icons/Points.png';

interface IProps {
  usersCount: number,
  onBack: () => void,
}
const Header: React.FC<IProps> = ({ usersCount, onBack }) => (
  <div className={styles.container}>
    <div onClick={onBack} className={styles['block-exit']}>
      <img className={styles['block-exit_icon']} src={LeftArrow} alt="Exit arrow" />
      <span className={styles['block-exit_title']}>Exit</span>
    </div>
    <div className={styles.title}>Dialog name</div>
    <div className={styles['block-settings']}>
      <img className={styles['block-settings_icon']} src={Points} alt="Settings" />
      <div className={styles['block-settings_content']}>
        <div className={styles['block-settings_item']}>
          {`${usersCount} users online`}
        </div>
      </div>
    </div>
  </div>
);

export default Header;
