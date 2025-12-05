import { useEffect, useRef } from "react";
import SayHello from "../component/SayHello";
import Snow from "../component/Snow";
import Typed from "typed.js";
import { useCurrentName, useCurrentSayHello } from "../state/_Init";
import Navbar from "../layouts/Navbar";

const WelcomePage = () => {
  /** cache is say hello */
  const isSayHelloVisible = useCurrentSayHello((s: any) => s.isSayHello);

  /** cache current name */
  const name = useCurrentName((s: any) => s.name);

  const helloRef = useRef<HTMLSpanElement | null>(null);

  /**handle typed */
  useEffect(() => {
    const typed = new Typed(helloRef.current, {
      strings: [
        `Hi ${
          name ?? "guys"
        }! Seperti yang kalian tahu, aku Neco — maskot dari Neo-C, Pertama-tama aku mau ngasih kalian semangat buat ngerjain TA(Tugas Akhir), tugas-tugas lainnya dan jangan lupa belajar buat UAS. Percayalah, kalian harus benar-benar menikmati masa kuliah ini sebelum masuk ke dunia kerja — sebelum kalian merindukan suasana kelas, laprak, positron, tugas bareng, dan momen-momen seru bersama teman-teman. Kadang kita merasa kurang bersyukur karena nggak bisa kuliah di kampus impian, tapi tanpa kalian sadari, banyak banget orang di luar sana yang ingin ada di posisi kalian. Sesekali coba lihat ke bawah dan syukuri sejauh apa kalian sudah melangkah. Dan buat teman-teman yang linjur, jangan khawatir. Kalian pasti bisa kok! Kalian nggak sendirian. Kalau bingung atau kesulitan, jangan ragu buat tanya-tanya ke teman — pasti dibantu. So enjoy the process guys! Sampai jumpa di semester 2! 👋`,
      ],
      loop: false,
      backDelay: 1000,
      typeSpeed: 70,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <div className="w-full h-screen grid place-content-center bg-cover bg-center bg-no-repeat object-cover z-50 p-4 ">
      <Navbar />
      <Snow />
      {isSayHelloVisible ? (
        <SayHello />
      ) : (
        <div className="w-full flex justify-center">
          <div className="flex flex-col md:flex-row justify-evenly items-center ">
            <img
              id="necoImage"
              className="w-52 md:w-96"
              src="public/neco.png"
              alt="Neco"
            />
            <span
              ref={helloRef}
              className="text-white text-xs md:text-sm w-full md:min-w-2xl"
            ></span>
          </div>
        </div>
      )}
    </div>
  );
};

export default WelcomePage;
