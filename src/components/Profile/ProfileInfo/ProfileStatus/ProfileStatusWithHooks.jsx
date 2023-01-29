import React, { useEffect, useState } from 'react';

function ProfileStatusWithHooks({ status, updateStatus }) {
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
    updateStatus(newStatus);
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
            { status }
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
