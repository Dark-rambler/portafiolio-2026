"use client";

import { useEffect, useState } from "react";

type ThemeName = "cyber-blue" | "deep-neon" | "enterprise";

const THEME_KEY = "portfolio-theme";
const THEME_EVENT = "portfolio-theme-change";
const DEFAULT_THEME: ThemeName = "cyber-blue";

const themePalettes: Record<
  ThemeName,
  Record<
    | "--background"
    | "--foreground"
    | "--surface"
    | "--muted"
    | "--brand"
    | "--brand-2"
    | "--brand-3"
    | "--brand-4"
    | "--overlay-bg"
    | "--panel-soft"
    | "--panel-strong"
    | "--panel-card"
    | "--panel-border"
    | "--on-brand",
    string
  >
> = {
  "cyber-blue": {
    "--background": "#060b16",
    "--foreground": "#e8f0ff",
    "--surface": "#0e1628",
    "--muted": "#93a4c7",
    "--brand": "#00d1ff",
    "--brand-2": "#6f7bff",
    "--brand-3": "#1df5c3",
    "--brand-4": "#ff9f43",
    "--overlay-bg": "rgb(7 15 31 / 78%)",
    "--panel-soft": "#0f1b34",
    "--panel-strong": "#182745",
    "--panel-card": "rgb(11 23 46 / 88%)",
    "--panel-border": "rgb(111 123 255 / 24%)",
    "--on-brand": "#041126",
  },
  "deep-neon": {
    "--background": "#040508",
    "--foreground": "#eefff8",
    "--surface": "#0e121a",
    "--muted": "#8fb2ab",
    "--brand": "#00ffb2",
    "--brand-2": "#26d5ff",
    "--brand-3": "#ff4fcf",
    "--brand-4": "#ffe66d",
    "--overlay-bg": "rgb(4 9 14 / 80%)",
    "--panel-soft": "#101924",
    "--panel-strong": "#16313d",
    "--panel-card": "rgb(9 20 30 / 88%)",
    "--panel-border": "rgb(38 213 255 / 24%)",
    "--on-brand": "#032017",
  },
  enterprise: {
    "--background": "#0b1220",
    "--foreground": "#e6edf8",
    "--surface": "#141f33",
    "--muted": "#9aabca",
    "--brand": "#5cb6ff",
    "--brand-2": "#7e8fb1",
    "--brand-3": "#7fe2d0",
    "--brand-4": "#f0bf7a",
    "--overlay-bg": "rgb(10 17 31 / 80%)",
    "--panel-soft": "#18243a",
    "--panel-strong": "#263754",
    "--panel-card": "rgb(19 31 50 / 90%)",
    "--panel-border": "rgb(126 143 177 / 26%)",
    "--on-brand": "#081527",
  },
};

const themeOptions: Array<{
  value: ThemeName;
  label: string;
  short: string;
  swatch: string;
}> = [
  {
    value: "cyber-blue",
    label: "Cyber Blue",
    short: "CB",
    swatch: "linear-gradient(135deg,#00d1ff,#6f7bff)",
  },
  {
    value: "deep-neon",
    label: "Deep Neon",
    short: "DN",
    swatch: "linear-gradient(135deg,#00ffb2,#ff4fcf)",
  },
  {
    value: "enterprise",
    label: "Enterprise",
    short: "EN",
    swatch: "linear-gradient(135deg,#5cb6ff,#7fe2d0)",
  },
];

function applyTheme(theme: ThemeName) {
  const root = document.documentElement;

  root.dataset.theme = theme;

  const palette = themePalettes[theme];

  for (const [token, value] of Object.entries(palette)) {
    root.style.setProperty(token, value);
  }

  window.localStorage.setItem(THEME_KEY, theme);
  window.dispatchEvent(
    new CustomEvent(THEME_EVENT, {
      detail: { theme },
    }),
  );
}

function isThemeName(value: string | null | undefined): value is ThemeName {
  return (
    value === "cyber-blue" || value === "deep-neon" || value === "enterprise"
  );
}

function getInitialTheme(): ThemeName {
  if (typeof window === "undefined") {
    return DEFAULT_THEME;
  }

  const fromDataset = document.documentElement.dataset.theme;

  if (isThemeName(fromDataset)) {
    return fromDataset;
  }

  const fromStorage = window.localStorage.getItem(THEME_KEY);

  if (isThemeName(fromStorage)) {
    return fromStorage;
  }

  return DEFAULT_THEME;
}

function useThemeSwitch() {
  const [theme, setTheme] = useState<ThemeName>(getInitialTheme);

  useEffect(() => {
    function onThemeChange(event: Event) {
      const customEvent = event as CustomEvent<{ theme?: ThemeName }>;
      const nextTheme = customEvent.detail?.theme;

      if (nextTheme && nextTheme !== theme) {
        setTheme(nextTheme);
      }
    }

    function onStorage(event: StorageEvent) {
      if (event.key !== THEME_KEY || !isThemeName(event.newValue)) {
        return;
      }

      setTheme(event.newValue);
      document.documentElement.dataset.theme = event.newValue;
    }

    window.addEventListener(THEME_EVENT, onThemeChange as EventListener);
    window.addEventListener("storage", onStorage);

    return () => {
      window.removeEventListener(THEME_EVENT, onThemeChange as EventListener);
      window.removeEventListener("storage", onStorage);
    };
  }, [theme]);

  function selectTheme(nextTheme: ThemeName) {
    if (nextTheme === theme) {
      return;
    }

    setTheme(nextTheme);
    applyTheme(nextTheme);
  }

  return { theme, selectTheme };
}

export function ThemeSwitcher() {
  const { theme, selectTheme } = useThemeSwitch();

  return (
    <div className="glass-panel hidden items-center gap-1 rounded-full p-1 xl:flex">
      {themeOptions.map((option) => {
        const isActive = theme === option.value;

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => selectTheme(option.value)}
            className={`inline-flex items-center gap-2 rounded-full px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.08em] transition ${
              isActive
                ? "bg-[var(--panel-strong)] text-foreground"
                : "text-muted hover:text-[var(--brand)]"
            }`}
            aria-pressed={isActive}
            aria-label={option.label}
            title={option.label}
          >
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ background: option.swatch }}
            />
            {option.short}
          </button>
        );
      })}
    </div>
  );
}

export function ThemeSwitcherMobile() {
  const { theme, selectTheme } = useThemeSwitch();

  return (
    <div className="grid gap-2">
      {themeOptions.map((option) => {
        const isActive = theme === option.value;

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => selectTheme(option.value)}
            className={`rounded-xl px-4 py-3 text-left text-sm font-semibold transition ${
              isActive
                ? "bg-[var(--panel-strong)] text-foreground"
                : "bg-[var(--panel-soft)] text-muted hover:text-[var(--brand)]"
            }`}
            aria-pressed={isActive}
          >
            <span className="flex items-center gap-2">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ background: option.swatch }}
              />
              {option.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
