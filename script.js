'use strict'

const url="https://api.dictionaryapi.dev/api/v2/entries/en/";
const btn=document.getElementById("search-btn");
const contain=document.querySelector(".container");
const result=document.getElementById("result");


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
//   wwe.addEventListener('load',function(){
//       const data=JSON.parse(this.responseText);
//       console.log(data);
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

try{
  result.innerHTML=` 
 <div class="word">
 <h3>${inpWord}</h3>
 <button onclick="playSound()">
     <i class="fas fa-volume-up"></i>
 </button>
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
sound.setAttribute("src",`https:${data[0].phonetics[0].audio}`);

}
catch(err)
{
  alert("!Sorry we couldn't find this word.");
}

});
};

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

function playSound(){
sound.play();
}

const color=['red','black','white'];
for(let i=0;i<color.length;i++)
{
  console.log(color[i]);
}
console.log(color[1]);

color.forEach(element => {
  console.log(element);
})
// };