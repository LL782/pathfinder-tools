type Alignment =
  | "Lawful Good"
  | "Chaotic Good"
  | "Lawful Evil"
  | "Chaotic Evil"
  | "Neutral Good"
  | "Neutral Evil"
  | "Lawful Neutral"
  | "Chaotic Neutral"
  | "True Neutral"
  | string;

const oneStepRemovedFrom = (alignment: Alignment): Alignment[] => {
  switch (alignment) {
    case "Lawful Good":
      return ["Lawful Neutral", "Neutral Good"];

    case "Chaotic Good":
      return ["Chaotic Neutral", "Neutral Good"];

    case "Lawful Evil":
      return ["Lawful Neutral", "Neutral Evil"];

    case "Chaotic Evil":
      return ["Chaotic Neutral", "Neutral Evil"];

    case "Neutral Good":
      return ["Lawful Good", "True Neutral", "Chaotic Good"];

    case "Neutral Evil":
      return ["Chaotic Evil", "True Neutral", "Lawful Evil"];

    case "Lawful Neutral":
      return ["Lawful Good", "True Neutral", "Lawful Evil"];

    case "Chaotic Neutral":
      return ["Chaotic Good", "True Neutral", "Chaotic Evil"];

    case "True Neutral":
      return [
        "Neutral Good",
        "Neutral Evil",
        "Lawful Neutral",
        "Chaotic Neutral",
      ];

    default:
      return [];
  }
};

const twoStepsRemovedFrom = (alignment: Alignment): Alignment[] => {
  switch (alignment) {
    case "Lawful Good":
      return ["Lawful Evil", "Chaotic Good", "True Neutral"];

    case "Chaotic Good":
      return ["Lawful Good", "Chaotic Evil", "True Neutral"];

    case "Lawful Evil":
      return ["Lawful Good", "Chaotic Evil", "True Neutral"];

    case "Chaotic Evil":
      return ["Chaotic Good", "Lawful Evil", "True Neutral"];

    case "Neutral Good":
      return ["Neutral Evil", "Lawful Neutral", "Chaotic Neutral"];

    case "Neutral Evil":
      return ["Neutral Good", "Lawful Neutral", "Chaotic Neutral"];

    case "Lawful Neutral":
      return ["Neutral Good", "Neutral Evil", "Chaotic Neutral"];

    case "Chaotic Neutral":
      return ["Neutral Good", "Neutral Evil", "Lawful Neutral"];

    case "True Neutral":
      return ["Lawful Good", "Lawful Evil", "Chaotic Good", "Chaotic Evil"];

    default:
      return [];
  }
};

const threeStepsRemovedFrom = (alignment: Alignment): Alignment[] => {
  switch (alignment) {
    case "Lawful Good":
      return ["Chaotic Neutral", "Neutral Evil"];

    case "Chaotic Good":
      return ["Lawful Neutral", "Neutral Evil"];

    case "Lawful Evil":
      return ["Neutral Good", "Chaotic Neutral"];

    case "Chaotic Evil":
      return ["Neutral Good", "Lawful Neutral"];

    case "Neutral Good":
      return ["Chaotic Evil", "Lawful Evil"];

    case "Neutral Evil":
      return ["Chaotic Good", "Lawful Good"];

    case "Lawful Neutral":
      return ["Chaotic Good", "Chaotic Evil"];

    case "Chaotic Neutral":
      return ["Lawful Good", "Lawful Evil"];

    default:
      return [];
  }
};

const fourStepsRemovedFrom = (alignment: Alignment): Alignment[] => {
  switch (alignment) {
    case "Lawful Good":
      return ["Chaotic Evil"];

    case "Chaotic Good":
      return ["Lawful Evil"];

    case "Lawful Evil":
      return ["Chaotic Good"];

    case "Chaotic Evil":
      return ["Lawful Good"];

    default:
      return [];
  }
};

export {
  oneStepRemovedFrom,
  twoStepsRemovedFrom,
  threeStepsRemovedFrom,
  fourStepsRemovedFrom,
};
