import React from "react";
import styles from "./Message.module.css"
import ReactEmoji from "react-emoji"

const Message = React.memo(({message : {user, text}, name}) => {
    let isSentByCurrentUser = false
    const trimmedName = name.trim().toLowerCase()

    if(user === trimmedName){
        isSentByCurrentUser = true
    }
    return (
        isSentByCurrentUser ? (
            <div className={`${styles.messageContainer} ${styles.byOtherPersons}`}>
                <div className={styles.textBox}>
                    <p className={styles.text}>{ReactEmoji.emojify(text)}</p>
                    <div className={styles.trimmedNameContainerByOthers}>
                        <span className={styles.trimmedName}>{trimmedName}</span>
                    </div>
                </div>
            </div>
        ) : (
            <div className={`${styles.messageContainer}`}>
                <div className={styles.textBox}>
                    <p className={styles.text}>{ReactEmoji.emojify(text)}</p>
                    <div className={styles.trimmedNameContainer}>
                        <span className={styles.trimmedName}>{user}</span>
                    </div>
                </div>
            </div>
        )
    )
})

export default Message