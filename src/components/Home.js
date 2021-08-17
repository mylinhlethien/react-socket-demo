import React, { useState, useEffect } from "react"
import io from "socket.io-client"
import ChatCard from "./ChatCard"
import SmallCard from "./SmallCard"
import Messages from "./Messages"
import Recommandations from "../utils/Recommandations"
import Profile from "../utils/Profile"
import Historic from "../utils/Historic"
import Historic2 from "../utils/Historic2"
import Emotions from "../utils/Emotions"
import EndMessage from "../utils/EndMessage"
//import config from '../config';

const socket = io.connect("http://169.63.247.59:31001")
//const socket = io.connect("http://localhost:8080")

export const Home = () => {
    const [messages, setMessages] = useState([])
    const [clientprofile, setProfile] = useState([])
    const [isProfilePicture, setIsProfilePicture] = useState(false)
    const [clientemotions, setEmotions] = useState([])
    const [recommandations, setRecommandations] = useState([])
    const [endmessage, setEndmessage] = useState([])
    const [intention, setIntention] = useState([])
    const [raisonresiliation, setRaisonResiliation] = useState([])
    const [advisorCall, setAdvisorCall] = useState(false)
    const [triggerCall, setTriggerCall] = useState(false)

    useEffect(() => { }, [triggerCall])

    useEffect(() => {
        socket.on("chat-messages", (message, callback) => {
            if (
                [...message?.output?.text]?.[0]?.includes(
                    "Vous allez être mis en relation avec un conseiller. Veuillez patienter"
                )
            ) {
                setAdvisorCall(true)
            }
            setMessages([...messages, message])
        })
    }, [messages])

    socket.on("client-profile", (profile, callback) => {
        setProfile([...clientprofile, profile])
        setIsProfilePicture(true)
    })

    socket.on("emotions", (emotions, callback) => {
        setEmotions([...clientemotions, emotions])
    })

    socket.on("recommandations", (recommandation, callback) => {
        setRecommandations([...recommandations, recommandation])
    })

    socket.on("lastmessage", (lastmessage, callback) => {
        setEndmessage([...endmessage, lastmessage])
    })

    socket.on("intent-resiliation", (intentresiliation, callback) => {
        setIntention([...intention, intentresiliation])
    })

    socket.on("raison-resiliation", (raisonResiliation, callback) => {
        setRaisonResiliation([...raisonresiliation, raisonResiliation])
    })

    return (
        <div className="body__color">
            <div class="container" id="container__positionning">
                <div id="content">
                    <div className="container-fluid" id="container__margin">
                        <div className="row">
                            <div className="col-lg-8 col-lg-8">
                                <ChatCard
                                    messages={messages}
                                    title="Conversation"
                                    triggerCall={triggerCall}
                                    description={
                                        <div id="messages">
                                            <Messages
                                                data={messages}
                                                advisorCall={advisorCall}
                                                setTriggerCall={setTriggerCall}
                                            />
                                        </div>
                                    }
                                />
                            </div>
                            <div className="col-lg-4 col-lg-4">
                                <div className="row">
                                    <SmallCard
                                        isLargeCard
                                        isProfilePicture={isProfilePicture}
                                        iconeType="profil"
                                        title="Profil Client"
                                        description={
                                            <div id="profile">
                                                <Profile data={clientprofile} />
                                            </div>
                                        }
                                    />
                                </div>
                                <div className="row">
                                    <SmallCard
                                        iconeType="emotion"
                                        title="Sentiments"
                                        description={
                                            <div id="recommandatons">
                                                <Emotions data={clientemotions} />
                                            </div>
                                        }
                                    />
                                </div>

                                <div className="row">
                                    <SmallCard
                                        iconeType="history"
                                        title="Historique"
                                        isMiddleCard
                                        description={
                                            <div id="historic">
                                                <Historic data={clientprofile} />
                                                <Historic2 data={intention} />
                                                <Historic2 data={raisonresiliation} />
                                            </div>
                                        }
                                    />
                                </div>
                                <div className="row">
                                    <SmallCard
                                        isMiddleCard
                                        iconeType="recommandations"
                                        title="Recommandations"
                                        description={
                                            <div id="recommandations">
                                                <Recommandations data={recommandations} />
                                                <EndMessage data={endmessage} />
                                            </div>
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
