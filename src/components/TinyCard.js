import React from "react"
import "./tinyCard.css"
import PhonePausedOutlinedIcon from "@material-ui/icons/PhonePausedOutlined"
import CheckIcon from "@material-ui/icons/Check"
import AddIcCallOutlinedIcon from "@material-ui/icons/AddIcCallOutlined"
import TimerOutlinedIcon from "@material-ui/icons/TimerOutlined"

const TinyCard = ({ title, icon, text, color, backgroundIconColor }) => {
  const renderIcon = (icon) => {
    if (icon === "phone") {
      return <PhonePausedOutlinedIcon fontSize="large" />
    }
    if (icon === "check") {
      return <CheckIcon fontSize="large" />
    }
    if (icon === "clock") {
      return <TimerOutlinedIcon fontSize="large" />
    }
    if (icon === "callsToCome") {
      return <AddIcCallOutlinedIcon fontSize="large" />
    }
  }
  return (
    <div className="card shadow mb-4">
      <div className="tinyCard__container">
        <div className="tinyCard__title">{title}</div>
        <div className="tinyCard__bottom">
          <div
            style={{
              backgroundColor: backgroundIconColor,
              borderRadius: "10px",
              padding: "7px",
            }}
          >
            <div className="tinyCard__icon" style={{ color: color }}>
              {renderIcon(icon)}
            </div>
          </div>
          <div className="tinyCard__text" style={{ color: color }}>
            {text}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TinyCard
