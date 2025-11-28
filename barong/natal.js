
// === Tambah background & navbar style ===
document.head.insertAdjacentHTML("beforeend", `
<style>
body{ 
  background: url("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhXDsw_WWF1PGrQ9h1c1Em-GlRAu4Vod7kv5fVtOMoaOH-GgbB0R1Ckta3vVhNj8_jK-kEia1T_flRZaUj-o4MEOhGPTFYFiWzHmVdUX7kRtqyRMmPCHJtGClOGYMZlToftQXF0dqK4mqoEiuvSSTSJpSBEWd7tncNoYITGNZnkmsHRIb6Q_31gaBPpVQ/s1600/barong-bg-natal-tahun-baru.jpg") !important; 
  background-size: cover !important; 
  background-repeat: no-repeat !important; 
  background-attachment: fixed !important; 
  background-position: center !important;
}
.navbar, .navbar-fixed-top{ 
  background: url("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhACPmUqqQayaPu-MA0zG_iNivC5dIZZtIWBrIj2riDw9SYStr4YeLvXDUXlnvwky25jCEmUzGpOrZbu7YntxHSz3v-fE0btw8ncL7HNnziAT8C5A2gACvLWS8PLoShxB6MVt8uY2kx9y9qkx0VnpW0LS48KvP-aId7ofskEcBTyXqHN9uyr9fxVR50xw/s1600/barong-navbar-natal.png") !important; 
  background-size: cover !important; 
  background-repeat: no-repeat !important; 
  background-attachment: fixed !important;
}
.smartb2 .header-logo2 {
    width: 161px !important;
    height: 55px !important;
    margin: 0 auto !important;
    float: none !important;
    margin-top: 9px !important;
    display: block;
    padding-bottom: 9px;
}
.main, .main-content {
    background: url("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjKLUWHJnlxtL6aphixTBRZddeCB6bqLSNmEZ_qWf9x0rVeJULLgctcSDhbx2Xp6FABol-GyP6Z-iz8RCbTu_C0XbRhD6dcyc-s8DKBBj7tBCQp7NtZX2pxOmw21RG9OPLeuzdSOyCvu6fL1mMXz8slaJZXKZ9iWWscZh3CVcUP2hPJR8lvNz12wqNyww/s1600/mobile-background.jpg") !important;
    background-size: 100% !important;
}
#content .page-header a.smartb2 {
    background: #610000 url("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjzAoqYltIkzKikUwDCexh3rAHIzsEWFCcr8x1gS02kCgYMZ1NoMXTu_10bYIyWy4Aek93yz58zhZ3P0gIDwwAOW4NpJkSGSl4-ZkNN0A29lBbLMsFOvKmbWd9sikzZbuUQVUG6r6URxgzXAOQtwUokZWrwd0nZsZk2Bny_v9If0ruRrLr8Uazny4xXjQ/s16000/navbra-mobile-barong.png") !important;
    background-position: center !important;
    background-size: cover !important;
    box-shadow: 0 5px 10px #0000007d;
}
</style>
`);

 
// === Tambah efek awan, gif, dll ===
document.body.insertAdjacentHTML("beforeend", `
<style>
img.ngambang{ width: 400px; position: absolute; text-align: center; z-index: -1; right: 0; transform: scaleX(-1); top: 250px}
img.ngambang1{ width: 400px; position: absolute; text-align: center; z-index: -1; left: 0; top: 250px}
.layang1{ position: absolute; top: 20%; left: 0%; z-index: -1; -webkit-animation: mover 2s infinite alternate; animation: mover 2s infinite alternate}
.layang2{ position: absolute; top: 20%; right: 0%; z-index: -1; -webkit-animation: route 2s infinite alternate; animation: route 2s infinite alternate}
img.mover{ -webkit-animation: mover 2s infinite alternate; animation: mover 2s infinite alternate}
img.mover2{ -webkit-animation: mover 2s infinite alternate; animation: mover 2s infinite alternate}
@-webkit-keyframes mover{ 0%{ transform: translateY(0)} 100%{ transform: translateY(-20px)}}
@keyframes mover{ 0%{ transform: translateY(0)} 100%{ transform: translateY(-20px)}}
@-webkit-keyframes mover2{ 0%{ transform: scaleX(-1)} 100%{ transform: translateY(-20px)}}
@keyframes mover2{ 0%{ transform: scaleX(-1)} 100%{ transform: translateY(-20px)}}
@-webkit-keyframes route{ 0%{ transform: translateX(0)} 100%{ transform: translateX(-20px)}}
@keyframes route{ 0%{ transform: translateX(0)} 100%{ transform: translateX(-20px)}}
@-webkit-keyframes swing{ 0%{ transform: rotate(30deg)} 50%{ transform: rotate(-60deg)} 100%{ transform: rotate(30deg)}}
@keyframes swing{ 0%{ transform: rotate(30deg)} 50%{ transform: rotate(-60deg)} 100%{ transform: rotate(30deg)}}
@-webkit-keyframes rotate{ 100%{ transform: rotate(359deg)}}
@keyframes rotate{ 100%{ transform: rotate(359deg)}}
</style>
<div>
  <img class="ngambang1" src="https://images.squarespace-cdn.com/content/v1/524608b4e4b0781833bcf0b5/1594745674177-YX8UTPAFECX1Q3ZJT26K/ezgif-1-15ced97bc073.gif?format=300w">
  <img class="ngambang1 layang layang2" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjUsj0B2pdAvr3oDEQsgW5UQUWrT9i8MOlby61WvgnldK9kDFHqWFM5rD8lDv8uSB_L1NTkRXqnWCGS1VbfhD2uXpa3kHm8CC7dhbSfPFYIO8XH7e8gUmaUA9UEcbjqhtKkmNT7nSNnmRq20Lc3zJPgzkXOHel9Wqpg7ynmdklc-u8sGBe_yzThiQsFhcU/s1600/clouds-5726271_960_720.png" style="width: 250px !important;">
  <img class="ngambang layang layang2" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjvc0bl_QpHUk6oTWD_OsWdaQ1bSBwJU7UFKBipsquSOdBZihCoxbl3T2NXEYAJiMbN9CDlN1k1YpX6HPDRrigOk7NElDgdNCNDjQXJcf9eKsNgCu9Wdj9X-JmiNrID8CJ-GNTuB_JSPfAkXTjB2f4oeeIBJhLQdIgh4xljNxahjVngix-_SXsCJdiNCIU/s1600/awankiri.png" style="width: 150px !important;top: 50%;left: 30%">
  <img alt="" class="ngambang1 mover" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiB5XG3lCcGJcSrPpcmswHEr_JKm8dUhAKV-_IpFad5tMKphozKJ_2n-hNb_byzVO56MvlqoqYyLJfNkvnSUSbwUv0SeJQaiAjiI70FB2ivnCFxwfRrvm4fLsZeUafgFbc75Y6y4V1KGOT_5boUZGHcN5jOZYkvpEjUNZ4bW1aQFLf17bLibSXQ6L4lHbE/s1600/1.png">
  <img class="ngambang" src="https://images.squarespace-cdn.com/content/v1/524608b4e4b0781833bcf0b5/1594745674177-YX8UTPAFECX1Q3ZJT26K/ezgif-1-15ced97bc073.gif?format=300w">
  <img class="ngambang layang layang2" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjUsj0B2pdAvr3oDEQsgW5UQUWrT9i8MOlby61WvgnldK9kDFHqWFM5rD8lDv8uSB_L1NTkRXqnWCGS1VbfhD2uXpa3kHm8CC7dhbSfPFYIO8XH7e8gUmaUA9UEcbjqhtKkmNT7nSNnmRq20Lc3zJPgzkXOHel9Wqpg7ynmdklc-u8sGBe_yzThiQsFhcU/s1600/clouds-5726271_960_720.png" style="width: 250px !important;">
  <img class="ngambang layang layang2" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjvc0bl_QpHUk6oTWD_OsWdaQ1bSBwJU7UFKBipsquSOdBZihCoxbl3T2NXEYAJiMbN9CDlN1k1YpX6HPDRrigOk7NElDgdNCNDjQXJcf9eKsNgCu9Wdj9X-JmiNrID8CJ-GNTuB_JSPfAkXTjB2f4oeeIBJhLQdIgh4xljNxahjVngix-_SXsCJdiNCIU/s1600/awankiri.png" style="width: 150px !important;top: 50%;right: 30%">
  <img alt="" class="ngambang mover2" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh_dToKZptnl3BYKvopv2V8PdRUFhUF-2fjczocZkPoLTR8UZSokdLR2p6Gvd2gits3SxvAAox26VR_CpNoUsDWzC5o1tVHbjgxLNCu5W0lr1t549LiwG-lgfwP22YVUMlp6W8G-GJTneea6V-PACWUgcyAbcO1sQGkJd3YnGfKblk9HuJNjYWEp6t5zlA/s1600/1.png">
</div>
`);
