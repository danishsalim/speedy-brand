import "./App.css";
import Categories from "./Categories";
import MyProvider from "../context";
import All from "./All";
import Mission from "./Mission";
import Custom from "./Custom";
import BlogEditor from "./blogEditor/blogEditor";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
       <MyProvider>
      <BrowserRouter>
      
      <Categories />
        <Routes>
            <Route path="/" element={<All/>} />
            <Route  path="Custom" element={<Custom/>} />
            <Route  path="Mission" element={<Mission/>} />
            <Route  path="BlogEditor" element={<BlogEditor/>} />
         
        </Routes>
      </BrowserRouter>
      </MyProvider>
    </>
  );
}

export default  App;
