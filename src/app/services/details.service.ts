import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { MainDetails } from '../classes/main-details';

@Injectable()
export class DetailsService {

  constructor(private http:HttpClient) { }

  mainDetails:MainDetails[] = [
    {
      "id": 1,
      "name": "YEBO",
      "headerImg": "/assets/imgs/yebo.jpg",
      "headerText": "My Team",
      "abstractHashtags": "#Team #Wep App #Portfolio",
      "abstractText": "I am not just a freelancer, I am part of a team with great experience and great client satisfaction history",
      "sec1Img": "/assets/imgs/sec1-yebo.PNG",
      "sec1Text1": "When you are a team you have to have a strong portfolio representing your team's, the different projects that you worked on and your client's satisfactions",
      "sec1Text2": "To stay to the point and not to list all, we picked some of our best work and assembled it together in this page to show case the interesting apps we created",
      "sec2Header": "Clients satisfaction is our number one ruel",
      "sec2Text": "Each of the projects featured on our page has a success story behind it that involves a happy and satisfied client and a great result",
      "sec2Img1": "/assets/imgs/sec21-yebo.PNG",
      "sec2Img2": "/assets/imgs/sec22-yebo.PNG",
      "sec2Quote": "",
      "link": "http://www.yebocreative.com/en/hey/"
    },
    {
      "id": 2,
      "name": "Cortilia",
      "headerImg": "/assets/imgs/header-img-cortilia.PNG",
      "headerText": "Cortilia Store",
      "abstractHashtags": "#Wep App #Advertising #Team Work",
      "abstractText": "Cortilia brings directly to your home fresh products from the countryside near you. We’ve been asked to fully re-design the whole online and offline identity.",
      "sec1Img": "/assets/imgs/sec1-cortilia.PNG",
      "sec1Text1": "Made as a web app with a great UX design and good layout of the page",
      "sec1Text2": "Ever experienced to buy products in your grocery store and once at home don’t even know how to make a recipe with them? Well, we have inverted the process: first you choose a recipe, then buy the products you need, in one click.",
      "sec2Header": "Buy food with consciousness",
      "sec2Text": "Any product that Cortilia sell, is from a farm located near the user address, harvest fresh and delivered to client’s home. Users can make healthier spending thanks to Boxes, which are only filled with seasonal products available.",
      "sec2Img1": "/assets/imgs/sec21-cortilia.PNG",
      "sec2Img2": "/assets/imgs/sec22-cortilia.PNG",
      "sec2Quote": "",
      "link": "https://www.cortilia.it/"
    },
    {
      "id": 3,
      "name": "Milwaukee",
      "headerImg": "/assets/imgs/header-img-milwaukee.jpg",
      "headerText": "Milwaukee Ballet",
      "abstractHashtags": "#Wep App #Advertising",
      "abstractText": "Milwaukee Ballet is a ballet teaching school, they wanted to represent their company and work in an elegent and fancy way that match the company's work",
      "sec1Img": "/assets/imgs/sec1-milwaukee.jpg",
      "sec1Text1": "Milwaukee Ballet creates a rich and diverse community through its inspiring performances, and education and engagement programs.",
      "sec1Text2": "Meet the people who steward our company, bring our performances to life, help students unlock their potential, and reach into the community.",
      "sec2Header": "Your site represents you",
      "sec2Text": "If you target to be from the elites then the presentation of your work has to be elite and that what Milwaukee company understod and hired us to achive",
      "sec2Img1": "/assets/imgs/sec21-milwaukee.jpg",
      "sec2Img2": "/assets/imgs/sec22-milwaukee.jpg",
      "sec2Quote": "",
      "link": "https://www.milwaukeeballet.org/"
    },
    {
      "id": 4,
      "name": "AIESEC",
      "headerImg": "/assets/imgs/header-img-aiesec.jpg",
      "headerText": "AIESEC World Leaders",
      "abstractHashtags": "#Team Project #Wep App",
      "abstractText": "Most of us know AIESEC and what they are doing.<br> I had the prevelage to be part of the team that assembled this amazing site of them together",
      "sec1Img": "/assets/imgs/sec1-aiesec.PNG",
      "sec1Text1": "AIESEC provide you with the opportunity to live a shared responsibility for the world and equip you with the tools to shape it for a better future.",
      "sec1Text2": "So their site has to represent the experience one will gain and things they will do, Starting with a great video as the header and down with the opportunities AIESEC provide",
      "sec2Header": "Leaders for the world",
      "sec2Text": "Are you ambitious and passionate about making the world a better place? AIESEC is the place for you. Be part of one of our teams and develop your leadership potential.",
      "sec2Img1": "/assets/imgs/sec21-aiesec.PNG",
      "sec2Img2": "/assets/imgs/sec22-aiesec.PNG",
      "sec2Quote": "",
      "link": "https://aiesec.org/"
    },
    {
      "id": 5,
      "name": "Niantic",
      "headerImg": "/assets/imgs/header-img-niantic.PNG",
      "headerText": "Niantic Augmented Reality",
      "abstractHashtags": "#Wep App #Advertising #Team Work",
      "abstractText": "Niantic is building a state of the art augmented reality platform for current and future generations of AR hardware.<br> their platform includes a massively scalable engine for shared state and user interactions",
      "sec1Img": "/assets/imgs/sec1-niantic.PNG",
      "sec1Text1": "Niantic is hard at work solving challenges to realize the full potential of augmented reality using technologies such as machine learning and computer vision.",
      "sec1Text2": "Niantic’s mission is to use emerging technology to enrich our experiences as human beings in the physical world.",
      "sec2Header": "Leaders in Augmented Reality",
      "sec2Text": "Their engineering team is tackling challenges in high performance cloud applications operating at massive scale, machine learning, computer vision, and augmented reality. ",
      "sec2Img1": "/assets/imgs/sec21-niantic.PNG",
      "sec2Img2": "/assets/imgs/sec22-niantic.PNG",
      "sec2Quote": "",
      "link": "https://nianticlabs.com/"
    },
    {
      "id": 6,
      "name": "Milwaukee",
      "headerImg": "/assets/imgs/header-img-milwaukee.jpg",
      "headerText": "Milwaukee Ballet",
      "abstractHashtags": "#Wep App #Advertising",
      "abstractText": "Milwaukee Ballet is a ballet teaching school, they wanted to represent their company and work in an elegent and fancy way that match the company's work",
      "sec1Img": "/assets/imgs/sec1-milwaukee.jpg",
      "sec1Text1": "Milwaukee Ballet creates a rich and diverse community through its inspiring performances, and education and engagement programs.",
      "sec1Text2": "Meet the people who steward our company, bring our performances to life, help students unlock their potential, and reach into the community.",
      "sec2Header": "Your site represents you",
      "sec2Text": "If you target to be from the elites then the presentation of your work has to be elite and that what Milwaukee company understod and hired us to achive",
      "sec2Img1": "/assets/imgs/sec21-milwaukee.PNG",
      "sec2Img2": "/assets/imgs/sec22-milwaukee.PNG",
      "sec2Quote": "",
      "link": "https://www.milwaukeeballet.org/"
    },
    {
      "id": 7,
      "name": "Tulip",
      "headerImg": "/assets/imgs/header-img-tulip.png",
      "headerText": "Tulip Form Design",
      "abstractHashtags": "#Form #Joomla #PHP",
      "abstractText": "A Joomla based website<br> Tulip design is a site for graphics and web design<br> They wanted a multi-step PHP web form for their site",
      "sec1Img": "/assets/imgs/sec1-tulip.PNG",
      "sec1Text1": "Online order forms are there in most sites, Only successfull sites are those that implement a good UX and UI forms for their customers.",
      "sec1Text2": "What always attracks the visitors is the landing page, and What will make you continue filling the form is its first page which make you trust that is is a profisional site and you can trust to get your work done with them.",
      "sec2Header": "A good design for each step",
      "sec2Text": "Each step is designed to give a great UX to the customers with features required for every online form like multi-select and file upload",
      "sec2Img1": "/assets/imgs/sec21-tulip.PNG",
      "sec2Img2": "/assets/imgs/sec22-tulip.PNG",
      "sec2Quote": "Akram took the task and completed it successfully.",
      "link": "http://tulipdesign.se/index.php/en/download-onepage"
    },
    {
      "id": 8,
      "name": "Matrimonial",
      "headerImg": "/assets/imgs/header-img-lawyer.PNG",
      "headerText": "Matrimonial Lawyer Firm",
      "abstractHashtags": "#landing Page #Online Portfolio",
      "abstractText": "Matrimonial is a lawyer firm for divorce and family law<br> They wanted an online portfolio that represents their business, their experience and facilitate contacting them",
      "sec1Img": "/assets/imgs/sec1-lawyer.PNG",
      "sec1Text1": "A good landing page is the key feature for the success of this project, it should represent the experience and the services of the firm",
      "sec1Text2": "With the help of great images and the black and white color scheme, the end result was perfect and appealing to the eye",
      "sec2Header": "Book covers sometimes matter",
      "sec2Text": "There is a good saying that you should not judge a book buy its cover, while that is true, most peoples get attracted to strong and appealing covers / landing pages",
      "sec2Img1": "/assets/imgs/sec21-lawyer.PNG",
      "sec2Img2": "/assets/imgs/sec22-lawyer.PNG",
      "sec2Quote": "",
      "link": "http://www.cavallimccann.com/"
    },
    {
      "id": 9,
      "name": "Tradition",
      "headerImg": "/assets/imgs/header-img-tradition.png",
      "headerText": "Tokyo Cuckson Tea",
      "abstractHashtags": "#Landing Page #Animations",
      "abstractText": "A japanise tea meeting<br> Annual tradition that needs some advertising with animations and page that have a japanise style to it",
      "sec1Img": "/assets/imgs/sec1-tradition.PNG",
      "sec1Text1": "Traditions always have benifits, showing these benifits in an exciting and appealing manar is vital to project success",
      "sec1Text2": "With the help of web animations and good styling, page elements ended up floating in a good yet creative manner with text appearing the way a native japanise writer will do",
      "sec2Header": "Cup of Tea for Each One",
      "sec2Text": "gatherings are always happy places filled with good memories, by emphasizing that we encourage more people to come and join every time that event take place",
      "sec2Img1": "/assets/imgs/sec21-tradition.PNG",
      "sec2Img2": "/assets/imgs/sec22-tradition.PNG",
      "sec2Quote": "",
      "link": "https://chackathon.com/"
    },
    {
      "id": 10,
      "name": "Clean",
      "headerImg": "/assets/imgs/header-img-clean.png",
      "headerText": "Clean Canes Service",
      "abstractHashtags": "#Service #Payment Integration",
      "abstractText": "A small personal cleanning business for university students<br> They wanted a site that represents their services and facilitate online payment",
      "sec1Img": "/assets/imgs/sec1-clean.PNG",
      "sec1Text1": "With the new Braintree payment system that both accept PayPal payment and traditional crediti cards, the site became a good presentaion of the business",
      "sec1Text2": "Showing different services with a good presentation and animation the site ended with a great landing page that the client is happy with",
      "sec2Header": "Cleaning service for students",
      "sec2Text": "Even if you are student, that can not stop you from creating a successful business, you just have to pick an area you are good at and start working",
      "sec2Img1": "/assets/imgs/sec21-clean.PNG",
      "sec2Img2": "/assets/imgs/sec22-clean.PNG",
      "sec2Quote": "He's great to work with and very patient. Work with him if you get a chance. You wouldn't regret it.",
      "link": "http://cleancanes.com/"
    },
    {
      "id": 11,
      "name": "Murray",
      "headerImg": "/assets/imgs/header-img-murray.PNG",
      "headerText": "Murray Tweet Index",
      "abstractHashtags": "#Landing Page #Team Project",
      "abstractText": "This project was done with my team because of its vast functionalities<br> What is really special about it though is its landing page and animations",
      "sec1Img": "/assets/imgs/sec1-murray.PNG",
      "sec1Text1": "The project was oriented to be a perfect landing page with powerfull animations that makes the contents of the page stand out",
      "sec1Text2": "Different animations in different sections that showed the rankings, ease in and ease out animations, great color scheme, all these factors helped in the project success",
      "sec2Header": "Good presentation is the key",
      "sec2Text": "Although the project isn't really doing much. It acted as a good presentaion of the Murray group and the skills and experience of our team in these kind of projects",
      "sec2Img1": "/assets/imgs/sec21-murray.PNG",
      "sec2Img2": "/assets/imgs/sec22-murray.PNG",
      "sec2Quote": "",
      "link": "http://murraytweetindex.ie/"
    },
    {
      "id": 12,
      "name": "Global",
      "headerImg": "/assets/imgs/global.PNG",
      "headerText": "Global Connectivity",
      "abstractHashtags": "#Awards #Team Project",
      "abstractText": "This project was done with my team winning a www award<br> What is really special about it though is its landing page and animations",
      "sec1Img": "/assets/imgs/sec1-global.PNG",
      "sec1Text1": "The project was oriented to be a perfect landing page with powerfull animations that makes the contents of the page stand out",
      "sec1Text2": "With great design and animations the project was a success and showed the different aspect of the M2MBlue",
      "sec2Header": "We are your Partners",
      "sec2Text": "A successful company is made with successful team, that is why M2MBlue trusted our teams and our experience to deliver their page to their expectation",
      "sec2Img1": "/assets/imgs/sec22-global.PNG",
      "sec2Img2": "/assets/imgs/sec21-global.PNG",
      "sec2Quote": "",
      "link": "https://www.m2mblue.com/"
    }
  ]

  private detailsUrl = 'http://my-json-server.typicode.com/akrmadel33/portfolio02/details';

  getDetails(itemName):Observable<MainDetails> {
    return this.http.get<MainDetails>(this.detailsUrl + '/?name=' + itemName);
  }


}
