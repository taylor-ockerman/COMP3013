import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

function countCompleted({ assignments }: any) {
  let count = 0;
  assignments?.map((a: any) => a.completed ? count++ : count = count);
  return count;
}

export function Assignments({ assignments, setAssignments }: any) {
  
  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{assignments.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>{countCompleted({assignments})} of {assignments.length}</span>
        </div>
      </header>
      {/* Do I need to pass index twice, once as key and once as a separate value? Access key some other way? */}
      <div className={styles.list}>
        {assignments?.map((a: any, index: any) =>
          <Assignment key={index}
            index={index}
            title={a.title}
            assignments={assignments}
            setAssignments={setAssignments}
            completed={a.completed} />)}
      </div>
    </section>
  );
}
