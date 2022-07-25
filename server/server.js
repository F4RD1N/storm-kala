var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var axios = require("axios");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var cors = require("cors");
var app = express();

// view engine setup

// server.js
const next = require("next");
const port = process.env.PORT || "3001";
const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const nApp = next({ dev, hostname, port });

nApp.prepare().then(() => {
  app.set("views", path.join(__dirname, "views"));
  app.set("view engine", "pug");
  app.use(cors("*"));
  app.use(logger("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, "public")));

  app.use("/", indexRouter);
  app.use("/users", usersRouter);

  app.use(async (reg, res) => {
    var myHeaders = {};
    myHeaders["authority"] = "www.api.digikala.com";
    myHeaders["pragma"] = "no-cache";
    myHeaders["cache-control"] = "no-cache";
    myHeaders["accept"] = "application/json, text/plain, */*";
    myHeaders["x-auth-token"] =
      "2CBCABBEAB36E84348A70D289CD57437251001228F53FECA0CCD5EB4780634C2B19E1DBB7FCC855C3C1EA6B09C99FA31AA1CB553DC832C45BC06099BFC9A9E0B3D81BEF4078E72CB910F147410512A9C17409683810193AC33796C9B3B8A0C0905420ABB461E281C0F5766EBD5FC3A372075B68BF3C2655D4E7201231DC543DF132B24E8EE0185E108E86992D945D784E50114204C610252BCBB9B50CD3FA9211BD18746624E21B722A182F031DE0444EAC887CF215309FEA1058461988FFEE85F3A85389A46DD648F65C0A8C1D8ADC37422D09B6B336C9E9123A741618F34B975F78CB1A62F0AD38F67F81A09A1931C";
    myHeaders["x-application-type"] = "WebClient";
    myHeaders["user-agent"] =
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36";
    myHeaders["sec-fetch-site"] = "same-origin";
    myHeaders["sec-fetch-mode"] = "cors";
    myHeaders["sec-fetch-dest"] = "empty";
    myHeaders["referer"] = "https://www.api.digikala.com/";
    myHeaders["accept-language"] = "en-US,en;q=0.9,fa;q=0.8";
    myHeaders["cookie"] =
      'guest_token=2CBCABBEAB36E84348A70D289CD57437251001228F53FECA0CCD5EB4780634C2B19E1DBB7FCC855C3C1EA6B09C99FA31AA1CB553DC832C45BC06099BFC9A9E0B3D81BEF4078E72CB910F147410512A9C17409683810193AC33796C9B3B8A0C0905420ABB461E281C0F5766EBD5FC3A372075B68BF3C2655D4E7201231DC543DF132B24E8EE0185E108E86992D945D784E50114204C610252BCBB9B50CD3FA9211BD18746624E21B722A182F031DE0444EAC887CF215309FEA1058461988FFEE85F3A85389A46DD648F65C0A8C1D8ADC37422D09B6B336C9E9123A741618F34B975F78CB1A62F0AD38F67F81A09A1931C; _ga=GA1.2.188659226.1588863958; dv-v3={"g":"desktop","platform":null}; _gid=GA1.2.1836370954.1589458942; _gat_UA-107442781-1=1; _gat_UA-107442781-3=1';
    let response = await axios.get(`https://api.digikala.com/${reg.path}`, {
      headers: myHeaders,
      params: reg.query || {},
    });
    try {
      let response = await axios.get(`https://api.digikala.com/${reg.path}`, {
        headers: myHeaders,
        params: reg.query || {},
      });
      res.json(response.data);
    } catch (error) {
      res.json({ succeeded: false, error: "Invalid" });
    }
  });
  // catch 404 and forward to error handler
  app.use(function (req, res, next) {
    next(createError(404));
  });

  // error handler
  app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
  });

  app.listen(port, () => {
    console.log(`App is Running on port ${port}`);
  });
});
