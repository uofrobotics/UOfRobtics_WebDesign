import React, { useState } from 'react';
import './Components_css/RegistrationModal.css';

function RegistrationModal({ show, onClose, isHomePage }) {
  const [email, setEmail] = useState('');

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    // Webhook for sending email to Discord channel
    //const webhookURL = 'https://discord.com/api/webhooks/1301071779040595978/ogZMLeYOe_maqxqhm3TY6Iy561v0Vo0Dcoih-vMNb-iYtRhIOy-M3ZVY6zXyD5CnmRi5';

    try {
      const message = {
        content: `New newsletter registration:\nEmail: ${email}`,
      };

      await fetch(webhookURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
      });

      alert('Thank you for signing up for the newsletter!');
      onClose();
    } catch (error) {
      console.error('Error sending message to Discord:', error);
      alert('Failed to register. Please try again.');
    }
  };

  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className={isHomePage ? "modal-content-large" : "modal-content"}>
        <h2>Sign Up for Newsletter</h2>
        <form onSubmit={formSubmitHandler}>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit">Subscribe</button>
        </form>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default RegistrationModal;
