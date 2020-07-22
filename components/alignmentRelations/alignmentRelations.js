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
    default:
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

export { neighboursFor, oppositeFor };
