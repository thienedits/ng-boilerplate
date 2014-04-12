angular.module('templates-app', ['about/about.tpl.html', 'contacts/contacts.detail.tpl.html', 'contacts/contacts.edit.tpl.html', 'contacts/contacts.tpl.html', 'home/home.tpl.html', 'projects/projects.detail.tpl.html', 'projects/projects.large.tpl.html', 'projects/projects.tpl.html', 'resume/resume.tpl.html', 'swipe/swipe.detail.tpl.html', 'swipe/swipe.large.tpl.html', 'swipe/swipe.tpl.html']);

angular.module("about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/about.tpl.html",
    "<div class=\"about\">\n" +
    "	<div class=\"header-section\">\n" +
    "		<div class=\"container\">\n" +
    "			<nav class=\"back\">\n" +
    "				<a href=\"/projects\" title=\"Go Back\"><span class=\"qp-back qp-2x\"></span></a>\n" +
    "			</nav>\n" +
    "			<a href=\"https://plus.google.com/u/0/102157534092095391789/about\" class=\"profile-img\" target=\"_blank\"></a>\n" +
    "			<h3 class=\"text-center\">Thien Pham</h3>\n" +
    "			<h5 class=\"text-center\">UX Web Designer at Simpson Strong-Tie</h5>\n" +
    "			<h5 class=\"text-center\">Attended University of Wisconsin-Madison</h5>\n" +
    "			<h5 class=\"text-center\">Lives in Fremont, CA</h5>\n" +
    "			<ul class=\"social\">\n" +
    "				<li><a href=\"http://plus.google.com/102157534092095391789/about\" target=\"_blank\" title=\"Google Plus\"><i class=\"qp-google-plus qp-lg\"></i></a></li><li><a href=\"http://www.facebook.com/thienpham.us\" target=\"_blank\" title=\"Facebook\"><i class=\"qp-facebook qp-lg\"></i></a></li><li><a href=\"http://www.linkedin.com/in/thienpham\" target=\"_blank\"><i class=\"qp-linkedin qp-lg\" title=\"Linkedin\"></i></a></li>\n" +
    "			</ul>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "		<div class=\"container content-section\">\n" +
    "			<div class=\"copy-section\">\n" +
    "			<h4>About Me</h4>\n" +
    "			<p>A recent bay area transplant originally from chicago interested in front-end web development and visual/UI design. I enjoy making clean, simple, engaging designs.</p>\n" +
    "\n" +
    "			<p>I'm passionate about designing websites and web applications using new technologies such as HTML5, CSS3 and Javascript. I really love front-end visual design and creating great user experiences.</p>\n" +
    "			<hr>\n" +
    "		</div>\n" +
    "		<div class=\"contact-section\">\n" +
    "			<h4>Contact Info</h4>\n" +
    "			<ul class=\"list-contact list-unstyled\">\n" +
    "				<li>\n" +
    "					<a href=\"tel://1-312-380-5256\">\n" +
    "						<span class=\"content\">\n" +
    "							<p class=\"title\">Phone</p>\n" +
    "							<p>312-380-5256</p>\n" +
    "						</span>\n" +
    "						<span class=\"icon qp-phone qp-2x\"></span>\n" +
    "					</a>\n" +
    "				</li>\n" +
    "\n" +
    "				<li>\n" +
    "					<a href=\"mailto:thienpham.us@gmail.com\">\n" +
    "						<span class=\"content\">\n" +
    "							<p class=\"title\">Email</p>\n" +
    "							<p>thienpham.us@gmail.com</p>\n" +
    "						</span>\n" +
    "						<span class=\"icon qp-mail qp-2x\"></span>\n" +
    "					</a>\n" +
    "				</li>\n" +
    "			</ul>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("contacts/contacts.detail.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("contacts/contacts.detail.tpl.html",
    "<div class=\"container\">\n" +
    "  <nav class=\"back\">\n" +
    "    <a href=\"/contacts\" title=\"Go Back\"><span class=\"qp-back qp-2x\"></span></a>\n" +
    "    <a ui-sref=\"contacts.edit({id:contact.$id})\"  class=\"edit-save\">Edit</a>\n" +
    "  </nav>\n" +
    "\n" +
    "  <div class=\"contact-heading\">\n" +
    "    <span class=\"profile-img\"></span>\n" +
    "    <h3>{{contact.name}}</h3>\n" +
    "  </div>\n" +
    "  <ul class=\"list-contact list-unstyled\">\n" +
    "    <li>\n" +
    "      <a href=\"tel://{{contact.phone}}\">\n" +
    "        <span class=\"content\">\n" +
    "          <p class=\"title\">Phone</p>\n" +
    "          <p>{{contact.phone}}</p>\n" +
    "        </span>\n" +
    "        <span class=\"qp-phone qp-2x\"></span>\n" +
    "      </a>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "      <a href=\"mailto:{{contact.email}}\">\n" +
    "        <span class=\"content\">\n" +
    "          <p class=\"title\">Email</p>\n" +
    "          <p>{{contact.email}}</p>\n" +
    "        </span>\n" +
    "        <span class=\"qp-mail qp-2x\"></span>\n" +
    "      </a>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "      <a href=\"http://maps.google.com/?q={{contact.address}}, {{contact.city}}, {{contact.state}}, {{contact.zip}}\">\n" +
    "        <span class=\"content\">\n" +
    "          <p class=\"title\">Address</p>\n" +
    "          <p>{{contact.address}}</p>\n" +
    "          <p>{{contact.city}}, {{contact.state}} {{contact.zip}}</p>\n" +
    "        </span>\n" +
    "        <span class=\"qp-pin qp-2x\"></span>\n" +
    "      </a>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "</div>");
}]);

