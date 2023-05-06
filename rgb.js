btnStop=document.getElementById('btnStop');
div1 = document.getElementById('div1');
div2 = document.getElementById('div2');

btnStop.addEventListener('click',function () {    
    if(div1.style.backgroundColor==div2.style.backgroundColor){
        alert('You Win! The colors match.');

    }
    if(div1.style.backgroundColor!=div2.style.backgroundColor){
        alert('You Lose! The colors do not match.');
        
    }
  })
  div1.animate(["10vh","20vh"])