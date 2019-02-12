import React from 'react';

const Home = ({history}) => {
    return (
        <div>
            <h2>홈</h2>
            <button onClick={()=>{history.push('/about/javascript')}}>로그인</button>
        </div>
    );
};

export default Home;