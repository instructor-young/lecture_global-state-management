import { createSlice } from "@reduxjs/toolkit";

export type ProfileState = {
  id: number | null;
  nickname: string | null;
  description: string | null;
  avatarImgUrl: string | null;
};

const initialState: ProfileState = {
  id: null,
  nickname: null,
  description: null,
  avatarImgUrl: null,
};

const profileSlice = createSlice({
  initialState,
  name: "profile",
  reducers: {
    setProfile: (prevState, action) => {
      prevState.id = action.payload.id;
      prevState.nickname = action.payload.nickname;
      prevState.description = action.payload.description;
      prevState.avatarImgUrl = action.payload.avatarImgUrl;
    },
    updateNickname: (prevState, action) => {
      prevState.nickname = action.payload as string;
    },
    updateDescription: (prevState, action) => {
      prevState.description = action.payload as string;
    },
  },
});

// 1. profileSlice에서 profileReducer를 꺼내어 export 해야 함 -> 그래야 store에 연결할 수 있음
export const profileReducer = profileSlice.reducer;

// 2. profileSlice에서 action Creators를 꺼내어 export 해야 함 -> 그래야 컴포넌트에서 액션을 생성할 수 있음
export const { setProfile, updateNickname, updateDescription } =
  profileSlice.actions;
