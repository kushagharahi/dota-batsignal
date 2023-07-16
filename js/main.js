window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./service-worker.js');
  }
}

let deferredPrompt;

window.addEventListener('beforeinstallprompt', function (e) {

  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();

  // Stash the event so it can be triggered later.
  deferredPrompt = e;

  document.getElementById('divInstall').classList.toggle('hidden', false);
});

var buttonInstall = document.getElementById('butInstall');

buttonInstall.addEventListener('click', function (e) {
  // Show the install prompt
  deferredPrompt.prompt();
});