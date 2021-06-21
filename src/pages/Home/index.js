import { useState } from "react";
import Edit from "./components/Edit";
import List from "./components/List";

const Home = () => {
  const [data, setData] = useState([]);

  return (
    <>
      <div className="title_container">
        <h2>Registration List</h2>
      </div>
      <div className="row clearfix">
        <Edit add={setData} />
      </div>
      <List listData={data} deleteData={setData} />
    </>
  );
};

export default Home;
