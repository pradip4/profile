$(document).ready(function () {
  $('.counter').counterUp({
  delay: 10,
  time: 8000
  });
  $('.counter').addClass('animated fadeInDownBig');
  $('h3').addClass('animated fadeIn');
  });
  //   $('.scroll-btn').each(function(){
  //     $(this).click(function(){ 
  //       $('home').animate({ scrollTop: 0 }, 'slow'); return true; 
  //     });
  //   });
  $(window).scroll(function(){
  if($(window).scrollTop () > 50){
  $("#myBtn").fadeIn();
  }
  else {
  $("#myBtn").fadeOut();
  }
  });
  $("#myBtn").click(function(){
  $("html").animate({scrollTop:0},500);
  })
  //form validation
  function formvalidation(){
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var number = document.getElementById("number").value;
  var message = document.getElementById("message").value;
  if (name ==""){
  document.getElementById("one").innerHTML="**Please fill Your Name";
  }
  else{
  document.getElementById("one").innerHTML="";
  }
  if (email ==""){
  document.getElementById("two").innerHTML="**Please Fill Your Email";
  }
  else{
  document.getElementById("two").innerHTML="";
  }
  if (number ==""){
  document.getElementById("three").innerHTML="**Please Fill Your Number";
  }
  else{
  document.getElementById("three").innerHTML="";
  }
  if (message ==""){
  document.getElementById("four").innerHTML="**Please Fill Your Message";
  }
  else{
  document.getElementById("four").innerHTML="";
  document.getElementById("four").innerHTML="**This form is Success";
  document.getElementsByClassName("form-control")[0].value="";
  document.getElementsByClassName("form-control")[1].value="";
  document.getElementsByClassName("form-control")[2].value="";
  }
  }