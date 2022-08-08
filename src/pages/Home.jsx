import styled from "styled-components";
import { useEffect, useState } from "react";

const Home = () => {

    const [viewLoginBox, setViewLoginBox] = useState(true);

    return(<div>
        <Page>
            <LeaderboardSummary>요약리더보드</LeaderboardSummary>
            <div>
                { viewLoginBox ? <LogInBox/> : <EnterButton />}
            </div>
        </Page>
    </div>);
}

const EnterButton = styled.div`
    
`;

//로그인 창 css
const LogInBox = styled.div`
    
`;

const LeaderboardSummary = styled.div`
    
`;

const Page = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

//input data
//승점 상위 3인 승점 data

// 승점 상위 3인 노출


export default Home;