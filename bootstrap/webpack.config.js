let builder = require("bundle-master")
  
module.exports =  builder
.scss("scss/app.scss", "public/assets/css/app.css")
.init();