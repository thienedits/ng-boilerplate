angular.module('templates-app', ['about/about.tpl.html', 'contacts/contacts.detail.tpl.html', 'contacts/contacts.edit.tpl.html', 'contacts/contacts.tpl.html', 'home/home.tpl.html', 'projects/projects.detail.tpl.html', 'projects/projects.large.tpl.html', 'projects/projects.tpl.html', 'resume/resume.tpl.html', 'swipe/swipe.detail.tpl.html', 'swipe/swipe.large.tpl.html', 'swipe/swipe.tpl.html']);

angular.module("about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/about.tpl.html",
    "<div class=\"about\">\n" +
    "	<header class=\"app-bar\" ng-class=\"{dark: scroll > 50}\" keylines=\"7\">\n" +
    "		<div class=\"container\" layout=\"horizontal\" layout-align=\"space-between center\">\n" +
    "			<h4 class=\"text-title color-accent\" flex>About Me</h4>\n" +
    "			<span role=\"button\" class=\"icon-btn icon-menu pull-right\" ng-click=\"openMenu()\" title=\"Menu\" aria-label=\"Menu\" icon-btn>\n" +
    "		  	<span class=\"ripple\"></span>\n" +
    "		  	<svg><use xlink:href=\"assets/qpham-portfolio.svg#icon-menu\"></use></svg>\n" +
    "		  </span>\n" +
    "		 </div>\n" +
    "	</header>\n" +
    "	\n" +
    "		<div class=\"profile-section\">\n" +
    "			<div class=\"container\">\n" +
    "				<a href=\"https://plus.google.com/u/0/102157534092095391789/about\" class=\"profile-img\" target=\"_blank\"></a>\n" +
    "				<h5 class=\"text-center\">Thien Pham</h5>\n" +
    "				<h6 class=\"text-center\">UX Web Designer at Simpson Strong-Tie</h6>\n" +
    "				<h6 class=\"text-center\">Attended University of Wisconsin-Madison</h6>\n" +
    "				<h6 class=\"text-center\">Lives in Fremont, CA</h6>\n" +
    "				<ul class=\"social\">\n" +
    "					<li><a href=\"http://plus.google.com/102157534092095391789/about\" target=\"_blank\" title=\"Google Plus\"><i class=\"qp-google-plus qp-lg\"></i></a></li><li><a href=\"http://www.facebook.com/thienpham.us\" target=\"_blank\" title=\"Facebook\"><i class=\"qp-facebook qp-lg\"></i></a></li><li><a href=\"http://www.linkedin.com/in/thienpham\" target=\"_blank\"><i class=\"qp-linkedin qp-lg\" title=\"Linkedin\"></i></a></li>\n" +
    "				</ul>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"container\">\n" +
    "			<div class=\"about-section\">\n" +
    "				<h6 class=\"color-accent text-menu no-margin\" keylines=\"6\" layout=\"vertical\" layout-align=\"center\">About Me</h6>\n" +
    "				<p>A recent bay area transplant originally from chicago interested in front-end web development and visual/UI design. I enjoy making clean, simple, engaging designs.</p>\n" +
    "\n" +
    "				<p>I'm passionate about designing websites and web applications using new technologies such as HTML5, CSS3 and Javascript. I really love front-end visual design and creating great user experiences.</p>\n" +
    "				<hr>\n" +
    "			</div>\n" +
    "			<div class=\"contact-section\">\n" +
    "				<h6 class=\"color-accent text-menu no-margin\" keylines=\"6\" layout=\"vertical\" layout-align=\"center\">Contact Info</h6>\n" +
    "				<ul class=\"list-contact list-unstyled\">\n" +
    "					<li layout=\"vertical\" layout-align=\"center\" keylines=\"9\">\n" +
    "						<a href=\"tel://1-312-380-5256\" layout=\"horizontal\" layout-align=\"space-between center\">\n" +
    "							<span class=\"content\">\n" +
    "								<p class=\"title text-secondary\">Phone</p>\n" +
    "								<p>312-380-5256</p>\n" +
    "							</span>\n" +
    "							<span class=\"icon-btn pull-right\">\n" +
    "								<span class=\"ripple\"></span>\n" +
    "								<svg><use xlink:href=\"assets/qpham-portfolio.svg#icon-call\"></use></svg>\n" +
    "							</span>\n" +
    "						</a>\n" +
    "					</li>\n" +
    "\n" +
    "					<li layout=\"vertical\" layout-align=\"center\" keylines=\"9\"> \n" +
    "						<a href=\"mailto:thienpham.us@gmail.com\" layout=\"horizontal\" layout-align=\"space-between center\">\n" +
    "							<span class=\"content\">\n" +
    "								<p class=\"title text-secondary\">Email</p>\n" +
    "								<p>thienpham.us@gmail.com</p>\n" +
    "							</span>\n" +
    "							<span class=\"icon-btn pull-right\">\n" +
    "								<span class=\"ripple\"></span>\n" +
    "								<svg><use xlink:href=\"assets/qpham-portfolio.svg#icon-mail\"></use></svg>\n" +
    "							</span>\n" +
    "						</a>\n" +
    "					</li>\n" +
    "				</ul>\n" +
    "				<hr>\n" +
    "			</div>\n" +
    "			<div class=\"resume-section\">\n" +
    "				<a href=\"https://docs.google.com/file/d/0B0qdt7xwL6A8eVhrcEprQXdzTGc/edit?usp=sharing\" class=\"icon-btn pull-right\" title=\"Download My Resume\" icon-btn delay-click>\n" +
    "				   <span class=\"ripple\"></span>\n" +
    "				   <svg><use xlink:href=\"assets/qpham-portfolio.svg#icon-file-download\"></use></svg>\n" +
    "				</a>\n" +
    "				<h6 class=\"color-accent text-menu no-margin\" keylines=\"6\" layout=\"vertical\" layout-align=\"center\">Resume</h6>\n" +
    "					<div class=\"copy-section\">\n" +
    "						<h5 id=\"objective\">Objective</h5>\n" +
    "						<p>I am currently seeking a challenging position in a web/mobile environment utilizing my experience in visual design and\n" +
    "							front-end web development.</p>\n" +
    "					</div>\n" +
    "\n" +
    "					<div class=\"copy-section\">\n" +
    "						<h5 id=\"summary\">Summary</h5>\n" +
    "						<ul>\n" +
    "							<li>10 years of experience working with Fortune 500 companies and small businesses.</li>\n" +
    "							<li>Experience working in team environments with marketing managers, developers, ux architects, content writers, project managers, business analysts, and other designers.</li>\n" +
    "							<li>Worked on web projects building sites using new technologies such as HTML5, CSS3, and Jquery. Additional experience in Responsive Design, Front-end Development and frameworks such as Angular JS and Twitter Bootstrap.</li>\n" +
    "							<li>A passion for ux, visual design, web technologies and an entrepreneur attitude to getting things done.</li>\n" +
    "						</ul>\n" +
    "					</div>\n" +
    "\n" +
    "					<div class=\"copy-section\">\n" +
    "						<h5 id=\"skills\">Skills</h5>\n" +
    "						<ul class=\"list-skills\">\n" +
    "							<li>Visual Design</li> \n" +
    "							<li>Front-End Development</li> \n" +
    "							<li>Web Applications</li>\n" +
    "							<li>Responsive Design</li> \n" +
    "							<li>HTML5</li> \n" +
    "							<li>CSS3</li>\n" +
    "							<li>AngularJS</li>\n" +
    "							<li>Javascript</li>\n" +
    "							<li>JQuery</li>\n" +
    "							<li>Twitter Bootstrap</li>\n" +
    "							<li>HTML Email</li>\n" +
    "							<li>Google Analytics</li>\n" +
    "							<li>Graphic Design</li>\n" +
    "							<li>Photoshop</li> \n" +
    "							<li>Illustrator</li>\n" +
    "							<li>InDesign</li> \n" +
    "							<li>Actionscript 3</li> \n" +
    "						</ul>\n" +
    "					</div>\n" +
    "\n" +
    "					<div class=\"copy-section\">\n" +
    "						<h5 id=\"experience\">Experience</h5>\n" +
    "						<div class=\"experience-section\">\n" +
    "							<h6 class=\"\">Simpson Strong-Tie <span>/ Front-End Developer</span></h6>\n" +
    "							<ul class=\"list-exp-title list-unstyled\">\n" +
    "								<li>Aug 2013&ndash;Aug 2014</li>\n" +
    "								<li>Pleasanton, CA</li>\n" +
    "							</ul>\n" +
    "							<ul>\n" +
    "								<li>Responsible for making updates and maintaining current consumer facing website <a href=\"http://www.strongtie.com\" target=\"_blank\">www.strongtie.com</a>.</li>\n" +
    "\n" +
    "								<li>Design photoshop mockups and create HTML5/CSS3/visual assets for retailer locator.</li>\n" +
    "\n" +
    "								<li>Design and create visual assets for Literature Library Android Application.</li>\n" +
    "\n" +
    "								<li>Design and build other various marketing related HTML5 websites.</li>\n" +
    "\n" +
    "								<li>Create icons for CFS Designer Windows based application.</li>\n" +
    "\n" +
    "								<li>Maintain various monthly email newsletters.</li>\n" +
    "							</ul>\n" +
    "						</div>\n" +
    "\n" +
    "						<div class=\"experience-section\">\n" +
    "							<h6 class=\"\">Allstate Financial <span>/ Senior Web Designer</span></h6>\n" +
    "							<ul class=\"list-exp-title list-unstyled\">\n" +
    "								<li>Sep 2010&ndash;Apr 2013</li>\n" +
    "								<li>Chicago, IL</li>\n" +
    "							</ul>\n" +
    "							<ul>\n" +
    "								<li>Worked on a variety of agent and consumer facing projects that include web applications, microsites, flash demos, html emails, banners and print materials.</li>\n" +
    "								<li>Provided visual design and html/css support as part of a cross-functional team creating an online web application for selling life insurance.</li>\n" +
    "								<li>Designed and coded various marketing related websites and landing pages implementing responsive design, crossbrowser compatibility/testing and Google Analytics.</li>\n" +
    "								<li>Designed and concepted various flash demos using Actionscript 3.</li>\n" +
    "								<li>Designed, created and tested HTML emails for various consumer based campaigns.</li>\n" +
    "								<li>Executed multiple projects on time while managing work load, meeting critical deadlines and milestones.</li>\n" +
    "							</ul>\n" +
    "						</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "							<div class=\"experience-section\">\n" +
    "								<h6 class=\"\">Harris Private Bank <span>/ Senior Graphic Designer</span></h6>\n" +
    "								<ul class=\"list-exp-title list-unstyled\">\n" +
    "									<li>Nov 2007&ndash;Sep 2010</li>\n" +
    "									<li>Chicago, IL</li>\n" +
    "								</ul>\n" +
    "								<ul>\n" +
    "									<li>Produced various communication projects that include internal communication, marketing material, sales collateral,\n" +
    "										and web related materials.</li>\n" +
    "									<li>Designed a variety of B2C print, marketing material, collateral and presentations for Harris Private Bank.</li>\n" +
    "									<li>Worked with Harris marketing managers, creating online banners and materials for web.</li>\n" +
    "									<li>Worked with marketing managers to design and layout brochures and communication collateral.</li>\n" +
    "								</ul>\n" +
    "							</div>\n" +
    "\n" +
    "							<div class=\"experience-section\">\n" +
    "								<h6 class=\"\">Blue Cross Blue Shield <span>/ Visual Designer</span></h6>\n" +
    "								<ul class=\"list-exp-title list-unstyled\">\n" +
    "									<li>Mar 2006&ndash;Oct 2007</li>\n" +
    "									<li>Chicago, IL</li>\n" +
    "								</ul>\n" +
    "								<ul>\n" +
    "									<li>Responsible for internal communication material and presentations for executive level meetings.</li>\n" +
    "									<li>Met with senior level management to assist in creating illustrations to visualize business and IT concepts for Information Security and Risk Management.</li>\n" +
    "									<li>Analyzed content from word documents, handwritten notes, diagrams, drawings and ideas to create presentation content for the Director of Information Security.</li>\n" +
    "								</ul>\n" +
    "							</div>\n" +
    "\n" +
    "							<div class=\"experience-section\">\n" +
    "								<h6 class=\"\">Raisenheadz Creative <span>/ Production Artist</span></h6>\n" +
    "								<ul class=\"list-exp-title list-unstyled\">\n" +
    "									<li>Nov 2003&ndash;Nov 2005</li>\n" +
    "									<li>Chicago, IL</li>\n" +
    "								</ul>\n" +
    "								<ul>\n" +
    "									<li>Worked on communication projects that included print materials and video production.</li>\n" +
    "									<li>Responsible for design, layout and typesetting of direct mail brochures for prospective customers.</li>\n" +
    "									<li>Worked on both production and post-production of video and DVD projects.</li>\n" +
    "								</ul>\n" +
    "							</div>\n" +
    "\n" +
    "							</div>\n" +
    "\n" +
    "							<div class=\"education-section\">\n" +
    "								<h5 id=\"education\">Education</h5>\n" +
    "								<div>\n" +
    "									<h6 class=\"\">University of Wisconsin <span>/ BA Communications</span></h6>\n" +
    "									<ul class=\"list-exp-title list-unstyled\">\n" +
    "										<li>May 2002</li>\n" +
    "										<li>Madison, WI</li>\n" +
    "									</ul>\n" +
    "								</div>\n" +
    "								<div>\n" +
    "									<h6 class=\"\">Awards & Interests</h5>\n" +
    "									<ul>\n" +
    "										<li>Powers-Knapp Scholar 1997-2002</li>\n" +
    "										<li>MU National Scholarship 1997</li>\n" +
    "										<li>Tennis, Poker, Certified Tech Geek, Apple and Android user <3</li>\n" +
    "									</ul>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("contacts/contacts.detail.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("contacts/contacts.detail.tpl.html",
    "<header class=\"app-bar\" ng-class=\"{dark: scroll > 50}\" keylines=\"7\">\n" +
    "  <div class=\"container\" layout=\"horizontal\" layout-align=\"space-between center\">\n" +
    "    <a href=\"/contacts\" class=\"icon-btn pull-left\" title=\"Go Back\" icon-btn delay-click>\n" +
    "      <span class=\"ripple\"></span>\n" +
    "      <svg><use xlink:href=\"assets/qpham-portfolio.svg#icon-arrow-back\"></use></svg>\n" +
    "    </a>\n" +
    "    <a ng-href=\"/contacts/{{contactId}}/edit\" class=\"icon-btn pull-right edit-save\" title=\"Edit Contact\" icon-btn delay-click>\n" +
    "      <span class=\"ripple\"></span>\n" +
    "      <svg><use xlink:href=\"assets/qpham-portfolio.svg#icon-create\"></use></svg>\n" +
    "    </a>\n" +
    "  </div>\n" +
    "</header>\n" +
    "<div class=\"container\" style=\"padding-top:56px;\">\n" +
    "  <!-- <nav layout=\"horizontal\" layout-align=\"space-between center\" keylines=\"7\">\n" +
    "    <a href=\"/contacts\" title=\"Go Back\"><span class=\"qp-back qp-2x\"></span></a>\n" +
    "    <a ui-sref=\"contacts.edit({contactId:contactId})\"  class=\"edit-save\">Edit</a>\n" +
    "  </nav> -->\n" +
    "  \n" +
    "  <div layout=\"horizontal\" layout-align=\"start center\">\n" +
    "    <div class=\"tile\">\n" +
    "      <span class=\"profile-img\"></span>\n" +
    "    </div>\n" +
    "    <h5>{{contact.name}}</h5>\n" +
    "  </div>\n" +
    "  <ul class=\"list-contact list-unstyled\">\n" +
    "    <li>\n" +
    "      <a href=\"tel://{{contact.phone}}\" layout=\"horizontal\" layout-align=\"space-between center\">\n" +
    "        <span class=\"content\">\n" +
    "          <p class=\"title\">Phone</p>\n" +
    "          <p>{{contact.phone}}</p>\n" +
    "        </span>\n" +
    "        <span class=\"icon-btn pull-right\">\n" +
    "          <span class=\"ripple\"></span>\n" +
    "          <svg><use xlink:href=\"assets/qpham-portfolio.svg#icon-call\"></use></svg>\n" +
    "        </span>\n" +
    "      </a>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "      <a href=\"mailto:{{contact.email}}\" layout=\"horizontal\" layout-align=\"space-between center\">\n" +
    "        <span class=\"content\">\n" +
    "          <p class=\"title\">Email</p>\n" +
    "          <p>{{contact.email}}</p>\n" +
    "        </span>\n" +
    "        <span class=\"icon-btn pull-right\">\n" +
    "          <span class=\"ripple\"></span>\n" +
    "          <svg><use xlink:href=\"assets/qpham-portfolio.svg#icon-mail\"></use></svg>\n" +
    "        </span>\n" +
    "      </a>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "      <a href=\"http://maps.google.com/?q={{contact.address}}, {{contact.city}}, {{contact.state}}, {{contact.zip}}\" layout=\"horizontal\" layout-align=\"space-between center\">\n" +
    "        <span class=\"content\">\n" +
    "          <p class=\"title\">Address</p>\n" +
    "          <p>{{contact.address}}</p>\n" +
    "          <p>{{contact.city}}, {{contact.state}} {{contact.zip}}</p>\n" +
    "        </span>\n" +
    "        <span class=\"icon-btn pull-right\">\n" +
    "          <span class=\"ripple\"></span>\n" +
    "          <svg><use xlink:href=\"assets/qpham-portfolio.svg#icon-place\"></use></svg>\n" +
    "        </span>\n" +
    "      </a>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "</div>");
}]);

