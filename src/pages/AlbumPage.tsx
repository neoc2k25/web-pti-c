import MainLayout from "../layouts/MainLayout";
import galeries from "../../data/galeries.json";
import type { TypeGaleris, TypeGalerisMap } from "../Interface/_type";
const AlbumPage = () => {
  return (
    <MainLayout>
      <div className="flex justify-center flex-wrap gap-2">
        {(galeries as TypeGaleris).data.map((g: TypeGalerisMap) => (
          <div
            className="bg-white max-w-xs md:max-w-sm py-4 px-2 rounded-md shadow-[0_0_12px_#00eaff] relative z-50"
            key={g.id}
          >
            <img
              loading="lazy"
              className="h-auto max-w-full rounded-base "
              src={`${g.url}`}
              alt="loading..."
            />
            <p className="text-center mt-3">{g.title}</p>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default AlbumPage;
