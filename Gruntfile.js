var glob = require("glob")

module.exports = function(grunt) {
    // load all grunt tasks matching the `grunt-*` pattern
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    hercule: {
        docs: {
            src: 'path/to/your/blueprint.md',
            dest: 'path/to/dest.md'
        }
    },
    aglio: {
      docs:{
        files:{
          "public/index.html": ["src/docs/section1.md", "src/docs/section2.md"]
        },
        options: {
          theme: "slate"
        }
      }
    }
  });

  grunt.registerTask('build', function(api) {

    if (api) {
      var htmlDocFile = 'public/' + api + '.html';
      var compiledMarkdownFile = 'docs/' + api + '.md';
      var blueprintFile = api + '/' + api + '.apib';

      glob("docs/**/*.md", function (er, files) {
        grunt.config('aglio.docs.files', {
          "public/index.html": files
        });
      });

      grunt.config('hercule.docs.src', blueprintFile);
      grunt.config('hercule.docs.dest', compiledMarkdownFile);
    }

    grunt.task.run('hercule');
    grunt.task.run('aglio');
  });

  // run grunt build:<api name>
  grunt.registerTask('default', ['build']);

};
