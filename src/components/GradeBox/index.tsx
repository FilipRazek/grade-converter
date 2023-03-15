import { Grade } from "../../types";
import { TextInfo } from "../TextInfo";
import "./index.css";

export const GradeBox = ({ grade }: { grade: Grade }) => {
  return (
    <div className="explanation-box__container">
      {grade ? (
        <>
          <TextInfo
            text={grade.type}
            tooltip={getScaleTooltip(
              grade.type === "V" ? "Vermin scale" : "Fontainebleau scale"
            )}
          />
          <TextInfo text={grade.level.toString()} tooltip={getLevelTooltip()} />
          {grade.type === "font" && (
            <TextInfo
              text={grade.letter}
              tooltip={getLetterTooltip(
                grade.letter === "A"
                  ? "Easiest"
                  : grade.letter === "B"
                  ? "Intermediate"
                  : "Hardest"
              )}
            />
          )}
          {grade.type === "font" && grade.plus && (
            <TextInfo text="+" tooltip={getPlusTooltip("A little harder")} />
          )}
        </>
      ) : (
        <p>Unknown grade</p>
      )}
    </div>
  );
};

const getScaleTooltip = (content: string) => ({
  content,
  id: "scale-tooltip",
});
const getLevelTooltip = () => ({
  content: "Higher is harder",
  id: "level-tooltip",
});
const getLetterTooltip = (content: string) => ({
  content,
  id: "letter-tooltip",
});
const getPlusTooltip = (content: string) => ({
  content,
  id: "plus-tooltip",
});
