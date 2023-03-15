export type Modifier = "+" | "-";

type FontGrade = {
  type: "font";
  level: number;
  letter: "A" | "B" | "C";
  modifier?: Modifier;
};

type VGrade = {
  type: "V";
  level: number;
  modifier?: Modifier;
};

export type Grade = FontGrade | VGrade;
