import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "имя обязательная для заполнение"],
        trim: true
    },

    lastName: {
        type: String,
        required: [true, "Фамилия обезательная для заполнение"],
        trim: true
    },

    age: {
        type: String,
        required: [true, "Возвраст обязателен для заполнение"],
        min: 12
    },
})
export default mongoose.model("User" ,userSchema)