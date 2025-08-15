const songs = [
  "musics/00 Othaikku Othaey.mp3",
  "musics/00 Piya... Piya.mp3",
  "musics/00 Rootoram Veetukaari.mp3",
  "musics/000 Madhura Madhura - Naveen, Velmurugan.mp3",
  "musics/001 Aandi Patti - Karthik.mp3",
  "musics/001 Dinga Ding-Vijay Prakash,Naveen.mp3",
  "musics/001 Jigar Thanda - Karthik, Rita.mp3",
  "musics/001 Kannu Rendum-Priyahagesh,Mugesh.mp3",
  "musics/001 Mama mama-Vijay Yesudas,Swetha.mp3",
  "musics/001 Thanjavoor Jillakkari-Hemachandran,Saindavi.mp3",
  "musics/001.Rathirinerathu...[sasireka&group].mp3",
  "musics/002 Thappu Thanda-Madkudi Subha.mp3",
  "musics/003 Life Ye Jollythan-D.S.P,Reina.mp3",
  "musics/003 Vetrikodi Yeathu-Ranjith,Mukesh.mp3",
  "musics/004 Nee Kathalikkum Ponnu-Mukesh.mp3",
  "musics/004 Vanga Kadal Ellai-Naveen,Malathi Lakshmanan.mp3",
  "musics/005 Thothu Ponen-Shankar Mahadevan.mp3",
  "musics/005.ADUKKU MALLI.mp3",
  "musics/006 Naane Indhiran-Benny,Manikkam Vinayagam.mp3",
  "musics/007 Veera-Vijay Prakash,Keerthi Sagathiya,Mustafa Kutoane.mp3",
  "musics/008 Kadu Potta-Benny Dhayal.mp3",
  "musics/009 Kedak Kari-Benny DhatalBakyaraj,Rayhanah,Tanvi Shah.mp3",
  "musics/01 Poothu Chiricha.mp3",
  "musics/01.Kottampaakkam.mp3",
  "musics/01.UN  MALLIYAPPOD.mp3",
  "musics/010 Otha Kallu Otha kallu-Samsutheen,Grace,Karunaas,Chinna P.mp3",
  "musics/011 Kirathakka Veluthu Kattu.mp3",
  "musics/011.SAMAKKOZHI.mp3",
  "musics/012 Mannathi Mannarukku-Manikkam Vinayagam,Velmurugan,Pandyy.mp3",
  "musics/013 Puli Urumuthu--Ananthu,Makesh Vinayakram.mp3",
  "musics/013 Suvadu Suvadu-M.Sasikumar,amuthirakani,Pandiraj-.mp3",
  "musics/014 Naan Adicha Thanga-Shanakar mahadevan.mp3",
  "musics/015 Yeh Uchi mandaiyile-krishnaIyer,Shoba Sekar,Charaulatha .mp3",
  "musics/015.Mannakkum Malligai.....mp3",
  "musics/016 Ithaellam Dupe-Chiyan Vikram,Vivekan.mp3",
  "musics/017 Yanai Katt(Oor Muzhukka Thedi)i-Ananthu,Mukesh,Karthikey.mp3",
  "musics/018 Asa Arakki-Yash Gocha,B.Suvaasini.mp3",
  "musics/018.VELAKKU.mp3",
  "musics/019 Singa Varuthu-Prasana,Yash Gousha,S.S.Kumaran.mp3",
  "musics/019.Elluthupothina...[mano&janaki].mp3",
  "musics/02 Vanthanamma.mp3",
  "musics/02.Ennaata.mp3",
  "musics/02.Pallikkudam...[s.p.b.&janaki].mp3",
  "musics/020 Manjanathi Ilai-Manikkam Vinayagam,Malathi.mp3",
  "musics/021 Sirikkiren-Naresh Iyer,Mani,Siva Chidamparam,Dr.Burn,Uma.mp3",
  "musics/022 Aja Kuja-Mukesh.mp3",
  "musics/023 Kothavaranga-Bebi Harini.mp3",
  "musics/023.Kaathadikkudhu....mp3",
  "musics/024 Gala Gala Gala Gaaley-Jassie Gift,Roshini.mp3",
  "musics/025 Adada Adaimazhaida-Rahul Nambhiyar,Saindhavi.mp3",
  "musics/026 Sirukki Vadi En Chittu-Krishna Raj,Ramakrishnan,Bakyaraj.mp3",
  "musics/026.Enda.mp3",
  "musics/027 Otta Udaisal Eyam-Sabesh,Janani.mp3",
  "musics/027.JENGAN.mp3",
  "musics/028 Aappakkari Mattikitta-Murali,Senthildas,Senthil,Shiyam.mp3",
  "musics/028.Kattipudika...[janaki].mp3",
  "musics/029 Vithai Vithai kathal-Shaan.mp3",
  "musics/03 Othaikku Othaey.mp3",
  "musics/03.SAMAKKOZHI.mp3",
  "musics/03.Vadi Vadi.mp3",
  "musics/030 Kadavule-A Rock Star-D.Imman,Roe Vincent,Varuna.mp3",
  "musics/031 Kacheri Kacheri-Mukesh,madhu Sri.mp3",
  "musics/032 Theeratha Vilaiyattu Pilai-Andrea,Thanvi,Vinaitha,Ranjit.mp3",
  "musics/033 Pacha Manja-Mukesh,Chorus.mp3",
  "musics/033.ThulasiChedi...[Janaki].mp3",
  "musics/034 Munneru Munneru-Ranjith,Naveen.mp3",
  "musics/035 Manja Manja Velu-Tippu,Sujatha.mp3",
  "musics/036 Aandava Aandava-Tippu.mp3",
  "musics/037 Subaiya Subaiya-Sathyaraj&Sundar c.mp3",
  "musics/038 Aathili Pathili-Malathi,Kalyan,Sureh,Sadha.mp3",
  "musics/039 Yelelu Thalaimuraikkkum-Karthik Raja,Venkat Prabhu,Yvan,.mp3",
  "musics/04 O Mare.mp3",
  "musics/040 Adida Nayandiya-S.P.Charan,Yogendran,Vasudevan Nair.mp3",
  "musics/041 Kala Kala Kantha Kottai-Tippu,Dhina..mp3",
  "musics/042 Naan Oru Nalla(Dishyum Dishyum)-Shankar mahadevan,Suchit.mp3",
  "musics/043 Kattu Puliyadichu Katturasa-K.K,Jashi Gift.mp3",
  "musics/044 Nenachatheseyyanam-tippu,jeyadev,mahalakshm.mp3",
  "musics/045 Singampola -Jc.J.SuijithLekshmi Jayan .mp3",
  "musics/046 Dole Dole -Vaishali,chorus.mp3",
  "musics/047 Kutti Kutti Kutti Pisasase-vaishali,Divya.mp3",
  "musics/048 Chennai pattanam Paruda-vaishali.mp3",
  "musics/05 Mambo Maamiya.mp3",
  "musics/05.Elantha Palam.mp3",
  "musics/06 Idhellam dupe.mp3",
  "musics/06.ADUKKU MALLI.mp3",
  "musics/06.KADALOORU__GUNDU.mp3",
  "musics/06.appadipodu.mp3",
  "musics/07 Sambho Siva Sambo - Shankar Mahadevan.mp3",
  "musics/07.Karagaattam....mp3",
  "musics/08  Aadunga Da - D.Vel Murugan & Chorus.mp3",
  "musics/08.Kalakalakudhu.mp3",
  "musics/08.Rendula Onna Thodu ....mp3",
  "musics/09 Yakka Yakka - Senthil Das  V.Chandran  M.Sasi Kumar   M.M.mp3",
  "musics/09.ADUKKU__MALLI__.mp3",
  "musics/09.ALTHOTA  BOOPATHY.mp3",
  "musics/10 Chiku Chiku Boom Boom.mp3",
  "musics/10.ANDHA__NILAAVA.mp3",
  "musics/10.SARAKKU  VECHIRUKKEN.mp3",
  "musics/11 Odi Odi Vilayadu.mp3",
  "musics/11.MALLIGAI__POO.mp3",
  "musics/11.Ooty  Malai.mp3",
  "musics/12 Mayilattam Oyilattam.mp3",
  "musics/12.MALLIGAI__MOTTU__.mp3",
  "musics/12.Manisha.mp3",
  "musics/13 Pottal Patti.mp3",
  "musics/13.OODUGIRA_THANIYILE.mp3",
  "musics/13.Thanga Niratthukku.mp3",
  "musics/14 PALA PALA - HARIHARAN.mp3",
  "musics/14.Kattipudi  Kattipudida.mp3",
  "musics/15 Kathrikka Kathrikka - Karunaas, Crazy Karunaas.mp3",
  "musics/15.ChinnaPaiyyan.mp3",
  "musics/16 Yelandha Pazham - Shakthi Sree Gopalan, Rap-Iraj and Dine.mp3",
  "musics/16.Aiyyayo Alamelu.mp3",
  "musics/16.Vethala Vethala.mp3",
  "musics/17 Kandha Kadambaa - Sam. P,. Keerthan.mp3",
  "musics/17.Vam.mp3",
  "musics/18 Aandipatti Arasampatti - T. Rajender,  Pop Shalini.mp3",
  "musics/18.ThaiMasa...[S.P.B.&Janaki].mp3",
  "musics/18.Thekku Cheemaiyelae.mp3",
  "musics/19 Vedi Vedi - 01 Vedi Vedi.mp3",
  "musics/19.Track 11.mp3",
  "musics/19.pothuva palarukku.mp3",
  "musics/20 Manja Selai - 06 Manja Selai.mp3",
  "musics/20.ADDICHA.mp3",
  "musics/20.Athu mettula.mp3",
  "musics/21 Annamare Thambimare.mp3",
  "musics/21.BALAKILA_ASRIRAM_UMENAN_.mp3",
  "musics/21.Pillaiyar Patti           [deva &group].mp3",
  "musics/22 Manamaduraikku Poravare.mp3",
  "musics/22.OLLI.mp3",
  "musics/22.THENDRALUKKU_.mp3",
  "musics/23 Urundamala Theranda Mala.mp3",
  "musics/23.KichaliSamba...mp3",
  "musics/23.VETTLA.mp3",
  "musics/24 REKKA KATTI.mp3",
  "musics/24.Natchatra Bangala   [deva & subha].mp3",
  "musics/24.Track 10.mp3",
  "musics/25 ACHADICHA KASU.mp3",
  "musics/25.PattuVannaSelaithan....mp3",
  "musics/25.Velaerika                           [krishna raj & deva].mp3",
  "musics/26 ENNADA PANDI.mp3",
  "musics/26.AAVAARAM_POOVU.mp3",
  "musics/26.Kavalai Padathi                  [deva].mp3",
  "musics/27 Aarumugam.mp3",
  "musics/27.Marimuthu                [deva ].mp3",
  "musics/27.PARUTHI.mp3",
  "musics/28 Appa Amma Velayattu.mp3",
  "musics/28.MEGAM.mp3",
  "musics/28.Meenatchi                       [ deva  & sabesh ].mp3",
  "musics/29 MGR Illenga.mp3",
  "musics/29.ARIYAATHATHAA__.mp3",
  "musics/29.Rukku Rukku       [mano].mp3",
  "musics/30. Muttathu Pakkathula - Venkat Prabhu.mp3",
  "musics/30.Maha Ganapati                  [srinivass & group ].mp3",
  "musics/30.NAAM__EZHIKARAI__.mp3",
  "musics/31 Rangi Ragamma.mp3",
  "musics/31.KottaPaaku...[Mano&Janki].mp3",
  "musics/31.Rangola.mp3",
  "musics/32 Yei Vetri Velaa.mp3",
  "musics/32.Kadalakaattu.mp3",
  "musics/33 Dindigullu Dindigullu.mp3",
  "musics/33.ADIYE  ADI  CHINNA.mp3",
  "musics/34 Dindigallu Remix.mp3",
  "musics/34.KONDAI__CHEVEL.mp3",
  "musics/34.kathalukku.mp3",
  "musics/35 Yahoo Yahoo.mp3",
  "musics/35.Kandhan Irrukkum Idam....mp3",
  "musics/35.Thenna Mara .....mp3",
  "musics/36 Suttapazhama.mp3",
  "musics/36.THERKKU_THERU.mp3",
  "musics/36.Vedha Vedhama....mp3",
  "musics/37 Yei Rama Rama.mp3",
  "musics/37.Arupathu  Aayiduchu.mp3",
  "musics/37.KAAKI__SATTAI.mp3",
  "musics/38 Daddy Mummy.mp3",
  "musics/38.MADURA  JILLA.mp3",
  "musics/38.Nandri Sollo.mp3",
  "musics/39 Jalsa Jalsa.mp3",
  "musics/39.PACOLLAI_SPB_CHITRA_.mp3",
  "musics/39.Pombalainga Kadhala.mp3",
  "musics/40 Vada Mappila.mp3",
  "musics/40.Mayiladum...[Chitra&S.P.B].mp3",
  "musics/41 Dheemthanakka.mp3",
  "musics/41.OTHTHAROOVAA.mp3",
  "musics/41.neekattum  selai.mp3",
  "musics/42 Vechikkava.mp3",
  "musics/42.AYIRAMEENU.mp3",
  "musics/42.Kondakaari.mp3",
  "musics/43 Wher is the Party.mp3",
  "musics/43.PATHU_ROBA.mp3",
  "musics/43.ukkadathu.mp3",
  "musics/44 Silambattam.mp3",
  "musics/44.VAIKASI__MAASATHILE.mp3",
  "musics/44.ottiyaanam.mp3",
  "musics/45 Nalam Dhana.mp3",
  "musics/45.GEMINI  GEMINI(spb).mp3",
  "musics/45.MAANKUIYILE_0609184621.mp3",
  "musics/46 USILAMPATTI.mp3",
  "musics/46.AATHADI  ENNA.mp3",
  "musics/46.THILALANKADIYO.mp3",
  "musics/47 ONNU RENDU.mp3",
  "musics/47.Kalyananthaan.mp3",
  "musics/47.YELA__ALAGAMMA.mp3",
  "musics/48 Juram Vanthichu.mp3",
  "musics/48.ADI__MOOKIYARA_.mp3",
  "musics/48.Arumuga  Saamy.mp3",
  "musics/49 Mena Minuki.mp3",
  "musics/49.ChinnaChinna...[Mano&Chitra].mp3",
  "musics/49.INTHADI.mp3",
  "musics/50 Namma nadai.mp3",
  "musics/50.MADURAI  VEERAN.mp3",
  "musics/50.SokkuSundari...[K.Raj&Sujatha].mp3",
  "musics/51 Adiyae.mp3",
  "musics/51.Chalakku...[ArunMozi&Sujatha].mp3",
  "musics/51.Machane.mp3",
  "musics/52 Kaadai.mp3",
  "musics/52.ChittuParrakkuthu.mp3",
  "musics/52.GAANA  KARUNKUILE.mp3",
  "musics/53 Amma Marae.mp3",
  "musics/53.OOSIMALAI_MANO_JANAKI_.mp3",
  "musics/53.Unnala.mp3",
  "musics/54 Hey Salaa.mp3",
  "musics/54.Ennada.mp3",
  "musics/54.NILA_KAYEDU_JANAKI_MVDEVAN_.mp3",
  "musics/55 Puthu puthu.mp3",
  "musics/55.ETHAMAIAH_MVDEVAN_CHITRA__.mp3",
  "musics/55.Neruppu.mp3",
  "musics/56 A R RAHMAN - 01 TAXI.mp3",
  "musics/56.RASA.mp3",
  "musics/56.SORU_KONDU_SPB__CHITRA_.mp3",
  "musics/57 Adi Athi Athi.mp3",
  "musics/57.AZHA.mp3",
  "musics/57.MannavaneMannavane....mp3",
  "musics/58 Thanni Karuthiruchi.mp3",
  "musics/58.Naattu Sarakku.mp3",
  "musics/58.UTCHI__VEYIL.mp3",
  "musics/59 Ada kada kada.mp3",
  "musics/59.AathuMettile...[S.P.B.&Janaki] .mp3",
  "musics/59.adho vaara.mp3",
  "musics/60 O rasikkum seemaney.mp3",
  "musics/60.AASAIPPATTU_SPB_SWERNA_.mp3",
  "musics/61 Cinema Cinema.mp3",
  "musics/61.KUMBABHISHEKAM.mp3",
  "musics/62 Aaja Meri Soniye.mp3",
  "musics/62.POAVOMAA.mp3",
  "musics/63 Kodana Kodi.mp3",
  "musics/63.KumbaKonam..mp3",
  "musics/64 Kathal Vaipogame.mp3",
  "musics/64.MEDUVAA__.mp3",
  "musics/65 Nakku mukku(M).mp3",
  "musics/65.POTHI___VECHD.mp3",
  "musics/65.enn aasai maithiliye.mp3",
  "musics/66 Nakkumukku(F).mp3",
  "musics/66.VAAIKKA__VARAPPU.mp3",
  "musics/66.pottu thaakku.mp3",
  "musics/67 Madura kulunga.mp3",
  "musics/67.PADAGOTTUM.mp3",
  "musics/67.pachakkili.mp3",
  "musics/68 Paal Pappali.mp3",
  "musics/68.Kurrukku...[S.P.B.&Minmini].mp3",
  "musics/69 GANDHINOTE.mp3",
  "musics/69.YeleYele...[S.P.B.&Umaramanan].mp3",
  "musics/70 HARA HARA SAMBO.mp3",
  "musics/70 Kattipidikkum.mp3",
  "musics/70.ADICHAEN_MANO_CHITRA_.mp3",
  "musics/70.Kalakkuvcn.mp3",
  "musics/71 THIRUVAROOR THERAE.mp3",
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
]


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

alert("Enjoy the music without ADD'S");