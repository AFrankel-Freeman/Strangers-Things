import React, {useState, useEffect} from "react";
import DeletePost from "./DeletePost";


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
                  let filteredPosts = allPosts.filter(post => post.active === true)
               
                  setProfilePosts(filteredPosts)
                })
                .catch(console.error);
        }
        getProfile()
    },[]);
    const refetchPost =() => {
      getProfile()
    }

    return(
      <div>
        <h1>My Post's</h1>   
          {profilePosts.map((posts,i) => {
            return (
              <div className="profile-post" key={i}>
                <h2> {posts.title} </h2>
                <DeletePost setProfilePosts={setProfilePosts} profilePosts={profilePosts} onClick ={refetchPost} id={posts._id}/> 
              </div>
          )
        })}
      </div>
    )
}

export default Profile;