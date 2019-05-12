//1:spicy, 2:wasabi, 3:peanut, 4:no sauce
var sauce = 1;

//0:default, 1:history, 2:custom
var default_or_not = 0;

//0:order, 1:adjust
var custom_state = 0;

//Food custom
var cheese = true;
var tomato = true;
var cucumber = true;
var lettuce = true;

//Amount of the order (1~9)
var amount = 1;

//1:Burger1, 2:Burger2, 3:Burger3, 4:Burger4
var burger = 0;
var burger_1 = "黑膠起司牛肉堡";
var burger_2 = "墨西雙椒";
var burger_3 = "鳳梨莎莎";
var burger_4 = "黑膠鮮檸鮭魚堡"; //品名直接由此設定

var price_1 = 100;
var price_2 = 100;
var price_3 = 100;
var price_4 = 120; //單價直接由此設定

var sauce_1 = "辣醬";
var sauce_2 = "芥末醬";
var sauce_3 = "花生醬";
var sauce_4 = "無醬料"; // 醬料直接由此設定

var count = 0;

//The number of the number, increasing when adding a new burger. Use it to call the settings in the database.
var order_number = 0;
var real_number = 0; //不可超過5筆訂單

let waitminute = 15;

let months = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec'.split(',')
let weekdays = 'SUN,MON,TUE,WED,THU,FRI,SAT'.split(',')

