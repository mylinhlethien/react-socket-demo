import React from "react"

const Emotions = (props) =>
  props.data.map(
    // eslint-disable-next-line
    (m) => {
      if (m[0] !== "") {
        return (
          <div className="emotionsData">
            <div>
              <span className="lightFontWeight">Emotion : </span> {m.sentiment}
            </div>
            <div>
              <span className="lightFontWeight">Score : </span>
              {Math.round(+m.score * 100 * 100) / 100}%
            </div>
          </div>
        )
      }
    }
  )

export default Emotions
