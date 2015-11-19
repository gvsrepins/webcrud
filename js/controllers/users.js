	angular.module('webCRUD', [])
	.controller('UserListController', function($scope) {

		var userList = this;
		
		$scope.users =  [
			{text:'learn angular', done:true},
      		{text:'build an angular app', done:false}];


		Parse.initialize("pMcaC9EghMFG2MtrDBMas1wd3vA40jgYUInhJWVb", "K7TQqFE67gD0HUExakN3O3JSHf320Gp1qrea58In");
    
		var funciona = Parse.Object.extend("funciona");
		var query = new Parse.Query(funciona);

		query.find({
		  success: function(results) {
		  	//console.log(results);
		    // The object was retrieved successfully.		    
		    $scope.users = results;

		  },
		  error: function(object, error) {
		  	console.log(error);
		    // The object was not retrieved successfully.
		    // error is a Parse.Error with an error code and message.
		  }
		});


		userList.add = function() {};
		userList.delete = function() {};
	});