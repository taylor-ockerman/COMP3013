import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { BsCheckCircleFill } from "react-icons/bs";


function isCompleted({ completed }: any) {
  if (completed) {
    return <BsCheckCircleFill />
  } else {
    return <div />
  }
}
export function Assignment({ title, setAssignments, assignments, completed }: any) {
  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer} onClick={() => {
        //update completed state, change checkbox and add textCompleted class to <p>
        setAssignments(assignments.map((a: any) => {
          if(a.title == title){
            a.completed = !a.completed;
          }
        }))
      }}> 
        {isCompleted(completed)}
      </button>

      <p>{title}</p>

      {/*!!!FIX!!! This deletes based on title not some unique identifier !!!FIX!!!*/}
      <button className={styles.deleteButton} onClick={() => { setAssignments(assignments.filter((a: any) => a.title !== title)) }}> 
        <TbTrash size={20} />
      </button>
    </div>
  );
}
