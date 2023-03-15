import { Selector } from "../../components/Selector";

export const Home = () => {
  const fontGrades = ["5a", "5b", "5c", "6a"];
  return (
    <div>
      <Selector options={fontGrades} />
    </div>
  );
};
