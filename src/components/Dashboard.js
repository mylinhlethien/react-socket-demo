import React from "react"
import StatsCard from "./StatsCard"
import TaskCard from "./TaskCard"
import TinyCard from "./TinyCard"

export const Dashboard = () => {
  return (
    <div className="body__color">
      <div
        class="container"
        id="container__positionning"
        style={{ maxWidth: "85vw" }}
      >
        <div className="container-fluid" id="container__margin">
          <div className="row">
            <div className="col-lg-3 col-xl-3 col-md-6">
              <TinyCard
                title={"Appels terminés"}
                icon={"check"}
                color={"rgba(0, 168, 104, 1)"}
                backgroundIconColor={"rgba(0, 168, 104, 0.5)"}
                text={"14"}
              />
            </div>
            <div className="col-lg-3 col-xl-3 col-md-6">
              <TinyCard
                title={"Appels en attente"}
                icon={"phone"}
                color={"rgba(246, 179, 61, 1)"}
                backgroundIconColor={"rgba(246, 179, 61, 0.5)"}
                text={"8"}
              />
            </div>
            <div className="col-lg-3 col-xl-3 col-md-6">
              <TinyCard
                title={"Appels programmés"}
                icon={"callsToCome"}
                color={"rgba(118, 89, 210, 1)"}
                backgroundIconColor={"rgba(118, 89, 210, 0.5)"}
                text={"21"}
              />
            </div>
            <div className="col-lg-3 col-xl-3 col-md-6">
              <TinyCard
                title={"Temps de réponse moyen"}
                icon={"clock"}
                color={"rgba(90, 100, 110, 1)"}
                backgroundIconColor={"rgba(90, 100, 110, 0.5)"}
                text={"37 sec"}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-xl-8 col-md-12">
              <TaskCard />
            </div>
            <div className="col-lg-4 col-xl-4 col-md-6">
              <StatsCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
