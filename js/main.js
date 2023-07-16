window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./service-worker.js');
  }
}

let deferredPrompt;

window.addEventListener('beforeinstallprompt', function (e) {

  document.getElementById('installContainer').classList.toggle('hidden', false);
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();

  // Stash the event so it can be triggered later.
  deferredPrompt = e;
});

var buttonInstall = document.getElementById('butInstall');

buttonInstall.addEventListener('click', function (e) {
  // Show the install prompt
  deferredPrompt.prompt();
});

let isIOS = /iPad|iPhone|iPod/.test(navigator.platform)
|| (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)

if(isIOS) {
  document.getElementById('iOsInstallContainer').classList.toggle('hidden', false);
}