import { useParams } from "react-router-dom";
import tim from "../../data/tim.json";
import type { TypeTimMap } from "../Interface/_type";
import MainLayout from "../layouts/MainLayout";
import { useCurrentName, useForcedTimById } from "../state/_Init";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import Quest from "../component/Quest";
const TimById = () => {
  /** id member */
  const { id } = useParams();

  /** cache current name */
  const name = useCurrentName((s: any) => s.name);

  /** get data member spesific byId */
  const data = tim.data.find((d: TypeTimMap) => d.id === parseInt(id ?? "0"));

  /** caching step */
  const useStore = useForcedTimById(parseInt(id ?? "0"));

  const { step, setStep }: any = useStore();

  /** handle step message */
  const forcedRef = useRef(null);

  /** handle message to user */
  let message = "";

  if (step.no === 1) {
    message = `Haloo ${name},  perkenalkan dia ${data?.nama}👋, dia tuh dikenal sangat suka bermain sepak bola loh... ⚽`;
  } else if (step.no === 2) {
    message =
      "Apakah kamu tau 🤔,dia dikenal sangat mudah bersosialisasi dengan siapapun 🥰";
  } else if (step.no === 3) {
    message = "Yuk, kita mengenal lebih jauh tentang dia.... 🎉";
  } else {
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
  }, [forcedRef.current, message, step.id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <MainLayout>
      <div className="fixed inset-0 opacity-10"></div>
      <div className="p-4">
        {step.no === 1 && (
          <Quest>
            <span
              ref={forcedRef}
              className="text-xs md:text-base block max-w-full min-h-20 md:min-h-16"
            ></span>
            <div className="w-full flex justify-center gap-2  relative animate-left-to-mid my-4">
              <img
                src={`${data?.foto1}`}
                className="w-24 sm:w-32 relative"
                alt=""
              />
              <img
                src="/necos/neco bawa_hadiah.png"
                className="w-24 sm:w-32 relative"
                alt=""
              />
            </div>
            <button
              type="button"
              onClick={() => setStep({ id: id, no: 2 })}
              className="my-4 bg-[#00eaff] px-4 py-2 rounded-md border border-black"
            >
              Lanjut
            </button>
          </Quest>
        )}
        {step.no === 2 && (
          <Quest>
            <span
              ref={forcedRef}
              className="text-xs md:text-base block max-w-full min-h-20 md:min-h-16"
            ></span>
            <img
              src="/necos/neco-senyum_dan_bertanya.png"
              className="w-32 relative animate-left-to-mid "
              alt=""
            />
            <button
              type="button"
              onClick={() => setStep({ id: id, no: 3 })}
              className=" bg-[#00eaff] px-4 py-2 rounded-md border border-black"
            >
              Lanjut
            </button>
          </Quest>
        )}
        {step.no === 3 && (
          <Quest>
            <span
              ref={forcedRef}
              className="text-xs md:text-base block max-w-full min-h-20 md:min-h-16"
            ></span>
            <img
              src="/necos/neco-gembira.png"
              className="w-32 relative animate-left-to-mid "
              alt=""
            />
            <button
              type="button"
              onClick={() => setStep({ id: id, no: 4 })}
              className=" bg-[#00eaff] px-4 py-2 rounded-md border border-black"
            >
              Lanjut
            </button>
          </Quest>
        )}
        <div
          className={`${step.no === 1 && "blur-2xl pointer-events-none"} ${
            step.no === 2 && "blur-md pointer-events-none"
          } ${step.no === 3 && "blur-sm pointer-events-none"} ${
            step === 4 && "blur-none"
          } flex flex-wrap justify-center gap-y-2 pt-4`}
        >
          <span ref={step.no === 4 ? forcedRef : undefined}></span>
          <div className="max-w-sm md:max-w-2xl shadow-xs text-white p-1 flex flex-col md:flex-row justify-evenly z-50">
            <img
              className="rounded-t-base max-w-xs transition-all duration-500 bg-no-repeat rounded-xl md:rounded-3xl"
              // src={`${fotoId?.id === t.id ? fotoId.foto1 : t.foto2}`}
              src={`${data?.foto1}`}
              loading="lazy"
              // onClick={() => {
              //   handleChangeImage(t.id);
              // }}
              alt=""
            />
            <div className="p-1 md:pl-4">
              <h5 className="text-center mt-3 mb-6 text-base font-semibold tracking-tight text-heading">
                {data?.nama}
              </h5>
              <p className="text-xs ">
                saya sangat suka mempelajari analisis teknologi, dan suka
                membaca filsafat
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default TimById;
