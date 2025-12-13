import tims from "../../data/tim.json";
import type { TypeTim, TypeTimMap } from "../Interface/_type";
import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { useForcedTim } from "../state/_Init";
import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Quest from "../component/Quest";
import Btn from "../Element/Btn";
import { moveButton } from "../utils/moveBtn";
import TypedText from "../utils/Typed";

const TimPage = () => {
  /** handle caching current step user */
  const step = useForcedTim((s: any) => s.step);
  const setStep = useForcedTim((s: any) => s.setStep);

  /** handle step message */
  const forcedRef = useRef(null);

  /** eits tidak kena.... */
  const [pos, setPos] = useState({ x: 0, y: 0 });

  /** on complete string in typed */
  const [typedComplete, setTypedComplete] = useState<string | null>("");

  /**handle do not scroll */
  useEffect(() => {
    if (step === 1) {
      document.body.style.overflow = "hidden";
    } else if (step === 2) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [step]);

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
      onComplete(self: any) {
        /** get message styep by step */
        setTypedComplete(self?.strings[0]);
      },
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, [message]);

  // const [fotoId, setFotoId] = useState<TypeTimMap | null>(null);

  // const handleChangeImage = (id: number) => {
  //   const data = tim.data.find((d: TypeTimMap) => d.id === id);

  //   setFotoId(data ?? null);
  // };
  return (
    <MainLayout>
      {step === 1 && (
        <Quest>
          <TypedText ref={forcedRef}></TypedText>
          <div
            className={`${
              typedComplete === message
                ? "visible opacity-100"
                : "invisible opacity-0"
            } transition-all duration-500 w-full min-h-32 relative z-10`}
          >
            <Btn
              onClick={() => setStep(2)}
              className="absolute bottom-0 left-0"
            >
              Iya
            </Btn>
            <Btn
              style={{
                transform: `translate(${pos.x}px, ${pos.y}px)`,
                transition: "0.2s ease",
              }}
              onClick={() => moveButton(setPos)}
              className="absolute bottom-0 right-0"
            >
              Tidak
            </Btn>
          </div>
          <div className="w-full flex justify-center animate-opacity relative">
            <img src="/necos/neco-melas.webp" className="w-24 sm:w-32" alt="" />
            <img src="/necos/neco-qna.webp" className="w-44" alt="" />
          </div>
        </Quest>
      )}
      {step === 2 && (
        <Quest>
          <TypedText ref={forcedRef}></TypedText>
          <div className="w-full flex justify-between md:justify-evenly items-center">
            <img
              src="/necos/neco-resek.webp"
              className="relative w-24 sm:w-32 animate-opacity"
              alt=""
            />
            <Btn
              className={`${
                typedComplete === message
                  ? "visible opacity-100"
                  : "invisible opacity-0"
              } transition-all duration-500`}
              onClick={() => setStep(3)}
            >
              Lanjut
            </Btn>
          </div>
        </Quest>
      )}
      <div
        className={`${step === 1 && "blur-2xl"} ${step === 2 && "blur-md"} ${
          step === 3 && "blur-none"
        } flex flex-wrap justify-center gap-y-2 pt-4`}
      >
        <span ref={step === 3 ? forcedRef : undefined}></span>
        {(tims as TypeTim).data.map((t: TypeTimMap) => (
          <div
            key={t.id}
            className="max-w-xs md:max-w-2xs rounded-base shadow-xs  text-white p-1 border border-[#00eaff] sm:mx-2 flex flex-col justify-between z-50"
          >
            <img
              className="rounded-t-base w-full transition-all duration-500 bg-no-repeat"
              // src={`${fotoId?.id === t.id ? fotoId.foto1 : t.foto2}`}
              src={`${t.foto1}`}
              loading="lazy"
              // onClick={() => {
              //   handleChangeImage(t.id);
              // }}
              alt=""
            />
            <div className="p-6 text-center">
              <h5 className="mt-3 mb-6 text-xs sm:text-base font-semibold tracking-tight text-heading">
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
    </MainLayout>
  );
};

export default TimPage;
