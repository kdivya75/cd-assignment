import { useEffect, useState, useRef } from "react";
import { debounce } from "../../common/util/util";
import ListGroup from 'react-bootstrap/ListGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Alert  from "react-bootstrap/Alert";
import Spinner from 'react-bootstrap/Spinner';
import { getUsersList } from "../../common/config.js";
import UserList from "../../component/UserList";
import './UsersList.css';



const fetchData = async() => {
    const r = await fetch(getUsersList);
    const rJson = await r.json();
    return rJson;

}

function UsersList() {
    const [userData, setUserData] = useState([]);
    const [filter, setFilter] = useState([]);
    const [sortBy, setSortBy] = useState("name");
    const [searchText, setSearchText] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const searchRef = useRef();

    const sortFunction = (data, type) => {
      const sorted =  data.sort((a, b) => {
            let fa = a[type].toLowerCase(),
                fb = b[type].toLowerCase();
            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        });

         return sorted;
    }

    const handleSortby = (e) => {
        const s = searchRef.current.value;
        setSortBy(e);
        const data = s ? filter : userData;
        const sortedData =  sortFunction(data, e);
        s ? setFilter(sortedData) : setUserData(sortedData)
    }


    const applyfilter = () => {
        const s = searchRef.current.value.toLowerCase();
        if(searchRef.current.value){
        const filtedData = userData.filter(each =>
            each.name.toLowerCase().includes(s) ||
            each.username.toLowerCase().includes(s) ||
            each.email.toLowerCase().includes(s));
            setFilter(filtedData);
        }
        else{
            setFilter({});
        }
        setSearchText(s);
    }

    const a = debounce(applyfilter, 500);

    const handleSearch = () => {
        a();
        if(searchRef.current.value === ""){
            handleSortby(sortBy) ;
        }
    }

    useEffect(() => {
        fetchData().then((response) => {
            const sortedData =  sortFunction(response,"name");
           setUserData(sortedData)
           setIsLoading(false);
        }).catch((error) => {
            console.log(error)
        });
    },[])

    return (
    <div>
        <div className="header">
            <h2 className="flex-grow-1 align-self-sm-center">Users</h2>
            <div className="align-self-sm-center d-flex flex-column">
                <label for="search">
                    Search
                </label>
                <input type="search" ref={searchRef} id="search" onChange={handleSearch} placeholder="Type to search" />
            </div>
           
            <div className="d-flex align-self-sm-center flex-column">
                <label for="Sortby" className="">
                        Sort By
                </label>
                <DropdownButton id="Sortby" 
                    title={sortBy} 
                    onSelect={handleSortby} 
                    data-active-option={sortBy}
                    className="sortBy">
                    <Dropdown.Item eventKey="name" id="name" >Name</Dropdown.Item>
                    <Dropdown.Item eventKey="username" id="username">Username</Dropdown.Item>
                    <Dropdown.Item eventKey="email" id="email">Email</Dropdown.Item>
                </DropdownButton>
            </div>
        </div>
     

        {isLoading &&
        <div className="spinnerContainer">
            <Spinner animation="border" role="status" variant="primary">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
        </div>}

        {!isLoading &&  <ListGroup as="ul" role="list">
            {!searchText && userData.length > 0 && userData.map((each) =>
                 <UserList  key={each.id} user={each} />
            )}    
            {searchText && filter.length > 0  && filter.map((each) =>
                 <UserList  key={each.id} user={each} />
            )}  
        </ListGroup> 
        }

        {searchText && !filter.length && 
             <Alert className="mt-3 ml-3 mr-3" variant="primary">Searched user does not exists</Alert>
        }

    </div>
    )}

export default UsersList;