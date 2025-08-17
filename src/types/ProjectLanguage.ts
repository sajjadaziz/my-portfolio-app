export const ProjectLanguage = {
  react: "React",
  angular: "Angular",
} as const;

export type ProjectLanguage =
  (typeof ProjectLanguage)[keyof typeof ProjectLanguage];
