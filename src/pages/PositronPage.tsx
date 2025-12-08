import { useEffect, useRef, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import Typed from "typed.js";
import { useForcedPositron} from "../state/_Init";
import Quest from "../component/Quest";
import Btn from "../Element/Btn";
import { moveButton } from "../utils/moveBtn";

const PositronPage = () => {
  /** eits tidak kena.... */
  const [pos, setPos] = useState({ x: 0, y: 0 });

  /** on complete string in typed */
  const [typedComplete, setTypedComplete] = useState<string | null>("");

  /** handle caching current step user */
  const step = useForcedPositron((s: any) => s.step);
  const setStep = useForcedPositron((s: any) => s.setStep);

  /** handle message to user */
  let message = "";

  if (step === 1) {
    message = "Apakah kamu siap?";
  } else if (step === 2) {
    message = "";
  }

  /** handle step message */
  const forcedRef = useRef(null);

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
  return (
    <MainLayout>
      <div className="pt-4">
        {step === 1 && (
          <Quest>
            <span
              ref={forcedRef}
              className="text-xs md:text-base block max-w-full min-h-20 md:min-h-16"
            ></span>
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
              <img
                src="/necos/neco-melas.png"
                className="w-24 sm:w-32"
                alt=""
              />
              <img src="/necos/neco-qna.png" className="w-44" alt="" />
            </div>
          </Quest>
        )}
        <div
          className={`${step === 1 && "blur-2xl"} ${step === 2 && "blur-none"} flex flex-wrap justify-center gap-y-2 pt-4`}
        >
          <span ref={step === 2 ? forcedRef : undefined}></span>
          <p className="text-white text-center">Tahap Pengembangan...</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default PositronPage;
