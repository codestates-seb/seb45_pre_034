import { atom } from "recoil";

export const userinfo = atom({
    key: "userinfo",
    default: {
        nickname: "정열",
        email: "",
        profile: "https://item.kakaocdn.net/do/c5c470298d527ef65eb52883f0f186c49f17e489affba0627eb1eb39695f93dd",
    },
});
