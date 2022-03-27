const path = require("path");
const telegrambot4all = require("telegram-bot-4all");
const ApiBot = telegrambot4all.ApiBot
var apiBot = new ApiBot();
apiBot.init(path.join(__dirname, "commands"))
