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
}