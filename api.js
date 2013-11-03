// initialize our faux database

var data = {
  "projects": [
    {
      "images": [
        "afmarketing-1",
        "afmarketing-2"
      ],
      "url":"/assets/allstate/afmarketing",
      "id": 0,
      "title": "Allstate Marketing Portal",
      "subtitle": "Web Design, Responsive Design, HTML5, Jquery, CSS3",
      "desc": "This is a work in progress project for Allstate Financial Marketing. I am currently working on a portal for the marketing department. They want a site where Allstate Financial Agents can go to get news, sales strategies, and marketing collateral needed to conduct business for their agencies. I am building this site to be responsive for desktop, mobile, and tablets."
    },
    {
      "images": [
        "besuccessful-1",
        "besuccessful-2"
      ],
      "url":"/assets/allstate/afmarketing/life/besuccessful",
      "id": 1,
      "title": "Besuccessful in Life",
      "subtitle": "Web Design, Responsive Design, HTML5, Jquery, CSS3",
      "desc": "This site was a marketing initiative to communicate to agents on how they can be more successful at selling life insurance. Working with marketing managers, I was able to design and create this site under tight deadlines."
    },
    {
      "images": [
        "growthprotector-1",
        "growthprotector-2",
        "iul-1"
      ],
      "url":"/assets/allstate/afmarketing/retirement/growthprotector",
      "id": 2,
      "title": "Allstate Product Pages",
      "subtitle": "Web Design, Responsive Design, HTML5, Jquery, CSS3",
      "desc": "I was responsible for designing and creating the style for various Allstate Life Product pages such as the Growth Protector Series and the Ultra Index product."
    },
    {
      "images": [
        "mockup-1",
        "mockup-2",
        "mockup-3"
      ],
      "largeImages": [
        "mockup-lrg-1",
        "mockup-lrg-2"
      ],
      "id": 3,
      "title": "Life Quote Mockup",
      "subtitle": "Photoshop, Mockup, UX",
      "desc": "Working with information architects, I designed the following Photoshop concepts for an Allstate Life Insurance Quote and Application tool. "
    },
    {
      "images": [
        "cqb-1",
        "cqb-2",
        "cqb-3",
        "cqb-4"
      ],
      "url":"/assets/allstate/cqb/landing",
      "id": 4,
      "title": "Allstate Life Quote",
      "subtitle": "Web Application, Web Design, HTML Email, CSS3",
      "desc": "Direct Term Sales was an Allstate initiative to start selling life insurance online. Working with a team of developers, UX architects, and sales managers I was responsible for the visual design and front-end development of the website. I was also responsible for the design of various direct email campaigns and involved to help implement a workflow system for sending the emails via Salesforce.com."
    },
    {
      "images": [
        "hpb-landing-1",
        "hpb-landing-2",
        "hpb-landing-3"
      ],
      "url":"/assets/hpb/landing",
      "id": 5,
      "title": "HPB Landing",
      "subtitle": "Flash, AS3, Web Design",
      "desc": "Harris Private Bank wanted a new and fresh page to promote their various services. Working with the marketing manager, I created this simple interactive landing page using Flash and AS3."
    },
    {
      "images": [
        "mycfo-1",
        "mycfo-2",
        "mycfo-3"
      ],
      "url":"/assets/mycfo/banner",
      "id": 6,
      "title": "MyCFO Banner",
      "subtitle": "Flash, AS3, Banner",
      "desc": "Harris MyCFO wanted a simple online banner to help promote their services. I designed and created this interactive banner using Flash and AS3."
    },
    {
      "images": [
        "hpb-seattle-1",
        "hpb-seattle-2"
      ],
      "largeImages": [
        "hpb-seattle-lrg-1"
      ],
      "id": 7,
      "title": "HPB Seattle",
      "subtitle": "Print Design",
      "desc": "The Seattle Office at Harris Private Bank needed an invite for a special concert event they were hosting for some of their clients. Working under tight time constraints, I was able to conceptualize this invite while maintaining the Harris Brand."
    },
    {
      "images": [
        "c2c-1",
        "c2c-2"
      ],
      "url":"/assets/allstate/c2c",
      "id": 8,
      "title": "Accessallstate ClicktoChat",
      "subtitle": "Web Design, Responsive Design, HTML5, CSS3",
      "desc": "Accessallstate.com is used by thousands of financial agents to help manage the life insurance sales process. This microsite was design to help them understand the benefits of using a new online help feature, Click to Chat. I built the site using responsive design for both a desktop and mobile optimized experience."
    },
    {
      "images": [
        "ca23-1",
        "ca23-2",
        "ca23-3"
      ],
      "largeImages": [
        "ca23-lrg-1",
        "ca23-lrg-2"
      ],
      "id": 9,
      "title": "CA 23",
      "subtitle": "Print Brochure",
      "desc": "A 2 page advertisement that I created for a residential developer. I tried to complement the trendy modern condos in the design and layout of this project. I used smaller type font and bold headings along with white space to mirror the clean style of the new condos."
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
      images:project.images,
      largeImages:project.largeImages,
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