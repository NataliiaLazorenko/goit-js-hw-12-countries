import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { alert, defaultModules } from '@pnotify/core/dist/PNotify.js';

function showNotification(message, type) {
  const myNotification = alert({
    type: `${type}`,
    text: `${message}`,
    mode: 'light',
    delay: 2000,
    sticker: false,
    maxTextHeight: null,
    addClass: 'notification',
  });

  myNotification.on('click', () => {
    myNotification.close();
  });
}

export default showNotification;
