import styled from "styled-components";
import { useEffect, useState } from "react";
import { mockPlayer } from "../data/mockData";

const LeaderBoardBox = () => {
    const [playerInfo, setPlayerInfo] = useState();

    useEffect(() => {
        setPlayerInfo(mockPlayer);
    }, []);

    return(<div>
        <Frame>
            <thead>
                <tr>
                    <th>이름</th> <th>승</th> <th>패</th> <th>승점</th> <th>경기 수</th>
                </tr>
            </thead>
            <tbody>
                {playerInfo ? (
                playerInfo.map((player) => (
                <tr>
                    <th>{player.name}</th> <th>{player.currentWin}</th> <th>{player.currentLose}</th> <th>{player.currentPoint}</th> <th>{player.matchNum}</th>
                </tr>
                ))
            ) : (
                <div>loading ...</div>
            )}
            </tbody>
        </Frame>
    </div>);
}; 

const Frame = styled.div`
    
`;

export default LeaderBoardBox;