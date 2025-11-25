document.addEventListener("DOMContentLoaded", function () {
  const rdyyThemeDirgahayuMobile = `
    <style>
      .main, .main-content {
          background: url(https://i.postimg.cc/prt6wgVc/mobile-bg.png) !important;
          background-size: 100% !important;
      }
      body {
          background: url(https://i.postimg.cc/MH8FChZP/dekstop-bg.png) !important;
          background-attachment: fixed !important;
          background-size: 100% !important;
      }
    </style>`;
  
  document.body.insertAdjacentHTML('afterbegin', rdyyThemeDirgahayuMobile);
});
const scriptElement = document.createElement('script');
scriptElement.src = 'https://cdn.jsdelivr.net/gh/rudywind/878group@main/salju.js';
document.head.appendChild(scriptElement);
