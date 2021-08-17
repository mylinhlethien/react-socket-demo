import React from "react"
import StickyHeadTable from "./StickyHeadTable"
import "./taskCard.css"

const TaskCard = () => {
  return (
    <div className="card shadow mb-4">
      <div className="taskCard__title">Tâches à traiter</div>
      <div className="taskCard__table__container">
        <table className="taskCard__table">
          <StickyHeadTable />
        </table>
      </div>
    </div>
  )
}

export default TaskCard
