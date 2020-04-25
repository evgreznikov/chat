import React, {useState} from "react"
import {Link} from "react-router-dom"
import styles from "./Join.module.css"

const Join = () => {
    const [name, setName] = useState("")
    const [room, setRoom] = useState("")

    return (
        <form className={styles.form} method="POST">
            <h3 className={styles.header}>Rooms</h3>
            <div>
                <div className={`${styles.input} input-field`}>
                    <input id="name" type="text" className="validate" onChange={(e) => setName(e.target.value)}/>
                    <label htmlFor="name">Name</label>
                </div>
                <div className={`${styles.input} input-field`}>
                    <input id="room" type="text" className="validate" onChange={(e) => setRoom(e.target.value)}/>
                    <label htmlFor="room">Room id</label>
                </div>
            </div>
            <div className={styles.btnWrapper}>
                <Link onClick={(e) => (!name || !room) && e.preventDefault()} to={`/chat?name=${name}&room=${room}`}>
                    <button className={`btn btn-primary`}>JOIN</button>
                </Link>
            </div>
        </form>
    )
}

export default Join
