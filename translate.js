'use strict'

const fromtext=document.querySelector(".from-text");
const totext=document.querySelector(".to-text");
const translatebtn=document.getElementById("trans");
const selecttag=document.querySelectorAll("select");
const icons=document.querySelectorAll(".row i");















selecttag.forEach((tag,id)=>{
for(let country_code in countries)
{
  let selected=id==0?country_code=="en-GB"?"selected":" ":
  country_code=="hi-IN"?"selected":" ";
  let option = `<option ${selected} value="${country_code}">${countries[country_code]}</option>`;
  tag.insertAdjacentHTML("beforeend",option);
  console.log(selected);
}

});







translatebtn.addEventListener("click", () => {
  let text = fromtext.value.trim();
  let translateFrom = selecttag[0].value;
  let translateTo = selecttag[1].value;
  // if(!text) return;
  // totext.setAttribute("placeholder", "Translating...");
  let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;
  fetch(apiUrl).then(res => res.json()).then(data2 => {
    console.log(data2);
      totext.value = data2.responseData.translatedText;
  });
});




icons.forEach(icon => {
  icon.addEventListener("click", ({target}) => {
      // if(!fromText.value || !toText.value) return;
      if(target.classList.contains("fa-copy"))
      {
          if(target.id == "from") 
          {
              navigator.clipboard.writeText(fromtext.value);
          }
        else
        {
              navigator.clipboard.writeText(totext.value);
          }
      } 
    else 
    {
          let utterance;
          if(target.id == "from") 
          {
              utterance = new SpeechSynthesisUtterance(fromtext.value);
              utterance.lang = selecttag[0].value;
          }
      else
      {
              utterance = new SpeechSynthesisUtterance(totext.value);
              utterance.lang = selecttag[1].value;
        }
          speechSynthesis.speak(utterance);
      }
  });
  
  
  
});


// Code of translater in dictionary.



















































