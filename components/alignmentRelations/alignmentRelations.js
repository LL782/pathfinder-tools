const neighboursFor = (alignment) => {
  let result;

  switch (alignment) {
    case "Lawful Good":
      result = ["Lawful Neutral", "Neutral Good"];
      break;
    case "Chaotic Good":
      result = ["Chaotic Neutral", "Neutral Good"];
      break;
    case "Lawful Evil":
      result = ["Lawful Neutral", "Neutral Evil"];
      break;
    case "Chaotic Evil":
      result = ["Chaotic Neutral", "Neutral Evil"];
      break;
    case "Neutral Good":
      result = ["Lawful Good", "True Neutral", "Chaotic Good"];
      break;
    case "Neutral Evil":
      result = ["Chaotic Evil", "True Neutral", "Lawful Evil"];
      break;
    case "Lawful Neutral":
      result = ["Lawful Good", "True Neutral", "Lawful Evil"];
      break;
    case "Chaotic Neutral":
      result = ["Chaotic Good", "True Neutral", "Chaotic Evil"];
      break;
    case "True Neutral":
      result = [
        "Neutral Good",
        "Neutral Evil",
        "Lawful Neutral",
        "Chaotic Neutral",
      ];
      break;
  }

  return result;
};

const relationsFor = (alignment) => {
  let result;

  switch (alignment) {
    case "Lawful Good":
      result = ["Lawful Evil", "Chaotic Good", "True Neutral"];
      break;
    case "Chaotic Good":
      result = ["Lawful Good", "Chaotic Evil", "True Neutral"];
      break;
    case "Lawful Evil":
      result = ["Lawful Good", "Chaotic Evil", "True Neutral"];
      break;
    case "Chaotic Evil":
      result = ["Chaotic Good", "Lawful Evil", "True Neutral"];
      break;
    case "Neutral Good":
      result = ["Neutral Evil", "Lawful Neutral", "Chaotic Neutral"];
      break;
    case "Neutral Evil":
      result = ["Neutral Good", "Lawful Neutral", "Chaotic Neutral"];
      break;
    case "Lawful Neutral":
      result = ["Neutral Good", "Neutral Evil", "Chaotic Neutral"];
      break;
    case "Chaotic Neutral":
      result = ["Neutral Good", "Neutral Evil", "Lawful Neutral"];
      break;
    case "True Neutral":
      result = ["Lawful Good", "Lawful Evil", "Chaotic Good", "Chaotic Evil"];
      break;
  }

  return result;
};

const unrelatedFrom = (alignment) => {
  let result;

  switch (alignment) {
    case "Lawful Good":
      result = ["Chaotic Neutral", "Neutral Evil"];
      break;
    case "Chaotic Good":
      result = ["Lawful Neutral", "Neutral Evil"];
      break;
    case "Lawful Evil":
      result = ["Neutral Good", "Chaotic Neutral"];
      break;
    case "Chaotic Evil":
      result = ["Neutral Good", "Lawful Neutral"];
      break;
    case "Neutral Good":
      result = ["Chaotic Evil", "Lawful Evil"];
      break;
    case "Neutral Evil":
      result = ["Chaotic Good", "Lawful Good"];
      break;
    case "Lawful Neutral":
      result = ["Chaotic Good", "Chaotic Evil"];
      break;
    case "Chaotic Neutral":
      result = ["Lawful Good", "Lawful Evil"];
      break;
    default:
      result = [];
      break;
  }

  return result;
};

const oppositeFor = (alignment) => {
  let result;

  switch (alignment) {
    case "Lawful Good":
      result = ["Chaotic Evil"];
      break;
    case "Chaotic Good":
      result = ["Lawful Evil"];
      break;
    case "Lawful Evil":
      result = ["Chaotic Good"];
      break;
    case "Chaotic Evil":
      result = ["Lawful Good"];
      break;
    default:
      result = [];
      break;
  }

  return result;
};

export { neighboursFor, relationsFor, unrelatedFrom, oppositeFor };
