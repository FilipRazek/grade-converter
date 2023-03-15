import { useState } from "react";
import { Footer } from "../../components/Footer";
import { GradeBox } from "../../components/GradeBox";
import { GradeInput } from "../../components/GradeInput";
import { Grade } from "../../types";
import "./index.css";

export const Home = () => {
  const [grade, setGrade] = useState<Grade>({
    type: "font",
    level: 6,
    letter: "A",
    modifier: "-",
  });
  return (
    <div className="container">
      <div className="converter__div">
        <h2>Bouldering grade converter</h2>
        <GradeInput grade={grade} setGrade={setGrade} />
        <GradeBox grade={grade} />
      </div>
      <Footer />
    </div>
  );
};
