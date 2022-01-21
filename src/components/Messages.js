import React, { useRef, useEffect } from "react"

const Messages = (props) => {
    const chatRef = useRef(null)

    useEffect(() => {
        if (
            props?.data?.[props?.data?.length - 1]?.input?.text?.includes("oui") &&
            props.advisorCall
        ) {
            props.setTriggerCall(true)
        }
    }, [props?.data?.[props?.data?.length - 1], props.advisorCall])

    return props.data.map((m, i) => {
        if (m.output != undefined && m.output.generic != undefined) {
            for (i = 0; i < m.output.generic.length; i++) {
                if (m.output.generic[i].response_type == "text" && m.output.generic[i].text != "") {
                    return (
                        <>
                            <ul>
                                <li
                                    key={i * Math.random() * 1000 + Math.random() * 1000}
                                    class="u2 chat"
                                >
                                    <strong> {m.output.generic[i].text}</strong>
                                </li>
                            </ul>
                        </>
                    )
                }
                if (m.output.generic[i].response_type == "text" && m.output.generic[i].text.includes("Vous allez être mis en relation avec un conseiller")) {
                    return (
                        <>
                            <ul>
                                <li
                                    key={i * Math.random() * 1000 + Math.random() * 1000}
                                    class="u2 chat"
                                >
                                    <strong>assistant_transfer</strong>
                                </li>
                            </ul>
                        </>
                    )
                }
            }
        }
        else {
            if (m.input !== undefined && m.input.text !== "caller_hangup") {
                return (
                    <ul>
                        <li
                            key={i * Math.random() * 1000 + Math.random() * 1000}
                            class="u1 chat"
                        >
                            <strong>{m.input.text}</strong>
                            <div ref={chatRef} />
                        </li>
                    </ul>
                )
            } else if (m.input !== undefined && m.input.text === "caller_hangup") {
                return (
                    <ul>
                        <li
                            key={i * Math.random() * 1000 + Math.random() * 1000}
                            class="u1 chat"
                        >
                            <strong>{m.input.text}</strong>
                        </li>
                    </ul>
                )
            }
        }
    })
}

export default Messages
