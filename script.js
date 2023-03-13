'use strict'

const url="https://api.dictionaryapi.dev/api/v2/entries/en/";
const url1= "https://google-translate1.p.rapidapi.com/language/translate/v2/languages";
const btn=document.getElementById("search-btn");
const contain=document.querySelector(".container");
const result=document.getElementById("result");
const wordday=document.querySelector(".modal-content");
const sound=document.getElementById("sound");
const audio=document.getElementsByTagName('audio'); 




// Way of generating a fetch call with a XML.



// const getsearchdata=function (search){
//     *******Fetching the code using old method **********
// function render2(){
//   const wwe=new XMLHttpRequest();
//   wwe.open("GET",`https://api.dictionaryapi.dev/api/v2/entries/en/hello`,
//   true);
//   wwe.onreadystatechange = function() {
//       if (wwe.readyState === XMLHttpRequest.DONE) {
//         if (wwe.status === 200) {
//           console.log(wwe.responseText);
//         } else {
//           // console.log('Error: ' + request.status + ' ' + request.statusText);
//         }
//       }
//     };
  
//   wwe.send();
//   
//       const data=JSON.parse(this.responseText);
//       console.log(wwe.addEventListener('load',function(){data);
//       result.innerHTML=` 
//       <div class="word">
//       <h3>${inpWord}</h3>
//       <button onclick="playSound()">
//           <i class="fas fa-volume-up"></i>
//       </button>
//      </div>
//      <div class="details">
//       <p>${data[0].meanings[0].partOfSpeech}</p>
//       <p>/${data[0].phonetic}/</p>
//      </div>
//      <p class="word-meaning">
//      ${data[0].meanings[0].definitions[0].definition}
//      </p>
//      <p class="word-example">
//       ${data[0].meanings[0].definitions[0].example || ""}
//      </p>`;
//      // contain.insertAdjacentHTML('beforeend', html);
//      sound.setAttribute("src",`https:${data[0].phonetics[0].audio}`);
//   });
//   }
  // render2();
//  **********Old method ends here*************



function render(){
let inpWord=document.getElementById("inp-word").value;
 fetch(`${url}${inpWord}`)
.then((response)=>response.json())
.then((data)=>{
  console.log(data);

  result.innerHTML=` 
 <div class="word">
 <h3>${inpWord}</h3>

</div>
<div class="details">
 <p>${data[0].meanings[0].partOfSpeech}</p>
 <p>/${data[0].phonetic}/</p>
</div>
<p class="word-meaning">
${data[0].meanings[0].definitions[0].definition}
</p>
<p class="word-example">
 ${data[0].meanings[0].definitions[0].example || ""}
</p>`;
// contain.insertAdjacentHTML('beforeend', html);
play();
});
};
// sound.forEach(icon1 => {
// icon1.addEventListener("click",({target})=>{
//   if(target.id=='sound')
//   {
//     let utter;
//     utter=new SpeechSynthesisUtterance(inpWord.value);
  
//   }
//   speechSynthesis.speak(utterance);
//   });
// }
// );

btn.addEventListener('click',()=>{
  render()
// let inpWord=document.getElementById("inp-word").value;
// fetch(`${url}${inpWord}`)
// .then((response)=>response.json())
// .then((data)=>{
//   console.log(data);
// result.innerHTML=` 
//  <div class="word">
//  <h3>${inpWord}</h3>
//  <button onclick="playSound()">
//      <i class="fas fa-volume-up"></i>
//  </button>
// </div>
// <div class="details">
//  <p>${data[0].meanings[0].partOfSpeech}</p>
//  <p>/${data[0].phonetic}/</p>
// </div>
// <p class="word-meaning">
// ${data[0].meanings[0].definitions[0].definition}
// </p>
// <p class="word-example">
//  ${data[0].meanings[0].definitions[0].example || ""}
// </p>`;
// // contain.insertAdjacentHTML('beforeend', html);
// sound.setAttribute("src",`https:${data[0].phonetics[0].audio}`);
// })
});

document.addEventListener('keydown',function(e){
  if(e.key==='Enter')
  {
    render();
  }
})






// Random word API.






const uni=new XMLHttpRequest();
uni.open("GET",`https://random-word-api.herokuapp.com/word`,
  true);
  uni.onreadystatechange = function() {
      if (uni.readyState === XMLHttpRequest.DONE) {
        if (uni.status === 200) {
          console.log(uni.responseText);
        } else {
          // console.log('Error: ' + request.status + ' ' + request.statusText);
        }
      }
    };
  
  uni.send();
   uni.addEventListener('load',function(){
const data=JSON.parse(this.responseText);
console.log(data);
wordday.innerHTML=` <center style="color:blue;font-size:50px;"><u>Word of the day</u></center> <br>
<p style="text-align:center;color:#212c6c;font-size:30px;">${data}</p>`

   });
// Random word API ends Headers.












const modal = document.getElementById("myModal");
const modalclose=document.querySelector(".close");
const day=document.getElementById("wordofday");


window.addEventListener("load", function() {
  modal.style.display = "block";

});

modalclose.onclick = function() {
  modal.style.display = "none";
}



window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

document.addEventListener('keydown',function(e){
  if(e.key==="Escape")
  {
    modal.style.display = "none";
  }
});
day.addEventListener('click',function()
{
    modal.style.display = "block";

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  
  document.addEventListener('keydown',function(e){
    if(e.key==="Escape")
    {
      modal.style.display = "none";
    }
  });
});






















































// API for translating the english to hindi .




