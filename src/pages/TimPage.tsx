import Navbar from "../layouts/Navbar";

const TimPage = () => {
  const datas = [
    {
      foto: "public/neco.png",
      nama: "nama ketua",
    },
    {
      foto: "public/neco.png",
      nama: "nama wakil",
    },
    {
      foto: "public/neco.png",
      nama: "nama sekretaris",
    },
    {
      foto: "public/neco.png",
      nama: "nama anggota",
    },
    {
      foto: "public/neco.png",
      nama: "nama anggota",
    },
    {
      foto: "public/neco.png",
      nama: "nama anggota",
    },
  ];
  return (
    <div className="w-full h-screen p-4">
      <Navbar />
      <div className="flex flex-1 flex-wrap justify-center gap-4 pt-20 pb-4">
        {datas.map((data) => (
          <div className="bg-neutral-primary-soft block max-w-xs animate-border rounded-base shadow-xs text-white">
            <a href="#">
              <img
                className="rounded-t-base w-full"
                src={`${data.foto}`}
                alt=""
              />
            </a>
            <div className="p-6 text-center">
              <a href="#">
                <h5 className="mt-3 mb-6 text-2xl font-semibold tracking-tight text-heading">
                  {data.nama}
                </h5>
              </a>
              <a
                href="#"
                className="inline-flex items-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
              >
                Read more
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
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimPage;
