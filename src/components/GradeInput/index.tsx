import { useState } from "react";
import { gradeToString, parseGrade } from "../../helpers";
import { Grade } from "../../types";
import "./index.css";

export const GradeInput = ({
  grade,
  setGrade,
}: {
  grade?: Grade;
  setGrade: (newGrade: Grade) => void;
}) => {
  const gradeString = gradeToString(grade);
  const [input, setInput] = useState<string>(gradeString);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    try {
      const newGrade = parseGrade(e.target.value);
      setGrade(newGrade);
    } catch (e) {
      setGrade(undefined);
    }
  };

  return (
    <input
      className="user-input__input"
      placeholder="V5"
      value={input}
      onChange={onChange}
    />
  );
};
