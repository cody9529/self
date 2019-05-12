//page 0
//visiter function

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    FB.api('/me', function(response) {
      $.post('/getstatus', response, (data)=> {
        if (typeof(data[0])!="undefined") {
          if (click==="login") {
			testAPI();
            //setTimeout(testAPI, 5000);
          }
          else {             
		    FB.logout(function(response) {
				console.log(response);
			});
            alert("此Facebook帳號已註冊過");
          }
        }
        else {          
          if (click==="login") {
			FB.logout(function(response) {
				console.log(response);
			});
			alert("此Facebook帳號尚未註冊");
          }
          else {
            testAPI();
          }
        }
      });
    });
  });
}

window.fbAsyncInit = function() {
  FB.init({
    appId      : "587487145096824",
    cookie     : true,  // enable cookies to allow the server to access the session
    xfbml      : true,  // parse social plugins on this page
    version    : "v3.2" // The Graph API version to use for the call
  });
  //checkLoginState();		
};

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

var now={};
function testAPI() {
  //document.getElementById("logout").style.display="block";
  FB.api('/me', { locale: 'en_US', fields: 'name, email' }, function(response) {
    console.log(response);
	now.id=response.id;
    now.name=response.name;
	event.preventDefault()
	$.post('/fblogin', response);
  });  
	if (click==="login") {
		setTimeout(function(){$('#menu_region').fadeIn(300);
			$('#cart_region').fadeIn(300);}, 1550)
		$('#signin_text').delay(350).animate({
			opacity: 0,
			bottom: '79%'
		}, 300);
		$('#mail_text').delay(400).animate({
			opacity: 0,
			bottom: '67%'
		}, 300);
		$('#mail_input').delay(450).animate({
			opacity: 0,
			bottom: '59%'
		}, 300);
		$('#passward_text').delay(500).animate({
			opacity: 0,
			bottom: '45%'
		}, 300);
		$('#passward_input').delay(550).animate({
			opacity: 0,
			bottom: '39%'
		}, 300);
		$('#forgetpassward_text').delay(900).animate({
			opacity: 0,
			bottom: '35%'
		}, 200);
		$('#signinbotton').delay(650).animate({
			opacity: 0,
			bottom: '18%'
		}, 300);
		$('#fbbotton').delay(700).animate({
			opacity: 0,
			bottom: '2.5%'
		}, 300);
		$('#signup1').delay(800).animate({
			opacity: 0,
			bottom: '78%'
		}, 300);
		$('#signin_bg').delay(1000).animate({
			opacity: 0,
			left: '10%'
		}, 500);
		$('#signup').delay(1050).hide();
	}
	if (click==="register") {
		setTimeout(function(){$('#menu_region').fadeIn(300);
			$('#cart_region').fadeIn(300);}, 1100)
		$('#signup_text').delay(0).animate({
			opacity: 0,
			bottom: '81.5%'
		}, 300);
		$('#name_text_up').delay(100).animate({
			opacity: 0,
			bottom: '67%'
		}, 300);
		$('#name_input_up').delay(100).animate({
			opacity: 0,
			bottom: '62%'
		}, 300);
		$('#mail_text_up').delay(200).animate({
			opacity: 0,
			bottom: '53%'
		}, 300);
		$('#mail_input_up').delay(200).animate({
			opacity: 0,
			bottom: '48%'
		}, 300);
		$('#passward_text_up').delay(300).animate({
			opacity: 0,
			bottom: '39%'
		}, 500);
		$('#passward_input_up').delay(300).animate({
			opacity: 0,
			bottom: '34%'
		}, 500);
		$('#forgetpassward_text').delay(550).animate({
			opacity: 0,
			bottom: '36%'
		}, 200);
		$('#signupbotton').delay(350).animate({
			opacity: 0,
			bottom: '17%'
		}, 400);
		$('#fbbotton_up').delay(450).animate({
			opacity: 0,
			bottom: '6.5%'
		}, 300);
		$('#signup2').delay(450).animate({
			opacity: 0,
			bottom: '77%'
		}, 300);
		$('#signup_bg').delay(700).animate({
			opacity: 0,
			left: '10%'
		}, 400);
		$('#signin').delay(1300).hide();
	}
  /*document.getElementById("visiter").style.display="none";
  document.getElementById("memberlogin").style.display="none";
  document.getElementById("registered").style.display="none";
  document.getElementById("signin").style.display="none";
  document.getElementById("signup").style.display="none";*/  
  /*document.getElementById("menu_region").style.display="block";
  document.getElementById("cart_region").style.display="block";
  /*$.ajax({
    type: "GET",
  	url: "./order.html", 
  	datatype: "html",
    success: function(data) {
		  document.getElementById('order').innerHTML = data;
		}
	});
  document.getElementById("show").style.display="block";*/
}

/*function logout() {
	$.post('/logout', {"id":now.id});
	now={};
	$('.mid_icon').fadeIn(300)
}*/

