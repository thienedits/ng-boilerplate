angular.module('templates-app', ['about/about.tpl.html', 'home/home.tpl.html', 'projects/projects.large.tpl.html', 'projects/projects.tpl.html', 'projects/projects.view.tpl.html', 'resume/resume.tpl.html']);

angular.module("about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/about.tpl.html",
    "<div class=\"container\">\n" +
    "	<div class=\"profile row-fluid show-grid\">\n" +
    "		<nav>\n" +
    "			<a href=\"/home\" class=\"back\" title=\"Home\"><i class=\"fa fa-chevron-left\"></i>&nbsp;Home</a>\n" +
    "		</nav>\n" +
    "		<a href=\"https://plus.google.com/u/0/102157534092095391789/about\" class=\"profile-img\" target=\"_blank\"></a>\n" +
    "		<div class=\"row-fluid show-grid heading\">\n" +
    "			<h3>Thien Pham</h3>\n" +
    "			<ul class=\"social inline\">\n" +
    "				<li><a href=\"http://plus.google.com/102157534092095391789/about\" target=\"_blank\" title=\"Google Plus\"><i class=\"fa fa-google-plus fa-lg\"></i></a></li><li><a href=\"http://www.facebook.com/thienpham.us\" target=\"_blank\" title=\"Facebook\"><i class=\"fa fa-facebook fa-lg\"></i></a></li><li><a href=\"http://www.linkedin.com/in/thienpham\" target=\"_blank\"><i class=\"fa fa-linkedin fa-lg\" title=\"Linkedin\"></i></a></li>\n" +
    "			</ul>\n" +
    "			<h5>UX Web Designer at Simpson Strong-Tie</h5>\n" +
    "			<h5>Attended University of Wisconsin-Madison</h5>\n" +
    "			<h5>Lives in Fremont, CA</h5>\n" +
    "		</div>\n" +
    "		<div class=\"content\">\n" +
    "			<p>A recent bay area transplant originally from chicago interested in front-end web development and visual/UI design. I enjoy making clean, simple, engaging designs.</p>\n" +
    "\n" +
    "			<p>I'm passionate about designing websites and web applications using new technologies such as HTML5, CSS3 and Javascript. I really love front-end visual design and creating great user experiences.</p>\n" +
    "		</div>\n" +
    "		<hr>\n" +
    "		<div class=\"contact\">\n" +
    "			<h4>Contact Info</h4>\n" +
    "			<ul class=\"info unstyled\">\n" +
    "				<li>\n" +
    "					<a href=\"tel://1-312-380-5256\">\n" +
    "						<div class=\"content\">\n" +
    "							<p class=\"title\">Mobile</p>\n" +
    "							<p>312-380-5256</p>\n" +
    "						</div>\n" +
    "						<i class=\"qp-phone qp-2x\"></i>\n" +
    "					</a>\n" +
    "				</li>\n" +
    "				<li>\n" +
    "					<a href=\"mailto:thienpham.us@gmail.com\">\n" +
    "						<div class=\"content\">\n" +
    "							<p class=\"title\">Email</p>\n" +
    "							<p>thienpham.us@gmail.com</p>\n" +
    "						</div>\n" +
    "						<i class=\"qp-mail qp-2x\"></i>\n" +
    "					</a>\n" +
    "				</li>\n" +
    "			</ul>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<ul class=\"imgList\">\n" +
    "  <li id=\"project{{project.id}}\" ng-repeat=\"project in projects\">\n" +
    "  	<a ng-href=\"project/{{project.id}}\">\n" +
    "  	<div class=\"defer-image image-ratio:4x3 is-loading\">\n" +
    "  		<div></div>\n" +
    "  		<img ng-src=\"assets/img/{{project.images[0]}}.jpg\" imgload>\n" +
    "	</div>\n" +
    "  	<!-- <div class=\"copy\">\n" +
    "  		<h4>{{project.title}}</h4>\n" +
    "  		<h5>{{project.subtitle}}</h5>\n" +
    "  	</div> -->\n" +
    "  	</a>\n" +
    "  </li>\n" +
    "</ul>");
}]);

