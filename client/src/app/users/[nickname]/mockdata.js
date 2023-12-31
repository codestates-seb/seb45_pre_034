import IconDefaultUser from "/public/icon_default_user.png";

export const user = {
    id: 0,
    nickname: "kay0829",
    profile: IconDefaultUser,
    email: "jay9884@naver.com",
    createdAt: "2008-12-31 00:00:00",
    updatedAt: "2008-12-31 00:00:00",
};

export const otherUser = {
    id: 1,
    nickname: "joy1234",
    profile: IconDefaultUser,
    email: "joy12344@naver.com",
    createdAt: "2016-03-01 00:00:00",
    createdAt: "2016-03-01 00:00:00",
};

export const questions = [
    {
        id: 0,
        userId: 0,
        title: "test1",
        body: "test1",
        recomended: 20,
        createdAt: "2023-08-16 13:00:00",
        updatedAt: "2023-08-16 13:00:00",
    },
    {
        id: 1,
        userId: 0,
        title: "test2",
        body: "test2",
        recomended: 30,
        createdAt: "2023-08-16 14:00:00",
        updatedAt: "2023-08-16 14:00:00",
    },
    {
        id: 2,
        userId: 0,
        title: "test3",
        body: "test3",
        recomended: 40,
        createdAt: "2023-08-16 15:00:00",
        updatedAt: "2023-08-16 15:00:00",
    },
];

export const questionsByOtherUser = [
    {
        id: 3,
        userId: 1,
        title: "test4",
        body: "test4",
        recomended: 10,
        createdAt: "2023-08-16 13:00:00",
        updatedAt: "2023-08-16 13:00:00",
    },
    {
        id: 4,
        userId: 1,
        title: "test5",
        body: "test5",
        recomended: 200,
        createdAt: "2023-08-16 14:00:00",
        updatedAt: "2023-08-16 14:00:00",
    },
    {
        id: 5,
        userId: 1,
        title: "test6",
        body: "test6",
        recomended: 400,
        createdAt: "2023-08-16 15:00:00",
        updatedAt: "2023-08-16 15:00:00",
    },
];

export const answers = [
    {
        id: 0,
        userId: 0,
        questionId: 3,
        title: "answer4",
        body: "answer4",
        recomended: 100,
        status: true,
        createdAt: "2023-08-16 15:00:00",
        updatedAt: "2023-08-16 15:00:00",
    },
    {
        id: 1,
        userId: 0,
        questionId: 4,
        title: "answer5",
        body: "answer5",
        recomended: 40,
        status: false,
        createdAt: "2023-08-16 16:00:00",
        updatedAt: "2023-08-16 16:00:00",
    },
    {
        id: 2,
        userId: 0,
        questionId: 5,
        title: "answer6",
        body: "answer6",
        recomended: 20,
        status: true,
        createdAt: "2023-08-16 17:00:00",
        updatedAt: "2023-08-16 17:00:00",
    },
];

export const comments = [
    {
        id: 0,
        userId: 0,
        answerId: 0,
        question: null,
        body: "comment1",
        createdAt: "2023-08-16 17:00:00",
        updatedAt: "2023-08-16 17:00:00",
    },
];

const result = {
    data: null,
};

const resultWithPagination = {
    page: 2,
    size: 10,
    // 마지막 페이지
    totalItems: 139,
    data: [
        {
            id: 0,
            userId: 0,
            title: "test1",
            body: "test1",
            recomended: 20,
            createdAt: "2023-08-16 13:00:00",
            updatedAt: "2023-08-16 13:00:00",
        },
    ],
};
