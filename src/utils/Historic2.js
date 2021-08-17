import React from "react"
import moment from 'moment'

const Historic2 = (props) =>
    props.data.map(
        // eslint-disable-next-line
        (m) => {
            if (m[0] !== "") {
                return (
                    <div className="historicData">
                        <div>
                            <br></br>
                            <span className="lightFontWeight">{moment(new Date()).format('DD/MM/YYYY')}</span> -{" "}
                            <span className="message">{m}</span>
                        </div>
                    </div>
                )
            }
        }
    )

export default Historic2
