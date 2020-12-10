const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");
const promptConfig = require("./promptConfig");

module.exports = class extends Generator {
  async prompting() {
    this.log(yosay(`Welcome to the ${chalk.red("generator-long")} generator!`));

    const answers = await this.prompt(promptConfig);
    this.log("app name", answers.projectName);
    this.answers = answers;
  }

  writing() {
    this.log("type", this.answers.type);
    const projectName = this.answers.projectName;
    const type = this.answers.type;
    const pkgJson = {
      name: projectName
    };
    if (type === "vue") {
      this.log("init vue");
    } else {
      this.log("init react");
    }

    this.fs.extendJSON(this.destinationPath("package.json"), pkgJson); // 只会修改命令行所在路径下的 package.json 文件
    this.fs.copy(this.templatePath(type), this.destinationPath(projectName));
  }

  install() {
    // This.installDependencies();
    this.npmInstall();
  }

  end() {
    this.log("--- installing finished ---");
  }

  installingLodash() {
    this.npmInstall(["lodash"], { "save-dev": true });
  }
};
