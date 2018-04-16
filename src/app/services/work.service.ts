import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { MainWork } from '../classes/main-work';

@Injectable()
export class WorkService {

  constructor(private http:HttpClient) { }

  appWork:MainWork[] = [
    {
      "firstName": "YEBO",
      "lastName": "Team",
      "hashtags": "#Team #Wep App #Portfolio",
      "bgColor": "rgba(214,213,212,0.6)",
      "cover": "yebo.jpg"
    },
    {
      "firstName": "Cortilia",
      "lastName": "",
      "hashtags": "#Wep App #Advertising #Team Work",
      "bgColor": "rgba(218,219,149,0.6)",
      "cover": "cortilia.PNG"
    },
    {
      "firstName": "Milwaukee",
      "lastName": "Ballet",
      "hashtags": "#Wep App #Advertising",
      "bgColor": "rgba(99,98,99,0.6)",
      "cover": "milwaukee.PNG"
    },
    {
      "firstName": "AIESEC",
      "lastName": "",
      "hashtags": "#Team Project #Wep App",
      "bgColor": "rgba(28,18,19,0.6)",
      "cover": "aiesec.PNG"
    },
    {
      "firstName": "Niantic",
      "lastName": "",
      "hashtags": "#Wep App #Advertising #Team Work",
      "bgColor": "rgba(188,158,86,0.6)",
      "cover": "niantic.PNG"
    },
    {
      "firstName": "YEBO",
      "lastName": "Team",
      "hashtags": "#Team #Wep App #Portfolio",
      "bgColor": "rgba(214,213,212,0.6)",
      "cover": "yebo.jpg"
    }
  ];

  webWork:MainWork[] = [
    {
      "firstName": "Tulip",
      "lastName": "Design",
      "hashtags": "#Form #Joomla #PHP",
      "bgColor": "rgba(28,18,19,0.6)",
      "cover": "tulip.PNG"
    },
    {
      "firstName": "Matrimonial",
      "lastName": "Firm",
      "hashtags": "#landing Page #Online Portfolio",
      "bgColor": "rgba(214,213,212,0.6)",
      "cover": "lawyer.PNG"
    },
    {
      "firstName": "Tradition",
      "lastName": "",
      "hashtags": "#Landing Page #Animations",
      "bgColor": "rgba(130,147,95,0.6)",
      "cover": "tradition.PNG"
    },
    {
      "firstName": "Clean",
      "lastName": "Canes",
      "hashtags": "#Service #Payment Integration",
      "bgColor": "rgba(99,98,99,0.6)",
      "cover": "clean.PNG"
    },
    {
      "firstName": "Murray",
      "lastName": "Tweet",
      "hashtags": "#Landing Page #Team Project",
      "bgColor": "rgba(16,65,80,0.6)",
      "cover": "murray.PNG"
    },
    {
      "firstName": "Global",
      "lastName": "Connectivity",
      "hashtags": "#Landing Page #Team Project",
      "bgColor": "rgba(139,120,112,0.6)",
      "cover": "global.PNG"
    }
  ]

}
