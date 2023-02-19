import React, {useState, useEffect} from "react";

const APIURL='https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-AM/users/me'

const Profile = () => {
    const [profileMessages, setProfileMessages] = useState([])
    

    useEffect(() => {
        const getProfile = async () => {
            await fetch(APIURL, {
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${window.localStorage.getItem("loginToken")} `,

                },
              }).then(response => response.json())
                .then(result => {
                  console.log(result);
                  setProfileMessages(result.data.messages)
                  console.log("messages", profileMessages)
                })
                .catch(console.error);
        }
        getProfile()
    },[]);
    

    return(
      <div>
        <h1>Profile</h1>
      </div>
    )
}

export default Profile;