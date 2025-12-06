import Navbar from "../layouts/Navbar";
import tim from "../../data/tim.json";
import type { TypeTim, TypeTimMap } from "../Interface/_type";
import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { useForced } from "../state/_Init";
import { Link } from "react-router-dom";

const TimPage = () => {
  /** handle caching current step user */
  const step = useForced((s: any) => s.step);
  const setStep = useForced((s: any) => s.setStep);
  const forcedRef = useRef(null);

  /** eits tidak kena.... */
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const moveButton = () => {
    const randomX = Math.random() * 200 - 160; // -160 → 160 px
    const randomY = Math.random() * 200 - 160;

    setPos({ x: randomX, y: randomY });
  };

  /** handle message to user */
  let message = "";

  if (step === 1) {
    message =
      "Wahh Ada pengunjung 🤗, Aku mau tanya nih... (●'◡'●),  apakah kamu setuju jika seluruh member pti-c 2025 pintar dan baik hati?";
  } else if (step === 2) {
    message = "Terima Kasih atas Konfirmasi nya 😍";
  } else if (step === 3) {
    message = "";
  }
  /** handle typed */
  useEffect(() => {
    const typed = new Typed(forcedRef.current, {
      strings: [message],
      loop: false,
      backDelay: 1000,
      typeSpeed: 50,
      showCursor: false,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, [forcedRef.current, message]);

  const [fotoId, setFotoId] = useState<TypeTimMap | null>(null);

  const handleChangeImage = (id: number) => {
    const data = tim.data.find((d: TypeTimMap) => d.id === id);

    setFotoId(data ?? null);
  };
  return (
    <div className="w-full pt-10">
      <Navbar />
      <div className="pt-20 pb-4">
        {step === 1 && (
          <div className="fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-50">
            <div className="flex flex-col justify-between min-w-xs md:min-w-xl md:max-w-xl bg-white rounded-md relative p-4 overflow-hidden drop-shadow-[0_0_12px_#00eaff] opacity-90">
              <span
                ref={forcedRef}
                className="text-xs md:text-base block max-w-full min-h-20 md:min-h-16"
              ></span>
              <div className="w-full min-h-32 relative z-10">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="absolute bottom-0 left-0 bg-[#00eaff] px-4 py-2 rounded-md border border-black"
                >
                  Ya
                </button>
                <button
                  type="button"
                  className="absolute bottom-0 right-0 bg-[#00eaff] px-4 py-2 rounded-md border border-black"
                  onClick={moveButton}
                  style={{
                    transform: `translate(${pos.x}px, ${pos.y}px)`,
                    transition: "0.2s ease",
                  }}
                >
                  Tidak
                </button>
              </div>
              <div className="w-full flex justify-center animate-left-to-mid relative">
                <img
                  src="/necos/neco-melas.png"
                  className="w-24 sm:w-32"
                  alt=""
                />
                <img src="/necos/neco-qna.png" className="w-44" alt="" />
              </div>
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-50">
            <div className="flex flex-col justify-between min-w-xs md:min-w-xl md:max-w-xl bg-white rounded-md relative p-4 overflow-hidden drop-shadow-[0_0_12px_#00eaff] opacity-90">
              <span
                ref={forcedRef}
                className="text-base block max-w-full min-h-20 md:min-h-16"
              ></span>
              <div className="w-full flex justify-between items-center">
                <img
                  src="/necos/neco-resek.png"
                  className="relative w-24 sm:w-32 animate-left-to-left"
                  alt=""
                />
                <button
                  onClick={() => setStep(3)}
                  className="bg-[#00eaff] px-4 py-2 rounded-md border border-black"
                >
                  Lanjut
                </button>
              </div>
            </div>
          </div>
        )}
        <div
          className={`${step === 1 && "blur-2xl pointer-events-none"} ${
            step === 2 && "blur-md pointer-events-none"
          } ${
            step === 3 && "blur-none"
          } flex flex-wrap justify-center gap-y-2 `}
        >
          <span ref={step === 3 ? forcedRef : undefined}></span>
          {(tim as TypeTim).data.map((t: TypeTimMap) => (
            <div
              key={t.id}
              className=" block max-w-xs rounded-base shadow-xs  text-white p-1 border sm:mx-2"
            >
              <img
                className="rounded-t-base w-full transition-all duration-500"
                src={`${fotoId?.id === t.id ? fotoId.foto1 : t.foto2}`}
                onClick={() => {
                  handleChangeImage(t.id);
                }}
                alt=""
              />
              <div className="p-6 text-center">
                <h5 className="mt-3 mb-6 text-xs sm:text-xl md:text-2xl font-semibold tracking-tight text-heading">
                  {t.nama}
                </h5>

                <Link
                  to={`/tim/${t.id}`}
                  className="inline-flex items-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none animate-pulse underline"
                >
                  Read more
                  {/* <span className="text-2xl animate-lambai">👋</span> */}
                  <svg
                    className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 12H5m14 0-4 4m4-4-4-4"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimPage;
