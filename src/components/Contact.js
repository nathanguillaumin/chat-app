import React from 'react';
import './Contact.css';

function Contact () {
  return (
    <div className='Contact'>
      <img className='avatar' src='https://randomuser.me/api/portraits/women/66.jpg'
      />
      <div>
        <h4 className='name'>Kristin Alexander</h4>
        <div className='status'>
          <img className='status-online'
          />
          <p className='status-text'>online</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;