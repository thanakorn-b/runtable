import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { FaRunning } from 'react-icons/fa';
import { FcMenu } from 'react-icons/fc';
import { BsTable } from 'react-icons/bs';
import { AiFillSignal } from 'react-icons/ai';
import { IoMdAddCircleOutline } from 'react-icons/io';

const TopBar = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #E9EAEE;
`;

const Logo = styled.div`
  width: 100px;
  height: 100%;
  border-right: 1px solid #E9EAEE;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Top = styled.div`
  width: 100px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Body = styled.div`
  display: flex;
  width: 100%;
  background-color: #EEF2F5;
  position: fixed;
`;

const SideBar = styled.div`
  width: 100px;
  height: 95vh;
  background-color: #374C70;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SideBlock = styled.div`
  background-color: #304262;
  margin-top: 14px;
  width: 72px;
  height: 80px;
  padding-right: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-left: 4px solid #00B6E6;
`;

const BoxContent = styled.div`
  margin-left: 100px;
  width: 100%;
  height: 93vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BoxInside = styled.div`
  width: 90%;
  height: 80%;
`;

const Button = styled.button`
  border-color: transparent;
  width: 155px;
  height: 35px;
  border-radius: 3px;
  background-color: #00B6E6;
  margin-left: 10px;
`;

const ButtonSubmit = styled.button`
  border-color: transparent;
  width: 155px;
  height: 35px;
  border-radius: 3px;
  background-color: rgb(0, 182, 230);
  margin-top: 7px;
  color: white;
`;

const ButtonContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  &:hover {
    
  }
`;

const Content = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  /* padding: 16px 20px 16px 20px; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentInside = styled.div`
  overflow: scroll;
  width: 100%;
  height: 90%;
`;

const HeadContentName = styled.div`
  margin-top: 25px;
  margin-bottom: 15px;
`;

const TableHeader = styled.div`
  padding: 16px 20px 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 35px;
  border-bottom: 1px solid #E9EAEE;
`;

const TableType = styled.div`
  align-items: center;
  padding: 0px 20px;
  display: flex;
  height: 49px;
  border-bottom: 1px solid #E9EAEE;
`;

const TableColumn = styled.div`
  margin-right: 30px;
`;

const DivWidth = styled.div`
  width: 60px;
  /* justify-content: center;
  display: flex; */
`;

const DivName = styled.div`
  width: 100px;
  /* justify-content: center;
  display: flex; */
`;

const InputName = styled.input`
  width: 92px;
  font-size: 16px;
  border-color: transparent;
`;

const InputWidth = styled.input`
  width: 28px;
  font-size: 16px;
  border-color: transparent;
