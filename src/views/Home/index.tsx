import { useState } from "react";
import { Footer } from "../../components/Footer";
import { GradeBox } from "../../components/GradeBox";
import { GradeInput } from "../../components/GradeInput";
import { TextInfo } from "../../components/TextInfo";
import { convertGrade } from "../../helpers";
import { Grade } from "../../types";
import "./index.css";

const INITIAL_GRADE = {
  type: "font",
  level: 6,
  letter: "A",
  modifier: "-",
} as const;

export const Home = () => {
  const [grade, setGrade] = useState<Grade>(INITIAL_GRADE);
  const convertedGrade = convertGrade(grade);
  return (
    <div className="container">
      <div className="converter__div">
        <h2>Bouldering grade converter</h2>
        <GradeInput grade={grade} setGrade={setGrade} />
        <GradeBox grade={grade} />
        <TextInfo text={convertedGrade ?? "Unknown equivalent"} highlighted />
      </div>
      <Footer />
    </div>
  );
};