$(document).ready(function(){

    adj_func = function () {

        //訂單編號，可用來call資料
        var order_number = Number($(this).children('.order_number').html());
        console.log(order_number);

        //check the setting state
        if(default_or_not == 0){
            $("#default").animate({
                opacity: 1
            }, 250, function(){});
            $("#history").animate({
                opacity: 0.6
            }, 250, function(){});
        }
        else if(default_or_not == 1){
            $("#default").animate({
                opacity: 0.6
            }, 250, function(){});
            $("#history").animate({
                opacity: 1
            }, 250, function(){});
        }
        else if(default_or_not == 2){
            $("#default").animate({
                opacity: 0.6
            }, 250, function(){});
            $("#history").animate({
                opacity: 0.6
            }, 250, function(){});
        }
        
        //read the set from database
        /*
        code here
        */
        set_func();
        $("#Custom_page").animate({
            top: "0"
        }, 400, function(){});
        $("#cover").show();
        $("#cover").animate({
            opacity: 0.4
        }, 400, function(){});
        custom_state = 1;
    }

    //add button in order list
    add_func = function () {
        var order_amount = Number($(this).siblings('.order_amount').html());
        var singel_price = Number($(this).siblings('.price_non').html());
        var new_price = Number($(this).siblings('.single_price').html());
        var total = Number($('#total_cost').html());
        if (order_amount < 9) {
            order_amount++;
            new_price += singel_price;
            total += singel_price;
        }
        $(this).siblings('.order_amount').html(order_amount);
        $(this).siblings('.single_price').html(new_price);
        $('#total_cost').html(total);
    }

    //minus button in order list
    minus_func = function () {
        var order_amount = $(this).siblings('.order_amount').html();
        var singel_price = Number($(this).siblings('.price_non').html())
        var new_price = Number($(this).siblings('.single_price').html())
        var total = Number($('#total_cost').html())
        if (order_amount > 1) {
            order_amount--;
            new_price -= singel_price;
            total -= singel_price;
        }
        $(this).siblings('.order_amount').html(order_amount);
        $(this).siblings('.single_price').html(new_price);
        $('#total_cost').html(total)
    
    }
    
    //delete button in order list
    delete_func = function () {
        var single_price = Number($(this).siblings('.single_price').html());
        var total = Number($('#total_cost').html());
        var new_cost = total - single_price;
        $('#total_cost').html(new_cost);
        $(this).parent().addClass('animated bounceOutLeft 0.5s ')
        $(this).parent().delay(500).hide(100);
		real_number--;
    }

    //default setting of the order, called when add a new order
    default_func = function () {
        $("#default").animate({
            opacity: 1
        }, 250, function(){});
        $("#history").animate({
            opacity: 0.6
        }, 250, function(){});
        cheese = true;
        tomato = true;
        cucumber = true;
        lettuce = true;
        sauce = 1;
        set_func(); 
    }

    set_func = function () {
        if(cheese == true){
            $("#cheese_op").animate({
                opacity: 1
            }, 250, function(){});
            $("#cheese_pic").animate({
                opacity: 1
            }, 250, function(){});
        }
        else{
            $("#cheese_op").animate({
                opacity: 0.4
            }, 250, function(){});   
            $("#cheese_pic").animate({
                opacity: 0.4
            }, 250, function(){});
        }

        if(tomato == true){
            $("#tomato_op").animate({
                opacity: 1
            }, 250, function(){});   
            $("#tomato_pic").animate({
                opacity: 1
            }, 250, function(){});
        }
        else{
            $("#tomato_op").animate({
                opacity: 0.4
            }, 250, function(){});   
            $("#tomato_pic").animate({
                opacity: 0.4
            }, 250, function(){});
        }

        if(cucumber == true){
            $("#cucumber_op").animate({
                opacity: 1
            }, 250, function(){});   
            $("#cucumber_pic").animate({
                opacity: 1
            }, 250, function(){});
        }
        else{
            $("#cucumber_op").animate({
                opacity: 0.4
            }, 250, function(){});   
            $("#cucumber_pic").animate({
                opacity: 0.4
            }, 250, function(){});
        }

        if(lettuce == true){
            $("#lettuce_op").animate({
                opacity: 1
            }, 250, function(){});   
            $("#lettuce_pic").animate({
                opacity: 1
            }, 250, function(){});
        }
        else{
            $("#lettuce_op").animate({
                opacity: 0.4
            }, 250, function(){});   
            $("#lettuce_pic").animate({
                opacity: 0.4
            }, 250, function(){});
        }

        $("#wasabi_sauce").animate({
            opacity: 0.4
        }, 0, function(){});
        $("#peanut_sauce").animate({
            opacity: 0.4
        }, 0, function(){});
        $("#no_sauce").animate({
            opacity: 0.4
        }, 0, function(){});

        if(sauce == 1){
            $("#spicy_sauce").animate({
                opacity: 1
            }, 250, function(){});
        }
        else if(sauce == 2){
            $("#wasabi_sauce").animate({
                opacity: 1
            }, 250, function(){});
            $("#spicy_sauce").animate({
                opacity: 0.4
            }, 250, function(){});
        }
        else if(sauce == 3){
            $("#peanut_sauce").animate({
                opacity: 1
            }, 250, function(){});
            $("#spicy_sauce").animate({
                opacity: 0.4
            }, 250, function(){});
        }
        else if(sauce == 4){
            $("#no_sauce").animate({
                opacity: 1
            }, 250, function(){});
            $("#spicy_sauce").animate({
                opacity: 0.4
            }, 250, function(){});
        }
    }

    //add an order of Burger1
    $("#add_1_button").click(function(){
        if (real_number>4) {
			console.log("Too many orders");
		}
		else {			
			$("#Custom_page").animate({
				top: "0"
			}, 400, function(){});
			$("#cover").show();
			$("#cover").animate({
				opacity: 0.4
			}, 400, function(){});
			burger = 1;
			default_func();
			$("#Custom_page").children('.content').children('.burger_name').html(burger_1);
			custom_state = 0;
		}
    });

    //add an order of Burger2
    $("#add_2_button").click(function(){
        if (real_number>4) {
			console.log("Too many orders");
		}
		else {			
			$("#Custom_page").animate({
				top: "0"
			}, 400, function(){});
			$("#cover").show();
			$("#cover").animate({
				opacity: 0.4
			}, 400, function(){});
			burger = 2;
			default_func();
			$("#Custom_page").children('.content').children('.burger_name').html(burger_2);
			custom_state = 0;
		}
    });

    //add an order of Burger3
    $("#add_3_button").click(function(){
		if (real_number>4) {
			console.log("Too many orders");
		}
		else {
			$("#Custom_page").animate({
				top: "0"
			}, 400, function(){});
			$("#cover").show();
			$("#cover").animate({
				opacity: 0.4
			}, 400, function(){});
			burger = 3;
			default_func();
			$("#Custom_page").children('.content').children('.burger_name').html(burger_3);
			custom_state = 0;
		}
    });

    //add an order of Burger4
    $("#add_4_button").click(function(){
		if (real_number>4) {
			console.log("Too many orders");
		}
		else {
			$("#Custom_page").animate({
				top: "0"
			}, 400, function(){});
			$("#cover").show();
			$("#cover").animate({
				opacity: 0.4
			}, 400, function(){});
			burger = 4;
			default_func();
			$("#Custom_page").children('.content').children('.burger_name').html(burger_4);
			custom_state = 0;
		}
    });

    //SUBMIT
    $("#comfirm_and_pay_btn").click(function(){
		$("#wrapped_content").html(`<div class="step1">
                <button type="button" class="btn btn-secondary btn-lg button_step red" id='step1_btn'>STEP1</button>
                <br><br>
		        <b id="chtext1" style="font-size:34px;color: azure;font-family: Microsoft JhengHei;">選擇取餐門市</b>
                <button type="button" class="btn btn-secondary btn-lg button_step opacity" id="chtext2" style="display:none;font-family: Microsoft JhengHei;">重新選擇取餐門市</button>
                <br><br>
                <div id="choosebotton"><img src="./img/工作區域 40.png" onclick="myFunctionchoose()" style="cursor:pointer; width:95%;"></div>
                <div id="mapbox"></div>
                <div id="mapboximg" width="156%" height="90%" style="width:78%;height:45%;"><img id="mapboximgin" src="" style="border-radius: 20px;"></div>
                <div id="storeinfo1"></div>
                <div id="storeinfo2"></div>
            </div>
            <div class="step2">
                <button type="button" class="btn btn-secondary btn-lg button_step" id='step2_btn'>STEP2</button>
                <br><br>
                <b id="getimetext" style="font-size:34px;color: azure;font-family: Microsoft JhengHei;">選擇取餐時間</b>
                <br><br>
                <button type="button" class="btn btn-secondary btn-lg button_step" id='timedefault' style="font-family: Microsoft JhengHei;">系統預定</button>
                <button type="button" class="btn btn-secondary btn-lg button_step opacity" id='self_defind' style="font-family: Microsoft JhengHei;">自行設定</button>
                <br><br>
                <div class="time_block" id='defa'>
                    <p id="week">TUE</p>
                    <span id="month">MAY</span><span id="dot1">,</span>
                    <span id="day">15</span>
                    <br>
                    <span id="hour">11</span><span id="dot2">:</span>
                    <span id="minute">50</span>
                    <button type="button" class="btn btn-secondary btn-lg button_step next" id='next1'>NEXT</button>
                </div>

                <div class="time_table">
                    <p style='position:absolute;font-weight: 1000;font-size: 15px'>日期</p>
                    <p style='position:absolute;font-weight: 1000;font-size: 15px;top:47%'>時間</p>
                    <p style='position:absolute;font-weight: 1000;font-size: 15px;top:57%;left:12%'>時</p>
                    <p style='position:absolute;font-weight: 1000;font-size: 15px;top:75%;left:12%'>分</p>
                    <div class="date_selecter block_selected" id='tod' style="left:20%">15</div>
                    <div class="date_selecter" id='tom'>16</div>
                    <div class="date_selecter"id='dat' style="left:60%">17</div>

                    <div class="hour_selecter" style='left:28%'id='hour11'>11</div>
                    <div class="hour_selecter block_selected" id='hour12'>12</div>
                    <div class="hour_selecter "style="left:62%" id='hour13'>13</div>

                    <div class="minute_selecter "style="left:20%" id='minute00'>00</div>
                    <div class="minute_selecter "style="left:33%" id='minute10'>10</div>
                    <div class="minute_selecter block_selected"style="left:46%" id='minute20'>20</div>
                    <div class="minute_selecter "style="left:59%" id='minute30'>30</div>
                    <div class="minute_selecter "style="left:72%" id='minute40'>40</div>
                    <div class="minute_selecter "style="left:85%" id='minute50'>50</div>              
                </div>
                <div class="time_block" id='cost'>
                    <p id="week_">TUE</p>
                    <span id="month_">MAY</span><span>,</span>
                    <span id="day_">21</span>
                    <br>
                    <span id="hour_">11</span><span>:</span>
                    <span id="minute_">50</span>
                    <button type="button" class="btn btn-secondary btn-lg button_step next" id='next2'>NEXT</button>
                </div>

             
            </div>
            <div class="step3">
                <button type="button" class="btn btn-secondary btn-lg button_step" id='step3_btn'>STEP3</button>
                <br><br>
                <b id="paytext" style="font-size:34px;color: azure;font-family: Microsoft JhengHei;">選擇付費方式</b>
                <br><br>
                <div class="payBlock">
                    <img class='opacity' src="./img/linepay.png" id='line'>
                    <img class='opacity' src="./img/card.png" id="card">
                    <img class='opacity' src="./img/mywallet.png" id="wallet">
                    <img class='opacity' src="./img/yoyo.png" id="yoyo">
                </div>
                <button type="button" class="btn btn-primary btn-lg btn-block" id='confirm_red'>CONFIRM AND PAY</button>


            </div>
			<script type="text/javascript" language="JavaScript" src="./script/map.js" charset="big5"></script>
			<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD3-fExgqiJV_3JHHWNlxHDzT_dS-dtl24&callback=initMap">
			<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

			</script>`)
    });

    $("#cancel").click(function(){
        $("#Custom_page").animate({
            top: "-100%"
        }, 400, function(){});
        $("#cover").animate({
            opacity: 0
        }, 400, function(){$("#cover").hide();});
    });

    //Show the order at the shopping cart, afer click the "add_to_cart" button
    $("#add_to_cart").unbind("click").click(function(){
        $("#Custom_page").animate({
            top: "-100%"
        }, 400, function(){});
        $("#cover").animate({
            opacity: 0
        }, 400, function(){$("#cover").hide();});
        
        if(custom_state == 0){
            real_number++;
        }

        d = document.createElement('div');
        $(d).addClass('order_list animated bounceInRight 0.5s')
            .html(
                `<p class="order_name">品名</p>
                <p class="no_ingredient">材料</p>
                <p class="sauce">醬汁</p>
                <p class="single_price">100</p>
                <p class='order_amount'>1</p>
                <div class="container_for_click"></div>
                <img src="./img/delete_button.png" class="delete_img">
                <img src="./img/delete_button_hover.png" class="delete_btn">
                <img src="./img/cart_add_button.png" class="add_img">
                <img src="./img/cart_add_button_hover.png" class="add_btn">
                <img src="./img/cart_minus_button.png" class="minus_img">
                <img src="./img/cart_minus_button_hover.png" class="minus_btn">
                <div class="order_number" style="display:none;">number</div>
                <div class="price_non" style="display:none;">120</div>`
            )
            .attr('id', 'order_' + order_number)
            .appendTo($("#shopping_cart"))
    
        
        $(d).children('.order_number').html(order_number);
        order_number++;
        
        //bind the buttons to functions
        
        $(d).children('.ordername').on('click', adj_func);
        $(d).children('.no_ingredient').on('click', adj_func);
        $(d).children('.sauce').on('click', adj_func);
        $(d).children('.single_price').on('click', adj_func);
        $(d).children('.container_for_click').on('click', adj_func);
        $(d).children('.delete_btn').on('click', delete_func);
        $(d).children('.add_btn').on('click', add_func);
        $(d).children('.minus_btn').on('click', minus_func);


        $(d).children('.order_amount').html(amount);
        if(burger == 1){
            $(d).children('.order_name').html(burger_1);
            $(d).children('.price_non').html(price_1);
        }
        else if(burger == 2){
            $(d).children('.order_name').html(burger_2);
            $(d).children('.price_non').html(price_2);
        }
        else if(burger == 3){
            $(d).children('.order_name').html(burger_3);
            $(d).children('.price_non').html(price_3);
        }
        else if(burger == 4){
            $(d).children('.order_name').html(burger_4);
            $(d).children('.price_non').html(price_4);
        }
        
        //輸出醬料
        if(sauce == 1){
            $(d).children('.sauce').html(sauce_1);
        }
        else if(sauce == 2){
            $(d).children('.sauce').html(sauce_2);
        }
        else if(sauce == 3){
            $(d).children('.sauce').html(sauce_3);
        }
        else if(sauce == 4){
            $(d).children('.sauce').html(sauce_4);
        }
        var request = false;
        var _no_ingredient = "不要";
        if(cheese == false){
            _no_ingredient += "起司 ";
            request = true;
        }
        if(tomato == false){
            _no_ingredient += "番茄 ";
            request = true;
        }
        if(cucumber == false){
            _no_ingredient += "酸黃瓜 ";
            request = true;
        }
        if(lettuce == false){
            _no_ingredient += "生菜 ";
            request = true;
        }

        var _single_price = Number($(d).children('.price_non').html()) * amount;
        var total = Number($('#total_cost').html()) + _single_price;
        //change the total cost
        $('#total_cost').html(total);
        if(request == true){
            $(d).children('.no_ingredient').html(_no_ingredient);
        }
        else{
            $(d).children('.no_ingredient').html(" ");
        }
        $(d).children('.single_price').html(_single_price);
        //$('wrap').modal()
        //$('.shadow').show()
    });

    /* Selecte the sauce  */
    $("#spicy_sauce").click(function(){
        if(sauce != 1){
            sauce = 1;
            $("#spicy_sauce").animate({
                opacity: 1
            }, 250, function(){});
            $("#wasabi_sauce").animate({
                opacity: 0.4
            }, 250, function(){});
            $("#peanut_sauce").animate({
                opacity: 0.4
            }, 250, function(){});
            $("#no_sauce").animate({
                opacity: 0.4
            }, 250, function(){});
        }
    })

    $("#wasabi_sauce").click(function(){
        if(sauce != 2){
            sauce = 2;
            $("#spicy_sauce").animate({
                opacity: 0.4
            }, 250, function(){});
            $("#wasabi_sauce").animate({
                opacity: 1
            }, 250, function(){});
            $("#peanut_sauce").animate({
                opacity: 0.4
            }, 250, function(){});
            $("#no_sauce").animate({
                opacity: 0.4
            }, 250, function(){});
        }
    })

    $("#peanut_sauce").click(function(){
        if(sauce != 3){
            sauce = 3;
            $("#spicy_sauce").animate({
                opacity: 0.4
            }, 250, function(){});
            $("#wasabi_sauce").animate({
                opacity: 0.4
            }, 250, function(){});
            $("#peanut_sauce").animate({
                opacity: 1
            }, 250, function(){});
            $("#no_sauce").animate({
                opacity: 0.4
            }, 250, function(){});
        }
    })

    $("#no_sauce").click(function(){
        if(sauce != 4){
            sauce = 4;
            $("#spicy_sauce").animate({
                opacity: 0.4
            }, 250, function(){});
            $("#wasabi_sauce").animate({
                opacity: 0.4
            }, 250, function(){});
            $("#peanut_sauce").animate({
                opacity: 0.4
            }, 250, function(){});
            $("#no_sauce").animate({
                opacity: 1
            }, 250, function(){});
        }
    })

    /* Choose setting if needed. */
    $("#default").unbind("click").click(function(){
        if(default_or_not != 0){
            default_or_not = 0;
            default_func();
        }
    })

    $("#history").unbind("click").click(function(){
        if(default_or_not != 1){
            default_or_not = 1;
            $("#default").animate({
                opacity: 0.6
            }, 250, function(){});
            $("#history").animate({
                opacity: 1
            }, 250, function(){});
        }
    })

    /* Custom the element of the burger. */
    $("#cheese_op").unbind("click").click(function(){
        cheese = !cheese;
        if(cheese == true){
            $("#cheese_op").animate({
                opacity: 1
            }, 250, function(){});
            $("#cheese_pic").animate({
                opacity: 1
            }, 250, function(){});
        }
        else{
            $("#cheese_op").animate({
                opacity: 0.4
            }, 250, function(){});
            $("#cheese_pic").animate({
                opacity: 0.4
            }, 250, function(){});
        }
        default_or_not = 2;
        $("#default").animate({
            opacity: 0.6
        }, 250, function(){});
        $("#history").animate({
            opacity: 0.6
        }, 250, function(){});
    })

    $("#tomato_op").unbind("click").click(function(){
        tomato = !tomato;
        if(tomato == true){
            $("#tomato_op").animate({
                opacity: 1
            }, 250, function(){});
            $("#tomato_pic").animate({
                opacity: 1
            }, 250, function(){});
        }
        else{
            $("#tomato_op").animate({
                opacity: 0.4
            }, 250, function(){});
            $("#tomato_pic").animate({
                opacity: 0.4
            }, 250, function(){});
        }
        default_or_not = 2;
        $("#default").animate({
            opacity: 0.6
        }, 250, function(){});
        $("#history").animate({
            opacity: 0.6
        }, 250, function(){});
    })

    $("#cucumber_op").unbind("click").click(function(){
        cucumber = !cucumber;
        if(cucumber == true){
            $("#cucumber_op").animate({
                opacity: 1
            }, 250, function(){});
            $("#cucumber_pic").animate({
                opacity: 1
            }, 250, function(){});
        }
        else{
            $("#cucumber_op").animate({
                opacity: 0.4
            }, 250, function(){});
            $("#cucumber_pic").animate({
                opacity: 0.4
            }, 250, function(){});
        }
        default_or_not = 2;
        $("#default").animate({
            opacity: 0.6
        }, 250, function(){});
        $("#history").animate({
            opacity: 0.6
        }, 250, function(){});
    })

    $("#lettuce_op").unbind("click").click(function(){
        lettuce = !lettuce;
        if(lettuce == true){
            $("#lettuce_op").animate({
                opacity: 1
            }, 250, function(){});
            $("#lettuce_pic").animate({
                opacity: 1
            }, 250, function(){});
        }
        else{
            $("#lettuce_op").animate({
                opacity: 0.4
            }, 250, function(){});
            $("#lettuce_pic").animate({
                opacity: 0.4
            }, 250, function(){});
        }
        default_or_not = 2;
        $("#default").animate({
            opacity: 0.6
        }, 250, function(){});
        $("#history").animate({
            opacity: 0.6
        }, 250, function(){});
    })

    /* Adjust the amount of the order */
    $("#add").unbind("click").click(function(){
        if(amount < 9){
            amount++;
            $("#amount").html(amount);
        }
    })

    $("#minus").unbind("click").click(function(){
        if(amount > 1){
            amount--;
            $("#amount").html(amount);
        }
    })

    //Sidebar map
    $("#icon_map").unbind("click").click(function(){
        $("#Map").animate({
            top: "0"
        }, 400, function(){});
        $("#cover").show();
        $("#cover").animate({
            opacity: 0.4
        }, 400, function(){});
    })

    $("#Map").unbind("click").click(function(){
        $("#Map").animate({
            top: "-100%"
        }, 400, function(){});
        $("#cover").animate({
            opacity: 0
        }, 400, function(){$("#cover").hide();});
    })

    //Sidebar menu
    $("#icon_menu").unbind("click").click(function(){
        $("#Menu").animate({
            top: "0"
        }, 400, function(){});
        $("#cover").show();
        $("#cover").animate({
            opacity: 0.4
        }, 400, function(){});
    })

    $("#Menu").unbind("click").click(function(){
        $("#Menu").animate({
            top: "-100%"
        }, 400, function(){});
        $("#cover").animate({
            opacity: 0
        }, 400, function(){$("#cover").hide();});
    })
    
});


//in third page
$('#step1_btn').on('click', function () {
    $('#step1_btn').addClass('red')
    $('#step2_btn').removeClass('red')
    $('#step3_btn').removeClass('red')
    $('.step2').addClass('animated fadeOutRight 0.3s')
    $('.step3').addClass('animated fadeOutRight 0.3s')
})
/*
$('#chtext2').on('click', function () {
    $('#step1_btn').addClass('red')
    $('#step2_btn').removeClass('red')
    $('#step3_btn').removeClass('red')
    document.getElementById('storeinfo1').innerHTML = '' ;
    document.getElementById('storeinfo2').innerHTML = '' ;
})
*/

$('#step2_btn').on('click', function () {
    $('#step2_btn').addClass('red')
    $('#step1_btn').removeClass('red')
    $('#step3_btn').removeClass('red')
    $('.time_block').animate({ height: "50%" })
    $('#next1').fadeIn()
    $('#self_defind').fadeIn()
    $('.step3').addClass('animated fadeOutRight 0.5s')

})

$('#step3_btn').on('click', function () {
    $('#step3_btn').addClass('red')
    $('#step2_btn').removeClass('red')
    $('#step1_btn').removeClass('red')
})


$('#self_defind').on('click', function () {
    document.getElementById('getimetext').innerHTML = '選擇取餐時間' ;
    $('#timedefault').addClass('opacity')
    $('#defa').addClass('opacity')
    $('#self_defind').removeClass('opacity')

    $('#cost').removeClass('animated fadeOutLeft 0.5s')
    $('#cost').addClass('animated fadeInLeft 0.5s')
    
    $('#cost').show()
    $('.time_table').removeClass('animated fadeOutLeft 0.5s')
    $('.time_table').addClass('animated fadeInLeft 0.5s')
    $('.time_table').show()

    $('#next1').hide()

    $('#step2_btn').addClass('red')
    $('#step1_btn').removeClass('red')
    $('#step3_btn').removeClass('red')

    /*這裡是重抓時間的功能，之後可能用到上一頁面執行*/
    var day = new Date()
    var d=new Date()
    console.log(day)
    var hour = day.getHours()
    var minute = day.getMinutes()
    minute += waitminute
    if (minute > 60) {
        minute -= 60
        hour++
    }
    
    var Dtomorrow=new Date(d.addDays(1))
    var Ddayafter=new Date(d.addDays(1))

    $('#week_').html(weekdays[day.getDay()])
    $('#month_').html(months[day.getMonth()])
    $('#day_').html(day.getDate())
    $('#hour_').html(hour)
    $('#minute_').html(minute)

    $('#tod').html(day.getDate())
    $('#tom').html(Dtomorrow.getDate())
    $('#dat').html(Ddayafter.getDate())
    /*這裡是重抓時間的功能，之後可能用到上一頁面執行*/
})


