var order=["", "", "", "", ""];
var n=[0, 0, 0, 0, 0];
var last="";
var index=0;
var price=0;
var place="";
var datetime="";
var howtopay="";


var burger=0;
$("#add_1_button").click(function(){
  burger=1;
})
$("#add_2_button").click(function(){
  burger=2;
})
$("#add_3_button").click(function(){
  burger=3;
})
$("#add_4_button").click(function(){
  burger=4;
})

$("#history").click(function(){
  $.post('/gethistory', {"id":now.id, "burger":burger}, (data)=> {
    if (data[0][`last_order${burger}`]!=null) {
      var array=[];
      array=data[0][`last_order${burger}`].split("");
      console.log(array);
      if (array[0]==="T") {
        cheese=true;
      }
	  else {
		cheese=false;
	  }
      if (array[1]==="T") {
        tomato=true;
      }      
	  else {
		tomato=false;
	  }
      if (array[2]==="T") {
        cucumber=true;       
      }      
	  else {
		cucumber=false;
	  }
      if (array[3]==="T") {
        lettuce=true;        
      }   
	  else {
		lettuce=false;
	  }	  
      if (array[4]==="1") {
        sauce = 1;        
      }
      else if (array[4]==="2") {
        sauce = 2;        
      }
      else if (array[4]==="3") {
        sauce = 3;        
      }
      else if (array[4]==="4") {
        sauce = 4;        
      }
	  set_func();
    } 
  })
})

$("#add_to_cart").click(function(){
  if (cheese) {
    last=last+"T";
  }
  else {
    last=last+"F";
  }
  if (tomato) {
    last=last+"T";
  }
  else {
    last=last+"F";
  }
  if (cucumber) {
    last=last+"T";
  }  
  else {
    last=last+"F";
  }
  if (lettuce) {
    last=last+"T";
  }  
  else {
    last=last+"F";
  }

  switch(sauce) {
    case 1:
      last=last+"1";
      break;
    case 2:
      last=last+"2";
      break;
    case 3:
      last=last+"3";
      break;
    case 4:
      last=last+"4";
      break;
  }
  console.log(last);
  $.post('/history', {"id":now.id, "burger":burger, "last":last})
  last="";
})

function topay() {
	$.each($("#shopping_cart").children(), function(i, value) {
		if ($(value).css('display')!='none') {
			console.log($(value).css('display'));
			order[index]=$(this).children(".order_name").text()+"/"
			+$(this).children(".no_ingredient").text()+"/"+$(this).children(".sauce").text()
			n[index]=Number($(this).children(".order_amount").text())
			index++;
		}		
	})
	price=Number($('#total_cost').html());
	console.log(order);
	console.log(n);
	console.log(price);
}
