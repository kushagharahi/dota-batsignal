window.addEventListener('standaloneappopen', () => {
    if (Notification.permission !== "granted") {
        document.getElementById('enableNotifications').classList.toggle('hidden', false);
    }
})

var buttonEnableNotifications = document.getElementById('butNotifications');

buttonEnableNotifications.addEventListener('click', async () => {
    Notification.requestPermission().then((result) => {
        if (result === "granted") {
            document.getElementById('enableNotifications').classList.toggle('hidden', true);
            document.getElementById('g2g').classList.toggle('hidden', false);
        }
      });
})
