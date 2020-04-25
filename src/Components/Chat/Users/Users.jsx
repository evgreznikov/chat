import React from "react";
import styles from "./Users.module.css"
import User from "./User/User";

const Users = React.memo(({data, room, username}) => {
    return(
        <div className={styles.users}>
            <h4 className={styles.header}>Room: {room}</h4>
            {Object.keys(data).length === 0 ? <></> : data.users.map(({name}) => <div key={Math.random()}>
                    <User name={name} username={username}/>
                </div>)
            }
        </div>
    )
})

export default Users