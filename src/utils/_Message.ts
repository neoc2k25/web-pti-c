export const MsgPositron = (step: number) => {
  /** handle message to user */
  let message = "";

  if (step === 1) {
    message =
      "Apakah kamu siap untuk memulai semuanya, animasi akan berjalan sekitar 3-5 menit 🙌🀄? ";
  } else if (step === 2) {
    message =
      "Apakah kamu tau, POSITRON adalah Program orientasi bagi mahasiswa baru Teknik Elektro dan Informatika untuk mengenal lingkungan kampus, membangun kekompakan dan kekeluargaan, serta membentuk civitas akademika yang berkarakter dan berbudi pekerti baik...🤨📝💡";
  } else if (step === 3) {
    message = "Yuk, ikuti cerita neo-c di Positron-2025...🥳🎈✨.";
  } else if (step === 4) {
    message =
      "Sebelum itu, kita berkenalan dulu yaa dengan para mentor neo-c di Positon-2025..🤝🙌";
  } else if (step === 5) {
    message =
      "Saat positron berlangsung, kami juga harus menggunakan dresscode harian loh..👕👔";
  } else if (step === 6) {
    message = "Kalau ngga taat aturan, kami dimarahi kakak mentor..😡🙄";
  } else if (step === 7) {
    message =
      "Tahukan kamu, kegiatan yang pertama kali kami laksanakan adalah Forum Maba, (Forum Maba) merupakan kegiatan dalam rangka menyambut mahasiswa baru. Melalui Forum Maba, mahasiswa baru diajak memahami identitasnya sebagai bagian dari civitas akademika..🧐🔍";
  } else if (step === 8) {
    message = "Ini adalah kami saat forum maba..🥳🙌";
  } else if (step === 9) {
    message =
      "Kegiatan kami yang kedua adalah ARUS 📚, yaitu kegiatan pembinaan yang mengajarkan berbagai nilai penting. Melalui ARUS, kami diajarkan arti kedisiplinan dalam mengatur waktu dan tanggung jawab 📏⏰, pentingnya kekompakan 🤝, serta nilai kebersamaan agar tercipta lingkungan yang solid dan saling mendukung 💪✨.";
  } else if (step === 10) {
    message = "Ini adalah kami saat kegiatan ARUS..🙂🙌";
  } else if (step === 11) {
    message =
      "Kegiatan kami yang ketiga adalah LDK (Latihan Dasar Kepemimpinan) 🏕️, yaitu kegiatan pelatihan untuk mengasah kemampuan kepemimpinan dan keterampilan mahasiswa baru. Melalui LDK, kami dilatih untuk membangun kepercayaan diri, meningkatkan rasa tanggung jawab, serta mengembangkan kemampuan bekerja sama dalam tim ...🤝✨👑";
  } else if (step === 12) {
    message = "Ini adalah kami saat kegiatan LDK..🙂🙌";
  } else if (step === 13) {
    message =
      "Kegiatan kami yang keempat adalah IOH (Introduction of Himpunan) 🎉, yaitu kegiatan yang bertujuan untuk mengenalkan mahasiswa baru kepada berbagai organisasi yang ada di lingkungan Departemen Teknik Elektro dan Informatika. Melalui kegiatan ini, mahasiswa baru diberikan gambaran mengenai fungsi, peran, serta program kerja masing-masing bidang 🌟🔥.";
  } else if (step === 14) {
    message = "Ini adalah kami saat kegiatan IOH..🥳🙌";
  } else if (step === 15) {
    message =
      "Kegiatan kami yang kelima adalah ARUS 2, yang merupakan forum strategis untuk menentukan arah dan masa depan angkatan ke depannya. Pada kegiatan ini, kami membahas berbagai hal penting yang berkaitan dengan keberlanjutan angkatan...👥✨";
  } else if (step === 16) {
    message = "Ini adalah kami saat kegiatan Arus 2..🙂🙌";
  } else if (step === 17) {
    message =
      "Kegiatan kami yang keenam adalah NAKO, yaitu acara peresmian mahasiswa baru menjadi mahasiswa sah di DTEI sekaligus penutupan rangkaian ospek departemen. Kegiatan ini bertujuan memberikan pengalaman berkesan, mengasah skill dan bakat mahasiswa baru, serta menumbuhkan semangat kerja sama, kebersamaan, dan solidaritas dalam angkatan sehingga tercipta rasa UNITY 🤝✨.";
  } else if (step === 18) {
    message = "Ini adalah kami saat kegiatan Nako..🥳🙌";
  } else if (step === 19) {
    message = "Terima kasih telah meluangkan waktu untuk melihat animasi ini dari awal sampai selesai. Semoga bisa menghibur dan menginspirasi! 🥳🙌";
  } else {
    message = "";
  }

  return message;
};