$('#timedefault').on('click', function () {
    $('.time_block').animate({ height: "50%" })
    document.getElementById('timedefault').innerHTML ="系統預定"

    $('#timedefault').removeClass('opacity')
    $('#defa').removeClass('opacity')
    $('#self_defind').addClass('opacity')

    $('#cost').addClass('animated fadeOutLeft 0.5s')
    //$('#cost').delay(500).hide(500)
    $('.time_table').addClass('animated fadeOutLeft 0.5s')
    //$('.time_table').delay(500).hide()

    $('#next1').show()

    $('#step2_btn').addClass('red')
    $('#step1_btn').removeClass('red')
    $('#step3_btn').removeClass('red')
    $('#self_defind').fadeIn()
    $('.step3').addClass('animated fadeOutRight 0.5s')

    $('#confirm_red').hide()

    document.getElementById('storeinfo1').style.color='white';
    document.getElementById('week').style.color='white';
    document.getElementById('month').style.color='white';
    document.getElementById('day').style.color='white';
    document.getElementById('hour').style.color='white';
    document.getElementById('minute').style.color='white';
    document.getElementById('dot1').style.color='white';
    document.getElementById('dot2').style.color='white';

    $('#line').addClass('opacity')
    $('#card').addClass('opacity')
    $('#wallet').addClass('opacity')
    $('#yoyo').addClass('opacity')


    /*這裡是重抓時間的功能，之後可能用到上一頁面執行*/
    var day = new Date()
    console.log(day)
    var hour = day.getHours()
    var minute = day.getMinutes()
    minute += waitminute
    if (minute > 60) {
        minute -= 60
        hour++
    }
    $('#week').html(weekdays[day.getDay()])
    $('#month').html(months[day.getMonth()])
    $('#day').html(day.getDate())
    $('#hour').html(hour)
    $('#minute').html(minute)
    /*這裡是重抓時間的功能，之後可能用到上一頁面執行*/
})

