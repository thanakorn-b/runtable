import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { AiFillSignal } from 'react-icons/ai';

const BoxContent = styled.div`
  margin-left: 100px;
  /* width: 100vh; */
  width: 90%;
  height: 93vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BoxInside = styled.div`
  /* width: 125vh;
  height: 75vh; */
  width: 90%;
  height: 80%;
`;

const Content = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const ContentInside = styled.div`
  /* overflow: scroll; */
  width: 100%;
  height: 90%;
`;

const HeadContentName = styled.div`
  margin-top: 25px;
  margin-bottom: 15px;
`;

const TableHeader = styled.div`
  height: 67px;
  border-bottom: 1px solid #E9EAEE;
  width: 100%;
  display: flex;
`;

const TableHeaderInside = styled.div`
  padding: 16px 20px 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContentChart = styled.div`
  padding: 16px 20px 16px 20px;
  display: flex;
  height: 87%;
  align-items: flex-end;
  /* justify-content: space-between; */
  overflow: scroll;
`;

const Graph = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
`;

const Chart = styled.div`
  background-color: #374C70;
  width: 40px;
  margin: 0px 5px 18px 5px;
`;

const TextName = styled.div`
  width: 50px;
  display: flex;
  text-align: center;
  transform: rotate(70deg) ;

`;

interface Rank {
  max_total: number,
  rank: { runner_id: number, name: string, total: number}[],
};

function Ranking() {
  const API_HOST = 'http://13.250.1.129:8000/';
  // const API_HOST = 'http://127.0.0.1:8000/';
  const [ranks, setRanks] = useState<Rank[]>([]);

  useEffect(() => {
    fetch(`${API_HOST}runner/ranking/`, {
      method: 'GET',
      // mode: 'no-cors',
    }).then(response => response.json())
      .then(data => {
        setRanks(data);
        });
  }, []);

  return (
    <BoxContent>
      <BoxInside>
        <HeadContentName>
          <AiFillSignal />
          <div>Ranking</div>
        </HeadContentName>
        <Content>
          <TableHeader>
            <TableHeaderInside>
              <div>name table</div>
            </TableHeaderInside>
          </TableHeader>
          <ContentInside>
            <ContentChart>
              {ranks.length !== 0 && ranks[0].rank.map((ranking) => 
              <Graph>
                <div>{ranking.total}</div>
                <Chart style={{height: `${ranking.total*100/ranks[0].max_total}%`}}></Chart>
                <TextName>{ranking.name}</TextName> 
              </Graph> // {ranking.name}
              )}

            </ContentChart>
          </ContentInside>

        </Content>
      </BoxInside>
    </BoxContent>
  );
}

export default Ranking;
