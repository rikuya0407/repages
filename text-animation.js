document.addEventListener('DOMContentLoaded',function(){
    const ta = new TextAnimation('.text-animation');
    const ta2 = new TextAnimation('.text-animation2');
    ta.animation();
    ta2.animation();
  });
  
  
  class TextAnimation{
    constructor(el){
      this.el = document.querySelector(el);
      this.char = this.el.innerHTML.trim().split("");
      this.el.innerHTML = this._splitText();
      console.log(this.el.innerHTML);
    }
    _splitText(){
      return this.char.reduce((acuu, curr) => {
        curr = curr.replace(' ', '&nbsp;');
        return `${acuu}<span class="char">${curr}</span>`;
      },"");
    }
    animation(){
      this.el.classList.toggle('inview');
    }
  }