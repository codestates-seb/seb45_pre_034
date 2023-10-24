import { atom } from "recoil";

export const userOrder = atom({
    key: "userOrder",
    default: "Newest",
});

export const questionOrder = atom({
    key: "questionOrder",
    default: "Newest",
});

export const answerOrder = atom({
    key: "answerOrder",
    default: "Newest",
});

export const commentOrder = atom({
    key: "commentOrder",
    default: "Newest",
});