angular.module("contacts/contacts.edit.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("contacts/contacts.edit.tpl.html",
    "<header class=\"app-bar\" ng-class=\"{dark: scroll > 50}\" keylines=\"7\">\n" +
    "  <div class=\"container\" layout=\"horizontal\" layout-align=\"end center\">\n" +
    "    <a ng-click=\"saveContact()\" class=\"icon-btn pull-right edit-save\" title=\"Edit Contact\" icon-btn>\n" +
    "      <span class=\"ripple\"></span>\n" +
    "      <svg><use xlink:href=\"assets/qpham-portfolio.svg#icon-check\"></use></svg>\n" +
    "    </a>\n" +
    "  </div>\n" +
    "</header>\n" +
    "\n" +
    "<div class=\"container\" style=\"padding-top:56px;\">\n" +
    "  <form >\n" +
    "    <div layout=\"horizontal\" layout-align=\"start center\">\n" +
    "      <div class=\"tile\">\n" +
    "        <span class=\"icon-btn pull-left\">\n" +
    "          <span class=\"ripple\"></span>\n" +
    "          <svg><use xlink:href=\"assets/qpham-portfolio.svg#icon-place\"></use></svg>\n" +
    "        </span>\n" +
    "      </div>\n" +
    "      \n" +
    "      <div flex>\n" +
    "        <material-input-group class=\"color-accent\" layout=\"vertical\"> \n" +
    "          <label class=\"title\" for=\"name\">Name</label>\n" +
    "          <material-input ng-model=\"contact.name\" type=\"text\" class=\"\" id=\"name\">\n" +
    "        </material-input-group>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div layout=\"horizontal\" layout-align=\"start center\">\n" +
    "      <div class=\"tile\">\n" +
    "        <span class=\"icon-btn pull-left\">\n" +
    "          <span class=\"ripple\"></span>\n" +
    "          <svg><use xlink:href=\"assets/qpham-portfolio.svg#icon-call\"></use></svg>\n" +
    "        </span>\n" +
    "      </div>\n" +
    "      <div flex>\n" +
    "        <material-input-group class=\"color-accent\" layout=\"vertical\"> \n" +
    "          <label class=\"title\" for=\"phone\">Phone</label>\n" +
    "          <material-input ng-model=\"contact.phone\" type=\"text\" class=\"\" id=\"phone\">\n" +
    "        </material-input-group>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div layout=\"horizontal\" layout-align=\"start center\">\n" +
    "      <div class=\"tile\">\n" +
    "        <span class=\"icon-btn pull-left\">\n" +
    "          <span class=\"ripple\"></span>\n" +
    "          <svg><use xlink:href=\"assets/qpham-portfolio.svg#icon-mail\"></use></svg>\n" +
    "        </span>\n" +
    "      </div>\n" +
    "      <div flex>\n" +
    "        <material-input-group class=\"color-accent\" layout=\"vertical\"> \n" +
    "          <label for=\"email\" class=\"title\" flex>Email</label> \n" +
    "          <material-input id=\"email\" type=\"text\" ng-model=\"contact.email\" flex> \n" +
    "        </material-input-group>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "      \n" +
    "    <div layout=\"horizontal\" layout-align=\"start center\">\n" +
    "      <div class=\"tile\">\n" +
    "        <span class=\"icon-btn pull-left\">\n" +
    "          <span class=\"ripple\"></span>\n" +
    "          <svg><use xlink:href=\"assets/qpham-portfolio.svg#icon-place\"></use></svg>\n" +
    "        </span>\n" +
    "      </div>\n" +
    "      <div flex>\n" +
    "        <material-input-group class=\"color-accent\" layout=\"vertical\"> \n" +
    "          <label class=\"title\" for=\"address\">Address</label>\n" +
    "          <material-input ng-model=\"contact.address\" type=\"text\" class=\"address\" ng-focus=\"geolocate()\" id=\"address\" autofill required>\n" +
    "        </material-input-group>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div layout=\"horizontal\" layout-align=\"start center\">\n" +
    "      <div class=\"tile\">\n" +
    "      </div>\n" +
    "      <div flex>\n" +
    "        <material-input-group class=\"color-accent\" layout=\"vertical\"> \n" +
    "          <label class=\"title\" for=\"locality\">City</label>\n" +
    "          <material-input ng-model=\"contact.city\" type=\"text\" class=\"\" id=\"locality\" required>\n" +
    "        </material-input-group>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div layout=\"horizontal\" layout-align=\"start center\">\n" +
    "      <div class=\"tile\">\n" +
    "      </div>\n" +
    "      <div flex=\"50\" padding-right>\n" +
    "        <!-- <input ng-model=\"contact.state\" type=\"text\" class=\"form-control\" id=\"state\" placeholder=\"state\"> -->\n" +
    "        <select ng-model=\"contact.state\" aria-label=\"State\" ng-options=\"state.name as state.name for state in states\" class=\"form-control\" id=\"administrative_area_level_1\" required>\n" +
    "        </select>\n" +
    "      </div>\n" +
    "      <div flex>\n" +
    "        <material-input-group class=\"color-accent\" layout=\"vertical\" flex> \n" +
    "          <label class=\"title\" for=\"postal_code\">Zip Code</label>\n" +
    "          <material-input ng-model=\"contact.zip\" type=\"text\" class=\"\" id=\"postal_code\" required>\n" +
    "        </material-input-group>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("contacts/contacts.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("contacts/contacts.tpl.html",
    "<header class=\"app-bar\" ng-class=\"{dark: scroll > 50}\">\n" +
    "  <div class=\"container\" layout=\"horizontal\" layout-align=\"space-between center\" keylines=\"7\">\n" +
    "    <div id=\"search\" class=\"search\" flex layout=\"horizontal\" layout-align=\"start\">\n" +
    "      <span role=\"button\" class=\"icon-btn icon-search pull-left\" ng-hide=\"searchOpen\" ng-click=\"searchOpen = !searchOpen\" title=\"Search\" aria-label=\"Search\" icon-btn>\n" +
    "        <span class=\"ripple\"></span>\n" +
    "        <svg><use xlink:href=\"assets/qpham-portfolio.svg#icon-search\"></use></svg>\n" +
    "      </span>\n" +
    "      <div layout=\"horizontal\" layout-align=\"space-between center\" ng-show=\"searchOpen\" flex>\n" +
    "        <span role=\"button\" class=\"icon-btn icon-search pull-left\" ng-click=\"searchOpen = !searchOpen\" title=\"Close Search\" aria-label=\"Close Search\" icon-btn>\n" +
    "          <span class=\"ripple\"></span>\n" +
    "          <svg><use xlink:href=\"assets/qpham-portfolio.svg#icon-close\"></use></svg>\n" +
    "        </span>\n" +
    "        <input id=\"search\" type=\"text\" class=\"form-control\"  ng-model=\"search\" placeholder=\"Search\" search focus-me=\"searchOpen\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <span role=\"button\" class=\"icon-btn icon-menu pull-right\" ng-click=\"openMenu()\" title=\"Menu\" aria-label=\"Menu\" icon-btn>\n" +
    "      <span class=\"ripple\"></span>\n" +
    "      <svg><use xlink:href=\"assets/qpham-portfolio.svg#icon-menu\"></use></svg>\n" +
    "    </span>\n" +
    "  </div>\n" +
    "</header>\n" +
    "<div class=\"container main\">\n" +
    "  <div class=\"\" ng-swipe-left=\"setPage(page + 1)\" ng-swipe-right=\"setPage(page - 1)\">\n" +
    "    <div class=\"subhead\" layout=\"horizontal\" layout-align=\"space-between center\" keylines=\"6\">\n" +
    "      <h5 class=\"text-body2\" flex ng-hide=\"contactsCount == 0\">{{contactsCount}} Contacts <!-- <span ng-show=\"search\">with \"{{search}}\"</span> --></h5>\n" +
    "      <h5 class=\"text-body2\" flex ng-hide=\"contactsCount == 0\" style=\"text-align:right;\">Page {{page}} of {{numPages}}</h5>\n" +
    "      <h5 class=\"text-body2\" flex ng-show=\"contactsCount == 0\">No Contacts Found</h5>\n" +
    "    </div>\n" +
    "    <div layout=\"horizontal\" layout-align=\"space-between center\" keylines=\"6\">\n" +
    "      <a href=\"\" ng-click=\"predicate = 'name'; reverse=!reverse\">Name <span class=\"qp-next\" ng-class=\"{'down-arr': reverse, 'up-arr': !reverse}\"></span></a><br>\n" +
    "    </div>\n" +
    "    <ul class=\"list-contacts list-group\">\n" +
    "      <li class=\"\" ng-click=\"$location.path('contacts/' + contact.$id)\" ng-repeat=\"contact in filtered | orderBy:predicate:reverse | startFrom:(page-1)*entryLimit | limitTo:entryLimit\" layout=\"horizontal\" layout-align=\"space-between center\" keylines=\"7\">\n" +
    "        <div class=\"tile\" layout=\"horizontal\" layout-align=\"start\"><span class=\"profile-img\"></span></div>\n" +
    "        <span flex>{{contact.name}}</span>\n" +
    "        <span class=\"qp-next\"></span>\n" +
    "      </li>\n" +
    "    </ul>\n" +
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
    "<header class=\"app-bar\" ng-class=\"{dark: scroll > 30}\" keylines=\"7\">\n" +
    "  <div class=\"container\" layout=\"horizontal\" layout-align=\"space-between center\">\n" +
    "    <a href=\"/projects\" class=\"icon-btn pull-left\" title=\"Go Back\" icon-btn delay-click>\n" +
    "      <span class=\"ripple\"></span>\n" +
    "      <svg><use xlink:href=\"assets/qpham-portfolio.svg#icon-arrow-back\"></use></svg>\n" +
    "    </a>\n" +
    "    <div class=\"more\">\n" +
    "      <a ng-href=\"/projects/{{project.$id}}/large\" class=\"icon-btn pull-right\" ng-hide=\"siteLink\" title=\"View Larger\" icon-btn delay-click>\n" +
    "        <span class=\"ripple\"></span>\n" +
    "        <svg><use xlink:href=\"assets/qpham-portfolio.svg#icon-fullscreen\"></use></svg>\n" +
    "      </a>\n" +
    "      <a ng-href=\"{{project.url}}\" class=\"icon-btn pull-right\" ng-show=\"siteLink\" title=\"View Site\" target=\"_blank\" icon-btn delay-click>\n" +
    "        <span class=\"ripple\"></span>\n" +
    "        <svg><use xlink:href=\"assets/qpham-portfolio.svg#icon-launch\"></use></svg>\n" +
    "      </a>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</header>\n" +
    "\n" +
    "<div class=\"container main\">\n" +
    "	<ion-slide-box on-slide-changed=\"slideChanged(index)\">\n" +
    "    <ion-slide ng-repeat=\"image in project.images\">\n" +
    "      <div class=\"defer-image image-ratio:4x3 is-loading\">\n" +
    "        <picture >\n" +
    "          <!--[if IE 9]><video style=\"display: none;\"><![endif]-->\n" +
    "          <source type=\"image/webp\" \n" +
    "          srcset=\"assets/img/{{image}}-720.webp 720w, assets/img/{{image}}-360.webp 360w\" \n" +
    "          sizes=\"(min-width: 992px) 960px, (min-width: 768px) 720px, 100vw\" />\n" +
    "          <source srcset=\"assets/img/{{image}}-720.jpg 720w, assets/img/{{image}}-360.jpg 360w\" \n" +
    "          sizes=\"(min-width: 992px) 960px, (min-width: 768px) 720px, 100vw\" />\n" +
    "          <!--[if IE 9]></video><![endif]-->\n" +
    "          <img class=\"\" src=\"assets/img/{{image}}-720.jpg\" alt=\"{{project.title}}\" imgload/>\n" +
    "        </picture>\n" +
    "			</div>\n" +
    "    </ion-slide>\n" +
    "  </ion-slide-box>\n" +
    "	<div class=\"slider-controls\">\n" +
    "    <span class=\"slider-control slider-control-prev icon-btn\" ng-click=\"prevSlide()\" ng-if=\"slideIndex > 0\" icon-btn>\n" +
    "      <span class=\"ripple\"></span>\n" +
    "      <svg><use xlink:href=\"assets/qpham-portfolio.svg#icon-chevron-left\"></use></svg>\n" +
    "    </span>\n" +
    "    <span class=\"slider-control slider-control-next icon-btn\" ng-click=\"nextSlide()\" ng-if=\"slideIndex != imgLength - 1\" icon-btn>\n" +
    "      <span class=\"ripple\"></span>\n" +
    "      <svg><use xlink:href=\"assets/qpham-portfolio.svg#icon-chevron-right\"></use></svg>\n" +
    "    </span>\n" +
    "  </div>\n" +
    "  <div class=\"copy\">\n" +
    "    <h5 class=\"color-accent\" ng-cloak>{{project.title}}</h5>\n" +
    "    <h6 class=\"text-secondary\" ng-cloak>{{project.subtitle}}</h6>\n" +
    "    <p class=\"text-subhead1\" ng-cloak>{{project.desc}}</p>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("projects/projects.large.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("projects/projects.large.tpl.html",
    "<header class=\"app-bar container\" layout=\"horizontal\" layout-align=\"end center\" keylines=\"7\">\n" +
    "  <a href=\"/projects/{{project.$id}}\" class=\"icon-btn pull-right\" title=\"Close\" icon-btn delay-click>\n" +
    "    <span class=\"ripple\"></span>\n" +
    "    <svg><use xlink:href=\"assets/qpham-portfolio.svg#icon-close\"></use></svg>\n" +
    "  </a>\n" +
    "</header>\n" +
    "\n" +
    "<div class=\"container main\">\n" +
    "	<ion-slide-box on-slide-changed=\"slideChanged(index)\" delegate-handle=\"large-slide\">\n" +
    "    <ion-slide ng-repeat=\"image in project.largeImages\">\n" +
    "      <div class=\"defer-image image-ratio:4x3 is-loading\">\n" +
    "				<picture >\n" +
    "          <!--[if IE 9]><video style=\"display: none;\"><![endif]-->\n" +
    "          <source type=\"image/webp\" \n" +
    "          srcset=\"assets/img/{{image}}-720.webp 720w, assets/img/{{image}}-360.webp 360w\" \n" +
    "          sizes=\"(min-width: 992px) 960px, (min-width: 768px) 720px, 100vw\" />\n" +
    "          <source srcset=\"assets/img/{{image}}-720.jpg 720w, assets/img/{{image}}-360.jpg 360w\" \n" +
    "          sizes=\"(min-width: 992px) 960px, (min-width: 768px) 720px, 100vw\" />\n" +
    "          <!--[if IE 9]></video><![endif]-->\n" +
    "          <img class=\"\" src=\"assets/img/{{image}}-720.jpg\" alt=\"{{project.title}}\" imgload/>\n" +
    "        </picture>\n" +
    "			</div>\n" +
    "    </ion-slide>\n" +
    "  </ion-slide-box>\n" +
    "  <div class=\"slider-controls\">\n" +
    "    <span class=\"slider-control slider-control-prev icon-btn\" ng-click=\"prevSlide()\" ng-if=\"slideIndex > 0\" icon-btn>\n" +
    "      <span class=\"ripple\"></span>\n" +
    "      <svg><use xlink:href=\"assets/qpham-portfolio.svg#icon-chevron-left\"></use></svg>\n" +
    "    </span>\n" +
    "    <span class=\"slider-control slider-control-next icon-btn\" ng-click=\"nextSlide()\" ng-if=\"slideIndex != imgLength - 1\" icon-btn>\n" +
    "      <span class=\"ripple\"></span>\n" +
    "      <svg><use xlink:href=\"assets/qpham-portfolio.svg#icon-chevron-right\"></use></svg>\n" +
    "    </span>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("projects/projects.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("projects/projects.tpl.html",
    "<header class=\"app-bar\" ng-class=\"{dark: scroll > 50}\"  keylines=\"7\" app-bar>\n" +
    "	<div class=\"container\" layout=\"horizontal\" layout-align=\"start center\">\n" +
    "		<h6 class=\"text-title color-accent\" flex>thienpham</h6>\n" +
    "	  <span role=\"button\" class=\"icon-btn icon-menu pull-right\" ng-click=\"openMenu()\" title=\"Menu\" aria-label=\"Menu\" icon-btn>\n" +
    "	  	<span class=\"ripple\"></span>\n" +
    "	  	<svg><use xlink:href=\"assets/qpham-portfolio.svg#icon-menu\"></use></svg>\n" +
    "	  </span>\n" +
    "	</div> \n" +
    "</header>\n" +
    "<div class=\"container main\">\n" +
    "	<!-- <figure>\n" +
    "		<img src=\"http://d249o6o0sttdia.cloudfront.net/~/media/riotile.jpg\" alt=\"Rio Galeão.\">\n" +
    "	</figure> -->\n" +
    "	<h4 class=\"text-light\" layout=\"horizontal\" layout-align=\"center center\" keylines=\"8\">Recent Work</h4>\n" +
    "	<ul class=\"list-projects list-unstyled clearfix\">\n" +
    "		<li id=\"project{{project.$id}}\" class=\"list-projects-item\" ng-repeat=\"project in projects | orderByPriority\">\n" +
    "			<a href=\"projects/{{project.$id}}\" delay-click>\n" +
    "			<figure class=\"defer-image image-ratio:4x3 is-loading\">\n" +
    "				<picture >\n" +
    "					<!--[if IE 9]><video style=\"display: none;\"><![endif]-->\n" +
    "					<source type=\"image/webp\" \n" +
    "					srcset=\"assets/img/{{project.cover}}-360.webp 360w, assets/img/{{project.cover}}-180.webp 180w\" \n" +
    "					sizes=\"(min-width: 992px) 317px, (min-width: 768px) 360px, 50vw\" />\n" +
    "					<source srcset=\"assets/img/{{project.cover}}-360.jpg 360w, assets/img/{{project.cover}}-180.jpg 180w\" \n" +
    "					sizes=\"(min-width: 992px) 317px, (min-width: 768px) 360px, 50vw\" />\n" +
    "					<!--[if IE 9]></video><![endif]-->\n" +
    "					<img class=\"\" src=\"assets/img/{{project.cover}}-180.jpg\" alt=\"{{project.title}}\" imgload/>\n" +
    "				</picture>\n" +
    "				<!-- <img ng-src=\"assets/img/{{project.cover}}.jpg\" imgload> -->\n" +
    "				<figcaption class=\"text-headline color-white text-center\" layout=\"vertical\" layout-align=\"center\">{{project.title}}</figcaption>\n" +
    "			</figure>\n" +
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
    "		<a href=\"http://nodejs.org/\">nodejs</a>,\n" +
    "		and \n" +
    "		<a href=\"http://icomoon.io/\">IcoMoon</a>.         \n" +
    "		</p>\n" +
    "\n" +
    "		<p><a href=\"https://github.com/thienedits/ng-boilerplate/tree/master\" target=\"_blank\">Project Github Repo</a></p>\n" +
    "		\n" +
    "		<p>(c) 2013 Thien Pham</p>\n" +
    "		<ul class=\"social\">\n" +
    "			<li><a href=\"http://plus.google.com/102157534092095391789/about\" target=\"_blank\" title=\"Google Plus\"><i class=\"qp-google-plus qp-lg\"></i></a></li><li><a href=\"http://www.facebook.com/thienpham.us\" target=\"_blank\" title=\"Facebook\"><i class=\"qp-facebook qp-lg\"></i></a></li><li><a href=\"http://www.linkedin.com/in/thienpham\" target=\"_blank\"><i class=\"qp-linkedin qp-lg\" title=\"Linkedin\"></i></a></li>\n" +
    "		</ul>\n" +
    "	</div>\n" +
    "</footer>\n" +
    "");
}]);

