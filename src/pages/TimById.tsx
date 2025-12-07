import { useParams } from "react-router-dom";
import tim from "../../data/tim.json";
import type { TypeTimMap } from "../Interface/_type";
import MainLayout from "../layouts/MainLayout";
import { useCurrentName, useForcedTimById } from "../state/_Init";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import Quest from "../component/Quest";
import Btn from "../Element/Btn";
import Instagram from "../Element/Icon/Sosmed/Instagram";
import Tiktok from "../Element/Icon/Sosmed/Tiktok";
import Github from "../Element/Icon/Sosmed/Github";
import Thread from "../Element/Icon/Sosmed/Thread";
import Spotify from "../Element/Icon/Sosmed/Spotify";
import Play from "../Element/Icon/Play";
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

  /**handle do not scroll if step is 1 or 2 */
  useEffect(() => {
    if (step.no === 1) {
      document.body.style.overflow = "hidden";
    } else if (step.no === 2) {
      document.body.style.overflow = "hidden";
    } else if (step.no === 3) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [step.no]);

  if (step.no === 1) {
    message = `Haloo ${name},  perkenalkan dia ${data?.nama}👋, ${data?.kataPengantar.pertama}`;
  } else if (step.no === 2) {
    message = `${data?.kataPengantar?.kedua}`;
  } else if (step.no === 3) {
    message = `Yuk, kita mengenal lebih jauh tentang ${data?.nama}...🎊🎉`;
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
                className="w-24 sm:w-32 relative "
                alt=""
              />
              <img
                src="/necos/neco bawa_hadiah.png"
                className="w-24 sm:w-32 relative"
                alt=""
              />
            </div>
            <Btn onClick={() => setStep({ id: id, no: 2 })} className="my-4">
              Lanjut
            </Btn>
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
            <Btn onClick={() => setStep({ id: id, no: 3 })}>Lanjut</Btn>
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
            <Btn onClick={() => setStep({ id: id, no: 4 })}>Lanjut</Btn>
          </Quest>
        )}

        <div
          className={`${step.no === 1 && "blur-2xl pointer-events-none"} ${
            step.no === 2 && "blur-md pointer-events-none"
          } ${step.no === 3 && "blur-sm pointer-events-none"} ${
            step === 4 && "blur-none"
          } flex flex-wrap justify-center gap-y-2 pt-4 `}
        >
          <span ref={step.no === 4 ? forcedRef : undefined}></span>

          <div className="max-w-sm md:max-w-3xl md:gap-4 shadow-xs text-white p-1 flex flex-col md:flex-row justify-evenly z-50">
            <img
              className="rounded-t-base max-w-xs transition-all duration-500 bg-no-repeat rounded-xl md:rounded-3xl shadow-[0_0_12px_#00eaff]"
              // src={`${fotoId?.id === t.id ? fotoId.foto1 : t.foto2}`}
              src={`${data?.foto1}`}
              loading="lazy"
              // onClick={() => {
              //   handleChangeImage(t.id);
              // }}
              alt=""
            />
            <div className="p-1 md:pl-2">
              <div className="flex items-center gap-4 mt-4 mb-6">
                <h5 className="text-center text-base font-semibold tracking-tight text-heading">
                  {data?.nama}
                </h5>
                <div
                  onClick={() => setStep({ id, no: 1 })}
                  className={`flex justify-center items-center gap-2 bg-[#00eaff] py-2 rounded-md border border-black px-4`}
                >
                  <p className="text-outline">Play</p> <Play height={32} width={32} fill="white"/>{" "}
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-xs ">
                  Deskripsi: {data?.kepribadian.deskripsiSingkat}
                </p>
                <p className="text-xs ">
                  Kelebihan: {data?.kepribadian.kelebihan}
                </p>
                <p className="text-xs ">Skill: {data?.kepribadian.skill}</p>
                <p className="text-xs ">Hobi: {data?.kepribadian.hobi}</p>
                <p className="text-xs ">
                  Fav Musik: {data?.kepribadian.favMusik}
                </p>
              </div>
              <div className=" mt-8">
                <p>Yuk , Kunjungi Sosial Media Saya</p>
                <div className="flex gap-4 mt-2">
                  <a href={`${data?.links?.ig}`}>
                    <Instagram height={32} width={32} />
                  </a>
                  <a href={`${data?.links?.tiktok}`}>
                    <Tiktok height="32" width="32" fill="#fff" />
                  </a>
                  <a href={`${data?.links?.thread}`}>
                    <Thread height={32} width={32} fill="white" />
                  </a>
                  <a href={`${data?.links?.spotify}`}>
                    <Spotify height={32} width={32} />
                  </a>
                  <a href={`${data?.links?.github}`}>
                    <Github height={32} width={32} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default TimById;
