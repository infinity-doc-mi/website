export type Language = "en" | "it" | "cn";

type LanguageConfig = {
  label: string;
  icon: {
    src: string;
    alt: string;
  };
};

export const LanguagesConfig: Record<Language, LanguageConfig> = {
  en: {
    label: "English",
    icon: {
      src: "assets/flags/en.svg",
      alt: "English",
    },
  },

  it: {
    label: "Italiano",
    icon: {
      src: "assets/flags/it.svg",
      alt: "Italiano",
    },
  },

  cn: {
    label: "中文",
    icon: {
      src: "assets/flags/cn.svg",
      alt: "中文",
    },
  },
};

export const Languages = Object.keys(LanguagesConfig) as Language[];
