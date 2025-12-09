import { useParams } from "react-router-dom";
import tim from "../../data/tim.json";
import type { TypeTimMap } from "../Interface/_type";
import MainLayout from "../layouts/MainLayout";
import { useCurrentName, useForcedTimById } from "../state/_Init";
import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import Quest from "../component/Quest";
import Btn from "../Element/Btn";
import Instagram from "../Element/Icon/Sosmed/Instagram";
import Tiktok from "../Element/Icon/Sosmed/Tiktok";
import Github from "../Element/Icon/Sosmed/Github";
import Thread from "../Element/Icon/Sosmed/Thread";
import Spotify from "../Element/Icon/Sosmed/Spotify";
import Play from "../Element/Icon/Play";
import { moveButton } from "../utils/moveBtn";
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

  /** eits tidak kena.... */
  const [pos, setPos] = useState({ x: 0, y: 0 });

  /** on complete string in typed */
  const [typedComplete, setTypedComplete] = useState<number>(0);

  /**handle do not scroll if step is 1 or 2 */
  useEffect(() => {
    if (step.no === 1) {
      document.body.style.overflow = "hidden";
    } else if (step.no === 2) {
      document.body.style.overflow = "hidden";
    } else if (step.no === 3) {
      document.body.style.overflow = "hidden";
    } else if (step.no === 4) {
      document.body.style.overflow = "hidden";
    } else if (step.no === 5) {
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
    message = `Sebelumnya, apakah kamu mau menjadi teman dari ${data?.nama}...🤗?`;
  } else if (step.no === 4) {
    message = `Terima kasih atas konfirmasi nya..😍\n Kalian resmi berteman🤝`;
  } else if (step.no === 5) {
    message = `Yuk, kita mengenal lebih jauh tentang teman baru kita,(${data?.nama} )...🎊🎉`;
  } else {
    message = "";
  }

  /** handle typed */
  useEffect(() => {
    if (!forcedRef.current) return;
    const typed = new Typed(forcedRef.current, {
      strings: [message],
      loop: false,
      backDelay: 1000,
      typeSpeed: 50,
      showCursor: false,
      onStringTyped() {
        /** get message styep by step */
        setTypedComplete(1);
      },
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, [message, step.id]);

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
            <div className="w-full flex justify-center gap-2  relative animate-opacity my-4">
              <img
                src={`${data?.foto1}`}
                className="w-28 sm:w-32 relative "
                alt=""
              />
              <img
                src="/necos/neco bawa_hadiah.png"
                className="w-32 md:w-44 relative"
                alt=""
              />
            </div>
            <Btn
              onClick={() => {
                setStep({ id: id, no: 2 }), setTypedComplete(0);
              }}
              className={`${
                typedComplete === 1
                  ? "visible opacity-100"
                  : "invisible opacity-0"
              } transition-all duration-500 my-4`}
            >
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
              className="w-32 relative left-1/2 -translate-x-1/2 animate-opacity my-4"
              alt=""
            />
            <Btn
              className={`${
                typedComplete === 1
                  ? "visible opacity-100"
                  : "invisible opacity-0"
              } transition-all duration-500 my-4`}
              onClick={() => {
                setStep({ id: id, no: 3 }), setTypedComplete(0);
              }}
            >
              Lanjut
            </Btn>
          </Quest>
        )}
        {step.no === 3 && (
          <Quest>
            <span
              ref={forcedRef}
              className="text-xs md:text-base block max-w-full min-h-20 md:min-h-16 leading-loose"
            ></span>
            <div className="w-full min-h-32 relative z-10">
              <Btn
                onClick={() => {
                  setStep({ id: id, no: 4 }), setTypedComplete(0);
                }}
                className={`absolute bottom-0 left-0 ${
                  typedComplete === 1
                    ? "visible opacity-100"
                    : "invisible opacity-0"
                } transition-all duration-500 my-4`}
              >
                Mau
              </Btn>
              <Btn
                style={{
                  transform: `translate(${pos.x}px, ${pos.y}px)`,
                  transition: "0.2s ease",
                }}
                onClick={() => moveButton(setPos)}
                className={`absolute bottom-0 right-0 ${
                  typedComplete === 1
                    ? "visible opacity-100"
                    : "invisible opacity-0"
                } transition-all duration-500 my-4`}
              >
                Tidak
              </Btn>
            </div>
            <div className="w-full flex justify-center animate-opacity relative">
              <img
                src="/necos/neco-melas.png"
                className="w-24 sm:w-32"
                alt=""
              />
              <img src="/necos/neco-qna.png" className="w-44" alt="" />
            </div>
          </Quest>
        )}
        {step.no === 4 && (
          <Quest>
            <div className="text-xs md:text-base">
              <span
                className=" block max-w-full min-h-20 md:min-h-16"
                ref={forcedRef}
              ></span>
            </div>
            <div className="flex gap-2 justify-center">
              <img
                src="/necos/neco-bahagia.png"
                className="w-32 animate-bounce"
                alt=""
              />
              <img
                src="/necos/neco-ye.png"
                className="w-32 animate-bounce"
                alt=""
              />
            </div>
            <Btn
              className={` ${
                typedComplete === 1
                  ? "visible opacity-100"
                  : "invisible opacity-0"
              } transition-all duration-500 my-4`}
              onClick={() => {
                setStep({ id: id, no: 5 }), setTypedComplete(0);
              }}
            >
              Lanjut
            </Btn>
          </Quest>
        )}
        {step.no === 5 && (
          <Quest>
            <span
              ref={forcedRef}
              className="text-xs md:text-base block max-w-full min-h-20 md:min-h-16"
            ></span>
            <img
              src="/necos/neco-gembira.png"
              className="w-32 relative left-1/2 -translate-x-1/2 animate-opacity my-4"
              alt=""
            />
            <Btn
              className={` ${
                typedComplete === 1
                  ? "visible opacity-100"
                  : "invisible opacity-0"
              } transition-all duration-500 my-4`}
              onClick={() => {
                setStep({ id: id, no: 6 }), setTypedComplete(0);
              }}
            >
              Lanjut
            </Btn>
          </Quest>
        )}

        <div
          className={`${step.no === 1 && "blur-3xl"} ${
            step.no === 2 && "blur-2xl"
          } ${step.no === 3 && "blur-xl"} ${step.no === 4 && "blur-md"} ${
            step.no === 5 && "blur-sm"
          } ${
            step === 6 && "blur-none"
          } flex flex-wrap justify-center gap-y-2 pt-4 `}
        >
          <span ref={step.no === 6 ? forcedRef : undefined}></span>

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
                  <p className="text-outline">Play</p>{" "}
                  <Play height={32} width={32} fill="white" />{" "}
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
                <p>Yuk, Kunjungi Sosial Media Saya</p>
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
