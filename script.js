const songs = 
  [
  "musics/001.Rathirinerathu...[sasireka&group].mp3",
  "musics/005.ADUKKU MALLI.mp3",
  "musics/01.Kottampaakkam.mp3",
  "musics/01.UN  MALLIYAPPOD.mp3",
  "musics/011.SAMAKKOZHI.mp3",
  "musics/015.Mannakkum Malligai.....mp3",
  "musics/018.VELAKKU.mp3",
  "musics/019.Elluthupothina...[mano&janaki].mp3",
  "musics/02.Ennaata.mp3",
  "musics/02.Pallikkudam...[s.p.b.&janaki].mp3",
  "musics/023.Kaathadikkudhu....mp3",
  "musics/026.Enda.mp3",
  "musics/027.JENGAN.mp3",
  "musics/028.Kattipudika...[janaki].mp3",
  "musics/03.SAMAKKOZHI.mp3",
  "musics/03.Vadi Vadi.mp3",
  "musics/033.ThulasiChedi...[Janaki].mp3",
  "musics/05.Elantha Palam.mp3",
  "musics/06.ADUKKU MALLI.mp3",
  "musics/06.KADALOORU__GUNDU.mp3",
  "musics/06.appadipodu.mp3",
  "musics/07.Karagaattam....mp3",
  "musics/08.Kalakalakudhu.mp3",
  "musics/08.Rendula Onna Thodu ....mp3",
  "musics/09.ADUKKU__MALLI__.mp3",
  "musics/09.ALTHOTA  BOOPATHY.mp3",
  "musics/10.ANDHA__NILAAVA.mp3",
  "musics/10.SARAKKU  VECHIRUKKEN.mp3",
  "musics/11.MALLIGAI__POO.mp3",
  "musics/11.Ooty  Malai.mp3",
  "musics/12.MALLIGAI__MOTTU__.mp3",
  "musics/12.Manisha.mp3",
  "musics/13.OODUGIRA_THANIYILE.mp3",
  "musics/13.Thanga Niratthukku.mp3",
  "musics/14.Kattipudi  Kattipudida.mp3",
  "musics/15.ChinnaPaiyyan.mp3",
  "musics/16.Aiyyayo Alamelu.mp3",
  "musics/16.Vethala Vethala.mp3",
  "musics/17.Vam.mp3",
  "musics/18.ThaiMasa...[S.P.B.&Janaki].mp3",
  "musics/18.Thekku Cheemaiyelae.mp3",
  "musics/19.Track 11.mp3",
  "musics/19.pothuva palarukku.mp3",
  "musics/20.ADDICHA.mp3",
  "musics/20.Athu mettula.mp3",
  "musics/21.BALAKILA_ASRIRAM_UMENAN_.mp3",
  "musics/21.Pillaiyar Patti           [deva &group].mp3",
  "musics/22.OLLI.mp3",
  "musics/22.THENDRALUKKU_.mp3",
  "musics/23.KichaliSamba...mp3",
  "musics/23.VETTLA.mp3",
  "musics/24.Natchatra Bangala   [deva & subha].mp3",
  "musics/24.Track 10.mp3",
  "musics/25.PattuVannaSelaithan....mp3",
  "musics/25.Velaerika                           [krishna raj & deva].mp3",
  "musics/26.AAVAARAM_POOVU.mp3",
  "musics/26.Kavalai Padathi                  [deva].mp3",
  "musics/27.Marimuthu                [deva ].mp3",
  "musics/27.PARUTHI.mp3",
  "musics/28.MEGAM.mp3",
  "musics/28.Meenatchi                       [ deva  & sabesh ].mp3",
  "musics/29.ARIYAATHATHAA__.mp3",
  "musics/29.Rukku Rukku       [mano].mp3",
  "musics/30.Maha Ganapati                  [srinivass & group ].mp3",
  "musics/30.NAAM__EZHIKARAI__.mp3",
  "musics/31.KottaPaaku...[Mano&Janki].mp3",
  "musics/31.Rangola.mp3",
  "musics/32.Kadalakaattu.mp3",
  "musics/33.ADIYE  ADI  CHINNA.mp3",
  "musics/34.KONDAI__CHEVEL.mp3",
  "musics/34.kathalukku.mp3",
  "musics/35.Kandhan Irrukkum Idam....mp3",
  "musics/35.Thenna Mara .....mp3",
  "musics/36.THERKKU_THERU.mp3",
  "musics/36.Vedha Vedhama....mp3",
  "musics/37.Arupathu  Aayiduchu.mp3",
  "musics/37.KAAKI__SATTAI.mp3",
  "musics/38.MADURA  JILLA.mp3",
  "musics/38.Nandri Sollo.mp3",
  "musics/39.PACOLLAI_SPB_CHITRA_.mp3",
  "musics/39.Pombalainga Kadhala.mp3",
  "musics/40.Mayiladum...[Chitra&S.P.B].mp3",
  "musics/41.OTHTHAROOVAA.mp3",
  "musics/41.neekattum  selai.mp3",
  "musics/42.AYIRAMEENU.mp3",
  "musics/42.Kondakaari.mp3",
  "musics/43.PATHU_ROBA.mp3",
  "musics/43.ukkadathu.mp3",
  "musics/44.VAIKASI__MAASATHILE.mp3",
  "musics/44.ottiyaanam.mp3",
  "musics/45.GEMINI  GEMINI(spb).mp3",
  "musics/45.MAANKUIYILE_0609184621.mp3",
  "musics/46.AATHADI  ENNA.mp3",
  "musics/46.THILALANKADIYO.mp3",
  "musics/47.Kalyananthaan.mp3",
  "musics/47.YELA__ALAGAMMA.mp3",
  "musics/48.ADI__MOOKIYARA_.mp3",
  "musics/48.Arumuga  Saamy.mp3",
  "musics/49.ChinnaChinna...[Mano&Chitra].mp3",
  "musics/49.INTHADI.mp3",
  "musics/50.MADURAI  VEERAN.mp3",
  "musics/50.SokkuSundari...[K.Raj&Sujatha].mp3",
  "musics/51.Chalakku...[ArunMozi&Sujatha].mp3",
  "musics/51.Machane.mp3",
  "musics/52.ChittuParrakkuthu.mp3",
  "musics/52.GAANA  KARUNKUILE.mp3",
  "musics/53.OOSIMALAI_MANO_JANAKI_.mp3",
  "musics/53.Unnala.mp3",
  "musics/54.Ennada.mp3",
  "musics/54.NILA_KAYEDU_JANAKI_MVDEVAN_.mp3",
  "musics/55.ETHAMAIAH_MVDEVAN_CHITRA__.mp3",
  "musics/55.Neruppu.mp3",
  "musics/56.RASA.mp3",
  "musics/56.SORU_KONDU_SPB__CHITRA_.mp3",
  "musics/57.AZHA.mp3",
  "musics/57.MannavaneMannavane....mp3",
  "musics/58.Naattu Sarakku.mp3",
  "musics/58.UTCHI__VEYIL.mp3",
  "musics/59.AathuMettile...[S.P.B.&Janaki] .mp3",
  "musics/59.adho vaara.mp3",
  "musics/60.AASAIPPATTU_SPB_SWERNA_.mp3",
  "musics/61.KUMBABHISHEKAM.mp3",
  "musics/62.POAVOMAA.mp3",
  "musics/63.KumbaKonam..mp3",
  "musics/64.MEDUVAA__.mp3",
  "musics/65.POTHI___VECHD.mp3",
  "musics/65.enn aasai maithiliye.mp3",
  "musics/66.VAAIKKA__VARAPPU.mp3",
  "musics/66.pottu thaakku.mp3",
  "musics/67.PADAGOTTUM.mp3",
  "musics/67.pachakkili.mp3",
  "musics/68.Kurrukku...[S.P.B.&Minmini].mp3",
  "musics/69.YeleYele...[S.P.B.&Umaramanan].mp3",
  "musics/70.ADICHAEN_MANO_CHITRA_.mp3",
  "musics/70.Kalakkuvcn.mp3",
  "musics/71.Kannamma  Kannamma.mp3",
  "musics/71.SIRUVAANI.mp3",
  "musics/72.Pillaiyaar Suzhi.mp3",
  "musics/72.VAYAKKADU.mp3",
  "musics/73. sevvarali - pannaipuram railwey gate.mp3",
  "musics/73.KADAL.mp3",
  "musics/74.KOKKU.mp3",
  "musics/74.POOJAIKETHA.mp3",
  "musics/Elluthupothina...[mano&janaki].mp3",
  "musics/Enda.mp3",
  "musics/JENGAN.mp3",
  "musics/Kaathadikkudhu....mp3",
  "musics/Kaathuoodha...[mano&lalithasri].mp3",
  "musics/KathavuSaathu...[S.P.B.&Janaki].mp3",
  "musics/Kattipudika...[janaki].mp3",
  "musics/Mannakkum Malligai.....mp3",
  "musics/Pallikkudam...[s.p.b.&janaki].mp3",
  "musics/RAAKOZHI  RENDU.mp3",
  "musics/Raakkozi...[s.p.b.&janaki].mp3",
  "musics/Rathirinerathu...[sasireka&group].mp3",
  "musics/ThulasiChedi...[Janaki].mp3",
  "musics/UN  MALLIYAPPOD.mp3",
  "musics/VELAKKU.mp3",
  "musics/Yamma Yamma     [s.p.b & chitra ].mp3",
  "musics/maasamo margazhi.mp3"
];


