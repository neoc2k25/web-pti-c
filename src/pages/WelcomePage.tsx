import { useEffect, useRef } from "react";
import SayHello from "../component/SayHello";
import Typed from "typed.js";
import { useCurrentName, useCurrentSayHello } from "../state/_Init";
import MainLayout from "../layouts/MainLayout";

const WelcomePage = () => {
  /** cache is say hello */
  const isSayHelloVisible = useCurrentSayHello((s: any) => s.isSayHello);
  const setIsSayHelloVisible = useCurrentSayHello(
    (s: any) => s.setIsSayHello
  );

  /** cache current name */
  const name = useCurrentName((s: any) => s.name);

  const helloRef = useRef<HTMLSpanElement | null>(null);

  /**handle typed */
  useEffect(() => {
    const typed = new Typed(helloRef.current, {
      strings: [
        `Halo ${
          name ?? "guys"
        }! Seperti yang kamu tahu, aku Neco — maskot dari Neo-C, Pertama-tama aku mau ngasih kalian semangat buat ngerjain TA(Tugas Akhir), tugas-tugas lainnya dan jangan lupa belajar buat UAS. Percayalah, Kamu harus benar-benar menikmati masa kuliah ini sebelum masuk ke dunia kerja — sebelum Kamu merindukan suasana kelas, laprak, positron, tugas bareng, dan momen-momen seru bersama teman-teman. Kadang kita merasa kurang bersyukur karena nggak bisa kuliah di kampus impian, tapi tanpa Kamu sadari, banyak banget orang di luar sana yang ingin ada di posisi Kamu. Sesekali coba lihat ke bawah dan syukuri sejauh apa Kamu sudah melangkah. Dan buat teman-teman yang linjur, jangan khawatir. Kamu pasti bisa kok! Kamu nggak sendirian. Kalau bingung atau kesulitan, jangan ragu buat tanya-tanya ke teman — pasti dibantu. So enjoy the process guys! Sampai jumpa di semester 2! `,
      ],
      loop: false,
      backDelay: 1000,
      typeSpeed: 70,
      showCursor: false,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, [isSayHelloVisible, name]);
  return (
    <MainLayout>
      <div className="w-full grid place-content-center bg-cover bg-center bg-no-repeat object-cover z-50 p-4">
        <div
          className={`${
            isSayHelloVisible ? "hidden" : "w-full flex justify-center"
          }`}
        >
          <div className="w-full flex flex-col md:flex-row justify-evenly items-center ">
            <img
              onClick={() => setIsSayHelloVisible(!isSayHelloVisible)}
              id="necoImage"
              className="w-52 md:w-96 animate-ping"
              src="/necos/neco.webp"
              alt="Neco"
            />
            <div className="min-w-xs max-w-full sm:min-w-xl sm:max-w-xl  md:min-w-3xl md:max-w-3xl">
              <span
                ref={helloRef}
                className="text-center md:text-left text-white text-xs md:text-sm block"
              ></span>
            </div>
          </div>
        </div>
        <div className="w-full grid place-content-center">
          {isSayHelloVisible && <SayHello />}
        </div>
      </div>
    </MainLayout>
  );
};

export default WelcomePage;