var click="";
function fbregister() {
	click="register";
	FB.login(function(response) {
		checkLoginState();
	});
}

function fblogin() {
	click="login";
	FB.login(function(response) {
		checkLoginState();
	});
}

$('#signinbotton').on('click',function(){
	$.post('/signin', {mail:$("#mail_input input[name=signin_mail]").val(), 
	password:$("#passward_input input[name=signin_password]").val()});
})

$('#signupbotton').on('click',function(){
	$.post('/signup', {name:$("#name_input_up input[name=signup_name]").val(), mail:$("#mail_input_up input[name=signup_mail]").val(), 
	password:$("#passward_input_up input[name=signup_password]").val()});
})

$('#visiter_img').on('click',function(){
	$.post('/fblogin', {"id":"-1", "name":"visitor"}, (data)=> {
		now["id"]=data.id;
		now["name"]="visitor"
		console.log(now);
		//document.getElementById('status').innerHTML = 'You are NO.' + now.id + ' visitor';
	})
	$('.mid_icon').hide(500)
	setTimeout(function(){$('#menu_region').fadeIn(500);
			$('#cart_region').fadeIn(500)}, 500)
	/*document.getElementById("visiter").style.display="none";
	document.getElementById("memberlogin").style.display="none";
	document.getElementById("registered").style.display="none";
	document.getElementById("menu_region").style.display="block";
	document.getElementById("cart_region").style.display="block";*/
});

$("#visiter_img").hover(
    function() {
       $(this).attr("src","./img/工作區域 4.png");
    },
    function() {
       $(this).attr("src","./img/工作區域 1.png");
    }
);
 //memberlogin function
$("#memberlogin_img").hover(
	function() {
	   $(this).attr("src","./img/工作區域 5.png");
	},
	function() {
	   $(this).attr("src","./img/工作區域 2.png");
	}
);
/*$('#memberlogin_img').on('click',function(){
	$('.mid_icon').hide()
	$('#signin').fadeIn(300)
});*/

 //registered function
$("#registered_img").hover(
	function() {
	   $(this).attr("src","./img/工作區域 6.png");
	},
	function() {
	   $(this).attr("src","./img/工作區域 3.png");
	}
);
/*$('#registered_img').on('click',function(){
	$('.mid_icon').hide()
	$('#signup').fadeIn(300)
});*/

$('#signup1').on('click',function(){
	$('#signin').hide();
	$('#signup').show();
    $('#signup_bg').animate({
        opacity: 1,
        left: '0%'
    }, 600);
    $('#signup_text').delay(300).animate({
        opacity: 1,
        bottom: '84.5%'
    }, 300);
    $('#name_text_up').delay(400).animate({
        opacity: 1,
        bottom: '70%'
    }, 300);
    $('#name_input_up').delay(400).animate({
        opacity: 1,
        bottom: '65%'
    }, 300);
    $('#mail_text_up').delay(500).animate({
        opacity: 1,
        bottom: '56%'
    }, 300);
    $('#mail_input_up').delay(500).animate({
        opacity: 1,
        bottom: '51%'
    }, 300);
    $('#passward_text_up').delay(600).animate({
        opacity: 1,
        bottom: '42%'
    }, 500);
    $('#passward_input_up').delay(600).animate({
        opacity: 1,
        bottom: '37%'
    }, 500);
    /*$('#forgetpassward_text').delay(850).animate({
        opacity: 1,
        bottom: '39%'
    }, 200);*/
    $('#signupbotton').delay(650).animate({
        opacity: 1,
        bottom: '20%'
    }, 400);
    $('#fbbotton_up').delay(750).animate({
        opacity: 1,
        bottom: '9.5%'
    }, 300);
    $('#signup2').delay(750).animate({
        opacity: 1,
        bottom: '80%'
    }, 300);
});

$('#signup2').on('click',function(){
	$('#signup').hide();
	$('#signin').show();
    $('#signin_bg').animate({
        opacity: 1,
        left: '0%'
    }, 600);
    $('#signin_text').delay(300).animate({
        opacity: 1,
        bottom: '83.5%'
    }, 300);
    $('#mail_text').delay(400).animate({
        opacity: 1,
        bottom: '69%'
    }, 300);
    $('#mail_input').delay(400).animate({
        opacity: 1,
        bottom: '63%'
    }, 300);
    $('#passward_text').delay(500).animate({
        opacity: 1,
        bottom: '52%'
    }, 300);
    $('#passward_input').delay(500).animate({
        opacity: 1,
        bottom: '46%'
    }, 300);
    $('#forgetpassward_text').delay(650).animate({
        opacity: 1,
        bottom: '39%'
    }, 300);
    $('#signinbotton').delay(550).animate({
        opacity: 1,
        bottom: '20%'
    }, 300);
    $('#fbbotton').delay(650).animate({
        opacity: 1,
        bottom: '9.5%'
    }, 300);
    $('#signup1').delay(650).animate({
        opacity: 1,
        bottom: '80%'
    }, 300);
});