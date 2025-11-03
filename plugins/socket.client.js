import { io } from "socket.io-client";


const SOCKET_URL = "http://localhost:8888";

export default defineNuxtPlugin(() => {
  const socket = io(SOCKET_URL, {
    transports: ["websocket"],
  });

  return {
    provide: {
      socket,
    },
  };
});
