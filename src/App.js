import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {
  const [newBookmark, setNewBookmark] = useState({
    name: "",
    url: ""
  })
  const [storedBookmarks, setStoredBookmarks] = useState([]);
  
  const handleChange = (event) => {
    setNewBookmark({...newBookmark, [event.target.id]: event.target.value});
    // console.log(newBookmark);
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setStoredBookmarks([...storedBookmarks, newBookmark]);
    setNewBookmark({
      name: "",
      url: ""
    })
  };
  console.log(storedBookmarks);

  const handleDelete = (event) => {
    const bookmarkIndex = Number(event.target.id);
    let newBookmarkList = [...storedBookmarks]
    newBookmarkList.splice(bookmarkIndex, 1);
    console.log("filtered", newBookmarkList)
    setStoredBookmarks(newBookmarkList);
  }
  
  return (
    <div className="App">
      <header className="App-header">
      <h2>Create a New Bookmark</h2>
       <form onSubmit={handleSubmit}>
         <label htmlFor="name">Website Name</label>
         <input 
            type="text" 
            name="name"
            id="name"
            onChange={handleChange}
            value={newBookmark.name}
         />
         <br /><br />
         <label htmlFor="url">URL</label>
         <input
            type="text"
            name="url"
            id="url"
            onChange={handleChange}
            value={newBookmark.url}
         />
         <br /><br />
         <button type="submit">Submit</button>
       </form>
       
       <p>------------------------------</p>
       
       {storedBookmarks.map((bookmark, i)=> {           //<------put this into a new component?//
          return(
            <div key={i}>
              {/* <ul style={{listStyleType: "none"}}> */}
                <a className="App-link" target="_blank" rel="noreferrer" href={bookmark.url}><p>{bookmark.name}</p></a>
              {/* </ul> */}
              <button id={i} onClick={handleDelete}>Delete</button>
            </div>
          )
       })}
      </header>
    </div>
  );
}

export default App;
