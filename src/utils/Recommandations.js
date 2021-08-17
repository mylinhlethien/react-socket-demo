import React from "react"

const Recommandations = (props) =>
  props.data.map(
    // eslint-disable-next-line
    (m) => {
      if (m[0] !== "") {
        return (
          <div className="recommandationsData">
            <div>
              {" "}
              <span className="lightFontWeight">Urgence : </span>
              {m.urgence}
            </div>
            <div>
              {" "}
              <span className="lightFontWeight">Action : </span>
              {m.action}
            </div>
            <div>
              {" "}
              <span className="lightFontWeight">Message : </span>
              <span className="message">{m.message}</span>
            </div>
          </div>
        )
      }
    }
  )

export default Recommandations
