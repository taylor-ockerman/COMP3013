import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";
import { useState } from 'react'

function countCompleted({ assignments }: any) {
  let count = 0;
  { assignments?.map((assignment: any) => assignment.completed ? count++ : count = count) };
  return count;
}

export function Assignments({ assignments, setAssignments }: any) {
  const[assignmentList, setAssignmentList] = useState([]);
  
  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{assignments.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>{countCompleted(assignments)} of {assignments.length}</span>
        </div>
      </header>

      <div className={styles.list}>
        {assignments?.map((i: any, index: any) =>
          <Assignment key={index}
            title={i.title}
            assignments={assignments}
            setAssignments={setAssignments}
            completed={i.completed} />)}
      </div>
    </section>
  );
}
