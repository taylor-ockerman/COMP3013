import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { useState } from 'react'

function handleInput(setButtonClickable: Function, input: String, setInputText: Function) {
  setInputText(input);
  if (input) {
    setButtonClickable({ cursor: "pointer", disabled: false })
  } else if (input == "") {
    setButtonClickable({ cursor: "not-allowed", disabled: true })
  }
}

export function Header({ buttonClickable, setButtonClickable, setAssignments, assignments }: any) {
  const [inputText, setInputText] = useState("");

  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm}>
        <input placeholder="Add a new assignment"
          type="text"
          onChange={(input) => handleInput(setButtonClickable, input.target.value, setInputText)} />
        <button type="button"
          style={buttonClickable}
          disabled={buttonClickable.disabled}
          onClick={() => setAssignments([...assignments, { title: inputText, completed: false }])}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
