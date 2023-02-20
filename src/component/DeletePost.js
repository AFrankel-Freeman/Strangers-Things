import React from "react";

const APIURL = `https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-AM/posts/`;

const DeletePost = () => {
    const response = fetch('https://strangers-things.herokuapp.com/api/COHORT-NAME/posts/5e8d1bd48829fb0017d2233b', {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer TOKEN_STRING_HERE'
        }
      }).then(response => response.json())
        .then(result => {
          console.log(result);
        })
        .catch(console.error);

    return(
        <button> Delete Post</button>
    )
}

export default DeletePost