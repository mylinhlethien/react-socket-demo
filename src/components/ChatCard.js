import React, { useState } from "react"
import ForumOutlinedIcon from "@material-ui/icons/ForumOutlined"
import PhoneCallbackOutlinedIcon from "@material-ui/icons/PhoneCallbackOutlined"
import AssignmentOutlinedIcon from "@material-ui/icons/AssignmentOutlined"
import { NavLink } from "react-router-dom"
import "./chatCard.css"

const ChatCard = ({ title, description, triggerCall }) => {
  const [isClicked, setIsClicked] = useState(false)

  return (
    <div className="card shadow mb-4" id="card__size">
      <div
        className="card-header py-3 d-flex align-items-center justify-content-start mr-2"
        id="card__header"
      >
        <ForumOutlinedIcon />
        <h6 className="m-0 font-weight-bold  ml-2 " id="title__color">
          {title}
        </h6>
      </div>
      <div className="card__body">
        <div>{description}</div>
      </div>
      <div className="card__buttons">
        <>
          {!isClicked ? (
            <button
              onClick={() => setIsClicked(!isClicked)}
              className={
                !triggerCall
                  ? "button__notClicked__disabled"
                  : isClicked
                  ? "button__clicked"
                  : "button__notClicked"
              }
              disabled={!triggerCall}
            >
              <PhoneCallbackOutlinedIcon style={{ marginRight: "0.625em" }} />
              Prendre l'appel
            </button>
          ) : (
            <NavLink to="/dashboard">
              <button
                onClick={() => setIsClicked(!isClicked)}
                className="button__clicked"
              >
                <PhoneCallbackOutlinedIcon style={{ marginRight: "0.625em" }} />
                Terminer l'appel
              </button>
            </NavLink>
          )}
        </>
        <button
          onClick={() => console.log("clicked")}
          className="summup__button"
        >
          <AssignmentOutlinedIcon style={{ marginRight: "0.625em" }} />
          Résumé de l'appel
        </button>
      </div>
    </div>
  )
}
export default ChatCard