angular.module("contacts/contacts.edit.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("contacts/contacts.edit.tpl.html",
    "<div class=\"container\">\n" +
    "  <nav class=\"back\">\n" +
    "    <a ng-click=\"saveContact()\" class=\"edit-save\">Save</a>\n" +
    "  </nav>\n" +
    "  <div class=\"\" >\n" +
    "    <form class=\"form-horizontal\">\n" +
    "      <div class=\"form-group\">\n" +
    "        <div class=\"col-xs-3\">\n" +
    "          <span class=\"profile-img\"></span>\n" +
    "        </div>\n" +
    "        \n" +
    "        <div class=\"col-xs-9\">\n" +
    "          <input ng-model=\"contact.name\" type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Name\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </form>\n" +
    "\n" +
    "    <form>\n" +
    "      <div class=\"form-group\">\n" +
    "        <label class=\"title\" for=\"\">Phone</label>\n" +
    "        <input ng-model=\"contact.phone\" type=\"text\" class=\"form-control\" id=\"phone\" placeholder=\"phone\">\n" +
    "        \n" +
    "      </div>\n" +
    "      <div class=\"form-group\">\n" +
    "        <label class=\"title\" for=\"\">Email</label>\n" +
    "        <input ng-model=\"contact.email\" type=\"text\" class=\"form-control\" id=\"email\" placeholder=\"email\">\n" +
    "        \n" +
    "      </div>\n" +
    "      <div class=\"form-group\">\n" +
    "        <label class=\"title\" for=\"\">Address</label>\n" +
    "        <input ng-model=\"contact.address\" type=\"text\" class=\"form-control show-grid address\" ng-focus=\"geolocate()\" id=\"address\" placeholder=\"Street Address\" required>\n" +
    "        <input ng-model=\"contact.city\" type=\"text\" class=\"form-control show-grid\" id=\"locality\" placeholder=\"City\" required>\n" +
    "        <div class=\"row\">\n" +
    "        <div class=\"col-xs-8\">\n" +
    "          <!-- <input ng-model=\"contact.state\" type=\"text\" class=\"form-control\" id=\"state\" placeholder=\"state\"> -->\n" +
    "          <select ng-model=\"contact.state\" ng-options=\"state.name as state.name for state in states\" class=\"form-control\" id=\"administrative_area_level_1\" required>\n" +
    "          </select>\n" +
    "        </div>\n" +
    "        <div class=\"col-xs-4\"> \n" +
    "          <input ng-model=\"contact.zip\" type=\"text\" class=\"form-control\" id=\"postal_code\" placeholder=\"Zip\" required>\n" +
    "        </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </form>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("contacts/contacts.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("contacts/contacts.tpl.html",
    "\n" +
    "<div class=\"container\">\n" +
    "  <nav class=\"back\">\n" +
    "    <a href=\"/projects\" title=\"Go Back\"><span class=\"qp-back qp-2x\"></span></a>\n" +
    "  </nav>\n" +
    "</div>\n" +
    "<div class=\"container\">\n" +
    "  <div id=\"search\" class=\"search\">\n" +
    "    <input type=\"text\" class=\"form-control\" ng-model=\"search\" placeholder=\"Search\"/>\n" +
    "    <!-- <a>Search</a> -->\n" +
    "  </div>\n" +
    "\n" +
    "<!-- <div ng-if=\"mobileSize == false\">\n" +
    "  <div class=\"info\">\n" +
    "    <h5>{{contactsCount}} Contacts</h5>\n" +
    "    <span>Page {{page}} of {{numPages}}</span>\n" +
    "    <div ng-show=\"contactsCount == 0\">\n" +
    "      <h3>No Contacts Found</h3>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <table class=\"table table-striped\">\n" +
    "    <thead >\n" +
    "      <tr>\n" +
    "        <th ng-repeat=\"header in headers\">\n" +
    "          <a sort-by onsort=\"onSort\" sortdir=\"filterCriteria.sortDir\" sortedby=\"filterCriteria.sortedBy\" sortvalue=\"{{ header.value }}\">{{ header.title }}</a>\n" +
    "        </th>\n" +
    "      </tr>\n" +
    "    </thead>\n" +
    "    <tbody>\n" +
    "    <tr ng-click=\"$location.path('contacts/' + data.contactId)\" ng-repeat=\"data in filtered | startFrom:(page-1)*entryLimit | limitTo:entryLimit\">\n" +
    "      <td>{{data.contactId + 1}}</td>\n" +
    "      <td>{{data.name}}</td>\n" +
    "      <td>{{data.email}}</td>\n" +
    "      <td>{{data.address}}</td>\n" +
    "      <td>{{data.city}}</td>\n" +
    "      <td>{{data.state}}</td>\n" +
    "    </tr>\n" +
    "    </tbody>\n" +
    "  </table>\n" +
    "  <div ng-show=\"contactsCount == 0\">\n" +
    "    <h3>No Contacts Found</h3>\n" +
    "  </div>\n" +
    "  <div class=\"align-center\">\n" +
    "    <pagination  total-items=\"contactsCount\" items-per-page=\"entryLimit\" num-pages=\"numPages\" page=\"page\" rotate=\"false\" boundary-links=\"true\" max-size=\"10\"></pagination>\n" +
    "  </div>\n" +
    "</div> -->\n" +
    "\n" +
    "  <div class=\"\" ng-swipe-left=\"setPage(page + 1)\" ng-swipe-right=\"setPage(page - 1)\">\n" +
    "      <div class=\"clearfix\">\n" +
    "        <h5 class=\"pull-left\">{{contactsCount}} Contacts <!-- <span ng-show=\"search\">with \"{{search}}\"</span> --></h5>\n" +
    "        <h5 class=\"pull-right\">Page {{page}} of {{numPages}}</h5>\n" +
    "      </div>\n" +
    "      \n" +
    "      <div >\n" +
    "        <h3 ng-show=\"contactsCount == 0\">No Contacts Found</h3>\n" +
    "      </div>\n" +
    "      <nav class=\"back\">\n" +
    "        <a href=\"\" ng-click=\"predicate = 'name'; reverse=!reverse\">Name <span class=\"qp-next\" ng-class=\"{'down-arr': reverse, 'up-arr': !reverse}\"></span></a><br>\n" +
    "      </nav>\n" +
    "    \n" +
    "    <ul class=\"list-contacts list-group\">\n" +
    "      <li class=\"list-group-item\" ng-click=\"$location.path('contacts/' + contact.$id)\" ng-repeat=\"contact in filtered | orderBy:predicate:reverse | startFrom:(page-1)*entryLimit | limitTo:entryLimit\">\n" +
    "        <span class=\"profile-img\"></span>\n" +
    "        <span>{{contact.name}}</span>\n" +
    "        <span class=\"qp-next\"></span>\n" +
    "      </li>\n" +
    "    </ul>\n" +
    "    <h5>Page {{page}} of {{numPages}}</h5>\n" +
    "    <pagination on-select-page=\"setPage(page)\" total-items=\"contactsCount\" items-per-page=\"entryLimit\" num-pages=\"numPages\" page=\"page\" rotate=\"false\" boundary-links=\"false\" max-size=\"3\"></pagination>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "");
}]);

