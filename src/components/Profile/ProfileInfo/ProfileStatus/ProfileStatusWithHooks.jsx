import React, { useEffect, useState } from 'react';
import styles from './ProfileStatus.module.css';
import StatusIcon from '../../../../assets/images/icons/StatusIcon.png';

function ProfileStatusWithHooks({ status, updateStatus, token }) {
  const [editMode, setEditMode] = useState(false);
  const [newStatus, setStatus] = useState(status);
  useEffect(() => {
    setStatus(status);
  }, [status]);
  const activateMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
    updateStatus(newStatus, token);
  };
  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };
  return (
    <div className={styles.container}>
      <div onClick={activateMode}>
        <img className={styles.StatusIcon} src={StatusIcon} alt="StatusIcon" />
      </div>
      { !editMode
        && (
          <div className={styles.status} onClick={activateMode}>
            { newStatus }
          </div>
        )}
      { editMode && (
      <div>
        <textarea
          className={styles.inputStatus}
          onChange={onStatusChange}
          autoFocus
          onBlur={deactivateEditMode}
          value={newStatus}
        />
      </div>
      )}
    </div>
  );
}
export default ProfileStatusWithHooks;
