// script.js

    // create the module and name it scotchApp
    var scotchApp = angular.module('scotchApp', ['ngRoute', 'pascalprecht.translate']);

    // configure our routes
    scotchApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
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

    scotchApp.config(['$translateProvider', function($translateProvider) {
        $translateProvider.translations('en', {
            'TITLE': 'Hello',
            'FOO': 'This is a paragraph',
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
            'ABOUT': 'Ivy Target is a college admissions counseling company that was founded by the students, for the students. We seek to match students and their academic and personal capabilities to colleges and universities. For many students and parents, the process seems arduous and complex, with often no source of help or resource other than the school\'s overstaffed guidance counselor. Having gone through the process ourselves, we provide rich insight on the application and college process that few others can match. Everything from class selection in high school, standardized testing planning, resume and essay writing, to building you your own customized set of colleges and more, Ivy Target is here to help.'
          });

          $translateProvider.translations('de', {
            'TITLE': 'Hallo',
            'FOO': 'Dies ist ein Absatz',
            'TEAM': '我们拥有强烈的愿望，无私的爱心，积极的态度和宝贵的经验，更有不断地探索，不懈地努力的精神去帮助有需求的学生进入他们最理想的大学。',
            'TEAM1': '具有当年申请大学的亲身经历和成功经验，是最前沿的最新亲历者，都是实战经历，不是纸上谈兵。',
            'TEAM2': '有良好完善的名校同学人脉网络和大学信息资源。',
            'TEAM3': '身临其境，更真实地了解不同大学的优势，录取倾向，标准及择优条件。',
            'TEAM4': '每个队员都曾有独特精彩的大学学习经历，能提供给学生难能可贵的借鉴经验。',
            'TEAM5': '每个队员都有着不同的求职经历及宝贵经验，更了解哪些大学及专业倍受关注与钦赖。',
            'TEAM6': '我们有在中国和美国生活的不同经历和亲身体验，更了解中国学生和家长的处境和愿望。',
            'TEAM7': '流利英文，国语，广东话， 便于与家长/学生沟通交流。',
            'ABOUT': '   我们是毕业于长青藤大学的学生，多位现已就职于国际著名公司和财团，都是从艰难困境中成功走出来的中国学生。当年苦于我们的父母帮不上忙，所以学业和升学都遇到了很大的挑战。今天我们特别理解与我们一样面临着挑战的学弟学妹们。回首往日我们冲语言障碍，考特殊高中，学特长技能，做有效义工，写大学论文，填补助申请，等等。 过关斩将, 踏进名校，再入理想职场。展望前程似锦，美国梦不再遥不可及! 因此，我们更觉得应当有这份爱心和义务在工作和学习之余，将我们所得的宝贵经验和深刻教训毫无保留地与你们分享。最值得我们感到欣慰的是,我们真诚的服务与帮助已经使许多学生进入超越他们自身水平的理想大学。'+
                        '各位学生/家长们：\n你对美国的教育系统如何运作，每年大学招生又有怎样的变化是否真正了解?\n    各类大学都希望招收怎样特征的学生呢？\n    成绩优异就能进入著名大学吗? \n    为什么许多SAT高分的学生却没有被名校录取？\n    从读高中到申请大学，你的目标和方案是否具体，科学，有效呢？\n    做好哪些准备才能进入又理想，又能得到更多补助金的性价比高的大学呢？\n    心急如焚、又束手无策的家长如何才能理顺头绪，有的放矢地帮助孩子呢? \n\n    标榜升学顾问团队愿意和迷惘的学弟学妹及叔叔阿姨们分享我们的亲身经历，经验和教训，为你们指点迷津，并伴随你们共同走好人生这段最重要的旅程。\n人生的关键时刻只有几步，我们不仅帮助你们完成高中阶段的全部升学准备，顺利升入理想大学，还将继续帮助你们进入理想职场，踏上成功就业之路。我们大部分队员都已经在享有盛誉的大公司和财团工作，能为即将大学毕业寻求职业的学生提供有效的信息和帮助。\n我们顾问团队成员就如同你们的私人教练，自始至终跟踪陪伴辅导你们，教会你们独立处理高中、大学期间将要面临的问题，在所有的关键时刻协助你们，支持与鼓励你们追求自己的梦想和职业目标。\n      我们衷心希望将来你们也能加入我们的团队，用你们的爱心，经验和能力去帮助那些有需求的学弟学妹们，把这互助的火炬传递下去。我坚信这个团队所构建的人脉网络，将会成为有助你事业发展的基石，因为这是群成功的佼佼者，从你们中将走出医生、律师、教授、实业家、金融家、科学家、军事家、政治家、无所不能。你们的不懈努力将创造奇迹、改写历史！',
            'SERVICES': '美国高中申请大学全面规划指导',
            'SERVICES1': '中国学生申请美国学校',
            'SERVICES2': '初中申请高中',
            'SERVICES3': '高中申请本科',
            'SERVICES4': '本科申请续读本科',
            'SERVICES5': '本科申请硕士',
            'SERVICES6': '硕士申请博士',
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