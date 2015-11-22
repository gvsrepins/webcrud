app.controller('userController', ['$scope', function($scope) {
	// Declarada as vars
    $scope.users = [];
    $scope.total = 0;
    // Retorna os usuers
    $scope.getUsers = function() {
        return $scope.users;
    }
    // Inicializa o Parse
    Parse.initialize("pMcaC9EghMFG2MtrDBMas1wd3vA40jgYUInhJWVb", "K7TQqFE67gD0HUExakN3O3JSHf320Gp1qrea58In");
    // Cria a conexão
    var connection = Parse.Object.extend("funciona");
    // Cria o banco de dados
    var dataBase = new connection();
    // Cria a query
    var query = new Parse.Query(dataBase);
    // Busca os dados
	query.find({
		success: function(results) {
			// Loop para inserir os users
			for (var i = 0; i < results.length; i++) {
				var object = results[i];
				$scope.add(object);
			}
			
			console.log("$scope.users:" + $scope.users);
			//$(".success").show();
		},
		error: function(error) {
			alert("Error: " + error.code + " " + error.message);
			//$(".error").show();
		}
	});
	// Remove user
	$scope.remove = function(object) {
		

		var index = $scope.users.indexOf(object);
		$scope.users.splice(index, 1);

		object.unset(object);
		object.save();
	};
	// Adiciona um user
	$scope.add = function(object) {
		$scope.newPerson = object;
	    $scope.users.push($scope.newPerson);
	    // Atualiza o AngularJS
	    $scope.$digest();
	    // Limpa
	    $scope.newPerson = {};
	};
	// Limpa
	$scope.newPerson = {};
}]);
// Atualiza a lista de users quando novos dados são carregados
app.directive('testWatch', function() {
	return {
		restrict:'A',
		require:'ngModel',
		link:
			function(scope, element, attrs, ctrl) {
			scope.$watch(attrs.testWatch, function(value) {
			  console.log('Dados novos!');
			},true);		
		}
	};
});