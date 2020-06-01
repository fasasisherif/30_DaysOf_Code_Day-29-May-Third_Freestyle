
/*CODE FOR FIRST BUTTON BEGINS*/
var places = ["img/place1.jpg", "img/place2.jpg", "img/place3.jpg", "img/place4.jpg", "img/place5.jpg", "img/place6.jpg", "img/place7.jpg", "img/place8.jpg", "img/place9.jpg", "img/place10.jpg", "img/place11.jpg", "img/place12.jpg", "img/place13.jpg"]

change1 = document.getElementsByClassName('back1');

change1[0].addEventListener("click",myfunc1);

var b = 0;
function myfunc1(){
a = document.getElementsByClassName('switch1');				
b--;

if(b < 0){
				b = 12;
				}
a[0].src = places[b];
}

//CODE FOR FIRST BUTTON ENDS


//CODE FOR SECOND BUTTON BEGINS
var c = document.getElementsByClassName('front1');

c[0].addEventListener("click", myfunc2);

d = document.getElementsByClassName('switch1');

function myfunc2(){
b++;

if (b > 12){
				b = 0;
				}
d[0].src = places[b];
}

//CODE FOR SECOND BUTTON ENDS


//CODE FOR THIRD BUTTON BEGINS

var cities = ["img/city1.jpg","img/city2.jpg","img/city3.jpg","img/city4.jpg","img/city5.jpg","img/city6.jpg", "img/city7.jpg","img/city8.jpg","img/city9.jpg","img/city10.jpg","img/city11.jpg","img/city12.jpg","img/city13.jpg"]

e = document.getElementsByClassName('back2');
e[0].addEventListener("click", myfunc3)

f = document.getElementsByClassName('switch2');

var g = 0;
function myfunc3(){
g--;
    if(g < 0 ){
    				g = 12;
    				}
f[0].src = cities[g];
}

//CODE FOR THIRD BUTTON ENDS


//CODE FOR FOURTH BUTTON BEGINS

h = document.getElementsByClassName('front2');

h[0].addEventListener("click",myfunc4)
i = document.getElementsByClassName('switch2');

function myfunc4(){
g++;
				if (g > 12){
								g = 0;
						}
i[0].src = cities[g];
}


