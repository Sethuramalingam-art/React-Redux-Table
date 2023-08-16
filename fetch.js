import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toStore } from "./Actions";
import data from "./userdata.json";

const Fetch = () => {
  const [userData, setUserData] = useState([]);
  const [userDataJson, setUserDataJSON] = useState(data);
  const dispatch = useDispatch();
  const userNameFromState = useSelector((state) => state.userinfo.userinfo);
  console.log(userNameFromState);
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const result = await response.json();
      setUserData(result);
      dispatch(toStore(result));
    };
    fetchUsers();
  }, []);
  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              {userNameFromState.length !== 0 &&
                Object.keys(userNameFromState[0])
                  .slice(0, 4)
                  .map((colName) => {
                    return (
                      <>
                        <td>{colName}</td>
                      </>
                    );
                  })}
            </tr>
          </thead>
          <tbody>
            {userNameFromState.length !== 0 &&
              userNameFromState.map((rowData) => {
                return (
                  <>
                    <tr>
                      <td>{rowData.id}</td>
                      <td>{rowData.name}</td>
                      <td>{rowData.username}</td>
                      <td>{rowData.email}</td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Fetch;
