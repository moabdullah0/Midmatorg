import FourCard from "./Cards/FourCard";
import TwoCard from "./Cards/TwoCard";
const ThreeGridItem = () => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-10">
      <FourCard />
      <TwoCard />
    </div>
  );
};

export default ThreeGridItem;
