"use client";

// 1. 만든다
import { Dispatch, SetStateAction, createContext, useContext } from "react";

export type Theme = "light" | "dark";

export type ThemeValue = {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
};

const initialValue: ThemeValue = {
  theme: "light",
  setTheme: () => {},
};

export const ThemeContext = createContext(initialValue);

// 2. 사용한다.
export const useTheme = () => useContext(ThemeContext);

// 3. 범위를 정해서 값을 내려준다.
