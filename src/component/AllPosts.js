import React, {useState, useEffect} from "react";
import NewPost from "./NewPost";
import {Link} from "react-router-dom";


const URL='https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-AM/posts';

const AllPosts = () => {
    const [listOfPosts, setListOfPosts]= useState([]);
    const token = localStorage.getItem("loginToken")

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
        <div className="homepage">
           {token && <NewPost /> } 
           <h2>Posts:</h2>
            <div >
                {listOfPosts.map((post,i) => {
                    return (
                        <div className="allposts" key={i}>
                            <Link to={`/post/${i}`} >
                                <h1 className="posttitle">{post.title}</h1>
                                <h2 className="postprice">{post.price}</h2>
                            </Link>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}


export default AllPosts