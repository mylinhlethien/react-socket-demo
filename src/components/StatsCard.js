import React from "react"
import "./statsCard.css"
import { RadialChart } from "react-vis"
import Chip from "@material-ui/core/Chip"

const StatsCard = () => {
  return (
    <div className="card shadow mb-4">
      <div className="statsCard__title">Statistiques Globales</div>
      <div className="statsCard__dailyStats">
        <div className="statsCard__dailyStats__title">
          Les statistiques du jour
        </div>
        <div className="statsCard__dailyStats__statsContainer">
          <div className="statsCard__dailyStats__row">
            <div className="statsCard__dailyStats__stat1">
              <div className="statsCard__dailyStats__number">325</div>
              <div className="statsCard__dailyStats__text">total d 'appels</div>
            </div>
            <div className="statsCard__dailyStats__stat1">
              <div className="statsCard__dailyStats__number">29</div>
              <div className="statsCard__dailyStats__text">Appels manqués</div>
            </div>
          </div>
          <div className="statsCard__dailyStats__row">
            <div className="statsCard__dailyStats__stat1">
              <div className="statsCard__dailyStats__number">17</div>
              <div className="statsCard__dailyStats__text">Appels/heure</div>
            </div>
            <div className="statsCard__dailyStats__stat1">
              <div className="statsCard__dailyStats__number">2:25</div>
              <div className="statsCard__dailyStats__text">Durée moyenne</div>
            </div>
          </div>
          <div className="statsCard__dailyStats__satisfaction__container">
            Note globale de satisfaction
            <div className="statsCard__dailyStats__satisfactionStat">
              <div className="progress__value">82%</div>
              <progress
                className="statsCard__dailyStats__ProgressBar"
                max="100"
                value="82"
              ></progress>
            </div>
          </div>
        </div>
      </div>
      <div className="circleChart">
        <RadialChart
          className={"donut-chart-example"}
          innerRadius={90}
          radius={100}
          getAngle={(d) => d.theta}
          data={[
            { theta: 5, color: "orange" },
            { theta: 3, color: "purple" },
            { theta: 3, color: "blue" },
            { theta: 2, color: "green" },
          ]}
          width={200}
          height={200}
          padAngle={0.04}
          colorType="literal"
          center={{ x: 0, y: 0 }}
        />
        <div className="circleChart__explaination">
          <div className="circleChart__explaination__detail">
            <Chip
              size="small"
              style={{
                backgroundColor: "orange",
                width: "32px",
                height: "7px",
                marginRight: "1em",
              }}
            />
            <span style={{ fontWeight: "400" }}>Contrat habitation</span>
          </div>
          <div className="circleChart__explaination__detail">
            {" "}
            <Chip
              size="small"
              style={{
                backgroundColor: "purple",
                width: "32px",
                height: "7px",
                marginRight: "1em",
              }}
            />
            <span style={{ fontWeight: "400" }}>Assurance auto</span>
          </div>
          <div className="circleChart__explaination__detail">
            {" "}
            <Chip
              size="small"
              style={{
                backgroundColor: "blue",
                width: "32px",
                height: "7px",
                marginRight: "1em",
              }}
            />
            <span style={{ fontWeight: "400" }}>Hospitalisation</span>
          </div>
          <div className="circleChart__explaination__detail">
            {" "}
            <Chip
              size="small"
              style={{
                backgroundColor: "green",
                width: "32px",
                height: "7px",
                marginRight: "1em",
              }}
            />
            <span style={{ fontWeight: "400" }}>Frais santé</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatsCard
