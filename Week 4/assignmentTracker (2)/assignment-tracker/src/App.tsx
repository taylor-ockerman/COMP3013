import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from 'react'

function App() {
  const [buttonClickable, setButtonClickable] = useState({cursor: 'not-allowed', disabled: true});
  const [assignments, setAssignments] = useState([]);
  
  return (
    <>
      <Header buttonClickable={buttonClickable} setButtonClickable={setButtonClickable} setAssignments={setAssignments} assignments={assignments}/>
      <Assignments assignments={assignments} setAssignments={setAssignments}/>
    </>
  );
}

export default App;
