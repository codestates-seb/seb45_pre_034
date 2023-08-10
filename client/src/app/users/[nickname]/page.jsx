function UserDetail({ params }) {
    const { nickname } = params;

    return <div>{nickname}님 유저 상세페이지</div>;
}

export default UserDetail;
