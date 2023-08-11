import { atom } from "recoil";

export const userinfo = atom({
    key: "userinfo",
    default: {
        nickname: "정열",
        email: "",
        profile: "",
    },
});
