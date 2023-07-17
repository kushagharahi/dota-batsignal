window.onload = () => {
    'use strict';
  
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./service-worker.js');
    }
}
window.navigator.serviceWorker.ready.then(serviceWorkerRegistration => {
  const beamsClient = new PusherPushNotifications.Client({
    instanceId: '57b0db6-6c58-4d3b-bd80-a643f2b32fad',
    serviceWorkerRegistration: serviceWorkerRegistration,
  })
})