angular.module("projects/projects.large.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("projects/projects.large.tpl.html",
    "<div class=\"row-fluid show-grid\">\n" +
    "<div class=\"project-large\">\n" +
    "	<div class=\"container\">\n" +
    "	<nav class=\"close\">\n" +
    "		<a href=\"project/{{project.id}}\" class=\"close\" title=\"Close\"><i class=\"fa fa-times-circle\"></i>&nbsp;Close</a>\n" +
    "	</nav>\n" +
    "	<ul rn-carousel rn-carousel-index=\"currentImage\" rn-carousel-indicator=\"true\" class=\"image\">\n" +
    "		<li ng-repeat=\"image in project.largeImages\" >\n" +
    "			<div class=\"defer-image image-ratio:3x4 is-loading\">\n" +
    "  				<div></div>\n" +
    "				<img ng-src=\"assets/img/{{image}}.jpg\" imgload>\n" +
    "			</div>\n" +
    "		</li>\n" +
    "	</ul>\n" +
    "	<nav>\n" +
    "		<button class=\"btn nobg prev\" ng-click=\"currentImage = currentImage - 1\" ng-disabled=\"currentImage == 0\"><i class=\"fa fa-chevron-left\"></i>&nbsp;prev</button>\n" +
    "		<button class=\"btn nobg next\" ng-click=\"currentImage = currentImage + 1\" ng-disabled=\"currentImage == project.largeImages.length - 1\">next&nbsp;<i class=\"fa fa-chevron-right\"></i></button>\n" +
    "	</nav>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>");
}]);

angular.module("projects/projects.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("projects/projects.tpl.html",
    "<div ui-view>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("projects/projects.view.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("projects/projects.view.tpl.html",
    "<div class=\"row-fluid show-grid\">\n" +
    "<div class=\"container\">\n" +
    "<div class=\"project\">\n" +
    "	<nav class=\"back\">\n" +
    "		<a href=\"/home\" class=\"back\" title=\"\"><span class=\"qp-previous qp-lg\"></span><span>&nbsp;Back</span></a>\n" +
    "	</nav>\n" +
    "	<ul rn-carousel rn-carousel-index=\"currentImage\" rn-carousel-indicator=\"true\" class=\"image\">\n" +
    "		<li ng-repeat=\"image in project.images\" >\n" +
    "			<div class=\"defer-image image-ratio:4x3 is-loading\">\n" +
    "  				<div></div>\n" +
    "				<img ng-src=\"assets/img/{{image}}.jpg\" imgload>\n" +
    "			</div>\n" +
    "		</li>\n" +
    "	</ul>\n" +
    "	<nav class=\"viewer\">\n" +
    "		<button class=\"nobg\" ng-click=\"currentImage = currentImage - 1\" ng-disabled=\"currentImage == 0\" title=\"Previous\"><i class=\"qp-previous qp-lg\"></i>&nbsp;prev</button>\n" +
    "		<button class=\"nobg\" ng-click=\"currentImage = currentImage + 1\" ng-disabled=\"currentImage == project.images.length - 1\" title=\"Next\">next&nbsp;<i class=\"qp-next qp-lg\"></i></button>\n" +
    "		<a ng-href=\"project/{{project.id}}/large\" class=\"gray-icon\" ng-hide=\"siteLink\" title=\"View Larger\"><i class=\"qp-expand qp-2x\"></i></a>\n" +
    "		<a ng-href=\"{{project.url}}\" class=\"gray-icon\" ng-show=\"siteLink\" title=\"View Site\" target=\"_blank\"><i class=\"qp-open qp-2x\"></i></a>\n" +
    "	</nav>\n" +
    "	<div class=\"copy\">\n" +
    "	<h4>{{project.title}}</h4>\n" +
    "	<h5>{{project.subtitle}}</h5>\n" +
    "	<p>{{project.desc}}</p>\n" +
    "	</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>");
}]);

