import { useEffect, useRef, useState } from "react";
import mentors from "../../data/mentor.json";
import MainLayout from "../layouts/MainLayout";
import Typed from "typed.js";
import { useForcedPositron } from "../state/_Init";
import Quest from "../component/Quest";
import Btn from "../Element/Btn";
import { moveButton } from "../utils/moveBtn";
import type { TypeTim, TypeTimMap } from "../Interface/_type";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TypedText from "../utils/Typed";
import { MsgPositron } from "../utils/_Message";

const PositronPage = () => {
  /** foto forum maba */
  const forumMabas = [
    {
      id: 1,
      url: "/positron/forum_maba.jpg",
    },
    {
      id: 2,
      url: "/positron/forum_maba_2.jpg",
    },
  ];

  /** eits tidak kena.... */
  const [pos, setPos] = useState({ x: 0, y: 0 });

  /** on complete string in typed */
  const [typedComplete, setTypedComplete] = useState<number>(0);

  /** handle caching current step user */
  const step = useForcedPositron((s: any) => s.step);
  const setStep = useForcedPositron((s: any) => s.setStep);

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

  /** handle step message */
  const forcedRef = useRef(null);

  /** handle typed */
  useEffect(() => {
    const typed = new Typed(forcedRef.current, {
      strings: [MsgPositron(step)],
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
  }, [step]);
  return (
    <MainLayout>
      <div className="pt-4">
        {step === 1 && (
          <Quest>
            <TypedText ref={forcedRef}></TypedText>
            <div
              className={`${
                typedComplete === 1
                  ? "visible opacity-100"
                  : "invisible opacity-0"
              } transition-all duration-500 w-full min-h-32 relative z-10`}
            >
              <Btn
                onClick={() => {
                  setStep(2), setTypedComplete(0);
                }}
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
            <div className="w-full flex items-center gap-2 justify-center relative">
              <img
                src="/necos/neco-salting.webp"
                className="w-24 sm:w-32 animate-opacity "
                alt=""
              />
              <img
                src="/necos/neco-senyum_dan_bertanya.webp"
                className="w-24 animate-opacity "
                alt=""
              />
            </div>
          </Quest>
        )}
        {step === 2 && (
          <Quest>
            <TypedText ref={forcedRef}></TypedText>

            <div className="w-full flex justify-between items-center  relative">
              <img
                src="/necos/neco bawa_hadiah.webp"
                className="w-24 sm:w-32 animate-opacity"
                alt=""
              />
              <Btn
                onClick={() => {
                  setStep(3), setTypedComplete(0);
                }}
                className={`${
                  typedComplete === 1
                    ? "visible opacity-100"
                    : "invisible opacity-0"
                } transition-all duration-500 my-4`}
              >
                Lanjut
              </Btn>
            </div>
          </Quest>
        )}
        {step === 3 && (
          <Quest>
            <TypedText ref={forcedRef}></TypedText>

            <div className="w-full flex justify-between items-center  relative">
              <img
                src="/necos/neco.webp"
                className="w-32 animate-opacity"
                alt=""
              />
              <Btn
                onClick={() => {
                  setStep(4), setTypedComplete(0);
                }}
                className={`${
                  typedComplete === 1
                    ? "visible opacity-100"
                    : "invisible opacity-0"
                } transition-all duration-500 my-4`}
              >
                Lanjut
              </Btn>
            </div>
          </Quest>
        )}
        {step === 4 && (
          <Quest>
            <TypedText ref={forcedRef}></TypedText>
            <div className="max-w-xs">
              <Swiper
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                spaceBetween={50}
                slidesPerView={1}
                navigation={true}
                className=""
                modules={[Autoplay]}
              >
                {(mentors as TypeTim).data.map((t: TypeTimMap) => (
                  <SwiperSlide
                    key={t.id}
                    className="max-w-xs md:max-w-2xs rounded-base shadow-xs  text-white p-1 sm:mx-2 flex flex-col justify-between z-50"
                  >
                    <img
                      className="rounded-t-base w-3/5  md:w-full transition-all duration-500 bg-no-repeat relative left-1/2 -translate-x-1/2"
                      // src={`${fotoId?.id === t.id ? fotoId.foto1 : t.foto2}`}
                      src={`${t.foto1}`}
                      loading="lazy"
                      // onClick={() => {
                      //   handleChangeImage(t.id);
                      // }}
                      alt=""
                    />
                    <Link
                      to={`/tim/${t.id}`}
                      className="block w-full text-center relative text-black"
                    >
                      <span className="animate-pulse underline ">{t.nama}</span>

                      <span className="text-2xl inline-block animate-lambai">
                        👋
                      </span>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="w-full flex justify-center items-center animate-opacity relative">
              <Btn
                onClick={() => {
                  setStep(5), setTypedComplete(0);
                }}
                className={`${
                  typedComplete === 1
                    ? "visible opacity-100"
                    : "invisible opacity-0"
                } transition-all duration-500 my-4 w-full`}
              >
                Lanjut
              </Btn>
            </div>
          </Quest>
        )}
        {step === 5 && (
          <Quest>
            <TypedText ref={forcedRef}></TypedText>
            <div className="flex justify-evenly items-center gap-1">
              <img
                src="/necos/neco-gembira.webp"
                className="w-32 animate-opacity"
                alt=""
              />
              <Btn
                onClick={() => {
                  setStep(6), setTypedComplete(0);
                }}
                className={`${
                  typedComplete === 1
                    ? "visible opacity-100"
                    : "invisible opacity-0"
                } transition-all duration-500 my-4`}
              >
                Lanjut
              </Btn>
            </div>
          </Quest>
        )}
        {step === 6 && (
          <Quest>
            <TypedText ref={forcedRef}></TypedText>
            <div className="w-full flex justify-center gap-2  relative animate-opacity my-4">
              <img
                src={`/members/jaki.webp`}
                className="max-w-28 sm:max-w-44 relative "
                alt=""
              />
              <img
                src="/necos/neco bawa_hadiah.webp"
                className="max-w-32 sm:max-w-44 relative"
                alt=""
              />
            </div>
            <Btn
              onClick={() => {
                setStep(7), setTypedComplete(0);
              }}
              className={`${
                typedComplete === 1
                  ? "visible opacity-100"
                  : "invisible opacity-0"
              } transition-all duration-500 my-4 w-full`}
            >
              Lanjut
            </Btn>
          </Quest>
        )}
        {step === 7 && (
          <Quest>
            <TypedText ref={forcedRef}></TypedText>
            <div className="mt-2 flex justify-center">
              <img
                className="rounded-t-base md:w-full transition-all duration-500 bg-no-repeat max-w-xs "
                // src={`${fotoId?.id === t.id ? fotoId.foto1 : t.foto2}`}
                src={`/positron/disiplin.jpg`}
                loading="lazy"
                // onClick={() => {
                //   handleChangeImage(t.id);
                // }}
                alt=""
              />
            </div>
            <Btn
              onClick={() => {
                setStep(8), setTypedComplete(0);
              }}
              className={`${
                typedComplete === 1
                  ? "visible opacity-100"
                  : "invisible opacity-0"
              } transition-all duration-500 my-4 w-full`}
            >
              Lanjut
            </Btn>
          </Quest>
        )}
        {step === 8 && (
          <Quest>
            <TypedText ref={forcedRef}></TypedText>
            <div className="flex justify-evenly items-center gap-1">
              <img
                src="/necos/neco-sedih.webp"
                className="w-32 animate-opacity"
                alt=""
              />
              <img
                src="/necos/neco-melas.webp"
                className="w-28 md:w-32 animate-opacity"
                alt=""
              />
            </div>
            <Btn
              onClick={() => {
                setStep(9), setTypedComplete(0);
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
        {step === 9 && (
          <Quest>
            <TypedText ref={forcedRef}></TypedText>
            <div className="flex justify-evenly items-center gap-1 mt-2">
              <img
                src="/necos/neco-qna.webp"
                className="w-32 animate-opacity"
                alt=""
              />
              <Btn
                onClick={() => {
                  setStep(10), setTypedComplete(0);
                }}
                className={`${
                  typedComplete === 1
                    ? "visible opacity-100"
                    : "invisible opacity-0"
                } transition-all duration-500 my-4`}
              >
                Lanjut
              </Btn>
            </div>
          </Quest>
        )}
        {step === 10 && (
          <Quest>
            <TypedText ref={forcedRef}></TypedText>
            <div className=" mt-2 flex justify-center max-w-xs md:max-w-sm">
              <Swiper
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                spaceBetween={50}
                slidesPerView={1}
                navigation={true}
                className=""
                modules={[Autoplay]}
              >
                {forumMabas.map((fm: { id: number; url: string }) => (
                  <SwiperSlide
                    key={fm.id}
                    className="max-w-xs md:max-w-sm rounded-base shadow-xs text-white p-1 sm:mx-2 flex flex-col justify-between z-50"
                  >
                    <img
                      className="rounded-t-base w-full transition-all duration-500 bg-no-repeat"
                      src={`${fm.url}`}
                      loading="lazy"
                      alt=""
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="flex justify-evenly items-center gap-1"></div>
            <Btn
              onClick={() => {
                setStep(11), setTypedComplete(0);
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
        {step === 11 && (
          <Quest>
            <TypedText ref={forcedRef}></TypedText>
            <div className="flex justify-evenly items-center gap-1 mt-2">
              <img
                src="/necos/neco.webp"
                className="w-32 animate-opacity"
                alt=""
              />
              <Btn
                onClick={() => {
                  setStep(12), setTypedComplete(0);
                }}
                className={`${
                  typedComplete === 1
                    ? "visible opacity-100"
                    : "invisible opacity-0"
                } transition-all duration-500 my-4`}
              >
                Lanjut
              </Btn>
            </div>
          </Quest>
        )}
        {step === 12 && (
          <Quest>
            <TypedText ref={forcedRef}></TypedText>
            <div className="flex justify-center mt-2">
              <img
                className="rounded-t-base max-w-xs md:max-w-sm transition-all duration-500 bg-no-repeat"
                src={`/positron/arus_1.jpg`}
                loading="lazy"
                alt=""
              />
            </div>
            <Btn
              onClick={() => {
                setStep(13), setTypedComplete(0);
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
        {step === 13 && (
          <Quest>
            <TypedText ref={forcedRef}></TypedText>
            <div className="flex justify-evenly items-center gap-1 mt-2">
              <img
                src="/necos/neco-salting.webp"
                className="w-32 animate-opacity"
                alt=""
              />
              <Btn
                onClick={() => {
                  setStep(14), setTypedComplete(0);
                }}
                className={`${
                  typedComplete === 1
                    ? "visible opacity-100"
                    : "invisible opacity-0"
                } transition-all duration-500 my-4`}
              >
                Lanjut
              </Btn>
            </div>
          </Quest>
        )}
        {step === 14 && (
          <Quest>
            <TypedText ref={forcedRef}></TypedText>
            <div className="flex justify-center mt-2">
              <img
                className="rounded-t-base w-full transition-all duration-500 bg-no-repeat max-w-xs md:max-w-sm"
                src={`/positron/ldk.jpg`}
                loading="lazy"
                alt=""
              />
            </div>
            <Btn
              onClick={() => {
                setStep(15), setTypedComplete(0);
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
        {step === 15 && (
          <Quest>
            <TypedText ref={forcedRef}></TypedText>
            <div className="flex justify-evenly items-center gap-1 mt-2">
              <img
                src="/necos/neco-senyum_dan_bertanya.webp"
                className="w-32 animate-opacity"
                alt=""
              />
              <Btn
                onClick={() => {
                  setStep(16), setTypedComplete(0);
                }}
                className={`${
                  typedComplete === 1
                    ? "visible opacity-100"
                    : "invisible opacity-0"
                } transition-all duration-500 my-4`}
              >
                Lanjut
              </Btn>
            </div>
          </Quest>
        )}
        {step === 16 && (
          <Quest>
            <TypedText ref={forcedRef}></TypedText>
            <div className="flex justify-center mt-2">
              <img
                className="rounded-t-base max-w-xs transition-all duration-500 bg-no-repeat "
                src={`/positron/ioh.jpg`}
                loading="lazy"
                alt=""
              />
            </div>
            <Btn
              onClick={() => {
                setStep(17), setTypedComplete(0);
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
        {step === 17 && (
          <Quest>
            <TypedText ref={forcedRef}></TypedText>
            <div className="flex justify-evenly items-center gap-1 mt-2">
              <img
                src="/necos/neco.webp"
                className="w-32 animate-opacity"
                alt=""
              />
              <Btn
                onClick={() => {
                  setStep(18), setTypedComplete(0);
                }}
                className={`${
                  typedComplete === 1
                    ? "visible opacity-100"
                    : "invisible opacity-0"
                } transition-all duration-500 my-4`}
              >
                Lanjut
              </Btn>
            </div>
          </Quest>
        )}
        {step === 18 && (
          <Quest>
            <TypedText ref={forcedRef}></TypedText>
            <div className="flex justify-center mt-2">
              <img
                className="rounded-t-base transition-all duration-500 bg-no-repeat max-w-xs"
                src={`/positron/arus_2.jpg`}
                loading="lazy"
                alt=""
              />
            </div>
            <Btn
              onClick={() => {
                setStep(19), setTypedComplete(0);
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
        {step === 19 && (
          <Quest>
            <TypedText ref={forcedRef}></TypedText>
            <div className="flex justify-evenly items-center gap-1 mt-2">
              <img
                src="/necos/neco-bahagia.webp"
                className="w-32 animate-opacity"
                alt=""
              />
              <Btn
                onClick={() => {
                  setStep(20), setTypedComplete(0);
                }}
                className={`${
                  typedComplete === 1
                    ? "visible opacity-100"
                    : "invisible opacity-0"
                } transition-all duration-500 my-4`}
              >
                Lanjut
              </Btn>
            </div>
          </Quest>
        )}
        {step === 20 && (
          <Quest>
            <TypedText ref={forcedRef}></TypedText>
            <div className="flex justify-center  mt-2">
              <img
                className="rounded-t-base w-full transition-all duration-500 bg-no-repeat max-w-xs md:max-w-sm"
                src={`/positron/nako.jpg`}
                loading="lazy"
                alt=""
              />
            </div>
            <Btn
              onClick={() => {
                setStep(21), setTypedComplete(0);
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
        {step === 21 && (
          <Quest>
            <TypedText ref={forcedRef}></TypedText>
            <div className="flex justify-evenly items-center gap-1">
              <img
                src="/necos/neco-senyum_dan_bertanya.webp"
                className="w-32 animate-opacity"
                alt=""
              />
              <Btn
                onClick={() => {
                  setStep(22), setTypedComplete(0);
                }}
                className={`${
                  typedComplete === 1
                    ? "visible opacity-100"
                    : "invisible opacity-0"
                } transition-all duration-500 my-4`}
              >
                Lanjut
              </Btn>
            </div>
          </Quest>
        )}
        {step === 22 && (
          <Quest>
            <TypedText ref={forcedRef}></TypedText>
            <div className="w-full flex justify-center gap-2  relative animate-opacity my-4">
              <img
                src={`/members/tesa.webp`}
                className="max-w-28 sm:max-w-44 relative "
                alt=""
              />
              <img
                src="/necos/neco bawa_hadiah.webp"
                className="max-w-32 sm:max-w-44 relative"
                alt=""
              />
            </div>
            <Btn
              onClick={() => {
                setStep(23), setTypedComplete(0);
              }}
              className={`${
                typedComplete === 1
                  ? "visible opacity-100"
                  : "invisible opacity-0"
              } transition-all duration-500 my-4 w-full`}
            >
              Lanjut
            </Btn>
          </Quest>
        )}
        {step === 23 && (
          <Quest>
            <TypedText ref={forcedRef}></TypedText>
            <div
              className={`${
                typedComplete === 1
                  ? "visible opacity-100"
                  : "invisible opacity-0"
              } transition-all duration-500 w-full flex justify-between py-4`}
            >
              <Btn
                onClick={() => {
                  window.location.href = "/";
                }}
                className="left-0"
              >
                Home
              </Btn>
              <Btn
                style={{
                  transform: `translate(${pos.x}px, ${pos.y}px)`,
                  transition: "0.2s ease",
                }}
                onClick={() => {
                  setStep(1), setTypedComplete(0);
                }}
                className="right-0"
              >
                Ulangi
              </Btn>
            </div>
            <div className="w-full flex items-center gap-2 justify-center relative">
              <img
                src="/necos/neco-salting.webp"
                className="w-24 sm:w-32 animate-opacity "
                alt=""
              />
              <img
                src="/necos/neco-trimakasih.webp"
                className="w-24 animate-opacity "
                alt=""
              />
              <img
                src="/necos/neco-goodjob.webp"
                className="w-24 animate-opacity "
                alt=""
              />
            </div>
          </Quest>
        )}
      </div>
    </MainLayout>
  );
};

export default PositronPage;
