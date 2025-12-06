import { useParams } from "react-router-dom";
import tim from "../../data/tim.json";
import type { TypeTimMap } from "../Interface/_type";
const TimById = () => {
  const { id } = useParams();

  const data = tim.data.find((d: TypeTimMap) => d.id === parseInt(id ?? "0"));
  return <div><p className="text-[#00eaff]">{data?.nama}</p></div>;
};

export default TimById;