angular.module("resume/resume.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("resume/resume.tpl.html",
    "<div class=\"container\">\n" +
    "<div class=\"resume row-fluid show-grid\">\n" +
    "	<nav>\n" +
    "		<a href=\"/home\" class=\"back\" title=\"Home\"><i class=\"fa fa-chevron-left\"></i>&nbsp;Home</a>\n" +
    "	</nav>\n" +
    "	<a href=\"https://plus.google.com/u/0/102157534092095391789/about\" class=\"profile-img\" target=\"_blank\"></a>\n" +
    "	<div class=\"row-fluid show-grid heading\">\n" +
    "		<h3>Thien Pham</h3>\n" +
    "		<div class=\"contact\">\n" +
    "			<ul class=\"social inline\">\n" +
    "				<li><a href=\"http://plus.google.com/102157534092095391789/about\" target=\"_blank\" title=\"Google Plus\"><i class=\"fa fa-google-plus fa-lg\"></i></a></li><li><a href=\"http://www.facebook.com/thienpham.us\" target=\"_blank\" title=\"Facebook\"><i class=\"fa fa-facebook fa-lg\"></i></a></li><li><a href=\"http://www.linkedin.com/in/thienpham\" target=\"_blank\"><i class=\"fa fa-linkedin fa-lg\" title=\"Linkedin\"></i></a></li>\n" +
    "			</ul>\n" +
    "		</div>\n" +
    "		<h5 class=\"address\"><a href=\"http://maps.google.com/?q=4321 Margery Dr, Fremont, CA, 94538\"><i class=\"qp-pin\" title=\"Get Directions\"></i>4321 Margery Dr &bull; Fremont, CA 94538</a></h5>\n" +
    "		<!-- <ul class=\"inline actions\">\n" +
    "			<li><a href=\"mailto:thiepham.us@gmail.com\" target=\"_blank\"><i class=\"fa fa-envelope fa-2x\"></i></a>email</li>\n" +
    "			<li><a href=\"tel://1-312-380-5256\"><i class=\"fa fa-phone fa-2x\"></i></a>call</li>\n" +
    "			<li><a href=\"https://docs.google.com/file/d/0B0qdt7xwL6A8eVhrcEprQXdzTGc/edit?usp=sharing\" title=\"Download Resume\" target=\"_blank\"><i class=\"fa fa-download fa-2x\"></i></a>download</li>\n" +
    "		</ul> -->\n" +
    "		\n" +
    "	</div>\n" +
    "	<div class=\"contact\">\n" +
    "			<ul class=\"info unstyled\">\n" +
    "				<li>\n" +
    "					<a href=\"tel://1-312-380-5256\">\n" +
    "						<div class=\"content\">\n" +
    "							<p class=\"title\">Mobile</p>\n" +
    "							<p>312-380-5256</p>\n" +
    "						</div>\n" +
    "						<i class=\"qp-phone qp-2x\"></i>\n" +
    "					</a>\n" +
    "				</li>\n" +
    "				<li>\n" +
    "					<a href=\"mailto:thienpham.us@gmail.com\">\n" +
    "						<div class=\"content\">\n" +
    "							<p class=\"title\">Email</p>\n" +
    "							<p>thienpham.us@gmail.com</p>\n" +
    "						</div>\n" +
    "						<i class=\"qp-mail qp-2x\"></i>\n" +
    "					</a>\n" +
    "				</li>\n" +
    "			</ul>\n" +
    "			<hr>\n" +
    "		</div>\n" +
    "	<div>\n" +
    "		<h4>Objective</h4>\n" +
    "		<p>I just relocated to the Bay Area from Chicago and currently seeking a challenging position in web/mobile development environment utilizing my skills in web, graphic, and multimedia design.</p>\n" +
    "\n" +
    "		<h4>Summary</h4>\n" +
    "		<ul>\n" +
    "			<li>10 years of experience working with Fortune 500 companies and small businesses.</li>\n" +
    "			<li>Experience working in team environments with marketing managers, developers, ux architects, content writers, project managers, business analysts, and other designers.</li>\n" +
    "			<li>Worked on web projects building sites using new technologies such as HTML5, CSS3, and Jquery. Additional experience in Responsive Design, Front-end Development and frameworks such as Angular JS and Twitter Bootstrap.</li>\n" +
    "			<li>A passion for ux, visual design, web technologies and an entrepreneur attitude to getting things done.</li>\n" +
    "		</ul>\n" +
    "		\n" +
    "		<section id=\"skills\">\n" +
    "			<h4>Skills</h4>\n" +
    "			<ul>\n" +
    "				<li>HTML5</li>\n" +
    "				<li>CSS3</li>\n" +
    "				<li>Javascript</li>\n" +
    "				<li>Responsive Design</li>\n" +
    "				<li>Angular JS</li>\n" +
    "				<li>Visual Design</li>\n" +
    "				<li>Front-end Dev</li>\n" +
    "				<li>UX</li>\n" +
    "				<li>Wireframing</li>\n" +
    "				<li>HTML Email</li>\n" +
    "				<li>Photoshop</li>\n" +
    "				<li>Illustrator</li>\n" +
    "			</ul>\n" +
    "		</section>\n" +
    "\n" +
    "		<section id=\"experience\">\n" +
    "			<h4>Experience</h4>\n" +
    "			<section>\n" +
    "				<div class=\"row-fluid\">\n" +
    "						<h5>Allstate Financial</h5>\n" +
    "						<small>Multimedia Designer</small>\n" +
    "						<small>Chicago, IL</small>\n" +
    "						<small>Sep 2010&ndash;Apr 2013</small>\n" +
    "				</div>\n" +
    "				<ul>\n" +
    "					<li>Work on a variety of agent and consumer facing projects that include web applications, microsites, flash demos, html emails, banners and print materials.</li>\n" +
    "					<li>Provide visual design and html/css support as part of a cross-functional team creating an online web application for selling life insurance.</li>\n" +
    "					<li>Design and coded various marketing related websites and landing pages implementing responsive design, crossbrowser compatibility/testing and Google Analytics.</li>\n" +
    "					<li>Design and concept various flash demos using Actionscript 3.</li>\n" +
    "					<li>Design, create and test HTML emails for various consumer based campaigns.</li>\n" +
    "					<li>Execute multiple projects on time while managing work load, meeting critical deadlines and milestones.</li>\n" +
    "				</ul>\n" +
    "			</section>\n" +
    "			<section>\n" +
    "				<div class=\"row-fluid\">\n" +
    "						<h5>Independent Consultant</h5>\n" +
    "						<small>Multimedia Designer</small>\n" +
    "						<small>Chicago, IL</small>\n" +
    "						<small>Nov 2007&ndash;Sep 2010</small>\n" +
    "				</div>\n" +
    "				<ul>\n" +
    "					<li>Produced various communication projects that include internal communication, marketing material, sales collateral, and web material for large corporations and independent clients.</li>\n" +
    "					<li>Designed a variety of B2C print, marketing material, collateral and presentations for Harris Private Bank.</li>\n" +
    "					<li>Worked with Harris marketing managers, creating online banners and materials for web.</li>\n" +
    "					<li>Worked with marketing managers at Deloitte to design and layout brochures and communication collateral.</li>\n" +
    "				</ul>\n" +
    "			</section>\n" +
    "			<section>\n" +
    "				<div class=\"row-fluid\">\n" +
    "						<h5>Blue Cross Blue Shield</h5>\n" +
    "						<small>Visual Communications Designer</small>\n" +
    "						<small>Chicago, IL</small>\n" +
    "						<small>Mar 2006&ndash;Oct 2007</small>\n" +
    "				</div>\n" +
    "				<ul>\n" +
    "					<li>Responsible for internal communication material and presentations for executive level meetings.</li>\n" +
    "					<li>Met with senior level management to assist in creating illustrations to visualize business and IT concepts for Information Security and Risk Management.</li>\n" +
    "					<li>Analyzed content from word documents, handwritten notes, diagrams, drawings and ideas to create presentation content for the Director of Information Security.</li>\n" +
    "				</ul>\n" +
    "			</section>\n" +
    "\n" +
    "			<section>\n" +
    "				<div class=\"row-fluid\">\n" +
    "						<h5>Raisenheadz Creative</h5>\n" +
    "						<small>Multimedia Production Artist</small>\n" +
    "						<small>Chicago, IL</small>\n" +
    "						<small>Nov 2003&ndash;Nov 2005</small>\n" +
    "				</div>\n" +
    "				<ul>\n" +
    "					<li>Worked on communication projects that included print materials and video production.</li>\n" +
    "					<li>Responsible for design, layout and typesetting of direct mail brochures for prospective customers.</li>\n" +
    "					<li>Worked on both production and post-production of video and DVD projects.</li>\n" +
    "				</ul>\n" +
    "			</section>\n" +
    "			\n" +
    "		</section>\n" +
    "\n" +
    "		<section id=\"education\">\n" +
    "			<h4>Education</h4>\n" +
    "			<div class=\"row-fluid\">\n" +
    "					<h5>University of Wisconsin</h5>\n" +
    "					<small>BA Media Communications</small>\n" +
    "					<small>Madison, WI</small>\n" +
    "					<small>May 2002</small>\n" +
    "			</div>\n" +
    "			<h5>Awards & Interests</h5>\n" +
    "			<ul>\n" +
    "				<li>Powers-Knapp Scholar 1997-2002</li>\n" +
    "				<li>MU National Scholarship 1997</li>\n" +
    "				<li>Tennis, Poker, Certified Tech Geek, Apple and Android user <3</li>\n" +
    "			</ul>\n" +
    "		</section>\n" +
    "		\n" +
    "	</div>\n" +
    "</div>\n" +
    "</div>");
}]);
