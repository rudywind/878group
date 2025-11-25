//KODE INI DIGUNAKAN UNTUK MENGUBAH BACKGROUND DEKSTOP DAN BACKGROUDNNAVBAR DEKSTOP UNTUK TEMA NATAL DAN TAHUN BARU
//SELAIN MENGUBAH BACKGROUND DAN NAVBAR, KODE INI JUGA MENAMBAHKAN OVERLAY SALJU, DAN KARAKTER SANTA ZEUS DENGAN ANIMASI DI SEBELAH KIRI DAN KANAN




document.head.insertAdjacentHTML("beforeend", `
<style>body{ background: url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9-SDflJo2fwhMa033nx5BzSmFzRld-O9TTpaJXO7mCYQ0DYyWrscnacCIUGL2z664_IcLA0JxrXhUPz9YNJkH4QFCJK8lQV2Ck0N9Agk-4Equp1-EvJ1fa_5WAXzwzuGvQ5xMnkgv-R7IfgPD_Lkxl05lSsVdfkeXhtnODGjJZ9_s_f6yUM59ZeslJlI/s1600/marwah4d-background-natal%20%281%29.jpg) !important; background-size: cover !important; background-repeat: no-repeat !important; background-attachment: fixed !important; background-position: center !important}
.navbar, .navbar-fixed-top{ background: url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgNrdfxmlo5th00OiOtOOL_vRmiKVUMCaGKH875bwOti2g-OWQwCnF-BdUoxNDg0cIT9UuWIxFfaP7zrX4pma4bY7Vy6ENY3QvzJTvMt2xpoGlSvSkglO6js_pHmDx49IlmdfI98KpYYfRd0ZkjDXm0OXIaoWL2jsxxXHHEXGraEidKbGtOZczw5cY8YPE/s1600/navbar-marwah-natal%20%282%29.png) !important; background-size: cover !important; background-repeat: no-repeat !important; background-attachment: fixed !important}
</style>`);

const scriptElement = document.createElement('script');
scriptElement.src = 'https://cdn.jsdelivr.net/gh/rudywind/878group@main/salju.js';
document.head.appendChild(scriptElement);

 

