import { Component, OnInit, Input, EventEmitter, Output, NgModule } from '@angular/core';

@Component({
  selector: 'g-input',
  templateUrl: './g-input.component.html',
  styles: []
})
export class GInputComponent implements OnInit {
  @Input() autocomplete: " ";
  @Input() bg: string;
  @Input() border: string;
  _value: any;
  @Input() set value(val: any) {
    this._value = val;
  }
  get value(): any {
    return this._value;
  }
  @Input() set id(i: any) {
    this._id = i;
  }
  get id(): any {
    return this._id;
  }
  @Input() name: string;
  @Input() label: string;
  @Input() placeholder: string;

  @Input() required: boolean = false;
  @Input() style: Style;
  @Input() color: string;
  @Input() iconLeft: string;
  @Input() clear: boolean;
  @Input() width: string;
  @Input() type: string;
  @Input() sEr: string;
  @Input() length: number;
  @Input() onErr: boolean = true;
  @Input() onSubmit: boolean = false;
 
  @Input() size: string;
  @Input() radius: string;
  @Input() theme: string;
  @Output() inputValue = new EventEmitter<KeyValuePair>();
  @Output() out = new EventEmitter<string>();
  @Output() iClick = new EventEmitter<KeyValuePair>();

  style1 = true;
  style2 = false;

  dt = "";
  onIcon = "mic1";
  offIcon = "mic1Off";
  on = "block";
  off = "none";
  public dateFrom: string = "2016-10-01";
  click(a: boolean) {
    if (a) { this.hold = false; this.off = "block"; this.on = "none" }
    else { this.hold = true; this.off = "none"; this.on = "block" }
    let ele = <HTMLInputElement>document.getElementById(this._id);
    let val = new KeyValuePair();
    val.key = this._id; val.value = ele.value; val.name = this.label;
    val.target = this._iconRight;

    this.iClick.emit(val);
    this.inputValue.emit(val);
  }

  _iconRight: string; // not used
  _toggle: string;  // not used
  @Input() set iconRight(value: string) {
    this._iconRight = value;
  }
  get iconRight(): string {
    return this._iconRight;
  }
  @Input() direction: string;

