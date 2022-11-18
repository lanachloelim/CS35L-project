import React, { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

function CreatePost({ isAuth }) {
    const [title, setTitle] = useState(""); // save what user is typing in the textbox
    const [postText, setPostText] = useState("");

    const postsCollectionRef = collection(db, "posts"); // add posts to a table in the firestore database named "posts"
    let navigate = useNavigate();

    const createPost = async () => {
        await addDoc(postsCollectionRef, {
            title, 
            postText, 
            author: { name: auth.currentUser.displayName, id: auth.currentUser.uid }
        });
        navigate("/timeline"); 
    };

    useEffect (() => { // cannot create a post if not logged in
        if (!isAuth) {
            navigate("/login");
        }
    }, []);

    return ( 
        <div className="createPostPage"> 
            <div className="cpContainer">
                <h1> Create a Post </h1>
                <div className="inputGp"> 
                    <label> Title: </label>
                    <input placeholder="Title..." onChange={(event) => {
                        setPostText(event.target.value);
                    }}/>
                </div>
                <div className="inputGp">
                    <label> Post: </label>
                    <textarea placeholder="Post..." onChange={(event) => {
                        setTitle(event.target.value);
                    }}/>
                </div>
                <button onClick={createPost}> Submit Post </button> {/* add post to "posts" table */}
            </div>
        </div>
    );
}

export default CreatePost;