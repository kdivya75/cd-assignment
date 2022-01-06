import { useCallback, useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Spinner from 'react-bootstrap/Spinner'
import { getUser, getUserPost } from "../../common/config.js";
import UserCard from "../../component/userCard/userCard";
import UserPosts from "../../component/UserPosts";

import  "./UserDetails.css";



function UserDetails () {
    const [userData, setUserData] = useState({});
    const [userPosts, setUserPosts] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();
    const getUserDetails = useCallback(async() => {
        setIsLoading(true)
        try{
        const rData = await fetch(`${getUser}${id}`);
        const responseData = await rData.json();

        const rPost = await fetch(`${getUserPost}${id}`);
        const responsePost = await rPost.json();
        return {
            responseData,
            responsePost
        };
        }
        catch(error){
            console.log(error);
        }
    },[id])

    useEffect(() => {
        getUserDetails().then((response) => {
            console.log(response)
            setUserData(response.responseData);
            setUserPosts(response.responsePost);
            setIsLoading(false);
        }).catch((error) => {
            console.log(error)
        })
    }, [getUserDetails, id])


 return <div>
        {isLoading ?
        <div className="spinnerContainer">
            <Spinner animation="border" role="status" variant="primary">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
        </div>: <>
          <Breadcrumb className="mt-3">
            <Breadcrumb.Item href="/" variant="primary">Users</Breadcrumb.Item>
            <Breadcrumb.Item active>{userData.name}</Breadcrumb.Item>
        </Breadcrumb> 

         <UserCard userData={userData} />
         <h2 className="mb-4 h4" color="primary">{`Posts by ${userData.name}`}</h2>
         <div className="row">
            
               {userPosts.map(each =>  <div className="col-md-4 mb-4">  <UserPosts post={each} /> </div>)}
             
         </div>
        
        </>}

       
    </div>
}

export default UserDetails;