  hold: boolean = true;
  _e: string = "0";
  _t: string = "text";
  _s: Style = new Style();
  _b: string;
  _c: string;
  _id: string;
  _radius: string;
  start: boolean = true;
  _rI: boolean = false;
  _lI: boolean = false;
  _label: boolean;
  _w: string;
  _iC: string;
  _l: number;
  lg = 'l';
  mg = 'm';
  rg = 'r';
  clr: boolean = true;
  err: string;
  icon: string;
  _lbl = 'none';
  _th = 'light';
  hasIcon = false;
  hasVal = false;
  light = true;
  plC = '#bdbdbd';
  b = '';
  txt = true;
  dt2 = false;
  dt3 = false;
  brw = navigator.userAgent;
  _sE: boolean = false;
  _cid: string = '';
  ngOnInit() {
    if (this.type == undefined) { this.type = "text"; }
    if (this.start) {
      this.b = navigator.userAgent;
      if (this.direction != undefined && this.direction.indexOf('validate') > -1) {
        this._e = "block";
      }
      else{ this._e = "none";}
      if (this.theme != undefined && this.theme.indexOf('d') > -1) {
        this.light = false;
        this.plC = '#f5f5f5';
      }
      if (this.placeholder != undefined) {
        this.color = 'gainsboro';
      }
      else {
        this.color = 'inherit';
      }
      if (this._value != undefined) {
        this.hasVal = true;
        this.style1 = false; this.style2 = true;
      }
      if (this.style == undefined) { this.style = this._s; }

        this._id = this.id || this.makeid();
        this._cid = this.makeid();
        this.rg = this.makeid();
        this.mg = this.makeid();
        this.lg = this.makeid();
        this.err = this.makeid();

      if (this.color == undefined) { this.color = this.style.fontColor; }

      if (this.label != undefined) {
        this._lbl = 'block';
      }
      else if (this.placeholder != undefined) {
        this.label = this.placeholder;
      }
      this._b = this.border || this.style.border;
      this._c = this.bg || this.style.backgroundColor;
      if (this.name == undefined && this.label == undefined) {
        this.name = this._id;
      }
      else if (this.name == undefined && this.label != undefined){
        this.name = this.label;
      }
      if (this.border != undefined) { this._b = this.border; }

      this._radius = this.radius || this.style.borderRadius;
      if (this.clear == false) { this.clr = false; } else { this.clr = true; }
      if (this.b.indexOf("Firefox") > -1 && this.type.indexOf('date') != -1) {
        this.clr = false;
      }
      if (this.type == "date") {
        this._t = "date";
        this.txt = false;
        this.dt2 = true;
        this.clr = true;
        if (this._value != undefined) {
          if (this.b.indexOf('Edg/') > -1) {
            this.dt2 = false;
            this.dt3 = true;
            this.dateFrom = this.convertDate(this.dateFrom);
          }
          else {
            this.dt2 = true;
            this.dt3 = false;
            this.dte = this._value;
          }
        }
        else { this.dte = null; }
      }

      if (this.size != undefined && this.size != this.style.size) {
        this.style.size = this.size;
      }

      if (this.type != undefined) {
        this._t = this.type;
      }
      else if (this.type == undefined && this._t == undefined) {
        this.type = "text";
      }
      this.setIconSize(this.size);

      if ((this.b.indexOf("Edg/") > -1 || this.b.indexOf("Net") > -1 ) && this._t.indexOf("date") > -1) {
        this._w = this.width || "inherit";
      }
      else {this._w = this.width || '100%';}

      if (this.type == "date") {
        this._l = 8;
      }
      if (this.type == "tel") {
        this._l = 14;
      }
      else {
        this._l = this.length || 250;
      }
    }
    this.start = false;
  }
  init = true;
  convertDate(dt: any) {
    let m = '';
    let d = '';
    dt = new Date(this._value);
    let t =  dt.getFullYear();
    let u = dt.getMonth();

 /*    if (u < 10) { m = "0" + u.toString(); }
    else { m = u.toString(); }
    if (this._value.getDate() < 10) { d = "0" + d.toString(); } else { d = this._value.getDay(); }
    let s = t.toString() + "-" + m + "-" + d;
    m = (this._value.getMonth() > 8) ? (this._value.getMonth() + 1) : ('0' + (this._value.getMonth() + 1)) + '-';
    d = ((this._value.getDate() > 9) ? this._value.getDate() : ('0' + this._value.getDate()));
 */
    return t.toString() + "-" + m + d;
  }

  iS = .1;
  szI = 24;
  top = '1px';
  padding = ".55rem .6rem .6rem .8rem";
  ipadding = ".4rem .4rem .36rem 0rem";

