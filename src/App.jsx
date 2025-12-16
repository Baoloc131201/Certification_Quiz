// import ToDoList from './component/todolist'
// import TextField from "@mui/material/TextField";
// import Box from '@mui/material/Box';
// import { Button } from '@mui/material';
// import { useCallback, useEffect, useState } from 'react';
// import {v4} from "uuid";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoPage from './pages/TodoPage';
import QuizApp from './pages/QuizApp';
import UseEffect from './learnReact/useEffect';
import UseMemo from './learnReact/UseMemo';
import WordQuizImporter from './pages/WordQuizImporter';

// import QuizApp from './pages/QuizApp';
// function App() {
// const TODO_APP_STORAGE_KEY = "TODO_APP";
// const [inputValueToDoList, setInputValueToDoList] = useState([]);
// const [inputValue, setInputValue] = useState("");

//   const handleInputChange = useCallback((e) => {
//     console.log("Re-render", "go handleInputChange");
//     setInputValue(e.target.value);
//   },[]);

//   const handleTextInput = useCallback(() => {
//     console.log("Re-render", "go handleTextInput");
//     setInputValueToDoList([ {id: v4(), name: inputValue, isCompleted: false},...inputValueToDoList]);
//     setInputValue("");
//   },[inputValue,inputValueToDoList]);

//   const onCheckBtnClick = useCallback((id)=>{
//     setInputValueToDoList(previousState => previousState.map(todo => todo.id ===  id ? {...todo, isCompleted: true} : todo))
//   },[]);

//   useEffect(()=>{
//      const getItemLocalStorageList = localStorage.getItem(TODO_APP_STORAGE_KEY);
//      console.log("get item list",getItemLocalStorageList)
//      if(getItemLocalStorageList){
//        setInputValueToDoList(JSON.parse(getItemLocalStorageList));
//      }
//   },[])

//   useEffect(()=>{
//     if(inputValueToDoList.length > 0){
//      console.log('Saving to localStorage: ', inputValueToDoList); 
//      localStorage.setItem(TODO_APP_STORAGE_KEY, JSON.stringify(inputValueToDoList));
//     }  
//   },[inputValueToDoList]);

//   return (
//     <>
//       <div style={{marginTop: "40px", textAlign: "center", fontSize:"40px"}}>This is To Do List</div>
//       <Box sx={{ display: "flex", gap: 1,  margin: '10px' }}>
//               <TextField
//                 fullWidth
//                 label="Text"
//                 value={inputValue}
//                 id="fullWidth"
//                 placeholder="add text field......"
//                 onChange={handleInputChange}
//               />
//               <Button onClick={handleTextInput} variant="contained" disabled={inputValue.trim() === ''} >Add</Button>
//       </Box>
      
//       <ToDoList todolist={inputValueToDoList} onCheckBtnClick={onCheckBtnClick}/>
//     </>
//   )
// }

export default function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<TodoPage />} /> */}
        <Route path="/" element={<QuizApp />} />
        <Route path="/import" element={<WordQuizImporter />} />
        <Route path='/useEffect' element={<UseEffect />} />
        <Route path='/useMemo' element={<UseMemo />} />
      </Routes>
    </Router>
  );
}
