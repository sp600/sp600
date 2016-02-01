// script.js

// create the module and name it scotchApp
var scotchApp = angular.module('scotchApp', ['ngRoute', 'pascalprecht.translate']);

// configure our routes
scotchApp.config(function($routeProvider) {
	$routeProvider

		// route for the home page
		.when('/', {
			templateUrl : 'pages/about.html',
			controller  : 'mainController'
		})

		// route for the about page
		.when('/about', {
			templateUrl : 'pages/about.html',
			controller  : 'aboutController'
		})

		// route for the team page
		.when('/team', {
			templateUrl : 'pages/team.html',
			controller  : 'aboutController'
		})

		.when('/testimonials', {
			templateUrl: 'pages/testimonials.html',
			controller: 'testimonialsController'
		})

		// route for the services page
		.when('/services', {
			templateUrl : 'pages/services.html',
			controller  : 'servicesController'
		})

		// route for the contact page
		.when('/contact', {
			templateUrl : 'pages/contact.html',
			controller  : 'contactController'
		});
});

// DAN - Change this part
scotchApp.config(['$translateProvider', function($translateProvider) {
	$translateProvider.translations('en', {
		// About Us
		'ABOUT': 'Ivy Target is a college admissions counseling company that was founded by the students, for the students. We seek to match students and their academic and personal capabilities to colleges and universities. For many students and parents, the process seems arduous and complex, with often no source of help or resource other than the school’s overstaffed guidance counselor. '
			+ 'In particular, we understand more than anyone the problems facing college applicants, having gone through the process ourselves. We feel both honored and obligated to pay it forward, and pass on the knowledge and experience garnered since our high school days. Everything from class selection in high school, standardized testing planning, resume and essay writing, to building your own customized set of colleges and more, our insights are unmatched by few. Ivy Target is here to help you reach your target.',
		// Team Section
		'TEAM': 'Resolute motivation and experience to help parents and '+
				  'students navigate through the confusing and puzzling '+
				  'application and admissions process. ',
		'TEAM1': 'Personal experience of the admissions and application '+
				 'process - we understand how difficult and time consuming '+
				 'certain courses and tests are, as we\'ve once taken those courses.',
		'TEAM2': 'Admissions and professional contacts at universities that know the university thoroughly, with the inside scope on pros and cons.',
		'TEAM3': 'Immersive understanding of the advantages of different universities, acceptance rates, and academic criteria. ',
		'TEAM4': 'Team members that have attended a variety of schools, and can speak to the real difference between public and private, liberal arts and technical, large and small.',
		'TEAM5': 'Bridging the divide between the two generations of parents and students. Acting as a translator and mediator between parents\' intentions and students\' aspirations.',
		'TEAM6': 'Fluent in English, Mandarin, and Cantonese. Easy and constant communication with students and parents. ',
		'TEAM7': '',
		// About our Team
		'SUSAN': 'Graduated from China Normal University, and completed graduate and professional studies in education in the United States. She has 30+ years of teaching and education experience, with a holistic understanding of both Chinese and American education systems. In her spare time, she enjoys playing musical instruments, practicing Tai-Chi, and reading. ',
		//Testimonials Section
		'TESTIMONIALS': 'Why Ivy Target?',
		'TESTIMONIALS1': 'Our team has the personal experience and knowledge of the admissions and application process - we know the in\'s and out\'s of standardized testing, and understand how difficult and time consuming certain courses and exams are. Our extensive understanding of the U.S. college system, selection criteria, acceptance rates, and what they look for in a candidate is based on empirical facts and knowledge.',
		'TESTIMONIALS2': 'Our team members have attended a variety of schools, and can speak to the real difference between public and private, liberal arts and technical, and large and small schools. We also have admissions and professional contacts at universities that can give us the inside-scoop and latest news happening on campus. ',
		'TESTIMONIALS3': 'We seek to bridge the divide between the two generations – parents and students. Acting as a translator and mediator between parents’ intentions and students’ aspirations. We are fluent in English, Mandarin, and Cantonese, and work non-stop to bring you the results that you deserve. ',
		//Colleges Section
		'COLLEGES1': 'Adelphi University',
		'COLLEGES2': 'Barnard College',
		'COLLEGES3': 'Berklee College of Music',
		'COLLEGES4': 'Boston College',
		'COLLEGES5': 'Boston University',
		'COLLEGES6': 'Carnegie Mellon University',
		'COLLEGES7': 'Columbia University',
		'COLLEGES8': 'Cooper Union',
		'COLLEGES9': 'Cornell University',
		'COLLEGES10': 'CUNY Baruch College',
		'COLLEGES11': 'CUNY Hunter College',
		'COLLEGES12': 'Dartmouth College',
		'COLLEGES13': 'Duke University',
		'COLLEGES14': 'Fordham University',
		'COLLEGES15': 'Georgetown University',
		'COLLEGES16': 'Georgia Tech University',
		'COLLEGES17': 'Hofstra University',
		'COLLEGES18': 'Johns Hopkins University',
		'COLLEGES19': 'Juilliard School',
		'COLLEGES20': 'Lehigh University',
		'COLLEGES21': 'New Jersey Institute of Technology',
		'COLLEGES22': 'New York University',
		'COLLEGES23': 'Northeastern University',
		'COLLEGES24': 'Northwestern University',
		'COLLEGES25': 'Ohio State',
		'COLLEGES26': 'Oregon State University',
		'COLLEGES27': 'Pace University',
		'COLLEGES28': 'Parsons the New School for Design',
		'COLLEGES29': 'Pennsylvania State University',
		'COLLEGES30': 'Princeton University',
		'COLLEGES31': 'Purdue University',
		'COLLEGES32': 'Rice University',
		'COLLEGES33': 'Rice University',
		'COLLEGES34': 'Rochester Institute of Technology',
		'COLLEGES35': 'Rutgers – New Brunswick ',
		'COLLEGES36': 'School of Visual Arts',
		'COLLEGES37': 'SUNY Binghamton University',
		'COLLEGES38': 'SUNY Buffalo',
		'COLLEGES39': 'SUNY Stonybrook University',
		'COLLEGES40': 'Syracuse University',
		'COLLEGES41': 'Tufts University',
		'COLLEGES42': 'University of California – Los Angeles',
		'COLLEGES43': 'University of Houston',
		'COLLEGES44': 'University of Illinois at Urbana Champaign',
		'COLLEGES45': 'University of Maine',
		'COLLEGES46': 'University of Maryland – College Park',
		'COLLEGES47': 'University of Massachusetts – Amherst',
		'COLLEGES48': 'University of Michigan',
		'COLLEGES49': 'University of Mississippi',
		'COLLEGES50': 'University of North Carolina – Chapel Hill',
		'COLLEGES51': 'University of Pennsylvania',
		'COLLEGES52': 'University of Rochester',
		'COLLEGES53': 'University of Virginia',
		'COLLEGES54': 'Vanderbilt University',
		'COLLEGES55': 'Washington University in St. Louis',
		'COLLEGES56': 'Yale University',
	  });

	  $translateProvider.translations('de', {
	  	// About Us
		'ABOUT': '我们是毕业于美国长青藤大学的一群优秀学子，当年的学业和升学都遇到了很大的挑战，但是我们都从艰难困境中成功地走了出来。回首往日我们冲语言障碍，考特殊高中，学特长技能，做有效义工，写大学论文，填助学补助申请，等等。 过关斩将, 踏进名校，再入理想职场。展望前程，辉煌似锦! '
			+ '今天我们特别理解与我们一样面临着挑战的学弟学妹们。因此，我们更觉得应当有这份爱心和义务在工作和学习之余，将我们所得的宝贵经验和深刻教训毫无保留地与你们分享。最值得我们感到欣慰的是,我们真诚的服务与帮助已经使许多学生进入了超越他们自身水平的理想大学。',
		// Team Section
		'TEAM': '我们拥有强烈的愿望，无私的爱心，积极的态度和宝贵的经验，更有不断地探索，不懈地努力的精神去帮助有需求的学生进入他们最理想的大学。',
		'TEAM1': '具有当年申请大学的亲身经历和成功经验，是最前沿的最新亲历者，都是实战经历，不是纸上谈兵。',
		'TEAM2': '有良好完善的名校同学人脉网络和大学信息资源。',
		'TEAM3': '身临其境，更真实地了解不同大学的优势，录取倾向，标准及择优条件。',
		'TEAM4': '每个队员都曾有独特精彩的大学学习经历，能提供给学生难能可贵的借鉴经验。',
		'TEAM5': '每个队员都有着不同的求职经历及宝贵经验，更了解哪些大学及专业倍受关注与钦赖。',
		'TEAM6': '我们有在中国和美国生活的不同经历和亲身体验，更了解中国学生和家长的处境和愿望。',
		'TEAM7': '流利英文，国语，广东话， 便于与家长/学生沟通交流。',
		// About Our Team
		'SUSAN': '毕业于中国师范大学，又继续深造完成了美国大学的教育专业课程。拥有30多年在中国及美国的从教经验，不仅了解中美的教育体系，更了解各类学生的需求，从而能为学生们提供高质量，个性化的专业服务。'
			+ '闲暇时间喜欢演奏乐器，练太极拳，以及阅读。',
		// Services
		'SERVICES': '美国高中申请大学全面规划指导',
		'SERVICES1': '中国学生申请美国学校',
		'SERVICES2': '初中申请高中',
		'SERVICES3': '高中申请本科',
		'SERVICES4': '本科申请续读本科',
		'SERVICES5': '本科申请硕士',
		'SERVICES6': '硕士申请博士',
		//Testimonials Section
		'TESTIMONIALS': '团队优势',
		'TESTIMONIALS1': '我们拥有强烈的愿望，无私的爱心，积极的态度和宝贵的经验，更有不断地探索，不懈地努力的精神去帮助有需求的学生进入他们最理想的大学. 具有当年申请大学的亲身经历和成功经验，是最前沿的最新亲历者，都是实战经历，不是纸上谈兵',
		'TESTIMONIALS2': '有良好完善的名校同学人脉网络和大学信息资源. 身临其境，更真实地了解不同大学的优势，录取倾向，标准及择优条件. 每个队员都曾有独特精彩的大学学习经历，能提供给学生难能可贵的借鉴经验. 每个队员都有着不同的求职经历及宝贵经验，更了解哪些大学及专业倍受关注与钦赖',
		'TESTIMONIALS3': '我们有在中国和美国生活的不同经历和亲身体验，更了解中国学生和家长的处境和愿望. 流利英文，国语，广东话， 便于与家长/学生沟通交流',
		//Colleges Section
		'COLLEGES1': 'Adelphi University',
		'COLLEGES2': 'Barnard College',
		'COLLEGES3': 'Berklee College of Music',
		'COLLEGES4': 'Boston College',
		'COLLEGES5': 'Boston University',
		'COLLEGES6': 'Carnegie Mellon University',
		'COLLEGES7': 'Columbia University',
		'COLLEGES8': 'Cooper Union',
		'COLLEGES9': 'Cornell University',
		'COLLEGES10': 'CUNY Baruch College',
		'COLLEGES11': 'CUNY Hunter College',
		'COLLEGES12': 'Dartmouth College',
		'COLLEGES13': 'Duke University',
		'COLLEGES14': 'Fordham University',
		'COLLEGES15': 'Georgetown University',
		'COLLEGES16': 'Georgia Tech University',
		'COLLEGES17': 'Hofstra University',
		'COLLEGES18': 'Johns Hopkins University',
		'COLLEGES19': 'Juilliard School',
		'COLLEGES20': 'Lehigh University',
		'COLLEGES21': 'New Jersey Institute of Technology',
		'COLLEGES22': 'New York University',
		'COLLEGES23': 'Northeastern University',
		'COLLEGES24': 'Northwestern University',
		'COLLEGES25': 'Ohio State',
		'COLLEGES26': 'Oregon State University',
		'COLLEGES27': 'Pace University',
		'COLLEGES28': 'Parsons the New School for Design',
		'COLLEGES29': 'Pennsylvania State University',
		'COLLEGES30': 'Princeton University',
		'COLLEGES31': 'Purdue University',
		'COLLEGES32': 'Rice University',
		'COLLEGES33': 'Rice University',
		'COLLEGES34': 'Rochester Institute of Technology',
		'COLLEGES35': 'Rutgers – New Brunswick ',
		'COLLEGES36': 'School of Visual Arts',
		'COLLEGES37': 'SUNY Binghamton University',
		'COLLEGES38': 'SUNY Buffalo',
		'COLLEGES39': 'SUNY Stonybrook University',
		'COLLEGES40': 'Syracuse University',
		'COLLEGES41': 'Tufts University',
		'COLLEGES42': 'University of California – Los Angeles',
		'COLLEGES43': 'University of Houston',
		'COLLEGES44': 'University of Illinois at Urbana Champaign',
		'COLLEGES45': 'University of Maine',
		'COLLEGES46': 'University of Maryland – College Park',
		'COLLEGES47': 'University of Massachusetts – Amherst',
		'COLLEGES48': 'University of Michigan',
		'COLLEGES49': 'University of Mississippi',
		'COLLEGES50': 'University of North Carolina – Chapel Hill',
		'COLLEGES51': 'University of Pennsylvania',
		'COLLEGES52': 'University of Rochester',
		'COLLEGES53': 'University of Virginia',
		'COLLEGES54': 'Vanderbilt University',
		'COLLEGES55': 'Washington University in St. Louis',
		'COLLEGES56': 'Yale University',
	  });
	  $translateProvider.preferredLanguage('en');
}])

