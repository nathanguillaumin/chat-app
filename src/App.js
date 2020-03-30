import React from 'react';
import Contact from './components/Contact.js';

function App() {
  return (
    <div>
      <Contact name="Kristin Alexander" avatar="https://randomuser.me/api/portraits/women/66.jpg" online={true} />
      <Contact name="Lonnie Penna" avatar="https://randomuser.me/api/portraits/men/44.jpg" online={false} />
      <Contact name="April Herrera" avatar="https://randomuser.me/api/portraits/women/48.jpg" online={false} />
    </div>
  );
}

export default App;
