/* eslint-disable @next/next/no-img-element */
"use client";

import { ProfileState } from "@/redux/reducers/profile.reducer";
import { useSelector } from "react-redux";

function HeaderProfile() {
  const profile = useSelector((state: any) => state.profile as ProfileState);

  if (profile.id === null) return null;

  return (
    <div className="flex items-center gap-x-3">
      <span>{profile.nickname}</span>
      <span>{profile.description}</span>
      <img
        src={profile.avatarImgUrl as string}
        alt="profile"
        className="h-12 w-12"
      />
    </div>
  );
}

export default HeaderProfile;
