// src/api/axios.ts
import axios from 'axios'

axios.defaults.baseURL = 'https://kclyworkspace.onrender.com'  // 改为你的后端 Render 地址
axios.defaults.timeout = 10000  // 可选，设置超时时间
axios.defaults.headers.post['Content-Type'] = 'application/json'

export default axios
