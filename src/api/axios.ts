// src/api/axios.ts
import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://kclyworkspace.onrender.com', // ← 你的后端 Render 地址
})

export default instance

