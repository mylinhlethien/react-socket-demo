import React from "react"

const Historic = (props) =>
  props.data.map(
    // eslint-disable-next-line
    (m) => {
      if (m[0] !== "") {
        return (
          <div className="historicData">
            <div>
              <span className="lightFontWeight">{m.historique[0].date}</span> -{" "}
              {m.historique[0].sujet} - {m.historique[0].typecontrat}
            </div>
          </div>
        )
      }
    }
  )

export default Historic
