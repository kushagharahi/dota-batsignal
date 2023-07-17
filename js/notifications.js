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

    // Register visitor's browser for push notifications
    Pushy.register({ appId: 'dota-batsignal' }).then(function (deviceToken) {
    // Print device token to console
    console.log('Pushy device token: ' + deviceToken);

    // Send the token to your backend server via an HTTP GET request
    //fetch('https://your.api.hostname/register/device?token=' + deviceToken);

    // Succeeded, optionally do something to alert the user
    }).catch(function (err) {
    // Notify user of failure
    alert('Registration failed: ' + err.message);
    });
}