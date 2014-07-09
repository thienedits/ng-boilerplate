// initialize our faux database

var data = {
  "projects": [
    {
      "images": [
        "uibootstrap-1",
        "uibootstrap-2"
      ],
      "url":"http://angular-ui.github.io/bootstrap/",
      "id": 0,
      "title": "Angular UI Boostrap",
      "subtitle": "Visual Design, HTML5, CSS3",
      "desc": "Contributed to the design and styling of the demo site for the open source github project Angular UI Boostrap."
    },
    {
      "images": [
        "fasteners-1",
        "fasteners-2",
        "fasteners-3"
      ],
      "url":"http://www.strongtie.com/products/fasteners/landing/strongdrive.html",
      "id": 1,
      "title": "Simpson Strong-Tie Fasteners",
      "subtitle": "Visual Design, HTML5, CSS3",
      "desc": "Landing pages designed and built for Simpson Strong-Tie Fastener product lines."
    },
    {
      "images": [
        "diylocator-1",
        "diylocator-2",
        "diylocator-3"
      ],
      "url":"http://diydoneright.com/retailer-locator/",
      "id": 2,
      "title": "Simpson Strong-Tie Retailer Locator",
      "subtitle": "Visual Design, HTML5, CSS3",
      "desc": "A retailer locator page I designed and created for the Simpson Strong-Tie DIY Done Right site."
    },
    {
      "images": [
        "litlib-1",
        "litlib-2"
      ],
      "url":"https://play.google.com/store/apps/details?id=com.strongtie.litlib",
      "id": 3,
      "title": "Simpson Strong-Tie Literature Library",
      "subtitle": "Android, Visual Design",
      "desc": "I helped to create visual assets for the Android tablet and phone versions of the Simpson Strong-Tie Literature Library App."
    },
    {
      "images": [
        "afmarketing-1",
        "afmarketing-2"
      ],
      "url":"/assets/allstate/afmarketing",
      "id": 4,
      "title": "Allstate Marketing Portal",
      "subtitle": "Visual Design, Responsive Design, HTML5, Jquery, CSS3",
      "desc": "This is a work in progress project for Allstate Financial Marketing. I am currently working on a portal for the marketing department. They want a site where Allstate Financial Agents can go to get news, sales strategies, and marketing collateral needed to conduct business for their agencies. I am building this site to be responsive for desktop, mobile, and tablets."
    },
    {
      "images": [
        "besuccessful-1",
        "besuccessful-2"
      ],
      "url":"/assets/allstate/afmarketing/life/besuccessful",
      "id": 5,
      "title": "Besuccessful in Life",
      "subtitle": "Visual Design, Responsive Design, HTML5, Jquery, CSS3",
      "desc": "This site was a marketing initiative to communicate to agents on how they can be more successful at selling life insurance. Working with marketing managers, I was able to design and create this site under tight deadlines."
    },
    {
      "images": [
        "growthprotector-1",
        "growthprotector-2",
        "iul-1"
      ],
      "url":"/assets/allstate/afmarketing/retirement/growthprotector",
      "id": 6,
      "title": "Allstate Product Pages",
      "subtitle": "Visual Design, Responsive Design, HTML5, Jquery, CSS3",
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
      "id": 7,
      "title": "Life Quote Mockup",
      "subtitle": "Visual Design, UX",
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
      "id": 8,
      "title": "Allstate Life Quote",
      "subtitle": "Web Application, Visual Design, HTML, CSS3, HTML Email",
      "desc": "Direct Term Sales was an Allstate initiative to start selling life insurance online. Working with a team of developers, UX architects, and sales managers I was responsible for the visual design and front-end development of the website. I was also responsible for the design of various direct email campaigns and involved to help implement a workflow system for sending the emails via Salesforce.com."
    },
    {
      "images": [
        "hpb-landing-1",
        "hpb-landing-2",
        "hpb-landing-3"
      ],
      "url":"/assets/hpb/landing",
      "id": 9,
      "title": "HPB Landing",
      "subtitle": "Flash, AS3, Visual Design",
      "desc": "Harris Private Bank wanted a new and fresh page to promote their various services. Working with the marketing manager, I created this simple interactive landing page using Flash and AS3."
    },
    {
      "images": [
        "mycfo-1",
        "mycfo-2",
        "mycfo-3"
      ],
      "url":"/assets/mycfo/banner",
      "id": 10,
      "title": "MyCFO Banner",
      "subtitle": "Flash, AS3, Visual Design",
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
      "id": 11,
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
      "id": 12,
      "title": "Accessallstate ClicktoChat",
      "subtitle": "Visual Design, Responsive Design, HTML5, CSS3",
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
      "id": 13,
      "title": "CA 23",
      "subtitle": "Print Brochure",
      "desc": "A 2 page advertisement that I created for a residential developer. I tried to complement the trendy modern condos in the design and layout of this project. I used smaller type font and bold headings along with white space to mirror the clean style of the new condos."
    }
  ],

  "states": [
    {
        "name": "Alabama",
        "abbreviation": "AL"
    },
    {
        "name": "Alaska",
        "abbreviation": "AK"
    },
    {
        "name": "American Samoa",
        "abbreviation": "AS"
    },
    {
        "name": "Arizona",
        "abbreviation": "AZ"
    },
    {
        "name": "Arkansas",
        "abbreviation": "AR"
    },
    {
        "name": "California",
        "abbreviation": "CA"
    },
    {
        "name": "Colorado",
        "abbreviation": "CO"
    },
    {
        "name": "Connecticut",
        "abbreviation": "CT"
    },
    {
        "name": "Delaware",
        "abbreviation": "DE"
    },
    {
        "name": "District Of Columbia",
        "abbreviation": "DC"
    },
    {
        "name": "Federated States Of Micronesia",
        "abbreviation": "FM"
    },
    {
        "name": "Florida",
        "abbreviation": "FL"
    },
    {
        "name": "Georgia",
        "abbreviation": "GA"
    },
    {
        "name": "Guam",
        "abbreviation": "GU"
    },
    {
        "name": "Hawaii",
        "abbreviation": "HI"
    },
    {
        "name": "Idaho",
        "abbreviation": "ID"
    },
    {
        "name": "Illinois",
        "abbreviation": "IL"
    },
    {
        "name": "Indiana",
        "abbreviation": "IN"
    },
    {
        "name": "Iowa",
        "abbreviation": "IA"
    },
    {
        "name": "Kansas",
        "abbreviation": "KS"
    },
    {
        "name": "Kentucky",
        "abbreviation": "KY"
    },
    {
        "name": "Louisiana",
        "abbreviation": "LA"
    },
    {
        "name": "Maine",
        "abbreviation": "ME"
    },
    {
        "name": "Marshall Islands",
        "abbreviation": "MH"
    },
    {
        "name": "Maryland",
        "abbreviation": "MD"
    },
    {
        "name": "Massachusetts",
        "abbreviation": "MA"
    },
    {
        "name": "Michigan",
        "abbreviation": "MI"
    },
    {
        "name": "Minnesota",
        "abbreviation": "MN"
    },
    {
        "name": "Mississippi",
        "abbreviation": "MS"
    },
    {
        "name": "Missouri",
        "abbreviation": "MO"
    },
    {
        "name": "Montana",
        "abbreviation": "MT"
    },
    {
        "name": "Nebraska",
        "abbreviation": "NE"
    },
    {
        "name": "Nevada",
        "abbreviation": "NV"
    },
    {
        "name": "New Hampshire",
        "abbreviation": "NH"
    },
    {
        "name": "New Jersey",
        "abbreviation": "NJ"
    },
    {
        "name": "New Mexico",
        "abbreviation": "NM"
    },
    {
        "name": "New York",
        "abbreviation": "NY"
    },
    {
        "name": "North Carolina",
        "abbreviation": "NC"
    },
    {
        "name": "North Dakota",
        "abbreviation": "ND"
    },
    {
        "name": "Northern Mariana Islands",
        "abbreviation": "MP"
    },
    {
        "name": "Ohio",
        "abbreviation": "OH"
    },
    {
        "name": "Oklahoma",
        "abbreviation": "OK"
    },
    {
        "name": "Oregon",
        "abbreviation": "OR"
    },
    {
        "name": "Palau",
        "abbreviation": "PW"
    },
    {
        "name": "Pennsylvania",
        "abbreviation": "PA"
    },
    {
        "name": "Puerto Rico",
        "abbreviation": "PR"
    },
    {
        "name": "Rhode Island",
        "abbreviation": "RI"
    },
    {
        "name": "South Carolina",
        "abbreviation": "SC"
    },
    {
        "name": "South Dakota",
        "abbreviation": "SD"
    },
    {
        "name": "Tennessee",
        "abbreviation": "TN"
    },
    {
        "name": "Texas",
        "abbreviation": "TX"
    },
    {
        "name": "Utah",
        "abbreviation": "UT"
    },
    {
        "name": "Vermont",
        "abbreviation": "VT"
    },
    {
        "name": "Virgin Islands",
        "abbreviation": "VI"
    },
    {
        "name": "Virginia",
        "abbreviation": "VA"
    },
    {
        "name": "Washington",
        "abbreviation": "WA"
    },
    {
        "name": "West Virginia",
        "abbreviation": "WV"
    },
    {
        "name": "Wisconsin",
        "abbreviation": "WI"
    },
    {
        "name": "Wyoming",
        "abbreviation": "WY"
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
      url:project.url,
      id: i,
      title: project.title,
      subtitle: project.subtitle,
      desc: project.desc
    });
  });
  res.json(projects);
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

