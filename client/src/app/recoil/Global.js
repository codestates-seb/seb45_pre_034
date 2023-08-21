import { atom } from "recoil";

export const userinfo = atom({
    key: "userinfo",
    default: {
        nickname: "정열",
        email: "",
        profile: "",
    },
});

export const followingState = atom({
    key: 'followingState',
    default: false,
});

export const sortState = atom({
    key: 'sortState',
    default: '',
})

export const navShow = atom({
    key: "navShow",
    default: false,
});