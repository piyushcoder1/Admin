import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "@mui/material";
import DashboardTable from "./component/Dashboard";
import { ErrorBoundary } from "react-error-boundary";
import Nav from "./component/Nav";
import Wentback from "./component/Back";

function App() {
  const [userData, setUserData] = useState([]);
  const [userDataOriginal, setUserDataOriginal] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [userPerPage] = useState(10);
  const URL =
    "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";
  const performApiCall = async () => {
    try {
      const response = await axios.get(URL);
      setUserData(response.data);
      setUserDataOriginal(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    performApiCall();
  }, []);
  const handleSearch = (searchText) => {
    const Data = userDataOriginal.filter((val) => {
      if (searchText === "") {
        return val;
      } else if (
        val.name.toLowerCase().includes(searchText.toLocaleLowerCase())
      ) {
        return val;
      } else if (
        val.email.toLowerCase().includes(searchText.toLocaleLowerCase())
      ) {
        return val;
      } else if (
        val.role.toLowerCase().includes(searchText.toLocaleLowerCase())
      ) {
        return val;
      }
    });

    setUserData(Data);
  };
  const userDataLastIndex = currentPage * userPerPage;
  const userDataFirstIndex = userDataLastIndex - userPerPage;
  const userDataCurrent = userData.slice(userDataFirstIndex, userDataLastIndex);

  const handlePagiClick = (event, value) => {
    const pageNumber = value;
    if (pageNumber !== undefined) {
      setCurrentPage(pageNumber);
    }
  };

  const handleError = (error, errorInfo) => {
    console.log(error, errorInfo);
  };

  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={Wentback} onError={handleError}>
        <Nav></Nav>
        <br></br>
        <Container maxWidth="lg" className="Dashboard">
          <DashboardTable
            userDataAll={userData}
            userData={userDataCurrent}
            setUserData={setUserData}
            handlePagiClick={handlePagiClick}
            userPerPage={userPerPage}
            totalUserData={userData.length}
            handleSearch={handleSearch}
          />
        </Container>
      </ErrorBoundary>
    </div>
  );
}

export default App;
