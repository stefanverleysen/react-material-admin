import React, { useState } from 'react';

const SendNotifications = () => {
  const [message, setMessage] = useState('');

  const sendNotification = () => {
    // Here you would send the notification via your backend
    console.log(`Notification sent: ${message}`);
    setMessage('');
  };

  return (
    <div>
      <h2>Send Notifications</h2>
      <textarea 
        value={message} 
        onChange={(e) => setMessage(e.target.value)} 
        placeholder="Write your notification here" 
      />
      <button onClick={sendNotification}>Send Notification</button>
    </div>
  );
};

export default SendNotifications;