$('#next1').on('click', function () {
    $('#step2_btn').removeClass('red')
    $('#step3_btn').addClass('red')
    $('#next1').fadeOut()
    $('#self_defind').fadeOut()
    $('.time_block').animate({ height: "27%" })
    $('.step3').removeClass('animated fadeOutRight 0.5s')
    $('.step3').addClass('animated fadeInRight 0.5s')
    $('.step3').show()
    document.getElementById('getimetext').innerHTML = '取餐時間' ;
})


$('#next2').on('click', function () {
    $('#step2_btn').removeClass('red')
    $('#step3_btn').addClass('red')
    $('#defa').removeClass('opacity')
    $('#next1').fadeOut()
    $('#self_defind').fadeOut()
    document.getElementById('timedefault').innerHTML = "自行設定"
    $('.time_block').animate({ height: "27%" })
    $('.step3').removeClass('animated fadeOutRight 0.5s')
    $('.step3').addClass('animated fadeInRight 0.5s')
    $('.step3').show()
    document.getElementById('getimetext').innerHTML = '取餐時間' ;

    $('#cost').addClass('animated fadeOutLeft 0.5s')
    $('#cost').delay(400).hide()
    $('.time_table').addClass('animated fadeOutLeft 0.5s')
    $('.time_table').delay(400).hide()


    $('#week').html($('#week_').html())
    $('#month').html($('#month_').html())
    $('#day').html($('#day_').html())
    $('#hour').html($('#hour_').html())
    $('#minute').html($('#minute_').html())
})


