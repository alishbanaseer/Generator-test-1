var Generator = require('yeoman-generator');
// Given destination root is ~/projects


module.exports = class extends Generator {
  async prompting() {
    const answers = await this.prompt([{
      type    : 'input',
      name    : 'name',
      message : 'Your project name',
      default : this.appname // Default to current folder name
    }, {
      type    : 'confirm',
      name    : 'cool',
      message : 'Would you like to enable the Cool feature?'

    }]);
    this.answers = await this.prompt([{
      type    : 'input',
      name    : 'title',
      message : 'Your project title',
      store   : true
    }]);

    this.log('app name', answers.name);
    this.log('cool feature', answers.cool);
    this.prompt({
      type    : 'input',
      name    : 'username',
      message : 'What\'s your GitHub username',
      store   : true
    });


  }
  // The name `constructor` is important here
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);

    // Next, add your custom code
    this.option('babel'); // This method adds support for a `--babel` flag
  }
  method1() {
    this.log('method 1 just ran');
  }

  method2() {
    this.log('method 2 just ran');
  }

  paths() {
    this.sourceRoot();
    // returns './templates'

    this.templatePath('index.js');
    // returns './templates/index.js'
  }
  paths() {
    this.destinationRoot();
    // returns '~/projects'

    this.destinationPath('index.js');
    // returns '~/projects/index.js'
  }
    writing() {
      this.fs.copyTpl(
        this.templatePath('index.html'),
        this.destinationPath('./index.html'),
        { title: this.answers.title } // user answer `title` used
      );
    }
  
};