angular.module("projects/projects.detail.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("projects/projects.detail.tpl.html",
    "<div class=\"project\" ng-style=\"style()\" resize>\n" +
    "	<div class=\"container\">\n" +
    "		<nav class=\"back\">\n" +
    "			<a href=\"/projects\" title=\"Go Back\"><span class=\"qp-back qp-2x\"></span></a>\n" +
    "		</nav>\n" +
    "	</div>\n" +
    "	<ion-slide-box on-slide-changed=\"slideChanged(index)\">\n" +
    "    <ion-slide ng-repeat=\"image in project.images\">\n" +
    "      <div class=\"defer-image image-ratio:4x3 is-loading\">\n" +
    "				<img ng-src=\"assets/img/{{image}}.jpg\" imgload>\n" +
    "			</div>\n" +
    "    </ion-slide>\n" +
    "  </ion-slide-box>\n" +
    "	<div class=\"slider-controls\">\n" +
    "    <span class=\"slider-control slider-control-prev\" ng-click=\"prevSlide()\" ng-if=\"slideIndex > 0\"></span>\n" +
    "    <span class=\"slider-control slider-control-next\" ng-click=\"nextSlide()\" ng-if=\"slideIndex != imgLength - 1\"></span>\n" +
    "  </div>\n" +
    "	<div class=\"container content-section\">\n" +
    "		<nav class=\"more\">\n" +
    "			<a ng-href=\"projects/{{project.$id}}/large\" class=\"\" ng-hide=\"siteLink\" title=\"View Larger\"><i class=\"qp-expand qp-2x\"></i></a>\n" +
    "			<a ng-href=\"{{project.url}}\" class=\"\" ng-show=\"siteLink\" title=\"View Site\" target=\"_blank\"><i class=\"qp-open qp-2x\"></i></a>\n" +
    "		</nav>\n" +
    "		<h4 ng-cloak>{{project.title}}</h4>\n" +
    "		<h5 ng-cloak>{{project.subtitle}}</h5>\n" +
    "		<p ng-cloak>{{project.desc}}</p>\n" +
    "	</div>\n" +
    "	\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("projects/projects.large.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("projects/projects.large.tpl.html",
    "<div class=\"project large\" ng-style=\"style()\" resize>\n" +
    "	<div class=\"container\">\n" +
    "		<nav class=\"back\">\n" +
    "			<a href=\"/projects/{{project.$id}}\" title=\"Go Back\"><span class=\"qp-back qp-2x\"></span></a>\n" +
    "		</nav>\n" +
    "	</div>\n" +
    "\n" +
    "	<ion-slide-box on-slide-changed=\"slideChanged(index)\" delegate-handle=\"large-slide\">\n" +
    "    <ion-slide ng-repeat=\"image in project.largeImages\">\n" +
    "      <div class=\"defer-image image-ratio:4x3 is-loading\">\n" +
    "				<img ng-src=\"assets/img/{{image}}.jpg\" imgload>\n" +
    "			</div>\n" +
    "    </ion-slide>\n" +
    "  </ion-slide-box>\n" +
    "  <div class=\"slider-controls\">\n" +
    "    <span class=\"slider-control slider-control-prev\" ng-click=\"prevSlide()\" ng-if=\"slideIndex > 0\"></span>\n" +
    "    <span class=\"slider-control slider-control-next\" ng-click=\"nextSlide()\" ng-if=\"slideIndex != imgLength - 1\"></span>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("projects/projects.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("projects/projects.tpl.html",
    "<div class=\"main-content-header\">\n" +
    "  <div class=\"container\">\n" +
    "    <button type=\"button\" class=\"btn btn-navbar\" ng-click=\"openMenu()\" title=\"Menu\">\n" +
    "      <span class=\"icon-bar\">Menu</span>\n" +
    "    </button>\n" +
    "    <a class=\"brand\" href=\"/\" title=\"qpham.com\">thienpham</a>\n" +
    "  </div> \n" +
    "</div>\n" +
    "<div class=\"container\">\n" +
    "	<ul class=\"list-projects list-unstyled\">\n" +
    "		<li id=\"project{{project.$id}}\" class=\"list-projects-item\" ng-repeat=\"project in projects | orderByPriority\">\n" +
    "			<a href=\"projects/{{project.$id}}\">\n" +
    "			<div class=\"defer-image image-ratio:4x3 is-loading\">\n" +
    "				<img ng-src=\"assets/img/{{project.images[0]}}.jpg\" imgload>\n" +
    "			</div>\n" +
    "			</a>\n" +
    "		</li>\n" +
    "	</ul>\n" +
    "</div>\n" +
    "<footer class=\"footer\" ng-cloak>\n" +
    "	<div class=\"container\">\n" +
    "		<p>\n" +
    "		This site was designed using \n" +
    "		<a href=\"http://www.angularjs.org\">AngularJS</a>,\n" +
    "		<a href=\"http://github.com/joshdmiller/ng-boilerplate\">ng-boilerplate</a>,\n" +
    "		<a href=\"https://github.com/angular-ui/ui-router\">ui-router</a>,\n" +
    "		<a href=\"http://angular-ui.github.io/bootstrap/\">ui-bootstrap</a>,\n" +
    "		<a href=\"https://www.firebase.com/\">firebase</a>,\n" +
    "		and \n" +
    "		<a href=\"http://icomoon.io/\">IcoMoon</a>.         \n" +
    "		</p>\n" +
    "		\n" +
    "		<p>(c) 2013 Thien Pham</p>\n" +
    "		<ul class=\"social\">\n" +
    "			<li><a href=\"http://plus.google.com/102157534092095391789/about\" target=\"_blank\" title=\"Google Plus\"><i class=\"qp-google-plus qp-lg\"></i></a></li><li><a href=\"http://www.facebook.com/thienpham.us\" target=\"_blank\" title=\"Facebook\"><i class=\"qp-facebook qp-lg\"></i></a></li><li><a href=\"http://www.linkedin.com/in/thienpham\" target=\"_blank\"><i class=\"qp-linkedin qp-lg\" title=\"Linkedin\"></i></a></li>\n" +
    "		</ul>\n" +
    "	</div>\n" +
    "</footer>");
}]);

