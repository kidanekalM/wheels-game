btnStop=document.getElementById('btnStop');
div1 = document.getElementById('div1');
div2 = document.getElementById('div2');

btnStop.addEventListener('click',function () {    
    if(getComputedStyle(div1).backgroundColor==getComputedStyle(div2).backgroundColor){
        alert('You Win! The colors match.');

    }
    if(getComputedStyle(div1).backgroundColor!=getComputedStyle(div2).backgroundColor){
        alert('You Lose! The colors do not match.');
        
    }
  })
  div1.animate(["10vh","20vh"])