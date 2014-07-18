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
            text:'@wayneText'
        },
        controller:function($scope){
            $scope.result='';
            $scope.$watch('expression+text',function(){
              if($scope.expression.length>0){
                var expression=new RegExp($scope.expression,'g'),
                    text=$scope.text;
                // var  splitResult=text.split("");
                // var result=expression.exec(text);
                // if(result!=null){
                //     do{
                //       console.log(result);
                //       result=expression.exec(text);
                //     }while(result!=null)
                //
                // }
                var boolResult=expression.test(text);
                if(boolResult){
                  var textForReplace=text.match(expression)[0];
                  $scope.result=text.replace(expression,"<span style='color:yellow'>"+textForReplace+"</span>");

                }
                else{
                  $scope.result=text;
                  console.log("nothing");
                }
              }
            });
        },
        link:function($scope, element, attrs) {
          // scope.rootDirectory = 'images/';
          $scope.$watch('expression+text',function(){
            var sentence="<p>"+$scope.result+"</p>";
            element.html(sentence) ;
            $compile( element.contents() )($scope);
          });

        }

        // template:function(element,attr){
        //   // console.log()
        //   var e=angular.element("<p>{{result}}</p>");
        //   console.log(e);
        //   return "<div>{{result}}</div>"
        // }


    }
})
