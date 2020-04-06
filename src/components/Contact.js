import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: props.online
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
            const newStatus = !this.state.online;
            this.setState({online : newStatus});
          }}>
            {this.state.online ? <div><div className='status-online'/><p className='status-text'>online</p></div> : <div><div className='status-offline' /><p className='status-text'>offline</p></div>}
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