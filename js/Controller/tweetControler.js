/**
 * Created by giuse_000 on 19/11/2014.
 */
/**
 * Created by giuse_000 on 19/11/2014.
 */
angular.module("cwitter").controller("tweetControler",["$scope","tweetService",function($scope,tweetService){


    $scope.cweetText;

    $scope.jeCweet = function(){
        var cweetTxt = {"cweet":$scope.cweetText};
        tweetService.sendTweet(vweetTxt);


    }






}]);