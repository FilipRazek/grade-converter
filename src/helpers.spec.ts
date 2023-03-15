import { convertGrade, gradeToString, parseGrade } from "./helpers";

describe("gradeToString", () => {
  it("should convert a V grade to string", () => {
    const grade = {
      type: "V",
      level: 2,
    } as const;
    expect(gradeToString(grade)).toEqual("V2");
  });
  it("should convert a font grades to string", () => {
    const grade = {
      type: "font",
      level: 5,
      letter: "B",
    } as const;
    expect(gradeToString(grade)).toEqual("5B");
  });
  it("should convert a font grade with a plus to string", () => {
    const grade = {
      type: "font",
      level: 8,
      letter: "A",
      plus: true,
    } as const;
    expect(gradeToString(grade)).toEqual("8A+");
  });
  it("should return an empty string if the grade is undefined", () => {
    expect(gradeToString(undefined)).toEqual("");
  });
});

describe("parseGrade", () => {
  it("should parse a V grade", () => {
    const grade = "V10";
    expect(parseGrade(grade)).toEqual({
      type: "V",
      level: 10,
    });
  });
  it("should parse a V grade written in lowercase", () => {
    const grade = "v13";
    expect(parseGrade(grade)).toEqual({
      type: "V",
      level: 13,
    });
  });
  it("should parse a font grade", () => {
    const grade = "5B";
    expect(parseGrade(grade)).toEqual({
      type: "font",
      level: 5,
      letter: "B",
    });
  });
  it("should parse a font grade with a plus", () => {
    const grade = "8A+";
    expect(parseGrade(grade)).toEqual({
      type: "font",
      level: 8,
      letter: "A",
      plus: true,
    });
  });
  it("should parse a font grade written in lowercase", () => {
    const grade = "9c+";
    expect(parseGrade(grade)).toEqual({
      type: "font",
      level: 9,
      letter: "C",
      plus: true,
    });
  });
  it("should throw an error if the grade is invalid", () => {
    const grade = "VA";
    expect(() => parseGrade(grade)).toThrowError("Invalid grade: VA");
  });
});

describe("convertGrade", () => {
  it("should convert a V grade to a font grade", () => {
    const grade = {
      type: "V",
      level: 11,
    } as const;
    expect(convertGrade(grade)).toEqual("8A");
  });
  it("should convert a V grade to a font grade range", () => {
    const grade = {
      type: "V",
      level: 0,
    } as const;
    expect(convertGrade(grade)).toEqual("4A - 5A");
  });
  it("should convert a font grade to a V grade", () => {
    const grade = {
      type: "font",
      level: 6,
      letter: "C",
    } as const;
    expect(convertGrade(grade)).toEqual("V5");
  });
});
