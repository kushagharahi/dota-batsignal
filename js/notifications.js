window.addEventListener('DOMContentLoaded', () => {
    if(window.matchMedia('(display-mode: standalone)').matches){
    if (Notification.permission !== "granted") {
        document.getElementById('enableNotifications').classList.toggle('hidden', false);
    } else if (Notification.permission === "granted") {
        enableNotifications();
    }}
})

var buttonEnableNotifications = document.getElementById('butNotifications');

buttonEnableNotifications.addEventListener('click', async () => {
    Notification.requestPermission().then((result) => {
        if (result === "granted") {
            document.getElementById('enableNotifications').classList.toggle('hidden', true);
            enableNotifications();
        }
      });
})
function enableNotifications() {
    document.getElementById('g2g').classList.toggle('hidden', false);
    window.OneSignal = window.OneSignal || [];
    OneSignal.push(function() {
      OneSignal.init({
        appId: "aebe4e74-b5d0-4a57-9b33-eb6e13b6fab0",
        safari_web_id: "web.onesignal.auto.5136aa20-d33c-4de6-8d7f-c3f8c4b264dc",
        path: "/dota-batsignal/",
        notifyButton: {
          enable: true,
        },
      });
    });
}