`;

interface Table {
  id: number,
  name: string,
  running: { id: number, day: number, distant: number }[],
  total: number,
};

function App() {
  // const API_HOST = 'http://localhost:8000/';
  // const [tables, setTables] = useState<Table[]>([]);

  // useEffect(() => {
  //   fetch(`${API_HOST}runner/`, {
  //     method: 'GET',
  //   }).then(response => response.json())
  //     .then(data => {
  //       setTables(data);
  //     });
  // }, []);

  const [tables, setTables] = useState<Table[]>([
    {
        "id": 1,
        "name": "Alex",
        "running": [
            {
                "id": 1,
                "day": 1,
                "distant": 10
            },
            {
                "id": 4,
                "day": 2,
                "distant": 30
            },
            {
                "id": 7,
                "day": 3,
                "distant": 0
            }
        ],
        "total": 40
    },
    {
        "id": 2,
        "name": "Harmon",
        "running": [
            {
                "id": 2,
                "day": 1,
                "distant": 5
            },
            {
                "id": 5,
                "day": 2,
                "distant": 0
            },
            {
                "id": 8,
                "day": 3,
                "distant": 15
            }
        ],
        "total": 20
    },
    {
        "id": 3,
        "name": "Benny",
        "running": [
            {
                "id": 3,
                "day": 1,
                "distant": 20
            },
            {
                "id": 6,
                "day": 2,
                "distant": 2
            },
            {
                "id": 9,
                "day": 3,
                "distant": 7
            }
        ],
        "total": 29
    }
]);

  const onChangeName = (e: any, id: number) => {
    var newArr = [...tables];
    for (var i in newArr) {
      if (newArr[i].id === id) {
        newArr[i].name = e.target.value;
        break;
      };
    };
    setTables(newArr);
  }

  const onChangeNumber = (e: any, id: number) => {
    var newArr = [...tables];
    for (var i in newArr) {
      for (var j in newArr[i].running) {
        if (newArr[i].running[j].id === id) {
          newArr[i].running[j].distant = e.target.value;
          break;
        };
      }
    };
    setTables(newArr);
  }

  const Test = () => {
    // var day = 0;
    // for (var i in tables[0].running) {
    //   day <= tables[0].running[i].day ? day = tables[0].running[i].day : day = day;
    // }
  }

  return (
    <div>
      <TopBar>
        <Logo>
          <FaRunning style={{ color: "#374C70", width: "28px", height: "auto", marginRight: "8px" }} />
          <FcMenu style={{ color: "#9BB1DB", width: "20px", height: "auto" }} />
        </Logo>
        <Top>Run Table</Top>
        <Top></Top>
      </TopBar>
      <Body>
        <SideBar>
          <SideBlock>
            <BsTable style={{ color: "#00B6E6", width: "25px", height: "auto", marginBottom: "5px" }} />
            <div style={{ color: "#00B6E6" }}>Tables</div>
          </SideBlock>
          <SideBlock >
            <AiFillSignal style={{ color: "#90A3BD", width: "25px", height: "auto", marginBottom: "5px" }} />
            <div style={{ color: "#90A3BD" }}>Ranking</div>
          </SideBlock>
        </SideBar>
        <BoxContent>
          <BoxInside>
            <HeadContentName>
              <BsTable />
              <div>Tables</div>
            </HeadContentName>
            <Content>
              <ContentInside>
                <div>
                  <TableHeader>
                    <div>name table</div>
                    <div>
                      <Button>
                        <ButtonContent>
                          <IoMdAddCircleOutline style={{ color: "white" }} />
                          <div>add runner</div>
                        </ButtonContent>
                      </Button>
                      <Button>
                        <ButtonContent>
                          <IoMdAddCircleOutline style={{ color: "white" }} />
                          <div>add day</div>
                        </ButtonContent>
                      </Button>
                    </div>
                  </TableHeader>
                  <TableType>
                    <TableColumn><div style={{ width: "25px" }}>No.</div></TableColumn>
                    <TableColumn><DivName>Name</DivName></TableColumn>
                    {console.log(tables)}

                    {tables.length !== 0 && tables[0].running.map(table =>
                      <TableColumn><DivWidth>Day {table.day}</DivWidth></TableColumn>
                    )}
                    <TableColumn><DivWidth>Total</DivWidth></TableColumn>
                  </TableType>
                  {tables.map((table, index) =>
                    <TableType>
                      <TableColumn><div style={{ width: "25px" }}>{index + 1}</div></TableColumn>
                      <TableColumn><InputName value={table.name} onChange={(event: any) => onChangeName(event, table.id)}></InputName></TableColumn>
                      {table.running.map((run) =>
                        <TableColumn><InputWidth value={run.distant} onChange={(e: any) => onChangeNumber(e, run.id)}></InputWidth>KM</TableColumn>
                      )}
                      <TableColumn><DivWidth>{table.total} KM</DivWidth></TableColumn>
                    </TableType>
                  )}


                </div>
              </ContentInside>
              <ButtonSubmit onClick={() => Test()}>Submit</ButtonSubmit>
            </Content>
          </BoxInside>
        </BoxContent>
      </Body>
    </div>
  );
}

export default App;
