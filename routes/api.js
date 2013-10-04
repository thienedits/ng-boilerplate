// initialize our faux database

var data = {
  "projects": [
    {
      "id": 0,
      "title": "Allstate",
      "subtitle": "Web Application, Web Design, HTML Email, CSS3",
      "desc": "Direct Term Sales was an Allstate initiative to start selling life insurance online. Working with a team of developers, UX architects, and sales managers I was responsible for the visual design and front-end development of the website. I was also responsible for the design of various direct email campaigns and involved to help implement a workflow system for sending the emails via Salesforce.com."
    },
    {
      "id": 1,
      "title": "HPB Landing",
      "subtitle": "Flash, AS3, Web Design",
      "desc": "Harris Private Bank wanted a new and fresh page to promote their various services. Working with the marketing manager, I created this simple interactive landing page using Flash and AS3."},
    {
      "id": 2,
      "title": "MyCFO Banner",
      "subtitle": "Flash, AS3, Banner",
      "desc": "Harris MyCFO wanted a simple online banner to help promote their services. I designed and created this interactive banner using Flash and AS3."
    },
    {
      "id": 3,
      "title": "HPB Seattle",
      "subtitle": "Print Design",
      "desc": "The Seattle Office at Harris Private Bank needed an invite for a special concert event they were hosting for some of their clients. Working under tight time constraints, I was able to conceptualize this invite while maintaining the Harris Brand."
    },
    {
      "id": 4,
      "title": "Various Mockups",
      "subtitle": "Web Design, Photoshop Mockups",
      "desc": "The following are various Photoshop concepts I designed for an Allstate Life Insurance Quote/Application tool and a marketing landing page."
    },
    {
      "id": 5,
      "title": "Accessallstate ClicktoChat",
      "subtitle": "Web Design, HTML5, CSS3, responsive design",
      "desc": "Accessallstate.com is used by thousands of financial agents to help manage the life insurance sales process. This microsite was design to help them understand the benefits of using a new online help feature, Click to Chat. I built the site using responsive design for both a desktop and mobile optimized experience."
    },
    {
      "id": 6,
      "title": "CA 23",
      "subtitle": "Print Brochure",
      "desc": "A 2 page advertisement that I created for a residential developer. I tried to complement the trendy modern condos in the design and layout of this project. I used smaller type font and bold headings along with white space to mirror the clean style of the new condos."
    },
    {
      "id": 7,
      "title": "Allstate Marketing Portal",
      "subtitle": "Web Design, HTML5, Jquery, CSS3, Responsive Design",
      "desc": "This is a work in progress project for Allstate Financial Marketing. I am currently working on a portal for the marketing department. They want a site where Allstate Financial Agents can go to get news, sales strategies, and marketing collateral needed to conduct business for their agencies. I am building this site to be responsive for desktop, mobile, and tablets."
    }
  ]
};


/*
 * Serve JSON to our AngularJS client
 */

// GET

exports.projects = function (req, res) {
  var projects = [];
  data.projects.forEach(function (project, i) {
    projects.push({
      id: i,
      title: project.title,
      subtitle: project.subtitle,
      desc: project.desc
    });
  });
  res.json({
    projects: projects
  });
};

exports.project = function (req, res) {
  var id = req.params.id;
  if (id >= 0 && id < data.projects.length) {
    res.json({
      project: data.projects[id]
    });
  } else {
    res.json(false);
  }
};