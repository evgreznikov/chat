import React from "react";
import styles from "./User.module.css"
import user from "../../../../assets/images/user.png"

const User = React.memo(({name, username}) => {
    return (
        <div className={`${styles.user}`}>
            <img src={user} alt="user" className={styles.userPhoto}/>
            {username === name ? <span className={styles.name}>{name} (you)</span>
            : <span className={styles.name}>{name}</span>}
        </div>
    )
})

export default User