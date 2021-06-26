import { useState, useEffect, useRef } from "react";
import { API_GET_DATA } from "../../global/constants";
import Edit from "./components/Edit";
import List from "./components/List";


async function fetchSetData(data) {
  await fetch(API_GET_DATA,{
    method: "PUT",
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ data })
  });  
} 

async function fetchData(setData) {
  const res = await fetch(API_GET_DATA);
  const { data } = await res.json();
  setData(data);
}

const Home = () => {
  const [data, setData] = useState([]);
  const submittingState = useRef(false);

  useEffect(() =>{
    if( !submittingState.current ) {
      return;
    }
    fetchSetData(data).then( data => submittingState.current = false );
  }, [data])

  useEffect(() =>{
    fetchData(setData)
  }, [])

  return (
    <>
      <div className="title_container">
        <h2>Registration List</h2>
      </div>
      <div className="row clearfix">
        <Edit add={setData} submittingState = {submittingState}/>
      </div>
      <List listData={data} deleteData={setData} submittingState = {submittingState}/>
    </>
  );
};

export default Home;
