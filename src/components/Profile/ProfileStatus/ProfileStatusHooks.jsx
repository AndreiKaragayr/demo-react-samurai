import React, {useEffect, useState} from 'react'
import classes from './ProfileStatus.module.css'

const ProfileStatusHooks = (props) => {

  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status)
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  return (
    <div>
      { !editMode &&
        <div className={classes.statusActive}>
          <span onDoubleClick={activateEditMode}>{props.status || 'Not status'}</span>
        </div>
      }
      { editMode &&
      <div className={classes.statusEdit}>
        <input
          onBlur={deactivateEditMode}
          onChange={onStatusChange}
          type="text"
          value={status}
          autoFocus={true}
        />
      </div>
      }
    </div>
  )
}

export default ProfileStatusHooks