import React, { Component, useState } from "react";


export default function Form(){
    const[owner,setOwner]= useState("");
     const[model,setModel]= useState("");
     const[description,setDescription]= useState("");
    
    return(
        <div>
            <form>
                <label htmlFor="owner-text-box">Owner</label>
                <input
                id="owner-text-box"
                type="text"
                name="owner"
                value={owner}
               
                placeholder="Owner..."
                required />
                
                <label htmlFor="model-text-box">Model</label>
                <input
                id="model-text-box"
                type="text"
                name="model"
                value={model}
               
                placeholder="Model.."
                required />
                
                <label htmlFor="description-text-box">Description</label>
                <input
                id="description-text-box"
                type="text"
                name="description.."
                value={description}
               
                placeholder="Description..."
                required />
                <button>+</button>
            </form>
        </div>    
    )
}