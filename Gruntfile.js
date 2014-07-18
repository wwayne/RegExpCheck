module.exports=function(grunt){
  grunt.initConfig({
    pkg:grunt.file.readJSON('package.json'),

    sass:{
      dist:{
        options:{
          style:"compressed"
        },
        files:[{
          expand:true,
          cwd:"sass/",
          src:['main.css.scss'],
          dest:'css/',
          ext:'.min.css'
        }]
      }
    },

    watch:{
      scripts:{
        files:'sass/*.scss',
        tasks:['sass']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default',['sass']);
};
