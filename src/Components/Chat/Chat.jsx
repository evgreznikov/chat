import React, {useState, useEffect} from "react";
import styles from "./Chat.module.css"
import Users from "./Users/Users";
import Messages from "./Messages/Messages";
// import Menu from "./Menu/Menu";
import queryString from "query-string"
import io from "socket.io-client"

let socket
const Chat = React.memo(() => {
    const [name, setName] = useState("")
    const [room, setRoom] = useState("")
    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState([])
    const [users, setUsers] = useState({})
    const ENDPOINT = "https://chat-onreact.herokuapp.com/"
    useEffect(() => {
        const {name, room} = queryString.parse(window.location.search)
        socket = io(ENDPOINT)

        setName(name)
        setRoom(room)

        socket.emit('join', {name, room}, () => {})

        return () => {
            socket.emit("disconnect")
            socket.off()
        }

    }, [ENDPOINT])

    useEffect(() => {
        socket.on('message', message => {
            setMessages(messages => [ ...messages, message ]);
        });
    }, [])

    useEffect(() => {
        socket.on("roomData", (users) => {
            setUsers(users);
        });
    }, [])

    //function for sending messages
    const sendMessage = (e) => {
        e.preventDefault();

        if(message){
            socket.emit('sendMessage', message, () => setMessage(""))
        }
    }

    return(
        <div className={styles.chat}>
            {/*<Menu/>*/}
            <Users data={users} room={room} username={name}/>
            <Messages message={message} setMessage={setMessage} name={name}
                      sendMessage={sendMessage} messages={messages}/>
        </div>
    )
})

export default Chat