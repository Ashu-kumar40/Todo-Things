import React from 'react'
import styles from '../CSS/Style.module.css'
export default function TodoItem(todo) {
  return (
    <div className={styles.todoCard}>
      <h3 className={styles.todoHeading}>{todo}</h3>
      <button className={styles.doneBtn}>Done</button>
    </div>
  )
}
