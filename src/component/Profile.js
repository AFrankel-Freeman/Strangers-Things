import React, {useState, useEffect} from "react";

const APIURL='https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-AM/users/me'

const Profile = () => {
    const [displayProfile, setDisplayProfile] = useState({})

    useEffect(() => {
        const getProfile = async () => {
            await fetch(APIURL, {
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${localStorage.getItem("loginToken")} ` 
                },
              }).then(response => response.json())
                .then(result => {
                  console.log(result);
                })
                .catch(console.error);
        }
        getProfile()
    },[]);
    

    return(
        <h1>Profile</h1>
    )
}

export default Profile;