import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Login from "../pages/login";

import Notes from "../pages/notes";
import Main from "../layouts/main";



function App() {

    return (
      // <main>
      //   <Loader/>
      // </main>
      
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/notes" element={<Main/>}>
          <Route index element={<Notes />}/>
          </Route>
        </Routes>

        </BrowserRouter>
        
        
      
    );
  }
  
  export default App;
  