import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq-page',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.scss']
})
export class FaqPageComponent implements OnInit {
  show=false
  show2=false
  show3=false
  class1="droid-arabic-kufi"
  class2="droid-arabic-kufi"
  class3="droid-arabic-kufi"

  constructor() { }

  ngOnInit(): void {
    this.show=true
  }
onSelect(){
  this.show=true
  this.show2=false
  this.show3=false
  this.class1="active droid-arabic-kufi"
  this.class2="droid-arabic-kufi"
  this.class3="droid-arabic-kufi"
  
}
onSelect2(){
  this.show=false
  this.show2=true
  this.show3=false
  this.class1="droid-arabic-kufi"
  this.class2="active droid-arabic-kufi"
  this.class3="droid-arabic-kufi"
}
onSelect3(){
  this.show=false
  this.show2=false
  this.show3=true
  this.class1="droid-arabic-kufi"
  this.class2="droid-arabic-kufi"
  this.class3="active droid-arabic-kufi"
}
}
