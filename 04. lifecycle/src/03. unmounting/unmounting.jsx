import React, { useEffect } from 'react';

export function UnMountingComponent() {
  useEffect(() => {
    showNotification('Hello user!');

    return () => {
      hideNotification('Bye user!');
    };
  }, []);

  const showNotification = (message) => {
    console.log('Greetings: ', message);
  };

  const hideNotification = (message) => {
    console.log('See you later!: ', message);
  };

  return (
    <div>
      <p>Notification component</p>
    </div>
  );
}