angular.module("resume/resume.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("resume/resume.tpl.html",
    "<div class=\"resume\">	\n" +
    "	<div class=\"header-section\">\n" +
    "		<div class=\"container\">\n" +
    "			<nav class=\"back \">\n" +
    "				<a href=\"/projects\" title=\"Go Back\"><span class=\"qp-back qp-2x\"></span></a>\n" +
    "			</nav>\n" +
    "			<a href=\"https://plus.google.com/u/0/102157534092095391789/about\" class=\"profile-img\" target=\"_blank\"></a>\n" +
    "			<h3 class=\"text-center\">Thien Pham</h3>\n" +
    "			<a class=\"text-center center-block btn-simple\" href=\"http://maps.google.com/?q=4321 Margery Dr, Fremont, CA, 94538\"><span class=\"qp-pin qp-2x\" title=\"Get Directions\"></span><span class=\"btn-simple-txt\">4321 Margery Dr &bull; Fremont, CA 94538</span></a>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"container content-section\">\n" +
    "		<div class=\"contact-section\">\n" +
    "			<ul class=\"list-contact list-unstyled\">\n" +
    "				<li>\n" +
    "					<a href=\"tel://1-312-380-5256\" title=\"Call Me\">\n" +
    "						<span class=\"content\">\n" +
    "							<p class=\"title\">Phone</p>\n" +
    "							<p>312-380-5256</p>\n" +
    "						</span>\n" +
    "						<span class=\"icon qp-phone qp-2x\"></span>\n" +
    "					</a>\n" +
    "				</li>\n" +
    "\n" +
    "				<li>\n" +
    "					<a href=\"mailto:thienpham.us@gmail.com\" title=\"Email Me\">\n" +
    "						<span class=\"content\">\n" +
    "							<p class=\"title\">Email</p>\n" +
    "							<p>thienpham.us@gmail.com</p>\n" +
    "						</span>\n" +
    "						<span class=\"icon qp-mail qp-2x\"></span>\n" +
    "					</a>\n" +
    "				</li>\n" +
    "				<li>\n" +
    "					<a href=\"https://docs.google.com/file/d/0B0qdt7xwL6A8eVhrcEprQXdzTGc/edit?usp=sharing\" title=\"Download My Resume\" target=\"_blank\">\n" +
    "						<span class=\"icon qp-download qp-2x\"></span>\n" +
    "					</a>\n" +
    "				</li>\n" +
    "			</ul>\n" +
    "		</div>\n" +
    "		<div class=\"copy-section\">\n" +
    "			<h4 id=\"objective\">Objective</h4>\n" +
    "			<p>I just relocated to the Bay Area from Chicago and currently seeking a challenging position in web/mobile development environment utilizing my skills in web, graphic, and multimedia design.</p>\n" +
    "		</div>\n" +
    "		\n" +
    "		<div class=\"copy-section\">\n" +
    "			<h4 id=\"summary\">Summary</h4>\n" +
    "			<ul>\n" +
    "				<li>10 years of experience working with Fortune 500 companies and small businesses.</li>\n" +
    "				<li>Experience working in team environments with marketing managers, developers, ux architects, content writers, project managers, business analysts, and other designers.</li>\n" +
    "				<li>Worked on web projects building sites using new technologies such as HTML5, CSS3, and Jquery. Additional experience in Responsive Design, Front-end Development and frameworks such as Angular JS and Twitter Bootstrap.</li>\n" +
    "				<li>A passion for ux, visual design, web technologies and an entrepreneur attitude to getting things done.</li>\n" +
    "			</ul>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"copy-section\">\n" +
    "			<h4 id=\"skills\">Skills</h4>\n" +
    "			<ul class=\"list-skills\">\n" +
    "				<li>HTML5</li>\n" +
    "				<li>CSS3</li>\n" +
    "				<li>Responsive Design</li>\n" +
    "				<li>UX</li>\n" +
    "				<li>Visual Design</li>\n" +
    "				<li>Javascript</li>\n" +
    "				\n" +
    "				<li>Angular JS</li>\n" +
    "				\n" +
    "				<li>Front-end Dev</li>\n" +
    "				\n" +
    "				<li>Wireframing</li>\n" +
    "				<li>HTML Email</li>\n" +
    "				<li>Photoshop</li>\n" +
    "				<li>Illustrator</li>\n" +
    "			</ul>\n" +
    "		</div>\n" +
    "		\n" +
    "		<div class=\"copy-section\">\n" +
    "			<h4 id=\"experience\">Experience</h4>\n" +
    "			<div class=\"experience-section\">\n" +
    "				<h5>Allstate Financial</h5>\n" +
    "				<ul class=\"list-exp-title list-unstyled\">\n" +
    "					<li>Multimedia Designer</li>\n" +
    "					<li>Chicago, IL</li>\n" +
    "					<li>Sep 2010&ndash;Apr 2013</li>\n" +
    "				</ul>\n" +
    "				<ul>\n" +
    "					<li>Work on a variety of agent and consumer facing projects that include web applications, microsites, flash demos, html emails, banners and print materials.</li>\n" +
    "					<li>Provide visual design and html/css support as part of a cross-functional team creating an online web application for selling life insurance.</li>\n" +
    "					<li>Design and coded various marketing related websites and landing pages implementing responsive design, crossbrowser compatibility/testing and Google Analytics.</li>\n" +
    "					<li>Design and concept various flash demos using Actionscript 3.</li>\n" +
    "					<li>Design, create and test HTML emails for various consumer based campaigns.</li>\n" +
    "					<li>Execute multiple projects on time while managing work load, meeting critical deadlines and milestones.</li>\n" +
    "				</ul>\n" +
    "			</div>\n" +
    "			\n" +
    "			<div class=\"experience-section\">\n" +
    "				<h5>Independent Consultant</h5>\n" +
    "				<ul class=\"list-exp-title list-unstyled\">\n" +
    "					<li>Multimedia Designer</li>\n" +
    "					<li>Chicago, IL</li>\n" +
    "					<li>Nov 2007&ndash;Sep 2010</li>\n" +
    "				</ul>\n" +
    "				<ul>\n" +
    "					<li>Produced various communication projects that include internal communication, marketing material, sales collateral, and web material for large corporations and independent clients.</li>\n" +
    "					<li>Designed a variety of B2C print, marketing material, collateral and presentations for Harris Private Bank.</li>\n" +
    "					<li>Worked with Harris marketing managers, creating online banners and materials for web.</li>\n" +
    "					<li>Worked with marketing managers at Deloitte to design and layout brochures and communication collateral.</li>\n" +
    "				</ul>\n" +
    "			</div>\n" +
    "\n" +
    "			<div class=\"experience-section\">\n" +
    "				<h5>Blue Cross Blue Shield</h5>\n" +
    "				<ul class=\"list-exp-title list-unstyled\">\n" +
    "					<li>Visual Communications Designer</li>\n" +
    "					<li>Chicago, IL</li>\n" +
    "					<li>Mar 2006&ndash;Oct 2007</li>\n" +
    "				</ul>\n" +
    "				<ul>\n" +
    "					<li>Responsible for internal communication material and presentations for executive level meetings.</li>\n" +
    "					<li>Met with senior level management to assist in creating illustrations to visualize business and IT concepts for Information Security and Risk Management.</li>\n" +
    "					<li>Analyzed content from word documents, handwritten notes, diagrams, drawings and ideas to create presentation content for the Director of Information Security.</li>\n" +
    "				</ul>\n" +
    "			</div>\n" +
    "	\n" +
    "			<div class=\"experience-section\">\n" +
    "				<h5>Raisenheadz Creative</h5>\n" +
    "				<ul class=\"list-exp-title list-unstyled\">\n" +
    "					<li>Multimedia Production Artist</li>\n" +
    "					<li>Chicago, IL</li>\n" +
    "					<li>Nov 2003&ndash;Nov 2005</li>\n" +
    "				</ul>\n" +
    "				<ul>\n" +
    "					<li>Worked on communication projects that included print materials and video production.</li>\n" +
    "					<li>Responsible for design, layout and typesetting of direct mail brochures for prospective customers.</li>\n" +
    "					<li>Worked on both production and post-production of video and DVD projects.</li>\n" +
    "				</ul>\n" +
    "			</div>\n" +
    "			\n" +
    "		</div>\n" +
    "			\n" +
    "		<div class=\"copy-section\">\n" +
    "			<h4 id=\"education\">Education</h4>\n" +
    "			<h5>University of Wisconsin</h5>\n" +
    "			<small>BA Media Communications</small>\n" +
    "			<small>Madison, WI</small>\n" +
    "			<small>May 2002</small>\n" +
    "\n" +
    "			<h5>Awards & Interests</h5>\n" +
    "			<ul>\n" +
    "				<li>Powers-Knapp Scholar 1997-2002</li>\n" +
    "				<li>MU National Scholarship 1997</li>\n" +
    "				<li>Tennis, Poker, Certified Tech Geek, Apple and Android user <3</li>\n" +
    "			</ul>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("swipe/swipe.detail.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("swipe/swipe.detail.tpl.html",
    "<div class=\"project\">\n" +
    "	<div class=\"container\">\n" +
    "		<nav class=\"back\">\n" +
    "			<a href=\"/projects\" title=\"Go Back\"><span class=\"qp-back qp-2x\"></span></a>\n" +
    "		</nav>\n" +
    "	</div>\n" +
    "\n" +
    "	<ul rn-carousel rn-carousel-indicator rn-carousel-control>\n" +
    "		<li ng-repeat=\"image in project.images\" >\n" +
    "			<div class=\"defer-image image-ratio:4x3 is-loading\">\n" +
    "				<img ng-src=\"assets/img/{{image}}.jpg\" imgload>\n" +
    "			</div>\n" +
    "		</li>\n" +
    "	</ul>\n" +
    "\n" +
    "	<div class=\"container content-section\">\n" +
    "		<nav class=\"more\">\n" +
    "			<a ng-href=\"projects/{{project.$id}}/large\" class=\"\" ng-hide=\"siteLink\" title=\"View Larger\"><i class=\"qp-expand qp-2x\"></i></a>\n" +
    "			<a ng-href=\"{{project.url}}\" class=\"\" ng-show=\"siteLink\" title=\"View Site\" target=\"_blank\"><i class=\"qp-open qp-2x\"></i></a>\n" +
    "		</nav>\n" +
    "		<h4>{{project.title}}</h4>\n" +
    "		<h5>{{project.subtitle}}</h5>\n" +
    "		<p>{{project.desc}}</p>\n" +
    "	</div>\n" +
    "	\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("swipe/swipe.large.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("swipe/swipe.large.tpl.html",
    "<div class=\"project large\">\n" +
    "	<div class=\"container\">\n" +
    "		<nav class=\"back\">\n" +
    "			<a href=\"/projects/{{project.$id}}\" title=\"Go Back\"><span class=\"qp-back qp-2x\"></span></a>\n" +
    "		</nav>\n" +
    "	</div>\n" +
    "	<ul rn-carousel rn-carousel-indicator rn-carousel-control>\n" +
    "		<li ng-repeat=\"image in project.largeImages\" >\n" +
    "			<div class=\"defer-image image-ratio:3x4 is-loading\">\n" +
    "				<img ng-src=\"assets/img/{{image}}.jpg\" imgload>\n" +
    "			</div>\n" +
    "		</li>\n" +
    "	</ul>\n" +
    "</div>");
}]);

