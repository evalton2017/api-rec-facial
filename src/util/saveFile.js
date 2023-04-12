const save = require("./saveFile");
const path = require("path");

const tf = require("@tensorflow/tfjs-node");

const canvas = require("canvas");

const faceapi = require("@vladmandic/face-api/dist/face-api.node.js");
const modelPathRoot = "./models";

let optionsSSDMobileNet;