let currentSongIndex = 0;
const player = document.getElementById("player");
const playPauseBtn = document.getElementById("playPauseBtn");
const playlistEl = document.getElementById("playlist");

// Load song into player
function playSong(index) {
  currentSongIndex = index;
  player.src = songs[index];
  player.play();
  updateActiveSong();
  playPauseBtn.textContent = "⏸ Pause";
}

// Update active song in list
function updateActiveSong() {
  const items = playlistEl.querySelectorAll("li");
  items.forEach((item, i) => {
    item.classList.toggle("active", i === currentSongIndex);
  });
}

// Populate song list
songs.forEach((song, index) => {
  const li = document.createElement("li");
  li.textContent = song.split("/").pop();
  li.addEventListener("click", () => playSong(index));
  playlistEl.appendChild(li);
});

// Buttons
document.getElementById("prevBtn").addEventListener("click", () => {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  playSong(currentSongIndex);
});

document.getElementById("nextBtn").addEventListener("click", () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  playSong(currentSongIndex);
});

playPauseBtn.addEventListener("click", () => {
  if (player.paused) {
    player.play();
    playPauseBtn.textContent = "⏸ Pause";
  } else {
    player.pause();
    playPauseBtn.textContent = "▶ Play";
  }
});

document.getElementById("volUpBtn").addEventListener("click", () => {
  player.volume = Math.min(player.volume + 0.1, 1);
});

document.getElementById("volDownBtn").addEventListener("click", () => {
  player.volume = Math.max(player.volume - 0.1, 0);
});

// Auto play next song when one ends
player.addEventListener("ended", () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  playSong(currentSongIndex);
});

// Start with first song
playSong(currentSongIndex);
