$(document).ready(function(){


    console.log("my body is ready")

    // var foodlist = ["pandaexpress","subway"]

});





var i, word, randomLetter, foodlist, fadeSpeed, timer;
var finalPickfoodName = document.getElementById('finalPickfoodName');
var spinnerTitle = document.getElementById('pickfoodButton');
  fadeSpeed =  02;
  timer = 2;
  $("#pickfoodButton").on('click',function(){
  var foodlist = ['凯悦轩', '金都海鮮酒家', '富丽华', '稻香', '金狮茶楼', '三和海鲜酒家', '皇都海鲜酒家', '云川园', '重庆美味川菜', '八号公馆', '小魏川菜馆', '九龙冰室', '小食代', '湘菜', '台湾料理', '金园排骨', '余姐清粥', '台湾臭豆腐', '3年2班', '爱找茶','台湾鸡排','鲜芋仙','品味面家','北京小馆','味鲜','洪师傅','金都','半亩园','鲁味居','lotus清真馆','马家清真','小肥羊','沸点','一锅香'];
      $(finalPickfoodName).empty();
      var RandomFoodPick = foodlist[Math.floor(Math.random() * foodlist.length)];
      // finalPickfoodName.innerHTML += RandomFoodPick;
    for(i = 0 ; i < foodlist.length ; i ++) {
        randomLetter= Math.floor(Math.random() * foodlist.length);
        console.log(randomLetter)
        word= foodlist[randomLetter];
        console.log(word)
        foodlist.splice(randomLetter, 1);

        $(spinnerTitle).empty();
        (function(word) {
        $('#pickfoodButton').fadeOut(fadeSpeed, function() {
                 $(this).html(word);
          })
               .slideDown('fast') 
               .delay(timer)
               .fadeIn(fadeSpeed);
       }
      )(word);
    }
  })

