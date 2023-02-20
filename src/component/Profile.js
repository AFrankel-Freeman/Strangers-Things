import React, {useState, useEffect} from "react";


const APIURL='https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-AM/users/me'

const Profile = () => {
    const [profilePosts, setProfilePosts] = useState([])
    

    useEffect(() => {
        const getProfile = async () => {
            await fetch(APIURL, {
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${localStorage.getItem("loginToken")} `
                },
              }).then(response => response.json())
                .then(result => {
                  const allPosts = result.data.posts
                  setProfilePosts(allPosts)
                })
                .catch(console.error);
        }
        getProfile()
    },[]);
    

    return(
      <div>
        <h1>My Post's</h1>
        {profilePosts.map((posts,i) => {
          return (
            <div key={i}>
              <h2> {posts.title}</h2>
              </div>
          )
        })}
      </div>
    )
}

export default Profile;