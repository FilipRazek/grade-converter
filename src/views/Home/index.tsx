import { useState } from "react";
import { GradeBox } from "../../components/GradeBox";
import { GradeInput } from "../../components/GradeInput";
import { Grade } from "../../types";
import "./index.css";

export const Home = () => {
  const [grade, setGrade] = useState<Grade>({ type: "V", level: 5 });
  return (
    <div className="container">
      <GradeInput grade={grade} setGrade={setGrade} />
      <GradeBox grade={grade} />
    </div>
  );
};
