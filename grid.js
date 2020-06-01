
/*CODE FOR FIRST BUTTON BEGINS*/
var places = ["place1.jpg", "place2.jpg", "place3.jpg", "place4.jpg", "place5.jpg", "place6.jpg", "place7.jpg", "place8.jpg", "place9.jpg", "place10.jpg", "place11.jpg", "place12.jpg", "place13.jpg"]

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

var cities = ["city1.jpg","city2.jpg","city3.jpg","city4.jpg","city5.jpg","city6.jpg", "city7.jpg","city8.jpg","city9.jpg","city10.jpg","city11.jpg","city12.jpg","city13.jpg"]

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


