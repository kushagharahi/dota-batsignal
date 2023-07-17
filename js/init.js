window.onload = () => {
    'use strict';
  
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./service-worker.js').then((registration) => {
        const beamsClient = new PusherPushNotifications.Client({
          instanceId: '857b0db6-6c58-4d3b-bd80-a643f2b32fad',
          serviceWorkerRegistration: registration,
        })
        beamsClient.start()
        .then(() => beamsClient.addDeviceInterest('hello'))
        .then(() => console.log('Successfully registered and subscribed!'))
        .catch(console.error);
      })
    }
}