$('#line').on('click', function () {
	howtopay="line"
    $('#line').removeClass('opacity')
    $('#card').addClass('opacity')
    $('#wallet').addClass('opacity')
    $('#yoyo').addClass('opacity')

    $('#step3_btn').addClass('red')
    $('#step1_btn').removeClass('red')
    $('#step2_btn').removeClass('red')
    $('#confirm_red').fadeIn(200)
    
    document.getElementById('storeinfo1').style.color='red';
    document.getElementById('week').style.color='red';
    document.getElementById('month').style.color='red';
    document.getElementById('day').style.color='red';
    document.getElementById('hour').style.color='red';
    document.getElementById('minute').style.color='red';
    document.getElementById('dot1').style.color='red';
    document.getElementById('dot2').style.color='red';
})

$('#wallet').on('click', function () {
	howtopay="wallet";
    $('#line').addClass('opacity')
    $('#card').addClass('opacity')
    $('#wallet').removeClass('opacity')
    $('#yoyo').addClass('opacity')

    $('#step3_btn').addClass('red')
    $('#step1_btn').removeClass('red')
    $('#step2_btn').removeClass('red')
    $('#confirm_red').fadeIn(200)
    
    document.getElementById('storeinfo1').style.color='red';
    document.getElementById('week').style.color='red';
    document.getElementById('month').style.color='red';
    document.getElementById('day').style.color='red';
    document.getElementById('hour').style.color='red';
    document.getElementById('minute').style.color='red';
    document.getElementById('dot1').style.color='red';
    document.getElementById('dot2').style.color='red';
})