  setIconSize(s: string) { 
    if (this.type == undefined && this._t == undefined) { this.type = "text"; }
    var x = navigator.userAgent;
    switch (s) {
      case 'small': {
        this.szI = 20;
        this.iS = 1;
        this.top = "2px";
        this.padding = ".14rem .3rem .1rem .1rem"
        if ((this.type.indexOf('date') > -1 || this._t.indexOf('date') > -1) && x.indexOf("Chrome") > -1) {
          this.padding = ".15rem .3rem .01rem .1rem"
        }
        else {
          this.padding = ".14rem .3rem .1rem .1rem"
        }
        break;
      }
      case 'medium': {
        this.iS = 1;
        this.szI = 28;
        this.top = "3.5px";
 
        if ((this.type.indexOf('date') > -1 || this._t.indexOf('date') > -1) && x.indexOf("Chrome") > -1) {     
            this.padding = ".35rem .5rem .33rem .4rem";
        }
        else{
          this.padding = ".4rem .6rem .4rem .4rem";
        }
        break;
      }
      case 'large': {
        this.iS = .11;
        this.szI = 32;
        this.top = "3.5px";
      if ((this.type.indexOf('date') > -1 || this._t.indexOf('date') > -1) && x.indexOf("Chrome") > -1) {     
        //this.padding = ".35rem .5rem .33rem .4rem";
        this.padding = ".5rem .75rem .6rem .1rem";
      }
      else{
        //this.padding = ".4rem .6rem .4rem .4rem";
        this.padding = ".55rem .75rem .65rem .42rem";
      }
        break;
      }
      default: {
        this.iS = 1;
        this.szI = 28;
        this.top = "3.5px";
          if (this.type.indexOf('date') > -1 || this._t.indexOf('date')) {
            this.padding = ".4rem .6rem .4rem .3rem";
          }
          else { 
            this.padding = ".4rem .6rem .4rem .4rem";
          }
        break;
      }
    }
  }
  ngAfterViewInit() {
    let el = <HTMLInputElement>document.getElementById(this._id);
    if (el != undefined) { 
      el.type = this._t;
      el.id = this._id;
      el.autocomplete = this.autocomplete; // necessary for edge
      el.name = this.name;
    }

  }
  debug = 1;
  reset() {
    let ele = <HTMLInputElement>document.getElementById(this._id);
    if(this._value == undefined){
      ele.value = this.placeholder || "";
    }
    else {
      ele.value = " ";
    }
    this.style2 = false; this.style1 = true;
    this.hidden = false;
    this.dsply = 'block';
    let val = new KeyValuePair();
    val.key = this._id; val.value = ""; val.name = this.label;
    this.cl();

    this.inputValue.emit(val);

  }
  trp = '12';
  onOut(){ 
    let el = <HTMLSpanElement>document.getElementById(this._cid);
    this.trp = 'Out'; 
    if(el == undefined){ this.trp = '331'; }
    let non = "none"
    el.style.boxShadow = non;
    } 
    onIn(){ 
      let el = <HTMLSpanElement>document.getElementById(this._cid);
      if(el == undefined){ this.trp = this._cid; } 
      let colour = "0 0 5px rgb(207,216,220,1)";
      el.style.boxShadow = colour;
      this.trp = 'In'; 
      } 
  onKeydown(e: any) {
    let ele = <HTMLInputElement>document.getElementById(this._id);

    if (ele.value != this.placeholder) { this.style2 = true; this.style1 = false; }
    
    if (this.length != undefined && ele.value.length > this.length) {
      event.preventDefault();
      return;
    }
    if (e.keyCode === 13 || e.key === 13) {
      this.allSet();
    }
    else {
      if (ele.value == this.placeholder && !this.hasVal) {
        ele.value = "";
      }
    }
  }
  isValidDate(dateString) {
    var regEx = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateString.match(regEx)) return false;
    var d = new Date(dateString);
    var dNum = d.getTime();
    if (!dNum && dNum !== 0) return false;
    return d.toISOString().slice(0, 10) === dateString;
  }
  onMouseDown(e: any) {
    let ele = <HTMLInputElement>document.getElementById(this._id);

    if (ele.value == this.placeholder && !this.hasVal) {
      ele.value = "";
      ele.selectionStart = 1;
    }
    ele.style.color = 'inherit';
   
  }
  onChange() {  
   let ele = <HTMLInputElement>document.getElementById(this._id);

  }
  errMsg = "";
  hidden = true;
  _summary = "";
  dte: Date = new Date();
  onKeyUp(e: any) {
    let ele = <HTMLInputElement>document.getElementById(this._id);

    if (this.onErr) {
      if (this.type == "number") {
        if (isNaN(parseFloat(ele.value))) { this.showErr("Please enter only numeric values."); }
        else {
          this.cl();
        }
      }
      else if (this.type == "alpha") {

        if (ele.value.match(/[0-9]+/g) != null) {
          this.showErr("Please enter alpha characters only (A-Z or a-z).");
        }
        else {
          this.cl();
        }
      }
      else if (this._t == "email") {
        let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

        if (ele.value.length > 128 || !EMAIL_REGEXP.test(ele.value)) {
          this.showErr("Please enter a valid email address.");
        } else if (ele.value.indexOf('.') < 0 || ele.value.lastIndexOf('.') == ele.value.length - 1) {
          this.showErr("Please enter a valid email address.");
        }
        else {
          this.hidden = true;
          this.dsply = 'none';
          this.cl();
        }
      }
      else if (this._t == "tel" || this._t.indexOf('hone') > -1) {
        const isN = /^[0-9]$/i.test(e.key);
        if(!isN && e.key != "Backspace"){
          this.showErr("Please enter only numeric values.");
        }
        else{
          let y = ele.value.match(/[0-9]+/g).toString();
        
          if(y.length > 10){
           
            //ele.value =  '(' + y.substr(0,3) + ') ' + y.substr(3,3) + '-' + y.substr(6,4);
            event.preventDefault();
          }
          else if(y.length == 10 && e.key != "Backspace"){ 
            ele.value =  '(' + y.substr(0,3) + ') ' + y.substr(3,3) + '-' + y.substr(6,4);
            event.preventDefault();
            this.cl();
          }
          else if(y.length > 10){
            event.preventDefault();
          }
        }
      }
      else if (this._t == "date") {
        if (ele.value.length > 10) {
          this.showErr("No. Please enter a valid date.");
          return;
        }
          else if (ele.value.length == 10) {
          let b = navigator.userAgent;
          let valid = true;
          let m = 0; let d = 0; let y = 0;
          if (b.indexOf("Chrome") > -1 || b.indexOf("Firefox") > -1 || b.indexOf("Opera") > -1) {
            m = parseInt(ele.value.substr(5, 2)); 
            d = parseInt(ele.value.substr(8, 2));
            y = parseInt(ele.value.substr(0, 4)); 
          }
          else {
            m = parseInt(ele.value.substr(0, 2));
            d = parseInt(ele.value.substr(3, 2));
            y = parseInt(ele.value.substr(6, 4))
          }
          if (y > 2400 || y < 1700) { valid = false; }
          if (m > 12 && m < 0) { valid = false; }
          if (d > 31 && d < 0) { valid = false; }

          if (!valid) {
            this.showErr("Please enter a valid date.");
            return;
          }
          else {
            let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            if ((!(y % 4) && y % 100) || !(y % 400)) {
              daysInMonth[1] = 29;
            }
            let validDay = d <= daysInMonth[m - 1];
            if (!validDay) {
              this.showErr("Please enter a valid date.");
            }
            else {
              this.hidden = true;
              this.dsply = 'none';
              this.cl();
            }
          }
        }
      }
    }
  }
  dsply = 'block';
  cl() {
    this.hidden = true;
    this.dsply = 'none';
    this.errMsg = '';
    this.showErr(this.errMsg);
  }

  private showErr(errM: string) {
    this.hidden = false;
    this.dsply = 'block';
    this._summary = this._summary + "   " + errM;
    this.errMsg = errM;
    let l = <HTMLDivElement>document.getElementById(this.err);
    l.innerHTML = errM;
  }
  allSet() {
    let ele = <HTMLInputElement>document.getElementById(this._id);
    let val = new KeyValuePair();
    val.key = this._id; val.value = ele.value; val.name = this.label;
    this.inputValue.emit(val);
  }
  public save() {
    let ele = <HTMLInputElement>document.getElementById(this._id);
    let valued = true;
    var result = ele.value.replace(/ /g, "");

    if (this.type == "date" && this.onErr) {
      if (!this.isValidDate(ele.value)) {
        this.onErr = true;
        this.showErr("This is not a valid date.");
        return;
      }
    }
    if ((this.placeholder != undefined && ele.value == this.placeholder) || (result.length == 0)) {
      valued = false;
    }
    if ((this.required && ele.value == '') || (this.required && !valued)) {
      this.onErr = true;
      this.showErr("This field is required.");
    }
    else {
      this.cl();
      let val = new KeyValuePair();
      val.key = val.key = this._id; val.value = ele.value; val.name = this.label;
      if (!valued) {
        val.value = "";
      }
    }
    this.out.emit('this is bob');
  }
  makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 7; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }
}
class KeyValuePair { id?: string; name?: string; key?: string; value?: string; checked?: boolean; chkd?: boolean; disabled?: boolean; index?: number; label?: string; on?: boolean; target?: string; }
class Style { primary: string = '#1976d2'; backgroundColor: string = 'transparent'; color: string = '#ffffff'; fontColor?: 'inherit'; gray: string = '#C6C9E8'; error: string = '#ff0000'; border: string = '1.5px solid #C6C9E8'; borderRadius: string = '3px'; public ltPrimary?: string = '#8c9eff'; public dkPrimary?: string = '#0d47a1'; public secondary?: string = '#ff0000'; public ltSecondary?: string = '#d50000'; dkSecondary?: string = '#d50000'; accent?: string = '#ff0000'; size?: string = 'medium'; type?: string; iconLeft?: string; iconRight?: string; iconColor: string = '#C6C9E8'; toggle?: string; width?: string; }   