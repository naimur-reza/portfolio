export const getRandomColor = (language: string) => {
  const languageColors: { [key: string]: string } = {
    JavaScript: "#f1e05a",
    TypeScript: "#3178c6",
    Python: "#3572A5",
    Java: "#b07219",
    Ruby: "#701516",
    PHP: "#4F5D95",
    C: "#555555",
    "C++": "#f34b7d",
    "C#": "#178600",
    Go: "#00ADD8",
    Shell: "#89e051",
    Swift: "#ffac45",
    Kotlin: "#A97BFF",
    Rust: "#dea584",
    Dart: "#00B4AB",
  };

  return languageColors[language] || "#8884d8";
};
