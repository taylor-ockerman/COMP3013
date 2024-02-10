import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { BsCheckCircleFill } from "react-icons/bs";

type Assignment = {
  title: string,
  assignments: { title: string, completed: boolean }[],
  completed: boolean,
  index: number,
  setAssignments: React.Dispatch<React.SetStateAction<{ title: string, completed: boolean }[]>>
}


export function Assignment({ title, assignments, completed, index, setAssignments}:Assignment) {
  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer} onClick={() => {
        //update completed state, change checkbox and add textCompleted class to <p>
        const nextAssignments = assignments.map((a: { title: string, completed: boolean }, i: number) => {
          if (i === index) {
            return { ...a, completed: !a.completed }
          } else {  
            return a;
          }
        });
        setAssignments(nextAssignments);
      }}>
        {completed ? <BsCheckCircleFill /> : <div/>}
      </button>

      <p className={completed ? styles.textCompleted : ""}>{title}</p>

      <button className={styles.deleteButton} onClick={() => {
        //a is unused, but lets me access index "i". better way to remove the correct item from the array?
        setAssignments(assignments.filter((a: { title: string, completed: boolean }, i: number) => i !== index));
      }}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
