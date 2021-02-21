import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { BsTable } from 'react-icons/bs';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { AiFillDelete } from 'react-icons/ai';

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

const Button = styled.button`
  border-color: transparent;
  width: 155px;
  height: 35px;
  border-radius: 3px;
  background-color: #00B6E6;
  margin-left: 10px;
  &:hover{
    background-color: rgb(0, 113, 145);
  }
`;

const ButtonSubmit = styled.button`
  border-color: transparent;
  width: 155px;
  height: 35px;
  border-radius: 3px;
  background-color: rgb(0, 182, 230);
  margin-bottom: 7px;
  color: white;
  &:hover{
    background-color: rgb(0, 113, 145);
  }
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
  justify-content: space-between;
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
  height: 67px;
  border-bottom: 1px solid #E9EAEE;
  width: 100%;
`;

const TableHeaderInside = styled.div`
  padding: 16px 20px 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TableType = styled.div`
  align-items: center;
  padding: 0px 20px;
  display: flex;
  height: 49px;
  border-bottom: 1px solid #E9EAEE;
  width: 100%;
`;

const TableColumn = styled.div`
  height: 49px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  padding: 0px 20px;
  border-bottom: 1px solid #E9EAEE;
`;

const DivWidth = styled.div`
  width: 56px;
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
  width: 48px;
  font-size: 16px;
  border-color: transparent;
`;

const ButtomDelete = styled.button`
  border-color: transparent;
  width: 30px;
  height: 30px;
  border-radius: 3px;
  background-color: rgb(221, 27, 27);
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 40px;
  &:hover {
    background-color: rgb(163, 21, 21);
  }
`;

interface Table {
  runner_id: number,
  name: string,
  running: { running_id: number, day: number, distant: number, date: string }[],
  total: number,
};

function Tables() {
  const API_HOST = 'http://13.250.1.129:8000/';
  // const API_HOST = 'http://127.0.0.1:8000/';
  const [tables, setTables] = useState<Table[]>([]);

  useEffect(() => {
    fetch(`${API_HOST}runner/`, {
      method: 'GET',
      // mode: 'no-cors',
    }).then(response => response.json())
      .then(data => setTables(data));
  }, []);

  const onChangeDate = (e: any, day: number) => {
    var newArr = [...tables];
    for (var i in newArr) {
      // if (newArr[i].running) {
      //   newArr[i].name = e.target.value;
      //   break;
      // };
      newArr[i].running[day - 1].date = e.target.value
    };
    setTables(newArr);
  }

  const onChangeName = (e: any, id: number) => {
    var newArr = [...tables];
    for (var i in newArr) {
      if (newArr[i].runner_id === id) {
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
        if (newArr[i].running[j].running_id === id) {
          newArr[i].running[j].distant = e.target.valueAsNumber;
          break;
        };
      }
    };
    setTables(newArr);
  }

  const onSubmit = () => {
    fetch(`${API_HOST}runner/runnerPut/`, {
      method: 'Put',
      // mode: 'no-cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tables)
    }).then(response => response.json())
      .then(data => {
        fetch(`${API_HOST}runner/`, {
          method: 'GET',
          // mode: 'no-cors',
        }).then(response => response.json())
          .then(data => setTables(data))
      }).catch(error => console.log(error));
  }

  const onAddMember = () => {
    fetch(`${API_HOST}runner/runnerAddMember/`, {
      method: 'Post',
      // mode: 'no-cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(response => response.json())
      .then(data => {
        fetch(`${API_HOST}runner/`, {
          method: 'GET',
          // mode: 'no-cors',
        }).then(response => response.json())
          .then(data => setTables(data))
      }).catch(error => console.log(error));
  };

  const onAddDay = () => {
    fetch(`${API_HOST}runner/runnerAddDay/`, {
      method: 'Post',
      // mode: 'no-cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(response => response.json())
      .then(data => {
        fetch(`${API_HOST}runner/`, {
          method: 'GET',
          // mode: 'no-cors',
        }).then(response => response.json())
          .then(data => setTables(data))
      }).catch(error => console.log(error));
  };

  const onDelete = (id: number) => {
    fetch(`${API_HOST}runner/runnerDelete/${id}/`, {
      method: 'Delete',
      // mode: 'no-cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(response => response.json())
      .then(data => {
        fetch(`${API_HOST}runner/`, {
          method: 'GET',
          // mode: 'no-cors',
        }).then(response => response.json())
          .then(data => setTables(data))
      }).catch(error => console.log(error));
  };


  return (
      <BoxContent>
        <BoxInside>
          <HeadContentName>
            <BsTable />
            <div>Tables</div>
          </HeadContentName>
          <Content>
            <TableHeader>
              <TableHeaderInside>
                <div>name table</div>
                <div>
                  <Button onClick={onAddMember}>
                    <ButtonContent>
                      <IoMdAddCircleOutline style={{ color: "white" }} />
                      <div>add runner</div>
                    </ButtonContent>
                  </Button>
                  <Button onClick={onAddDay}>
                    <ButtonContent>
                      <IoMdAddCircleOutline style={{ color: "white" }} />
                      <div>add day</div>
                    </ButtonContent>
                  </Button>
                </div>
              </TableHeaderInside>
            </TableHeader>

            <ContentInside>

              <TableType>
                <TableColumn><div style={{ width: "25px" }}>No.</div></TableColumn>
                <TableColumn><DivName>Name</DivName></TableColumn>
                <TableColumn><DivWidth>Total</DivWidth></TableColumn>
                {tables.length !== 0 && tables[0].running.map(table =>
                  <TableColumn key={table.day} ><InputWidth value={table.date} onChange={(event: any) => onChangeDate(event, table.day)}></InputWidth></TableColumn>
                )}

              </TableType>
              {tables.map((table, index) =>
                <TableType >
                  <TableColumn><div style={{ width: "25px" }}>{index + 1}</div></TableColumn>
                  <TableColumn><InputName value={table.name} onChange={(event: any) => onChangeName(event, table.runner_id)}></InputName></TableColumn>
                  <TableColumn><DivWidth>{table.total} KM</DivWidth></TableColumn>
                  {table.running.map((run) =>
                    <TableColumn><InputWidth type="number" value={run.distant} onChange={(e: any) => onChangeNumber(e, run.running_id)}></InputWidth></TableColumn>
                  )}

                  <ButtomDelete onClick={() => onDelete(table.runner_id)}><AiFillDelete /></ButtomDelete>
                </TableType>
              )}


            </ContentInside>
            <ButtonSubmit onClick={() => onSubmit()}>Submit</ButtonSubmit>
          </Content>
        </BoxInside>
      </BoxContent>
  );
}

export default Tables;
