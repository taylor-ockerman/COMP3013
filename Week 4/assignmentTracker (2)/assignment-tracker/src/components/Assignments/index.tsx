import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

type Props = {
  assignments:{ title: string, completed: boolean }[],
  setAssignments: React.Dispatch<React.SetStateAction<{ title: string, completed: boolean }[]>>
}

function countCompleted({ assignments, setAssignments }: Props) {
  let count = 0;
  assignments?.map((a: { title: string, completed: boolean }) => a.completed ? count++ : count = count);
  return count;
}

export function Assignments({ assignments,  setAssignments} : Props) {

  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{assignments.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>{countCompleted({ assignments, setAssignments })} of {assignments.length}</span>
        </div>
      </header>
      {/* Do I need to pass index twice, once as key and once as a separate value? Access key some other way? */}
      <div className={styles.list}>
        {assignments?.map((a: { title: string, completed: boolean }, index: number) =>
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
