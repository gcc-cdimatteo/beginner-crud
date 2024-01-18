import express from "express"
import mysql from "mysql"
import cors from "cors"

const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Carolina9deSeptiembre",
    database: "sys"
})

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.json("hello this is the backend")
})

app.get("/books", (req, resp) => {
    const q = "Select * From books"
    db.query(q, (err, data) => {
        if (err) return resp.json(err)
        return resp.json(data)
    })
})

app.post("/books", (req, resp) => {
    const q = "INSERT INTO `sys`.`books` (`title`, `description`, `cover`) VALUES (?);"
    const values = [req.body.title, req.body.description, req.body.cover]
    db.query(q, [values], (err, data) => {
        if (err) return resp.json(err)
        return resp.json("Book has been created successfully!")
    })
})

app.listen(8800, () => {
    console.log("Connected to backend111111! :)")
})