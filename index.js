require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const PORT = 5000;
const app = express();
const cors = require("cors");
const taskRouter = require("./routes/taskRouter");

//middleware
app.use(express.json());
app.use(cors());

//Routes
app.use('/api/tasks', taskRouter)

//db connection
const start = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI);
        app.listen(PORT, () => {
            console.log(`serving running`);
        });
    } catch (error) {
        console.log(error);
    }
};
start()


app.use((req, res) => {
    res.status(404).send("Resource not Found ");
});