
app.factory('MainFactory', function($http){

	return {

		getScotches: function() {
			return $http.get('http://localhost:8081/getScotches').then(function(response) {
				return response.data;
			});
		},
		getFavoriteScotch: function(id){
			return $http.get('http://localhost:8081/getScotch/' + id).then(function(response) {
				return response.data;
			});
		},
		getGreeting: function() {
			return 'hi bob';
		}
	}
});
