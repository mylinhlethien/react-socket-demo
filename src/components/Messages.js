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
    if (m.input.text === "") {
      return (
        <>
          <ul>
            <li
              key={i * Math.random() * 1000 + Math.random() * 1000}
              class="u1 chat"
            >
              <strong> {m.output.text}</strong>
            </li>
          </ul>
        </>
      )
    } else {
      if (m.input.text !== "vgwHangUp") {
        return (
          <ul>
            <li
              key={i * Math.random() * 1000 + Math.random() * 1000}
              class="u2 chat"
            >
              <strong>{m.input.text}</strong>
            </li>
            <li
              key={i * Math.random() * 1000 + Math.random() * 1000}
              class="u1 chat"
            >
              <strong>{m.output.text}</strong>
              <div ref={chatRef} />
            </li>
          </ul>
        )
      } else {
        return (
          <ul>
            <li
              key={i * Math.random() * 1000 + Math.random() * 1000}
              class="u2 chat"
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
