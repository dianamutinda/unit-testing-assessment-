import {
  sciencesMath,
  religious,
  languages,
  student,
  calculateGradesAndAverage,
} from "./grading.js";

describe("scienceMath", () => {
  test("score between 70 and 100 grade equal A", () => {
    expect(sciencesMath(90)).toBe("A");
  });
  test("score between 60 and 69 grade equal B", () => {
    expect(sciencesMath(62)).toBe("B");
  });
  test("score between 50 and 59 grade equal C", () => {
    expect(sciencesMath(55)).toBe("C");
  });
  test("score between 40 and 49 grade equal Pass", () => {
    expect(sciencesMath(43)).toBe("Pass");
  });
  test("score below 40 grade equal Sup", () => {
    expect(sciencesMath(30)).toBe("Sup");
  });
});

describe("religious", () => {
  test("score between 80 and 100 grade equal A", () => {
    expect(religious(85)).toBe("A");
  });
  test("score between 70 and 79 grade equal B", () => {
    expect(religious(75)).toBe("B");
  });
  test("score between 60 and 69 grade equal C", () => {
    expect(religious(63)).toBe("C");
  });
  test("score between 50 and 59 grade equal Pass", () => {
    expect(religious(55)).toBe("Pass");
  });
  test("score below 50 grade equal Sup", () => {
    expect(religious(48)).toBe("Sup");
  });
});

describe("languages", () => {
  test("score between 75 and 100 grade equal A", () => {
    expect(languages(78)).toBe("A");
  });
  test("score between 65 and 74 grade equal B", () => {
    expect(languages(67)).toBe("B");
  });
  test("score between 55 and 64 grade equal C", () => {
    expect(languages(62)).toBe("C");
  });
  test("score between 45 and 54 grade equal Pass", () => {
    expect(languages(48)).toBe("Pass");
  });
  test("score below 45 grade equal Sup", () => {
    expect(languages(34)).toBe("Sup");
  });
});


describe("calculateGradesAndAverage", () => {
  test("display student graades", () => {
    expect(
      calculateGradesAndAverage({
        name: "Dennis Doe",
        math: 80,
        eng: 65,
        kis: 48,
        phy: 67,
        che: 56,
        re: 89,
        comp: 82,
      })
    ).toEqual({
      name: "Dennis Doe",
      math: "A",
      eng: "B",
      kis: "Pass",
      phy: "B",
      che: "C",
      re: "A",
      comp: "A",
      avPoints: 69
    });
  });
});
