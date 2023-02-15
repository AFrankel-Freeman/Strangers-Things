import React, {useState, useEffect} from "react";

const URL='https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-AM/posts';

const AllPosts = () => {
    const [listOfPosts, setListOfPosts]= useState([]);

    useEffect(() => {
        const getPosts = async () => {
            await fetch(URL)
            .then(response => response.json())
            .then(data => {
                const allPosts = data.data.posts
                setListOfPosts(allPosts)
            })
        }
        getPosts()
    },[]);

    return(
        <div>
             {listOfPosts.map((post,i) => {
                return (
                    <div key={i}>
                        <h1>{post.title}</h1>
                        <h2>{post.price}</h2>
                    </div>
                )
            })
            }
        </div>
    )
}


export default AllPosts