"use client";

import { useTheme } from "@/contexts/ThemeContext";
import initialProfile from "@/data/profile.json";
import { ProfileState, setProfile } from "@/redux/slices/profile.slice";
import { useDispatch, useSelector } from "react-redux";

function LogInButton() {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const profile = useSelector((state: any) => state.profile as ProfileState);

  const handleClickLogin = () => {
    dispatch(setProfile(initialProfile));
  };

  if (profile.id) return null;

  return (
    <button
      onClick={handleClickLogin}
      data-theme={theme}
      className="border bg-black text-white px-4 py-1 text-sm font-bold rounded data-[theme=light]:bg-white data-[theme=light]:text-black data-[theme=light]:border-black"
    >
      로그인
    </button>
  );
}

export default LogInButton;
