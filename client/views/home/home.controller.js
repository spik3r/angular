'use strict';

angular.module('ei.console')
    .controller('workoutCtrl', function($scope) {
    $scope.count = 1; //set counter
    //$scope.workoutLog = [];
    $scope.saved = localStorage.getItem('todos');
    $scope.workoutLog = (localStorage.getItem('todos')!==null) ? JSON.parse($scope.saved) : [{exerciseText:'Example Exercise', repsText:'20 Reps', weightText:'12.5 KG', setCountText:'Sets: 2',done:false}];

    console.log($scope.workoutLog);
    //$scope.buttonDisabled = false;
    //$scope.workoutLog = [{exerciseText:'Example Exercise', repsText:'20 Reps', weightText:'12.5 KG', setCountText:'Sets: 2',done:false}];
    

    $scope.workoutAdd = function() {
        $scope.workoutLog.push({exerciseText:$scope.exerciseInput, repsText:$scope.repsInput + " Reps", weightText:$scope.weightInput + " KG", count:$scope.count , done:false, buttonDisabled:false});

        $scope.exerciseInput = "";
        $scope.repsInput = "";
        $scope.weightInput = "";

        localStorage.setItem('todos', JSON.stringify($scope.workoutLog));
        console.log(localStorage.getItem('todos'));


    };

    $scope.remove = function() {
        var oldList = $scope.workoutLog;
        $scope.workoutLog = [];
        angular.forEach(oldList, function(x) {
            if (!x.done) $scope.workoutLog.push(x);
        });
    };

    $scope.clickAdd = function(item){  
    console.log('here'); 
    console.log(item);  
      item.count = item.count + 1;
      $scope.toggleRemoveSetButton(item);
      console.log(localStorage.getItem('todos'));
    };

    $scope.clickRemove = function(item){  
    console.log('there');
      console.log(item);
      item.count = item.count - 1;
      $scope.toggleRemoveSetButton(item);
    };

    $scope.toggleRemoveSetButton = function(item){
      if(item.count < 1){
        item.buttonDisabled = true;
      }else{
        item.buttonDisabled = false;  
      }
    };



    $scope.checkCount = function() {
        if (count > 1) { 
      $scope.buttonEnabled = true;
    }
        else {
      return false;
  }
};

$scope.archive = function() {
    // var oldTodos = $scope.workoutLog;
    // $scope.todos = [];
    // angular.forEach(oldTodos, function(todo){
    //     $scope.todos.push(todo);
    //     console.log(todo);
    // });
    localStorage.setItem('todos', JSON.stringify([]));
  };

});
