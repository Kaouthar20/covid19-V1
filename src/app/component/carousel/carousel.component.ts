import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  carouselElements= [

    {
      image: '../assets/image/COVID-19-Coronavirus-Map.jpg',
      title : "Situation update worldwide",
      badge :"read more",
      readmoreLink : '//www.ecdc.europa.eu/en/geographical-distribution-2019-ncov-cases',
      description:'Disclaimer: National updates are published at different times and in different time zones. This, and the time ECDC needs to process these data, may lead to discrepancies between the national numbers and the numbers published by ECDC'
    },
    {
      image: '../assets/image/healthService.jpg',
      title : "COVID-19 significantly impacts health services for noncommunicable diseases",
      badge :"read more",
      readmoreLink : "https://www.who.int/news-room/detail/01-06-2020-covid-19-significantly-impacts-health-services-for-noncommunicable-diseases",
      description:' Prevention and treatment services for noncommunicable diseases (NCDs) have been severely disrupted since the COVID-19 pandemic began, according to a WHO survey released today.'
    },
    {
      image: '../assets/image/mutation.jpg',
      title : "Mutation Allows Coronavirus to Infect More Cells, Study Finds. Scientists Urge Caution.",
      badge :"read more",
      readmoreLink : 'https://www.nytimes.com/2020/06/12/science/coronavirus-mutation-genetics-spike.html?rref=briefing&module=Ribbon&version=context&region=Header&action=click&contentCollection=Top%20Stories&pgtype=Multimedia',
      description:'Geneticists said more evidence is needed to determine if a common genetic variation of the virus spreads more easily between people.'
    },
    {
      image: '../assets/image/bejine.jpg',
      title : "Beijing reimposes lockdown measures after new Covid-19 outbreak",
      badge :"read more",
      readmoreLink : "https://www.theguardian.com/world/2020/jun/13/beijing-china-new-covid-19-cases-linked-to-food-market",
      description:'Parts of Beijing have reimposed lockdown measures after a cluster of locally transmitted coronavirus cases emerged nearly two months after the Chinese capital appeared to have stamped out the virus.'
    },
    {
      image: '../assets/image/secondwave.jpg',
      title : "What ICU doctors have learned about COVID-19 — and how they're prepared for a 2nd wave",
      badge :"Go Home",
      readmoreLink : "https://www.nbcnews.com/health/health-news/what-icu-doctors-have-learned-about-covid-19-how-they-n1225801",
      description:'The World Health Organization had just declared COVID-19 a pandemic when intensive care units in the United States started to see an influx of severely ill patients.'
    },
   
    {
      image: '../assets/image/internationalTravel.jpg',
      title : "How can international travel resume during the coronavirus pandemic?",
      badge :"read more",
      readmoreLink : "https://www.newscientist.com/article/2246024-how-can-international-travel-resume-during-the-coronavirus-pandemic/",
      description:'Much of the world is starting to open up again, with many countries easing or planning to ease coronavirus travel restrictions. But would-be travellers face a confusing, uncertain and fast-changing situation.'
    }
  ]; 
  constructor() { }
  ngOnInit(): void {

  }


  slideOptions = {
    nav: true,
    dots: true,
    loop: false,
    margin: 10,
    responsiveClass: true,
    // responsive object contains responsive options.
    responsive: {
      0: {
        items: 1,
        dots: false
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  };

  
}

 


