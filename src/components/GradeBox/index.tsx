import { Grade } from "../../types";
import "./index.css";

export const GradeBox = ({ grade }: { grade: Grade }) => {
  return (
    <div className="explanation-box__container">
      {grade ? (
        grade.type === "V" ? (
          <VGradeBox grade={grade} />
        ) : (
          <FontGradeBox grade={grade} />
        )
      ) : (
        <p>Unknown grade</p>
      )}
    </div>
  );
};

const VGradeBox = ({ grade }: { grade: Grade }) => (
  <>
    <p>Type: {grade.type}</p>
    <p>Level: {grade.level}</p>
    <p>Modifier: {grade.modifier}</p>
  </>
);

const FontGradeBox = ({ grade }: { grade: Grade }) => (
  <>
    <p>Type: {grade.type}</p>
    <p>Level: {grade.level}</p>
    <p>Letter: {grade.type === "font" && grade.letter}</p>
    <p>Modifier: {grade.modifier}</p>
  </>
);