angular.module("resume/resume.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("resume/resume.tpl.html",
    "<div class=\"resume\">	\n" +
    "	<header class=\"app-bar dark\" layout=\"horizontal\" layout-align=\"space-between center\" keylines=\"7\">\n" +
    "		<a href=\"/projects\" class=\"icon-btn pull-left\" title=\"Go Back\" icon-btn delay-click>\n" +
    "	    <span class=\"ripple\"></span>\n" +
    "	    <svg><use xlink:href=\"assets/qpham-portfolio.svg#icon-arrow-back\"></use></svg>\n" +
    "	  </a>\n" +
    "	</header>\n" +
    "	<div class=\"container content-section\">\n" +
    "		<div class=\"profile-section\">\n" +
    "			<a href=\"https://plus.google.com/u/0/102157534092095391789/about\" class=\"profile-img\" target=\"_blank\"></a>\n" +
    "			<h5 class=\"text-center\">Thien Pham</h5>\n" +
    "			<a class=\"text-center center-block btn-simple\" href=\"http://maps.google.com/?q=4321 Margery Dr, Fremont, CA, 94538\"><span class=\"qp-pin qp-2x\" title=\"Get Directions\"></span><span class=\"btn-simple-txt\">4321 Margery Dr &bull; Fremont, CA 94538</span></a>\n" +
    "		</div>\n" +
    "		<div class=\"contact-section\">\n" +
    "			<ul class=\"list-contact list-unstyled\">\n" +
    "				<li>\n" +
    "					<a href=\"tel://1-312-380-5256\" title=\"Call Me\" layout=\"horizontal\" layout-align=\"space-between center\">\n" +
    "						<span class=\"content\">\n" +
    "							<p class=\"title\">Phone</p>\n" +
    "							<p>312-380-5256</p>\n" +
    "						</span>\n" +
    "						<span class=\"icon-btn pull-right\">\n" +
    "					    <span class=\"ripple\"></span>\n" +
    "					    <svg><use xlink:href=\"assets/qpham-portfolio.svg#icon-call\"></use></svg>\n" +
    "					  </span>\n" +
    "					</a>\n" +
    "				</li>\n" +
    "\n" +
    "				<li>\n" +
    "					<a href=\"mailto:thienpham.us@gmail.com\" title=\"Email Me\" layout=\"horizontal\" layout-align=\"space-between center\">\n" +
    "						<span class=\"content\">\n" +
    "							<p class=\"title\">Email</p>\n" +
    "							<p>thienpham.us@gmail.com</p>\n" +
    "						</span>\n" +
    "						<span class=\"icon-btn pull-right\">\n" +
    "					    <span class=\"ripple\"></span>\n" +
    "					    <svg><use xlink:href=\"assets/qpham-portfolio.svg#icon-mail\"></use></svg>\n" +
    "					  </span>\n" +
    "					</a>\n" +
    "				</li>\n" +
    "				<li>\n" +
    "					<a href=\"https://docs.google.com/file/d/0B0qdt7xwL6A8eVhrcEprQXdzTGc/edit?usp=sharing\" class=\"icon-btn pull-right\" title=\"Download My Resume\" icon-btn delay-click>\n" +
    "					   <span class=\"ripple\"></span>\n" +
    "					   <svg><use xlink:href=\"assets/qpham-portfolio.svg#icon-file-download\"></use></svg>\n" +
    "					</a>\n" +
    "				</li>\n" +
    "			</ul>\n" +
    "		</div>\n" +
    "		<div class=\"copy-section\">\n" +
    "			<h5 id=\"objective\">Objective</h5>\n" +
    "			<p>I am currently seeking a challenging position in a web/mobile environment utilizing my experience in visual design and\n" +
    "front-end web development.</p>\n" +
    "		</div>\n" +
    "		\n" +
    "		<div class=\"copy-section\">\n" +
    "			<h5 id=\"summary\">Summary</h5>\n" +
    "			<ul>\n" +
    "				<li>10 years of experience working with Fortune 500 companies and small businesses.</li>\n" +
    "				<li>Experience working in team environments with marketing managers, developers, ux architects, content writers, project managers, business analysts, and other designers.</li>\n" +
    "				<li>Worked on web projects building sites using new technologies such as HTML5, CSS3, and Jquery. Additional experience in Responsive Design, Front-end Development and frameworks such as Angular JS and Twitter Bootstrap.</li>\n" +
    "				<li>A passion for ux, visual design, web technologies and an entrepreneur attitude to getting things done.</li>\n" +
    "			</ul>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"copy-section\">\n" +
    "			<h5 id=\"skills\">Skills</h5>\n" +
    "			<ul class=\"list-skills\">\n" +
    "				<li>Visual Design</li> \n" +
    "				<li>Front-End Development</li> \n" +
    "				<li>Web Applications</li>\n" +
    "				<li>Responsive Design</li> \n" +
    "				<li>HTML5</li> \n" +
    "				<li>CSS3</li>\n" +
    "				<li>AngularJS</li>\n" +
    "				<li>Javascript</li>\n" +
    "				<li>JQuery</li>\n" +
    "				<li>Twitter Bootstrap</li>\n" +
    "				<li>HTML Email</li>\n" +
    "				<li>Google Analytics</li>\n" +
    "				<li>Graphic Design</li>\n" +
    "				<li>Photoshop</li> \n" +
    "				<li>Illustrator</li>\n" +
    "				<li>InDesign</li> \n" +
    "				<li>Actionscript 3</li> \n" +
    "			</ul>\n" +
    "		</div>\n" +
    "		\n" +
    "		<div class=\"copy-section\">\n" +
    "			<h5 id=\"experience\">Experience</h5>\n" +
    "			<div class=\"experience-section\">\n" +
    "				<h6 class=\"\">Simpson Strong-Tie</h6>\n" +
    "				<ul class=\"list-exp-title list-unstyled\">\n" +
    "					<li>Front-End Developer/Designer</li>\n" +
    "					<li>Pleasanton, CA</li>\n" +
    "					<li>Aug 2013&ndash;Present</li>\n" +
    "				</ul>\n" +
    "				<ul>\n" +
    "					<li>Responsible for making updates and maintaining current consumer facing website <a href=\"http://www.strongtie.com\" target=\"_blank\">www.strongtie.com</a>.</li>\n" +
    "\n" +
    "					<li>Design photoshop mockups and create HTML5/CSS3/visual assets for retailer locator.</li>\n" +
    "\n" +
    "					<li>Design and create visual assets for Literature Library Android Application.</li>\n" +
    "\n" +
    "					<li>Design and build other various marketing related HTML5 websites.</li>\n" +
    "\n" +
    "					<li>Create icons for CFS Designer Windows based application.</li>\n" +
    "\n" +
    "					<li>Maintain various monthly email newsletters.</li>\n" +
    "				</ul>\n" +
    "			</div>\n" +
    "			\n" +
    "			<div class=\"experience-section\">\n" +
    "				<h6 class=\"\">Allstate Financial</h5>\n" +
    "				<ul class=\"list-exp-title list-unstyled\">\n" +
    "					<li>Senior Web Designer</li>\n" +
    "					<li>Chicago, IL</li>\n" +
    "					<li>Sep 2010&ndash;Apr 2013</li>\n" +
    "				</ul>\n" +
    "				<ul>\n" +
    "					<li>Worked on a variety of agent and consumer facing projects that include web applications, microsites, flash demos, html emails, banners and print materials.</li>\n" +
    "					<li>Provided visual design and html/css support as part of a cross-functional team creating an online web application for selling life insurance.</li>\n" +
    "					<li>Designed and coded various marketing related websites and landing pages implementing responsive design, crossbrowser compatibility/testing and Google Analytics.</li>\n" +
    "					<li>Designed and concepted various flash demos using Actionscript 3.</li>\n" +
    "					<li>Designed, created and tested HTML emails for various consumer based campaigns.</li>\n" +
    "					<li>Executed multiple projects on time while managing work load, meeting critical deadlines and milestones.</li>\n" +
    "				</ul>\n" +
    "			</div>\n" +
    "\n" +
    "			\n" +
    "			\n" +
    "			<div class=\"experience-section\">\n" +
    "				<h6 class=\"\">Harris Private Bank</h6>\n" +
    "				<ul class=\"list-exp-title list-unstyled\">\n" +
    "					<li>Senior Graphic Designer</li>\n" +
    "					<li>Chicago, IL</li>\n" +
    "					<li>Nov 2007&ndash;Sep 2010</li>\n" +
    "				</ul>\n" +
    "				<ul>\n" +
    "					<li>Produced various communication projects that include internal communication, marketing material, sales collateral,\n" +
    "and web related materials.</li>\n" +
    "					<li>Designed a variety of B2C print, marketing material, collateral and presentations for Harris Private Bank.</li>\n" +
    "					<li>Worked with Harris marketing managers, creating online banners and materials for web.</li>\n" +
    "					<li>Worked with marketing managers to design and layout brochures and communication collateral.</li>\n" +
    "				</ul>\n" +
    "			</div>\n" +
    "\n" +
    "			<div class=\"experience-section\">\n" +
    "				<h6 class=\"\">Blue Cross Blue Shield</h6>\n" +
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
    "				<h6 class=\"\">Raisenheadz Creative</h6>\n" +
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
    "			<h5 id=\"education\">Education</h5>\n" +
    "			<h6 class=\"\">University of Wisconsin</h5>\n" +
    "			<ul class=\"list-exp-title list-unstyled\">\n" +
    "				<li>BA Media Communications</li>\n" +
    "				<li>Madison, WI</li>\n" +
    "				<li>May 2002</li>\n" +
    "			</ul>\n" +
    "\n" +
    "			<h6 class=\"\">Awards & Interests</h5>\n" +
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