angular.module("swipe/swipe.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("swipe/swipe.tpl.html",
    "<!-- <div class=\"container\">\n" +
    "	<ul class=\"list-projects list-unstyled\">\n" +
    "		<li id=\"project{{project.$id}}\" class=\"list-projects-item\" ng-repeat=\"project in projects | orderByPriority\">\n" +
    "			<a href=\"projects/{{project.$id}}\">\n" +
    "			<div class=\"defer-image image-ratio:4x3 is-loading\">\n" +
    "				<img ng-src=\"assets/img/{{project.images[0]}}.jpg\" imgload>\n" +
    "			</div>\n" +
    "			</a>\n" +
    "		</li>\n" +
    "	</ul>\n" +
    "</div> -->\n" +
    "\n" +
    "<swipe-cards >\n" +
    "  <!-- <swipe-card on-swipe=\"cardSwiped()\" id=\"start-card\">\n" +
    "    Swipe down for a new card\n" +
    "  </swipe-card> -->\n" +
    "  <swipe-card ng-repeat=\"project in cards\" on-destroy=\"cardDestroyed($index)\" on-swipe=\"cardSwiped($index)\">\n" +
    "    <div ng-controller=\"CardCtrl\">\n" +
    "      <div class=\"image\">\n" +
    "        <div class=\"title\">\n" +
    "          <h4>{{project.title}}</h4>\n" +
    "          <h5>{{project.subtitle}}</h5>\n" +
    "          <p>{{project.desc}}</p>\n" +
    "        </div>\n" +
    "        <img ng-src=\"assets/img/{{project.images[0]}}.jpg\">\n" +
    "        <div class=\"button-bar\">\n" +
    "          <a class=\"button button-clear button-positive\" ng-click=\"goAway()\">Answer</a>\n" +
    "          <a class=\"button button-clear button-positive\" ng-click=\"goAway()\">Decline</a>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </swipe-card>\n" +
    "</swipe-cards>\n" +
    "\n" +
    "<!-- <footer class=\"footer\">\n" +
    "	<div class=\"container\">\n" +
    "		<p>\n" +
    "		This site was designed using \n" +
    "		<a href=\"http://www.angularjs.org\">AngularJS</a>,\n" +
    "		<a href=\"http://github.com/joshdmiller/ng-boilerplate\">ng-boilerplate</a>,\n" +
    "		<a href=\"https://github.com/angular-ui/ui-router\">ui-router</a>,\n" +
    "		<a href=\"http://angular-ui.github.io/bootstrap/\">ui-bootstrap</a>,\n" +
    "		and \n" +
    "		<a href=\"http://icomoon.io/\">IcoMoon</a>.         \n" +
    "		</p>\n" +
    "		\n" +
    "		<p>(c) 2013 Thien Pham</p>\n" +
    "		<ul class=\"social\">\n" +
    "			<li><a href=\"http://plus.google.com/102157534092095391789/about\" target=\"_blank\" title=\"Google Plus\"><i class=\"qp-google-plus qp-lg\"></i></a></li><li><a href=\"http://www.facebook.com/thienpham.us\" target=\"_blank\" title=\"Facebook\"><i class=\"qp-facebook qp-lg\"></i></a></li><li><a href=\"http://www.linkedin.com/in/thienpham\" target=\"_blank\"><i class=\"qp-linkedin qp-lg\" title=\"Linkedin\"></i></a></li>\n" +
    "		</ul>\n" +
    "	</div>\n" +
    "</footer> -->");
}]);
