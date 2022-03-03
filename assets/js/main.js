$(".btn-menu").click(function () {
  var check = $(".content");
  if (check.hasClass("active") === true) {
    $(".content").removeClass("active");
  } else {
    $(".content").addClass("active");
  }
});

var index = 0;
var total = $(".step").length;
var arrStep = $(".step");

arrStep.each((index, elm) => {
  var html = `<div class="dot" data-index="${index}"></div>`;
  $(".dots").append(html);
});
$(".prev").click(function () {
  if (index > 0) {
    index = index - 1;
    var posY = index * 100;
    $(".main-content").css({ transform: "translateY(-" + posY + "vh)" });
  }
});

$(".next").click(function () {
  if (index < total - 1) {
    index = index + 1;
    var posY = index * 100;
    $(".main-content").css({ transform: "translateY(-" + posY + "vh)" });
  }
});

$(".nav").on("click", ".dot", function () {
  index = $(this).attr("data-index");
  //$(this).attr('data-index')=$(this).data("index")
  var posY = index * 100;
  $(".main-content").css({ transform: "translateY(-" + posY + "vh)" });
});

// setInterval(function () {
//   var posX = Math.random()*200;
//   var posY = Math.random()*200;
//   $(".d1").css({ opacity: 1, bottom: `${posX}%`, left: `${posY}%` });
//   setTimeout(function () {
//     $(".d1").css({ opacity: 0 });
//   }, 1500);
// }, 3000);


// setInterval(function () {
//     var posX = Math.random()*200;
//     var posY = Math.random()*200;
//     $(".d2").css({ opacity: 1, bottom: `${posX}%`, left: `${posY}%` });
//     setTimeout(function () {
//       $(".d2").css({ opacity: 0 });
//     }, 2000);
//   }, 4000);

//   setInterval(function () {
//     var posX = Math.random()*200;
//     var posY = Math.random()*200;
//     $(".d3").css({ opacity: 1, bottom: `${posX}%`, left: `${posY}%` });
//     setTimeout(function () {
//       $(".d3").css({ opacity: 0 });
//     }, 1200);
//   }, 5000);

//   setInterval(function () {
//     var posX = Math.random()*200;
//     var posY = Math.random()*200;
//     $(".d4").css({ opacity: 1, bottom: `${posX}%`, left: `${posY}%` });
//     setTimeout(function () {
//       $(".d4").css({ opacity: 0 });
//     }, 1700);
//   }, 6000);

  $("ul a").click(function(){
    var name_step = $(this).data('step');
    index = Number(name_step.replace('step-',""))-1;
    $(".main-content").css({ transform: "translateY(-" + index*100 + "vh)" });
  });

  $(".btn-send").click(function(){
    var name = $('ip-name').val();
    var subject = $('ip-subject').val();
    var email = $('ip-email').val();
    var phone = $('ip-phone').val();
    var mess = $('ip-mess').val();

    if(name!=="" && subject!=="" && email!="" && phone!="" && mess!='')
    {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var checkEmail = regex.test(email);
        if(checkEmail===true){
          Email.send({
            Host : "smtp.yourisp.com",
            Username : "username",
            Password : "password",
            To : 'them@website.com',
            From : "you@isp.com",
            Subject : subject,
            Body : `name: ${name} <br/> phone: ${phone} <br/> 
            email: ${email} <br/> subject: ${subject} <br/> ${mess}`
        }).then(
          message => alert(message)
        );
        }else{
          $(".err-mess").html('Email không đúng định dạng!');
        }
    }else{
      $(".err-mess").html('Vui lòng nhập đủ các thông tin!');
    }

    
  });
