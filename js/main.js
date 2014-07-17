var app=angular.module('jrex',[]);
app.run(function($rootScope){
  $rootScope.name="wangzixiao";
});
app.directive("myDirective",function(){
    return{
        restrict:"A",
        replace:true,//不会包裹着template了，而是替换
        template:"<a>{{myFriend}}</a>",
        scope:{
            myFriend:'@'//copy data from dom to isolate scope
        },
        controller:function($scope){
            //directive自己的controller，在这里定义的都是独立变量，没有继承关系
//            $scope.t="wayne0821";
        }
    }
})