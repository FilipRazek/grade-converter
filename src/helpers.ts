import { allowedConversions } from "./convert";
import { Grade } from "./types";

export const gradeToString = (grade?: Grade): string => {
  if (!grade) return "";
  switch (grade.type) {
    case "font":
      return [grade.level, grade.letter, grade.plus ? "+" : ""].join("");
    case "V":
      return `V${grade.level}`;
  }
};

export const parseGrade = (grade: string): Grade => {
  const vGrade = grade.match(/^V(\d+)$/i);
  if (vGrade) {
    const level = parseInt(vGrade[1], 10);
    return {
      type: "V",
      level,
    };
  }

  const fontGrade = grade.match(/^(1?\d)([ABC])(\+?)$/i);
  if (fontGrade) {
    const level = parseInt(fontGrade[1], 10);
    const letter = fontGrade[2].toUpperCase() as "A" | "B" | "C";
    const gradeBase = {
      type: "font",
      level,
      letter,
    } as const;
    if (fontGrade[3] === "+") {
      return {
        ...gradeBase,
        plus: true,
      };
    }
    return gradeBase;
  }

  throw new Error(`Invalid grade: ${grade}`);
};

const formatGradeList = (grades: string[]): string => {
  if (!grades.length) return undefined;
  if (grades.length === 1) return grades[0];
  const lowestGrade = grades[0];
  const highestGrade = grades[grades.length - 1];
  return `${lowestGrade} - ${highestGrade}`;
};

const getVGrades = (grade: string): string[] => {
  return Object.keys(allowedConversions).filter((key) =>
    allowedConversions[key].includes(grade)
  );
};

export const convertGrade = (grade: Grade): string => {
  if (!grade) return undefined;
  const stringGrade = gradeToString(grade);
  if (grade.type === "V") {
    const fontGrades = allowedConversions[stringGrade];
    return formatGradeList(fontGrades);
  }
  const vGrades = getVGrades(stringGrade);
  if (!vGrades.length && grade.plus) {
    // Check if we know the conversion for the grade without the plus
    const vGrades = getVGrades(gradeToString({ ...grade, plus: false }));
    if (!vGrades.length) return undefined;
    // If we do, return the highest grade
    return vGrades[vGrades.length - 1];
  }
  return formatGradeList(vGrades);
};
