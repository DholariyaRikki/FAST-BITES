import express from "express"
import dotenv from "dotenv"
dotenv.config()

// define port
const PORT =process.env.PORT || 3000

// define app
const app = express()




app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})