import React, { useEffect, useState } from 'react';

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
    <div>
      { !editMode
        && (
        <div>
          <span onClick={activateMode}>
            { newStatus }
          </span>
        </div>
        )}
      { editMode && (
      <div>
        <input onChange={onStatusChange} autoFocus onBlur={deactivateEditMode} value={newStatus} />
      </div>
      )}
    </div>
  );
}
export default ProfileStatusWithHooks;
