import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { faqs } from 'src/app/data/faq.data';
import { Faq } from 'src/app/objects/faq';
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor() { }
  faqs =[...faqs];
  faq : Faq;
  ngOnInit(): void {

    $(".toggle h3").click(function(e){
      e.preventDefault();
      if($(this).closest("div").find("div:first").css("display")=="none")
      {   
          $(this).closest("div").find("div:first").show();
          $(this).closest("div").find(".plus").text("-");
          $(this).closest("div").find(".plus").css("background", "#ffffff");
          $(this).closest("div").find(".plus").css("color", "#000");
          $(this).closest("div").find("h3").css("background", "#f00011");
          
      }
      else
      {
          $(this).closest("div").find("div:first").hide();
          $(this).closest("div").find(".plus").text("+");
          $(this).closest("div").find(".plus").css("background", "#888888");
          $(this).closest("div").find(".plus").css("color", "#fff");
          $(this).closest("div").find("h3").css("background", "#f3f3f3");
      }
      
      
  })




  }

}
