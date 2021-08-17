import React from "react"

const Profile = (props) =>
    props.data.map(
        // eslint-disable-next-line
        (m) => {
            if (m[0] !== "") {
                return (
                    <div className="clientData">
                        <div className="clientInformation">
                            <span className="lightFontWeight">Nom : </span>
                            {m.nomclient}
                        </div>
                        <div className="clientInformation">
                            <span className="lightFontWeight">Numéro : </span>
                            {m.numeroclient}
                        </div>
                        <div className="clientInformation">
                            <span className="lightFontWeight">Potentiel : </span>
                            {+m.Potentiel * 100}%
                        </div>
                        <div className="clientInformation">
                            <span className="lightFontWeight">Sinistralité : </span>
                            {+m.Sinistralite * 100}%
                        </div>
                        <div className="contractData">
                            Contrats :
                            <div>
                                <span className="lightFontWeight">Type de contrat : </span>
                                <span style={{ fontWeight: "bold" }}>
                                    {m.contrats[0].typecontrat}
                                </span>
                            </div>
                            <div>
                                <span className="lightFontWeight">Formule : </span>
                                <span style={{ fontWeight: "bold" }}>
                                    {m.contrats[0].formule}
                                </span>
                            </div>
                            <div>
                                <span className="lightFontWeight">Date : </span>
                                <span style={{ fontWeight: "bold" }}>{m.contrats[0].date}</span>
                            </div>
                            <div>
                                <span className="lightFontWeight">Référence : </span>
                                <span style={{ fontWeight: "bold" }}>
                                    {m.contrats[0].reference}
                                </span>
                            </div>
                        </div>
                    </div>
                )
            }
        }
    )

export default Profile
