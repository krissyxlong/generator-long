const config = [
  {
    type: "input",
    name: "projectName",
    message: "Please input you projectName",
    default: this.appname,
    store: true // 上一次的答案作为下一次的默认答案
  },
  {
    type: "list",
    name: "type",
    message: "Please choose language",
    choices: ["vue", "react"],
    default: this.appname,
    store: true
  }
];
module.exports = config;
