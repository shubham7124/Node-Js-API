const express = require('express');
const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/Shoping-Apis")

const schema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, enum: ['pending', 'completed'], default: 'pending' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})
module.exports=mongoose.model("Task",schema)