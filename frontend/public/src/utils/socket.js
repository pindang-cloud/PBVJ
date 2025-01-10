// src/utils/socket.js
import { io } from "socket.io-client";

// Koneksi ke server WebSocket (ganti dengan URL server yang sesuai)
const socket = io("http://localhost:3000"); // Server yang mendengarkan di port 3000

export default socket;
