importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

// Sila masukkan firebaseConfig yang SAMA seperti di index.html
firebase.initializeApp({
            apiKey: "AIzaSyBuJrhF_vZp0XrTuIyqrwhA97ZRLIyEyws",
            authDomain: "push-notification-e1c27.firebaseapp.com",
            projectId: "push-notification-e1c27",
            storageBucket: "push-notification-e1c27.firebasestorage.app",
            messagingSenderId: "300221580577",
            appId: "1:300221580577:web:8d569cdb0c6002b9cfaa60"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://i.postimg.cc/nL1yRcWv/energy-services.png' // Logo Voltake anda
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
