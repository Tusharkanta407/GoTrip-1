import io from "socket.io-client";

// Set different URLs for development and production
const SOCKET_URL = import.meta.env.MODE === "development" 
  ? "http://localhost:5000" 
  : "https://gotrip-1-1.onrender.com"; // Your Render backend URL

let socket = null;

export const initializeSocket = (userId) => {
  if (socket) {
    socket.disconnect();
  }

  socket = io(SOCKET_URL, {
    auth: { userId },
    withCredentials: true, // Important for cookies/auth
    transports: ["polling"], // Force polling if WebSockets fail
    reconnectionAttempts: 5, // Number of reconnection attempts
    reconnectionDelay: 1000, // Delay between reconnections in ms
    autoConnect: true // Automatically connect when created
  });

  // Debugging event listeners
  socket.on("connect", () => {
    console.log("Socket connected:", socket.id);
  });

  socket.on("disconnect", () => {
    console.log("Socket disconnected");
  });

  socket.on("connect_error", (err) => {
    console.error("Socket connection error:", err.message);
  });
};

export const getSocket = () => {
  if (!socket) {
    throw new Error("Socket not initialized. Call initializeSocket() first.");
  }
  return socket;
};

export const disconnectSocket = () => {
  if (socket) {
    socket.off(); // Remove all listeners
    socket.disconnect();
    socket = null;
  }
};
