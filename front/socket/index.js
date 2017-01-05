import store from '../store/store';
import io from 'socket.io-client';
export const socket = io.connect();


export default (store) => { 
  socket.on('connect', () =>{
    console.log("connected")
  })

  socket.on("received-message", msg =>{
    store.dispatch({
      type: UPDATE_MESSAGES,
      msg
    })
  })

}