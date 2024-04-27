// Import mongoose
import mongoose from "mongoose";

// Define the user schema
const userSchema = new mongoose.Schema({
    frist_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    email: {
        type: String,
        // required: true,
        // unique: true
    },
    password: {
        type: String,
        required: true
    }
} ,{
    timestamps: true 
});

// Create a User model from the schema
const userModel = mongoose.model('User', userSchema);

// Export the User model
export default userModel