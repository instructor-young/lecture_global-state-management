const SET_PROFILE = "SET_PROFILE";
const UPDATE_NICKNAME = "UPDATE_NICKNAME";
const UPDATE_DESCRIPTION = "UPDATE_DESCRIPTION";

type Action = {
  type: string;
  payload?: any;
};

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

function profileReducer(prevState = initialState, action: Action) {
  const nextState = { ...prevState };

  switch (action.type) {
    case SET_PROFILE:
      const { id, nickname, description, avatarImgUrl } =
        action.payload as ProfileState;

      nextState.id = id;
      nextState.nickname = nickname;
      nextState.description = description;
      nextState.avatarImgUrl = avatarImgUrl;
      break;

    case UPDATE_NICKNAME:
      nextState.nickname = action.payload as string;
      break;

    case UPDATE_DESCRIPTION:
      nextState.description = action.payload as string;
      break;
  }

  return nextState;
}

const setProfile = (profile: ProfileState) => ({
  type: SET_PROFILE,
  payload: profile,
});

const updateNickname = (nickname: string) => ({
  type: UPDATE_NICKNAME,
  payload: nickname,
});

const updateDescription = (description: string) => ({
  type: UPDATE_DESCRIPTION,
  payload: description,
});
