import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { names } from "./GetName";
import { useCurrentName, useCurrentSayHello } from "../state/_Init";

const SayHello = () => {
  const guestRef = useRef(null);
  /**cache say Hello , min appear 1x */
  const setIsSayHelloVisible = useCurrentSayHello((s: any) => s.setIsSayHello);

  /**cache name */
  const setName = useCurrentName((s: any) => s.setName);
  const name = useCurrentName((s: any) => s.name);

  /** handle typed */
  useEffect(() => {
    const typed = new Typed(guestRef.current, {
      strings: names.map((n) => `Apakah kamu ${n}?`),
      loop: false,
      backDelay: 1000,
      typeSpeed: 70,
      showCursor: false,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <div className="w-full sm:min-w-xl sm:max-w-xl md:mt-8 h-auto px-4 py-2 flex flex-col items-center rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-[#00eaff] shadow-[0_0_12px_#00eaff] z-50">
      <div className="w-full flex gap-2 justify-around md:justify-evenly items-center ">
        <img
          className="w-24 md:w-32 animate-pulse"
          src="/logo-removebg-preview.png"
          alt="Logo"
        />
        <h1 className="text-[#00eaff] text-xl md:text-2xl animate-pulse">
          NEO-C 2025
        </h1>
      </div>
      <div className="mt-4 min-w-xs max-w-xs sm:min-w-xl sm:max-w-xl min-h-24 p-4">
        <span
          ref={guestRef}
          className="min-w-full block text-xs text-[#00eaff] text-left my-4 capitalize"
        ></span>
      </div>
      <div className="relative z-0 w-full my-5 group">
        <input
          required
          id="floating_email"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-[#00eaff] text-[#00eaff] appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
          placeholder=" "
        />
        <label
          htmlFor="floating_email"
          className="absolute text-[#00eaff] text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
        >
          Masukkan Nama
        </label>
      </div>
      <button
        style={{ backgroundSize: "300% 300%" }}
        onClick={() => {
          if (name.trim() === "") {
            alert("Silakan masukkan nama Anda terlebih dahulu.");
            return;
          }
          setIsSayHelloVisible(false);
        }}
        type="button"
        className="cursor-pointer rounded-lg mt-4 px-8 py-4
                bg-[linear-gradient(45deg,#ff005e,#ffea00,#00eaff,#ff00f7)]
                animate-rainbow border border-white text-white drop-shadow-white shadow-[0_0_12px_#00eaff] text-outline
            "
      >
        MASUK
      </button>
    </div>
  );
};

export default SayHello;
