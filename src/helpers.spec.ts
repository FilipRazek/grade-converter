import { gradeToString, parseGrade } from "./helpers";

describe("gradeToString", () => {
  it("should convert a V grade without modifier to string", () => {
    const grade = {
      type: "V",
      level: 2,
    } as const;
    expect(gradeToString(grade)).toEqual("V2");
  });
  it("should convert a V grade with modifier to string", () => {
    const grade = {
      type: "V",
      level: 4,
      modifier: "-",
    } as const;
    expect(gradeToString(grade)).toEqual("V4-");
  });
  it("should convert a font grade without modifier to string", () => {
    const grade = {
      type: "font",
      level: 5,
      letter: "B",
    } as const;
    expect(gradeToString(grade)).toEqual("5B");
  });
  it("should convert a font grade with modifier to string", () => {
    const grade = {
      type: "font",
      level: 8,
      letter: "A",
      modifier: "+",
    } as const;
    expect(gradeToString(grade)).toEqual("8A+");
  });
  it("should return an empty string if the grade is undefined", () => {
    expect(gradeToString(undefined)).toEqual("");
  });
});

describe("parseGrade", () => {
  it("should parse a V grade without modifier", () => {
    const grade = "V10";
    expect(parseGrade(grade)).toEqual({
      type: "V",
      level: 10,
    });
  });
  it("should parse a V grade with modifier", () => {
    const grade = "V4+";
    expect(parseGrade(grade)).toEqual({
      type: "V",
      level: 4,
      modifier: "+",
    });
  });
  it("should parse a V grade written in lowercase", () => {
    const grade = "v13+";
    expect(parseGrade(grade)).toEqual({
      type: "V",
      level: 13,
      modifier: "+",
    });
  });
  it("should parse a font grade without modifier", () => {
    const grade = "5B";
    expect(parseGrade(grade)).toEqual({
      type: "font",
      level: 5,
      letter: "B",
    });
  });
  it("should parse a font grade with modifier", () => {
    const grade = "8A+";
    expect(parseGrade(grade)).toEqual({
      type: "font",
      level: 8,
      letter: "A",
      modifier: "+",
    });
  });
  it("should parse a font grade written in lowercase", () => {
    const grade = "9c+";
    expect(parseGrade(grade)).toEqual({
      type: "font",
      level: 9,
      letter: "C",
      modifier: "+",
    });
  });
  it("should throw an error if the grade is invalid", () => {
    const grade = "VA+";
    expect(() => parseGrade(grade)).toThrowError("Invalid grade: VA+");
  });
});
