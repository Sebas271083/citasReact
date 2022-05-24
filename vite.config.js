import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {    // <-- this object is added
    port: 8000
  },  
})
 


// const server = require('http').createServer();
// const port = process.env.PORT || 3000;

// server.listen(port, ()=> console.log(`Listening on ${port}`));