import React from 'react'
import classes from './ProfileStatus.module.css'

class ProfileStatus extends React.Component {

  state={
    editMode: false,
    status: this.props.status
  };

  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  };

  deactivateEditMode = () => {
    this.setState({
      editMode: false
    })
    this.props.updateStatus(this.state.status)
  };

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    })
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if( prevProps.status !== prevState.status ) {
      this.setState({
        status: this.props.status
      })
    }
  }

  render () {
    return (
      <div>
        {
          !this.state.editMode &&
            <div className={classes.statusActive}>
              <span onDoubleClick={this.activateEditMode}>{this.props.status || 'Not status'}</span>
            </div>
        }
        {
          this.state.editMode &&
          <div className={classes.statusEdit}>
            <input
              onBlur={this.deactivateEditMode}
              onChange={this.onStatusChange}
              type="text"
              value={this.state.status}
              autoFocus={true}
            />
          </div>
        }
      </div>
    )
  }
}

export default ProfileStatus