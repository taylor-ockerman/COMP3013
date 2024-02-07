import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { useState } from 'react'

export function Header({ setAssignments, assignments }: any) {
  const [inputText, setInputText] = useState("");
  const [ isDisabled, setIsDisabled] = useState({ cursor: "not-allowed", disabled: true });
  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm}>
        <input placeholder="Add a new assignment"
          type="text"
          //how to handle enter key for the input field?
          onChange={(i) => {
            if(i.target.value == ""){
              setIsDisabled({ cursor: "not-allowed", disabled: true })
            }else{
              setInputText(i.target.value)
              setIsDisabled({ cursor: "pointer", disabled: false })
            }
            }}
           />
           {/* Needed to add type="button" to avoid reloading the page? Because of form submission forcing page reload? */}
        <button type="button" 
          style={isDisabled}
          disabled={isDisabled.disabled}
          onClick={() => setAssignments([...assignments, { title: inputText, completed: false }])}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
