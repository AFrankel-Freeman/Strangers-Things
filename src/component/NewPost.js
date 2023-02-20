import React,{useState} from "react";

const URL='https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-AM/posts';
const NewPost =() => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [willDeliver, setWillDeliver] = useState(false)
    const token = localStorage.getItem("loginToken")
    
const postHandler = (title, description, price, willDeliver) => {
    fetch(URL,{
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem(`loginToken`)}`
        },
        body: JSON.stringify({
            post: {
            title: title,
            description: description,
            price: price,
            willDeliver: true
            }
        })
    })
        .then(response => response.json())
        .then(result => {
            console.log(result);
        })
        .catch(console.error)
} 
const handleSubmit = (event) =>{
    event.preventDefault()
    console.log("TDP", title,description,price)
    postHandler(title, description, price)
    

}
const handlePostChange = (event) => {
    if(event.target.placeholder === "Title") setTitle(event.target.value)
    else if(event.target.placeholder === "Description") setDescription(event.target.value)
    else if (event.target.placeholder === "Price") setPrice(event.target.value)
    else if (event.target.value === true) setWillDeliver(event.target.value)
} 
        
 return(
    <div>     
        <h1 className="createposthead"> Create New Post:</h1>
        <form className="new-post-form" onSubmit = {handleSubmit}>
        <label className="label-text"> Title:</label>
        <input 
            className="input-text"
            onChange={handlePostChange}
            placeholder="Title"
            type= "text"
            value= {title}
        />
        <label className="label-text"> Description:</label>
        <input
            className="input-text"
            onChange={handlePostChange}
            placeholder="Description"
            type= "text"
            value= {description}
        />
        <label className="label-text"> Price:</label>
        <input
            className="input-text"
            onChange={handlePostChange}
            placeholder="Price"
            type= "text"
            value = {price}
        />
        <input
        onSubmit = {handlePostChange}
        type = "checkbox"
        value = {false}
        />
        <button type ="submit" >submit</button>
        </form>
    </div> 
 )   
}
export default NewPost