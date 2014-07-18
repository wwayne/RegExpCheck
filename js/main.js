var app=angular.module('jrex',[]);
app.run(function($rootScope,$timeout){
  $timeout(function(){
    $rootScope.href="http://www.sina.com.cn";
  },2000); //2秒以后执行

});
app.directive("waynePick",function($compile){
    return{
        restrict:"A",
        replace:true,//不会包裹着template了，而是替换
        scope:{
            expression:'@wayneExpression',//copy data from dom to isolate scope
            text:'@wayneText',
            suffix:'@wayneSuffix'
        },
        controller:function($scope){
            $scope.result='';
            $scope.suffix='';

            $scope.$watch('expression+text+suffix',function(){
              if($scope.expression.length>0){

                var expression=new RegExp($scope.expression,$scope.suffix),
                    text=$scope.text;
                var boolResult=expression.test(text);
                if(boolResult){
                  var textForReplace=text.match(expression)[0];
                  $scope.result=text.replace(expression,"<span class='match-span'>"+textForReplace+"</span>");

                }
                else{
                  $scope.result=text;
                  console.log("nothing");
                }
              }
              else{

              }
            });
        },
        link:function($scope, element, attrs) {
          // scope.rootDirectory = 'images/';
          $scope.$watch('expression+text+suffix',function(){
            var sentence="<p>"+$scope.result+"</p>";
            element.html(sentence) ;
            $compile( element.contents() )($scope);
          });

        }

    }
})
