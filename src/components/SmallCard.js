import React, { useEffect, useState } from "react"
import ForumOutlinedIcon from "@material-ui/icons/ForumOutlined"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"
import ThumbUpIcon from "@material-ui/icons/ThumbUp"
import ReceiptIcon from "@material-ui/icons/Receipt"
import EmojiEmotionsOutlinedIcon from "@material-ui/icons/EmojiEmotionsOutlined"
import HistoryIcon from "@material-ui/icons/History"
import "./smallcard.css"
import christelPic from "../pictures/Christel pic.png"
import andreePic from "../pictures/andree pic.png"
import myLinhLeThienPic from "../pictures/Mylinh pic.png"
import OlivierBarrotPic from "../pictures/Olivier pic.jpg"

const SmallCard = ({
    title,
    description,
    isLargeCard,
    isMiddleCard,
    iconeType,
    isProfilePicture,
}) => {
    const renderIcon = (iconType) => {
        if (iconType === "profil") {
            return <AccountCircleIcon />
        }
        if (iconType === "conversation") {
            return <ForumOutlinedIcon />
        }
        if (iconType === "recommandations") {
            return <ThumbUpIcon />
        }
        if (iconType === "contract") {
            return <ReceiptIcon />
        }
        if (iconType === "emotion") {
            return <EmojiEmotionsOutlinedIcon />
        }
        if (iconType === "history") {
            return <HistoryIcon />
        }
    }

    const [pictureToDisplay, setPictureToDisplay] = useState(null)

    useEffect(() => {
        if (
            description?.props?.children?.props?.data?.[0]?.nomclient ===
            "Christel Beaujard"
        ) {
            setPictureToDisplay(christelPic)
        }
        if (
            description?.props?.children?.props?.data?.[0]?.nomclient ===
            "Andree Bouchut"
        ) {
            setPictureToDisplay(andreePic)
        }
        if (
            description?.props?.children?.props?.data?.[0]?.nomclient ===
            "My-Linh Le Thien"
        ) {
            setPictureToDisplay(myLinhLeThienPic)
        }
        if (
            description?.props?.children?.props?.data?.[0]?.nomclient ===
            "Jean Dupont"
        ) {
            setPictureToDisplay(OlivierBarrotPic)
        }
    }, [description])

    return (
        <div
            className="card shadow mb-4"
            id={
                isLargeCard
                    ? "large__card__size"
                    : isMiddleCard
                        ? "middle__card__size"
                        : "small__card__size"
            }
        >
            <div
                className="card-header py-3 d-flex align-items-center justify-content-start mr-2"
                id="card__header"
            >
                {renderIcon(iconeType)}
                <h6 className="m-0 font-weight-bold  ml-2" id="title__color">
                    {title}
                </h6>
            </div>
            <div class="card-body scroll">
                {isLargeCard && isProfilePicture ? (
                    <div className="large__card__container">
                        <div>{description}</div>
                        <img className="picture" src={pictureToDisplay} alt="" />
                    </div>
                ) : (
                    <div>{description}</div>
                )}
            </div>
        </div>
    )
}
export default SmallCard
