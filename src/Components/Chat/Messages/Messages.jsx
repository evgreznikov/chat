import React from "react";
import styles from "./Messages.module.css"
import MessagesList from "./MessagesList/MessagesList";

const Messages = ({message, setMessage, sendMessage, messages, name}) => {
    return (
        <div className={styles.messages}>
            <h4 className={styles.header}>Messages</h4>
            <MessagesList messages={messages} name={name}/>
            <div className={styles.form}>
                <div className={`${styles.input} input-field`}>
                    <i className="material-icons prefix">mode_edit</i>
                    <input id="icon_prefix2" type="text" className="materialize-textarea"
                           value={message} onChange={e => setMessage(e.target.value)}
                           onKeyPress={e => e.key === 'Enter' && sendMessage(e)}/>
                    <label htmlFor="icon_prefix2">Message</label>
                </div>
                <div className={styles.btn}>
                    <button className={`btn btn-primary`}
                            onClick={e => sendMessage(e)}>Send
                    </button>
                </div>
            </div>
            <a href={"/"}>
                <i className={`${styles.close} material-icons prefix`}>close</i>
            </a>
        </div>
    )
}

export default Messages