type FontGrade = {
  type: "font";
  level: number;
  letter: "A" | "B" | "C";
  plus?: boolean;
};

type VGrade = {
  type: "V";
  level: number;
};

export type Grade = FontGrade | VGrade;
