import { Grade, Modifier } from "./types";

export const gradeToString = (grade?: Grade): string => {
  if (!grade) return "";
  switch (grade.type) {
    case "font":
      return [grade.level, grade.letter, grade.modifier].join("");
    case "V":
      return ["V", grade.level, grade.modifier].join("");
  }
};

export const parseGrade = (grade: string): Grade => {
  const vGrade = grade.match(/^V(\d+)([+-]?)$/i);
  if (vGrade) {
    const level = parseInt(vGrade[1], 10);
    const modifier = vGrade[2] ? (vGrade[2] as Modifier) : undefined;
    return {
      type: "V",
      level,
      modifier,
    };
  }

  const fontGrade = grade.match(/^(1?\d)([ABC])([+-]?)$/i);
  if (fontGrade) {
    const level = parseInt(fontGrade[1], 10);
    const letter = fontGrade[2].toUpperCase() as "A" | "B" | "C";
    const modifier = fontGrade[3] ? (fontGrade[3] as Modifier) : undefined;
    return {
      type: "font",
      level,
      letter,
      modifier,
    };
  }

  throw new Error(`Invalid grade: ${grade}`);
};
