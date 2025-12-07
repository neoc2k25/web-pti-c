import Snow from "../component/Snow";
import Navbar from "./Navbar";

const MainLayout = ({ children }: any) => {
  return (
    <div className="pb-4 pt-20">
      <Navbar />
      <Snow />
      {children}
    </div>
  );
};

export default MainLayout;
