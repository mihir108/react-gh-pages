import React, {useState} from "react";
import ReactDOM from "react-dom";
import axios from "axios";

function App(){
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    function getNews(){
        // axios.get("http://localhost:5000/", { crossdomain: true }).then(response =>{
        //     console.log(response.data);
        //     setTitle(response.data.title);
        //     setDescription(response.data.description);
        // }).catch(error => {
        //     console.log(error.response.data);
        // });
        fetch("https://morning-garden-00738.herokuapp.com/").then(response => response.text()).then(data => {
            data = JSON.parse(data);
            console.log(data.title);
            console.log(data.description);
            setTitle(data.title);
            setDescription(data.description);
        }
        );
    }

    return <div>
        <button onClick={getNews}>Generate News</button>
        <h5> {title} </h5>
        <h5> {description} </h5>
    </div>
}

export default App;