import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";

function Timeline() {
    return <div> Timeline </div>;
}

export default Timeline;

// how to display posts on timeline
// firestore database has a collection labeled "posts" => every time a user creates a post, an entry is added to the table
// how to access the table, retrieve post contents, and display them on the screen?