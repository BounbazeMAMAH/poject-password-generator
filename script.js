const jsBtn = document.querySelector('.js-btn');
const jsDisplay = document.querySelector('.js-display');
const valeur = jsDisplay.value;
const jsCopy = document.querySelector('.js-copy');
const jsDialogue = document.querySelector('.js-dialogue')
const alphabetCapital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const alphabetNimuscule = "abcdefghijklmnopqrstuvwxyz";
const chiffres = "123456789";
const symbol = "!\"#$%&'()*+,-./:;<=>?@[\\]^_{|}~";
const taille = 12;
const ensemble = alphabetCapital + alphabetNimuscule + chiffres + symbol
 
function proposePass(){
  let password = '';
  password += alphabetCapital[Math.floor(Math.random()*alphabetCapital.length)];
  password += alphabetNimuscule[Math.floor(Math.random()*alphabetNimuscule.length)];
  password += chiffres[Math.floor(Math.random()*chiffres.length)];
  password += symbol[Math.floor(Math.random()*symbol.length)];
  while(taille > password.length){
    password += ensemble[Math.floor(Math.random()*ensemble.length)];
  }
  jsDisplay.value = password
}
const copyPass = async () =>{
  try{
    await navigator.clipboard.writeText(jsDisplay.value);
    jsDisplay.select();
    jsDialogue.innerHTML = `<p class="paragraph">Copied</p>
    <div class="triangle-down"></div>`;
    setTimeout(()=>{
      jsDialogue.innerHTML = ''
    }, 1000)
  }catch (err) {
    jsDialogue.innerHTML = `<p class="paragraph">Failed</p>
    <div class="triangle-down"></div>`;
    setTimeout(()=>{
      jsDialogue.innerHTML = ''
    }, 1000)
  }
}
jsBtn.addEventListener('click', ()=>{
  proposePass()
  
})
jsCopy.addEventListener('click',()=>{
  copyPass()
})
