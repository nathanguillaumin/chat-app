import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnline: props.online,
    };
  }

  render() {
    return (
      <div className='Contact'>
        <img className='avatar' src={this.props.avatar}
        />
        <div>
          <h4 className='name'>{this.props.name}
          </h4>
          <div className='status' onClick={event => {
            const newIsOnline = !this.state.isOnline;
            this.setState({newIsOnline});
          }}>
            <img className={this.state.newIsOnline ? 'status-online' : 'status-offline'}
            />
            <p className='status-text'>{this.state.newIsOnline ? 'online' : 'offline'}</p>
          </div>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired,
};

export default Contact;