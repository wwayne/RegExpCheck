var app=angular.module('jrex',[]);
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
            $scope.text='';
            $scope.status=true;
            $scope.$watch('expression+text+suffix',function(){
              var suffix_expression=new RegExp("[^gmi]");
              var suffix_validate=(!suffix_expression.test($scope.suffix))||$scope.suffix.length==0?true:false;
              if(suffix_validate){
                if($scope.expression.length>0){
                  //输入表达式
                    if($scope.text.length>0){
                        //也输入了文本
                        var expression=new RegExp($scope.expression,$scope.suffix),
                            text=$scope.text;
                        var matchArray=text.match(expression);
                        if(matchArray!=null){
                            //有匹配结果
                            if(matchArray[0].length>0){
                                $scope.status=true;
                                var i,
                                    indexArray=[],
                                    nextResult,
                                    splitText=text.split(""),
                                    spanElement=["<span class='match-span'>","</span>"],
                                    span;
                                if(/[g]/g.test($scope.suffix)){
                                  while((nextResult=expression.exec(text))!=null){
                                    indexArray.push(nextResult.index);
                                    indexArray.push(nextResult.index+nextResult[0].length);
                                  }
                                }
                                else{
                                  nextResult=expression.exec(text);
                                  indexArray.push(nextResult.index);
                                  indexArray.push(nextResult.index+nextResult[0].length);
                                }
                                for(i=indexArray.length-1;i>=0;i--){
                                     span=spanElement[i % 2];
                                     splitText.splice(indexArray[i],0,span);
                                }
                                $scope.result=splitText.join("");
                            }
                            else{
                                //匹配的是空字符串
                                $scope.status=false;
                                $scope.result=text;

                            }
                        }
                        else{
                            //无匹配结果
                            $scope.status=false;
                            $scope.result=text;
                        }
                    }
                    else{
                       //输入了表达式，没有输入文本
                        text=$scope.text;
                        $scope.status=true;
                        $scope.result=text;
                    }

                }
                else{
                  //表达式没有输入时
                    var text=$scope.text;
                    $scope.status=true;
                    $scope.result="";
                }
              }
              else{
                $scope.status=false;
              }
            });
        },
        link:function($scope, element, attrs) {
          // scope.rootDirectory = 'images/';
          $scope.$watch('expression+text+suffix',function(){
            var status=$scope.status,
                sentence;
            if(status){
                  sentence="<div class='match-result match-place' ><p>"+$scope.result+"</p></div>";
            }
            else{
                  sentence="<div class='match-result-false match-place' ><p>No match result</p></div>";
            }
            element.html(sentence) ;
            $compile( element.contents() )($scope);
          });

        }

    }
});
function combineArray(originArray){
    var newArray=[], i,element,originLength;
    do{
        originLength=originArray.length;
        element=originArray[originLength-1];
        newArray.push(element);
        for(i=originLength-1;i>=0;i--){
            if(originArray[i]===element){
                originArray.splice(i,1);
            }
        }
    }while(originArray.length>0)
    return newArray;
}
