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
          {grade.modifier && (
            <TextInfo
              text={grade.modifier}
              tooltip={getModifierTooltip(
                grade.modifier === "+" ? "A little harder" : "A little easier"
              )}
            />
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
const getModifierTooltip = (content: string) => ({
  content,
  id: "modifier-tooltip",
});
