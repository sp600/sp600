// script.js

// create the module and name it scotchApp
var scotchApp = angular.module('scotchApp', ['ngRoute', 'pascalprecht.translate']);

scotchApp.filter('range', function () {
        return function(input, end) {
            start = 1;
		    end = parseInt(end);

		    for (var i=start; i<end; i++) {
		      input.push(i);
		    }

		    return input;
		  };
    });

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
    //Navbar
    'N_ABOUT': 'About',
    'N_SERVICES': 'Services',
    'N_DOMESTIC': 'Domestic',
    'N_INTERNATIONAL': 'International',
    'N_TESTIMONIALS': 'Testimonials',
    'N_TEAM': 'Team',
    'N_CONTACT': 'Contact',
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
		'Susan': 'Graduated from China Normal University, and completed graduate and professional studies in education in the United States. She has 30+ years of teaching and education experience, with a holistic understanding of both Chinese and American education systems. In her spare time, she enjoys playing musical instruments, practicing Tai-Chi, and reading. ',
		'Daniel': 'Graduated from Cornell University with an undergraduate degree in engineering. In his free time, he enjoys long distance running and investing in the financial markets.',
		'Chris': 'Graduated from University of Pennsylvania with an undergraduate degree in physics. He is currently pursuing a PhD from Yale University in quantum physics. In his spare time, he plays competitive ultimate at the college level and enjoys cooking.',
		'John': 'Graduated from New York University with an undergraduate degree in finance and economics. He enjoys traveling and biking.',
		'Angela': 'Graduated from Boston College with an undergraduate degree in math and computer science. In her spare time, she is an avid ballet dancer and has won many awards. She also enjoys trying out new restaurants and venues.',
		'Steve': 'Graduated from University of Chicago with an undergraduate degree in English and history. He enjoys painting (any medium) and German literature.',
		//Domestic Services Section
    'DOMESTIC0': 'Domestic services for high school students based in the United States',
		'DOMESTIC1': 'Complete high school planning process and college application guidance',
		'DOMESTIC2': 'Develop a plan for high school classes every year, including electives, honors, and Advanced Placement (AP)',
		'DOMESTIC3': 'Schedule the right time for standardized exams such as SAT, ACT, and SAT II’s to ensure minimum overlap and disruption',
		'DOMESTIC4': 'Recommend and suggest extracurricular activities such as sports, clubs, and volunteer that align with the students’ interest as well as aid their application',
		'DOMESTIC5': 'Plan out summer activities, including potential jobs, internships and classes',
		'DOMESTIC6': 'Schedule visits to colleges and universities during breaks to ensure students and their family are exposed to the different types of schools',
		'DOMESTIC7': 'Step by step walkthrough of the school selection process and application process based on our personal and empirical knowledge',
		'DOMESTIC8': 'Recommendations of target, reach, and safety schools to student based on their own interests, personality, preferences, and academic record. The each list is personally and manually generated, utilizing our team’s personal aggregate knowledge of the university system',
		'DOMESTIC9': 'Assist students in crafting their resumes, as well as generating ideas for their personal statement',
		'DOMESTIC10': 'Critique and revise students’ essays and supplements to various colleges',
		'DOMESTIC11': 'Cater to special and unique needs and schools such as athlete recruiting, arts and dance schools, military academies, aerospace schools, and so forth',
		'DOMESTIC12': 'Walkthrough of FAFSA, CSS Profile and other financial aid forms and applications to ensure maximum aid (if eligible), and negotiations with schools for more aid (if needed)',
		'DOMESTIC13': 'And more… ',

		//International Services Section
		'SERVICES': 'International services for Chinese high school and college students',
		'SERVICESH1': 'Consultation and planning ',
		'SERVICES1': 'We provide a free consultation for the student and parents, explaining the due process and ready to answer questions',
		'SERVICES2': 'Depending on the student’s interests, academic records, and preferences, prepare a personalized list of schools, as well as develop a comprehensive education and employment plan ',
		'SERVICESH2': 'Information gathering and application preparation',
		'SERVICES3': 'Inform the student and parents of various required documents, forms, and verification needed',
		'SERVICES4': 'Revise and proofread student’s essays (including personal statement), supplements, resume, and other supporting materials',
		'SERVICES5': 'Help the student complete the application if needed',
		'SERVICESH3': 'School and visa interview guidance',
		'SERVICES6': 'Conduct mock school interviews with student, using experienced American interviewers by telephone. Repeat however many times until student is fluent and confident in answering questions',
		'SERVICES7': 'Thoroughly explain visa process after admission, and provide mock interviews for visa interviews',
		'SERVICESH4': 'Arrival in the United States',
		'SERVICES8': 'Guidance on behind the scenes affairs such as physical examination, vaccination, currencies, bank accounts, immigration customs, and so forth',
		'SERVICES9': 'Introduction to American culture, norms, and customs, as well as setting up the hosting family',
		'SERVICES10': 'Airport pick up, as well as escort and help to open bank account, cell phone service, and initial necessities shopping. NOTE if school is not within range of our members, we cannot provide this service',
		'SERVICESH5': 'Routine check-in after starting school (high school students only)',
		'SERVICES11': 'Act as guardians for the students to check on their progress, host family, school life, and any situations that come up. We will communicate regularly with schools and host families and act as liaisons to the parents. ',
		'SERVICES12': 'Regularly visit the students and hold holiday reunion activities with other students and day trips',
		'SERVICES13': 'Advise and develop the students\' overall academic and professional development in preparation for college',

		//Testimonials Section
		'TESTIMONIALS': 'Why Ivy Target?',
		'TESTIMONIALS1': 'Our team has the personal experience and knowledge of the admissions and application process - we know the in\'s and out\'s of standardized testing, and understand how difficult and time consuming certain courses and exams are. Our extensive understanding of the U.S. college system, selection criteria, acceptance rates, and what they look for in a candidate is based on empirical facts and knowledge.',
		'TESTIMONIALS2': 'Our team members have attended a variety of schools, and can speak to the real difference between public and private, liberal arts and technical, and large and small schools. We also have admissions and professional contacts at universities that can give us the inside-scoop and latest news happening on campus. ',
		'TESTIMONIALS3': 'We seek to bridge the divide between the two generations – parents and students. Acting as a translator and mediator between parents\' intentions and students\' aspirations. We are fluent in English, Mandarin, and Cantonese, and work non-stop to bring you the results that you deserve. ',
    'TESTIMONIALS4': 'List of schools our students have been admitted to',
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

	  $translateProvider.translations('cn', {
    //Navbar
    'N_ABOUT': '关于我们',
    'N_SERVICES': '服务项目',
    'N_DOMESTIC': '美国学生',
    'N_INTERNATIONAL': '中国留学生',
    'N_TESTIMONIALS': '成功见证',
    'N_TEAM': '团队成员',
    'N_CONTACT': '联系方式',
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
		'Susan': '毕业于中国师范大学，又继续深造完成了美国大学的教育专业课程。拥有30多年在中国及美国的从教经验，不仅了解中美的教育体系，更了解各类学生的需求，从而能为学生们提供高质量，个性化的专业服务。'
			+ '闲暇时间喜欢演奏乐器，练太极拳，以及阅读。',
		'Daniel': '毕业于长青藤名校康奈尔大学(Cornell University)工程学院，现兼任康奈尔大学招生官。 热爱运动，擅长长跑和室内攀岩。热衷金融，善于投资理财。',
		'Chris': '毕业于长青藤名校滨州大学(University of Pennsylvania)物理系，现就读于另一所长青藤名校耶鲁大学(Yale University)攻读量子物理学博士。擅长玩飞碟，经常参加训练与比赛，还非常喜欢自己烹饪美食。',
		'John': '毕业于纽约大学史顿商学院(NYU Stern)，获硕士学位。喜欢旅行和赛自行车。',
		'Angela': '毕业于波士顿大学(Boston College)数学与计算机专业。自幼练芭蕾舞，并获过大奖。总是乐于发现寻找新的事物与活动，喜欢到不同的酒店品尝美食佳肴。',
		'Steve': '毕业于芝加哥大学（University of Chicago）英语文学，及历史专业。酷爱绘画与德国文学史。',
		//Domestic Services
    'DOMESTIC0': '美国高中生申请大学服务内容',
		'DOMESTIC1': '完成高中规划及大学申请指导的全过程:',
		'DOMESTIC2': '根据学生的情况每年制定切实可行的学习计划，指导学生合理选课---必修课程, 荣誉课（Honor）及大学先修课（AP）。',
		'DOMESTIC3': '评估学生学科进度与水平，规划最佳考试时间（SAT, ACT, SAT II），确保考试能得到最大限度地发挥。',
		'DOMESTIC4': '根据学生的兴趣和申请大学的需要，建议指导学生参加最优化的课余活动，如:运动队，社团，俱乐部，义工，等等。',
		'DOMESTIC5': '规划暑期活动，为申请理想大学做准备。如：义工，实习，暑期课题项目，大学暑期课程等等。',
		'DOMESTIC6': '在学生节假日期间预定安排参观多所大学，让学生和家长了解不同类型的院校。',
		'DOMESTIC7': '根据学生的个性与实际情况，一步步引领指导学生完成选校和申请的全过程：',
		'DOMESTIC8': '对学生的成绩，表现，兴趣，个性，专业方向等诸多因素进行综合评估，推荐最适合学生三类不同档次的学校---争取学校 (Reach), 目标学校 (Target), 和保底学校（Safety）。',
		'DOMESTIC9': '与学生讨论，充分剖析挖掘个人优势及亮点，为撰写论文设计方案。',
		'DOMESTIC10': '指导修改个人陈述，简历，多篇不同院校的申请论文，进行多次具体详尽的大学面试指导与训练,等等。',
		'DOMESTIC11': '帮助申请各类院校，其中包括：军校，航空航天，艺术，烹饪，时装设计等等。对于特长学生，如体育， 帮助完成介绍，推荐及申请进入名校的全部过程。',
		'DOMESTIC12': '告知家长管理家庭财务应注意的事项，利于获得最大限度的学费补助。为学生填写FAFSA, CSS等各类助学金/奖学金申请，负责和校方沟通以取得最大限额的补助。',
		'DOMESTIC13': '入学前诸多事项指导, 及更多未列出的服务。',
		// International Services
		'SERVICES': '中国留学生申请美国高中/大学服务内容：',
		'SERVICESH1': '咨询服务与规划方案',
		'SERVICES1': '我们为学生/家长提供免费咨询服务，讲解申请流程，解答相关问题。',
		'SERVICESH2': '准备资料与申请学校',
		'SERVICES2': '根据学生的兴趣，学科成绩及表现，制定出最具个性化的留学方案。',
		'SERVICESH3': '培训学校面试及使馆签证',
		'SERVICES3': '协助学生/家长准备各类申请资料。',
		'SERVICESH4': '入境美国服务',
		'SERVICES4': '负责编辑修改各类文书，包括简历，个人自述，推荐信，申请论文，证明材料，以及其它相关资料。',
		'SERVICESH5': '入学后服务（仅适用高中生）',
		'SERVICES5': '帮助学生选择不同档次的学校，并完成多所学校的申请。',
		'SERVICES6': '通过电话由美国老师进行数次英语培训，直到达到足够自信与流利娴熟的程度。',
		'SERVICES7': '精心准备签证材料，讲解签证程序，须知与技巧，进行多次面签训练指导。',
		'SERVICES8': '安排与指导赴美前系列事务，如:体检，疫苗注射，换汇购汇，准备携带的文件，入境海关，等等。',
		'SERVICES9': '介绍讲解学校，寄宿家庭，文化风俗差异等等。',
		'SERVICES10': '提供机场接机，并送到入住家庭/学校。带领到校注册报到，帮助办理银行开户，手机开户，购买生活用品，等等。',
		'SERVICES11': '注：如果学校不在我们的服务范围之内，则不提供此项服务。',
		'SERVICES12': '做为学生的监护人，我们就是学生在美国的家长。本公司将定期与学校和寄宿家庭沟通，及时了解掌握学生在校的学习和表现以及寄宿家庭情况，并随时解决存在的问题。与此同时，我们也会定期与家长联系，报告孩子生活及学习情况。',
		'SERVICES13': '我们还将定期探访学生，举行节假日团聚，旅游等活动。',
		'SERVICES14': '本公司的专业顾问将为学生规划与制定全面具体的大学申请方案，并严格按照此方案进行学业跟踪指导，直到学生升入理想大学。',
		//Testimonials Section
		'TESTIMONIALS': '团队优势',
		'TESTIMONIALS1': '我们拥有强烈的愿望，无私的爱心，积极的态度和宝贵的经验，更有不断地探索，不懈地努力的精神去帮助有需求的学生进入他们最理想的大学. 具有当年申请大学的亲身经历和成功经验，是最前沿的最新亲历者，都是实战经历，不是纸上谈兵',
		'TESTIMONIALS2': '有良好完善的名校同学人脉网络和大学信息资源. 身临其境，更真实地了解不同大学的优势，录取倾向，标准及择优条件. 每个队员都曾有独特精彩的大学学习经历，能提供给学生难能可贵的借鉴经验. 每个队员都有着不同的求职经历及宝贵经验，更了解哪些大学及专业倍受关注与钦赖',
		'TESTIMONIALS3': '我们有在中国和美国生活的不同经历和亲身体验，更了解中国学生和家长的处境和愿望. 流利英文，国语，广东话， 便于与家长/学生沟通交流',
    'TESTIMONIALS4': '学生被录取的院校如下',
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
		if($scope.langKey === 'en') {
			$scope.langKey = 'cn'
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

scotchApp.controller('testimonialsController', function($scope) {
	$scope.message = 'Look! I am a testimonial page.';
});
