export const getRandomColor = (language: string) => {
  const languageColors: { [key: string]: string } = {
    // dark version of colors
    JavaScript: "#8B7F34", // Darker muted gold
    TypeScript: "#1B4573", // Darker blue
    HTML: "#862E17", // Darker orange-red
    CSS: "#2E2142", // Darker purple
    Python: "#1F4260", // Darker blue
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
