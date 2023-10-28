  document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('burger').addEventListener('click', function(){
        const b = document.querySelector('header');
        b.classList.toggle('open');
      if(b.classList.contains('open')){
        document.querySelector('.troll__play').style.opacity= '.2';
      }
      else 
        document.querySelector('.troll__play').style.opacity= '1';
    })
  })