$('#card').on('click', function () {
	howtopay="card";
    $('#line').addClass('opacity')
    $('#card').removeClass('opacity')
    $('#wallet').addClass('opacity')
    $('#yoyo').addClass('opacity')

    $('#step3_btn').addClass('red')
    $('#step1_btn').removeClass('red')
    $('#step2_btn').removeClass('red')
    $('#confirm_red').fadeIn(200)
    
    document.getElementById('storeinfo1').style.color='red';
    document.getElementById('week').style.color='red';
    document.getElementById('month').style.color='red';
    document.getElementById('day').style.color='red';
    document.getElementById('hour').style.color='red';
    document.getElementById('minute').style.color='red';
    document.getElementById('dot1').style.color='red';
    document.getElementById('dot2').style.color='red';
})

$('#yoyo').on('click', function () {
	howtopay="yoyo";
    $('#line').addClass('opacity')
    $('#card').addClass('opacity')
    $('#wallet').addClass('opacity')
    $('#yoyo').removeClass('opacity')

    $('#step3_btn').addClass('red')
    $('#step1_btn').removeClass('red')
    $('#step2_btn').removeClass('red')
    $('#confirm_red').fadeIn(200)
    
    document.getElementById('storeinfo1').style.color='red';
    document.getElementById('week').style.color='red';
    document.getElementById('month').style.color='red';
    document.getElementById('day').style.color='red';
    document.getElementById('hour').style.color='red';
    document.getElementById('minute').style.color='red';
    document.getElementById('dot1').style.color='red';
    document.getElementById('dot2').style.color='red';
})

