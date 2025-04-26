import React from "react";
import {Routes,Route} from 'react-router-dom';
import AdminHome from "./components/adminhome/AdminHome";
import MyPosts from "./components/MyPosts/MyPosts";
import AddPosts from "./components/AddPosts/AddPosts";
import UpdatePosts from "./components/UpdatePosts/UpdatePosts";

function App() {
  return (
    <div>
       <React.Fragment>
        <Routes>
          <Route path='/' element={<AdminHome/>}></Route>
          <Route path='/posts' element={<MyPosts/>} ></Route>
          <Route path='/addpost' element={<AddPosts/>}></Route>
          <Route path='/updatepost' element={<UpdatePosts/>}></Route>
          
        </Routes>
      </React.Fragment>
     
     
    </div>
  );
}

export default App;
