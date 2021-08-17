import React from "react"

const EndMessage = (props) =>
  props.data.map(
    // eslint-disable-next-line
    (m) => {
      if (m[0] !== "") {
        return (
          <p>
            {" "}
            Fin de la conversation :
            <ul>
              <li> Voicebot : {m}</li>
            </ul>
          </p>
        )
      }
    }
  )

export default EndMessage
