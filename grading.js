export function sciencesMath(score) {
  if (score >= 70 && score <= 100) {
    return "A";
  } else if (score >= 60 && score <= 69) {
    return "B";
  } else if (score >= 50 && score <= 59) {
    return "C";
  } else if (score >= 40 && score <= 49) {
    return "Pass";
  } else {
    return "Sup";
  }
}

export function religious(score) {
  if (score >= 80 && score <= 100) {
    return "A";
  } else if (score >= 70 && score <= 79) {
    return "B";
  } else if (score >= 60 && score <= 69) {
    return "C";
  } else if (score >= 50 && score <= 59) {
    return "Pass";
  } else {
    return "Sup";
  }
}

export function languages(score) {
  if (score >= 75 && score <= 100) {
    return "A";
  } else if (score >= 65 && score <= 74) {
    return "B";
  } else if (score >= 55 && score <= 64) {
    return "C";
  } else if (score >= 45 && score <= 54) {
    return "Pass";
  } else {
    return "Sup";
  }
}

export function calculateGradesAndAverage(student) {
  const avrPoints = Math.floor(
    (student.math +
      student.eng +
      student.kis +
      student.phy +
      student.che +
      student.re +
      student.comp) /
      7,
  );

  return {
    name: student.name,
    math: sciencesMath(student.math),
    eng: languages(student.eng),
    kis: languages(student.kis),
    phy: sciencesMath(student.phy),
    che: sciencesMath(student.che),
    re: religious(student.re),
    comp: languages(student.comp),
    avPoints: avrPoints,
  };
}
