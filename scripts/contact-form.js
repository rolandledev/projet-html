/*document.getElementById("send").addEventListener("click", function() {
    alert("Le message a été envoyé !");
  });*/


  document.getElementById("myform").addEventListener("submit", function(e) {
    e.preventDefault();
    confirm();
    
    
  });

  function confirm (){
    document.getElementById("send").value = "message envoyé";
  }