/*select time*/
$('#tod').on('click',function(){
    $('#tod').addClass('block_selected')
    $('#tom').removeClass('block_selected')
    $('#dat').removeClass('block_selected')
    $('#day_').html(Number($('#tod').html()))
}) 

$('#tom').on('click',function(){
    $('#tom').addClass('block_selected')
    $('#tod').removeClass('block_selected')
    $('#dat').removeClass('block_selected')
    $('#day_').html(Number($('#tom').html()))
}) 

$('#dat').on('click',function(){
    $('#dat').addClass('block_selected')
    $('#tom').removeClass('block_selected')
    $('#tod').removeClass('block_selected')
    $('#day_').html(Number($('#dat').html()))
}) 

$('#hour11').on('click',function(){
    $('#hour11').addClass('block_selected')
    $('#hour12').removeClass('block_selected')
    $('#hour13').removeClass('block_selected')
    $('#hour_').html(11)
}) 

$('#hour12').on('click',function(){
    $('#hour12').addClass('block_selected')
    $('#hour11').removeClass('block_selected')
    $('#hour13').removeClass('block_selected')
    $('#hour_').html(12)
}) 

$('#hour13').on('click',function(){
    $('#hour13').addClass('block_selected')
    $('#hour12').removeClass('block_selected')
    $('#hour11').removeClass('block_selected')
    $('#hour_').html(13)
}) 

$('#minute00').on('click',function(){
    $('#minute00').addClass('block_selected')
    $('#minute10').removeClass('block_selected')
    $('#minute20').removeClass('block_selected')
    $('#minute30').removeClass('block_selected')
    $('#minute40').removeClass('block_selected')
    $('#minute50').removeClass('block_selected')
    $('#minute_').html(00)
}) 

$('#minute10').on('click',function(){
    $('#minute10').addClass('block_selected')
    $('#minute00').removeClass('block_selected')
    $('#minute20').removeClass('block_selected')
    $('#minute30').removeClass('block_selected')
    $('#minute40').removeClass('block_selected')
    $('#minute50').removeClass('block_selected')
    $('#minute_').html(10)
}) 

$('#minute20').on('click',function(){
    $('#minute20').addClass('block_selected')
    $('#minute10').removeClass('block_selected')
    $('#minute00').removeClass('block_selected')
    $('#minute30').removeClass('block_selected')
    $('#minute40').removeClass('block_selected')
    $('#minute50').removeClass('block_selected')
    $('#minute_').html(20)
}) 

$('#minute30').on('click',function(){
    $('#minute30').addClass('block_selected')
    $('#minute10').removeClass('block_selected')
    $('#minute20').removeClass('block_selected')
    $('#minute00').removeClass('block_selected')
    $('#minute40').removeClass('block_selected')
    $('#minute50').removeClass('block_selected')
    $('#minute_').html(30)
}) 

$('#minute40').on('click',function(){
    $('#minute40').addClass('block_selected')
    $('#minute10').removeClass('block_selected')
    $('#minute20').removeClass('block_selected')
    $('#minute30').removeClass('block_selected')
    $('#minute00').removeClass('block_selected')
    $('#minute50').removeClass('block_selected')
    $('#minute_').html(40)
}) 

$('#minute50').on('click',function(){
    $('#minute50').addClass('block_selected')
    $('#minute10').removeClass('block_selected')
    $('#minute20').removeClass('block_selected')
    $('#minute30').removeClass('block_selected')
    $('#minute00').removeClass('block_selected')
    $('#minute40').removeClass('block_selected')
    $('#minute_').html(50)
}) 

$('#confirm_red').on('click', function () {
	place=document.getElementById("storeinfo1").innerHTML;
	datetime=document.getElementById("week").innerHTML+", "+document.getElementById("month").innerHTML+", "+
	document.getElementById("day").innerHTML+"	"+document.getElementById("hour").innerHTML+":"+document.getElementById("minute").innerHTML;
	$.post('/order', {"id":now.id, "item":order, "number":n, "place":place, "time":datetime, "howtopay":howtopay, "amount":price});
})


$('#memberlogin_img').on('click',function(){
    $('.mid_icon').hide();
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

$('#signinbotton').on('click',function(){
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
})

$('#registered_img').on('click',function(){
    $('.mid_icon').hide();
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
    $('#forgetpassward_text').delay(850).animate({
        opacity: 1,
        bottom: '39%'
    }, 200);
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

$('#signupbotton').on('click',function(){    
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
});