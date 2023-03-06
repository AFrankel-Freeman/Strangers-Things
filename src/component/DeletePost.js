import React from "react";


const DeletePost = ({id, setProfilePosts, profilePosts}) => {
  const APIURL = `https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-AM/posts/${id}`;

    const deleteFunction = () => {
      fetch(APIURL, {
          method: "DELETE",
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("loginToken")} `
          }
        }).then(response =>response.json())
          .then(result => {
            let filteredPosts = profilePosts.filter(post => post.active === true)
            setProfilePosts(filteredPosts)
          })
          .catch(console.error);
    }

    return(
        <button onClick={deleteFunction}> Delete Post</button>
    )
}

export default DeletePost