// create the controller and inject Angular's $scope
scotchApp.controller('mainController', ['$translate', '$scope', function($translate, $scope) {
	$scope.message = 'Everyone come and see how good I look!';
	$scope.langKey = 'en'
	$scope.toggle = function() {
		console.log('Hello world!!')
		if($scope.langKey === 'en') {
			$scope.langKey = 'de'
		} else {
			$scope.langKey = 'en'
		}
		$translate.use($scope.langKey)
		console.log($scope)
	};
	$scope.changeLanguage = function(langKey) {
		console.log('Button clicked')
		$translate.use(langKey);
	};
}]);

angular.module('scotchApp').controller('Ctrl', ['$translate', '$scope',
	function($translate, $scope) {
		$scope.changeLanguage = function(langKey) {
			console.log('Clicked button: '+langKey)
			$translate.use(langKey);
		};
	}]);

scotchApp.controller('aboutController', function($scope) {
	$scope.message = 'Look! I am an about page.';
});

scotchApp.controller('teamController', function($scope) {
	$scope.message = 'Look! I am the team page.';
});

scotchApp.controller('servicesController', function($scope) {
	$scope.message = 'Services! JK. This is just a demo.';
});

scotchApp.controller('contactController', function($scope) {
	$scope.message = 'Contact us! JK. This is just a demo.';
});