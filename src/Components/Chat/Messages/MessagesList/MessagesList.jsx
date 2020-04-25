import React from "react";
import styles from "./MessagesList.module.css"
import ScrollToBottom from "react-scroll-to-bottom"
import Message from "./Message/Message";

const MessagesList = React.memo(({messages, name}) => {
    return (
        <div className={styles.messages}>
            <ScrollToBottom className={styles.messagesBox}>
                {messages.map((message, i) => <div key={i*Math.random()}><Message message={message} name={name}/></div>)}
            </ScrollToBottom>
        </div>
    )
})

export default MessagesList