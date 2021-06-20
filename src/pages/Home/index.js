import Edit from "./components/Edit";
import List from "./components/List";

const Home = () => {    
    return <>
        <div className="title_container">
            <h2>Registration List</h2>
        </div>
        <div className="row clearfix">
            <Edit />            
        </div>
        <List />
    </>
};

export default Home