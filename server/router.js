var express = require("express");
var router = express.Router();
var url = require("url");
var homedata = require("./data/home.js");
var fitnessdata = require("./data/fitness.js")
var discoverdata = require("./data/discover.js")
var dynamicdetailsdata = require("./data/dynamicdetails.js")
var fitdetailsdata = require("./data/fitdetails.js")



// 接口
// 首页所有数据接口
router.get("/homedata", function (req, res) {
    res.send(homedata);
})

// 健身所有数据接口
router.get("/fitnessdata", function (req, res) {
    res.send(fitnessdata);
})
// 发现所有数据接口
router.get("/discoverdata", function (req, res) {
    res.send(discoverdata);
})
// 动态详情接口 post
router.post("/dynamicdetailsdata",function(req,res){
    var iname = req.body.iname;
        res.send(dynamicdetailsdata)
})

// 健身教程详情页接口
router.get("/fitdetailsdata", function (req, res) {
    res.send(fitdetailsdata);
})
module.exports = router;


