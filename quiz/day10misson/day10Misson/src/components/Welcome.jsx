const Welcome =({name,isMember})=>{
    return (
        <h1>
            {isMember 
                ? `${name}님 다시 오셨군요` 
                : `${name}님 가입하시겠어요?`}
        </h1>
    )
};

export default Welcome;