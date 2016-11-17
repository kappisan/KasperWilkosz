var app = angular.module('app', ['ngRoute', 'ngAnimate'])
	.config( ['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/', { redirectTo: '/about' })	
			.when('/about', { templateUrl: 'templates/about.html', controller: 'AboutCtrl' })	
			.when('/skills', { templateUrl: 'templates/skills.html', controller: 'SkillsCtrl' })
			.when('/work_experience', { templateUrl: 'templates/work_experience.html', controller: 'WorkCtrl' })
			.otherwise({ redirectTo: '/' });
	}]);


// CONTROLLERS
app.controller('AboutCtrl', ['$scope', function($s) {
	$s.pageClass = 'about-page';
}]);

app.controller('SkillsCtrl', ['$scope', function($s) {
	$s.pageClass = 'skills-page';
}]);

app.controller('WorkCtrl', ['$scope', function($s) {
	$s.pageClass = 'work-page';
}]);

app.controller('PageCtrl', ['$scope', '$http', '$location', function($s, $http, $location) {

	console.log("location", $location.$$path);
	$s.currentPage = $location.$$path;



	$s.changeCurrentPage = function(page) {
		console.log("change", page);

		$('.nav-menu-item').removeClass('active');

		switch(page) {
			case('about'): 
				window.location = "#/about"; 
				$('#nav-menu-about').addClass('active');
				break;
			case('work'): 
				window.location = "#/work_experience"; 
				$('#nav-menu-work').addClass('active');
				break;
			case('skills'): 
				window.location = "#/skills"; 
				$('#nav-menu-skills').addClass('active');
				break;
		}
	}

$( document ).ready(function() {

	if($location.$$path== "/about") {
		$('#nav-menu-about').addClass('active');
	}
	if($location.$$path== "/work_experience") {
		$('#nav-menu-work').addClass('active');
	}
	if($location.$$path== "/skills") {
		$('#nav-menu-skills').addClass('active');
		console.log("matched");
	}
});


}]);


