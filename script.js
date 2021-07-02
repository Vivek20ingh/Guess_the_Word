

const msg = document.querySelector('.msg')
const guess = document.querySelector('input')
const btn = document.querySelector('.btn')
const Hint =document.querySelector('.hint')

// document.getElementsByClassName("hidden").style.display = "none";


let play= false;
let newWords="";
let randwords="";

let word = ['python','c++','php','javascript','java','html','css','reactjs',
'sql','angular','swift','mongodb','express','c#'];

const createnewWords = () =>{
    let rannum= Math.floor(Math.random() * word.length);
    
    let temword1= word[rannum];
    // console.log(temword1);
    return temword1;

}

const scramplewords =(arr) =>{
    for( let i=arr.length-1;i>=0;i--)
    {
        let j= Math.floor(Math.random()*(i+1));
        // console.log(j + " " + i);
        let temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
    }
    return arr;

}

var dis=document.getElementsByClassName('hidden1');
console.log(dis.item);
btn.addEventListener('click',function()
{
    Hint.innerHTML="Hint: Words are related to programming";
    if(!play)
    {
        play=true;
        btn.innerHTML="Guess";
        guess.classList.toggle('hidden');
        newWords = createnewWords();
        randwords = scramplewords(newWords.split("")).join("");
        // console.log(randwords.join(""));
        msg.innerHTML =`Guess the word: ${randwords}`;
        
    }
    else{
        let temoword =guess.value;
        if(newWords === temoword)
        {
            console.log("yes");
            play=false;
            msg.innerHTML = `Awesome It's Correct . It is ${newWords}`
            btn.innerHTML="Star Again";
            guess.classList.toggle('hidden');
            guess.value ="";

        }
        else{
            msg.innerHTML = `Sorry. It's not Correct . Plz try again: ${randwords}`
        }
    }
})