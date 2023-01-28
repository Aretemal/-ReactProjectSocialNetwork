import React from 'react';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status, // eslint-disable-line react/destructuring-assignment
  };

  componentDidUpdate(prevProps) {
    const { status } = this.props;
    if (prevProps.status !== status) {
      this.setState({ status });
    }
  }

  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };

  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    const { updateStatus } = this.props;
    const { status } = this.state;
    updateStatus(status);
  };

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
    const { updateStatus } = this.props;
    updateStatus(e.currentTarget.value);
  };

  render() {
    const { status } = this.props;
    const { editMode } = this.state;
    return (
      <div>
        { !editMode
        && (
        <div>
          <span onClick={this.activateEditMode}>
            { status }
          </span>
        </div>
        )}
        { editMode && (
          <div>
            <input onChange={this.onStatusChange} autoFocus onBlur={this.deactivateEditMode} value={status} />
          </div>
        )}
      </div>
    );
  }
}
export default ProfileStatus;