exports.states = function (req, res) {
  var states = [];
  data.states.forEach(function (state, i) {
    states.push({
      name:state.name,
      abbreviation:state.abbreviation
    });
  });
  res.json({
    states: states
  });
};




/**
 * ContactRepository class deals with task persistence
 */
var ContactRepository = function () {
    this.contacts = [];
    this.nextId = this.contacts.length;
}
/**
 * Find a contact by id
 * Param: id of the contact to find
 * Returns: the contact corresponding to the specified id
 */
ContactRepository.prototype.find = function (id) {
    var contact = this.contacts.filter(function(item) {
        return item.contactId == id;
    })[0];
    if (null == contact) {
        throw new Error('contact not found');
    }
    return contact;
}
/**
 * Find the index of a contact
 * Param: id of the contact to find
 * Returns: the index of the contact identified by id
 */
ContactRepository.prototype.findIndex = function (id) {
    var index = null;
    this.contacts.forEach(function(item, key) {
        if (item.contactId == id) {
            index = key;
        }
    });
    if (null == index) {
        throw new Error('contact not found');
    }
    return index;
}
/**
 * Retrieve all contacts
 * Returns: array of contacts
 */
ContactRepository.prototype.findAll = function () {
      return this.contacts; 
}
/**
 * Save a contact (create or update)
 * Param: contact the contact to save
 */
ContactRepository.prototype.save = function (contact) {
    if (contact.contactId == null) {
        contact.contactId = this.nextId;
        this.contacts.push(contact);
        this.nextId++;
    } else {
        var index = this.findIndex(contact.contactId);
        this.contacts[index] = contact;
    }
 
}
/**
 * Remove a contact
 * Param: id the of the contact to remove
 */
ContactRepository.prototype.remove = function (id) {
    var index = this.findIndex(id);
    this.contacts.splice(index, 1);
}

exports.ContactRepository = ContactRepository;
