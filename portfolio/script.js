$(document).ready(function(){
$(window).scroll(function(){    
                $(".card").animate({'opacity':'1'},1500);
             });
});
var txt="Dreamer";
var txt1="Designer";
var txt2="Developer";
var txt3="Learner";
			var speed=150;
			var i=0;
			var j=txt.length;
			var z=100;
window.addEventListener('load', function() {
	typeWriter();
});
function typeWriter() {
  		if (i < txt.length) {
	    document.getElementById("move1").innerHTML += txt.charAt(i);
    		i++;
        	setTimeout(typeWriter, speed);
		  }
		else {
			j=txt.length;
			setTimeout(erase, 1500);
		}
		}

function erase(){
			if(j>=0){
				document.getElementById("move1").innerHTML=txt.substr(0,j--);
				setTimeout(erase, z);
			}
			else {i=0;
				setTimeout(typeWriter1, z);
			}
		}
function typeWriter1() {
  		if (i < txt1.length) {
	    document.getElementById("move1").innerHTML += txt1.charAt(i);
    		i++;
        	setTimeout(typeWriter1, speed);
		  }
		else {
			j=txt1.length;
			setTimeout(erase1, 1500);
		}
		}

function erase1(){
			if(j>=0){
				document.getElementById("move1").innerHTML=txt1.substr(0,j--);
				setTimeout(erase1, z);
			}
			else {i=0;
				setTimeout(typeWriter2, z);
			}
		}
function typeWriter2() {
  		if (i < txt2.length) {
	    document.getElementById("move1").innerHTML += txt2.charAt(i);
    		i++;
        	setTimeout(typeWriter2, speed);
		  }
		else {
			j=txt2.length;
			setTimeout(erase2, 1500);
		}
		}

function erase2(){
			if(j>=0){
				document.getElementById("move1").innerHTML=txt2.substr(0,j--);
				setTimeout(erase2, z);
			}
			else {i=0;
				setTimeout(typeWriter3, z);
			}
		}
function typeWriter3() {
  		if (i < txt3.length) {
	    document.getElementById("move1").innerHTML += txt3.charAt(i);
    		i++;
        	setTimeout(typeWriter3, speed);
		  }
		else {
			j=txt3.length;
			setTimeout(erase3, 1500);
		}
		}

function erase3(){
			if(j>=0){
				document.getElementById("move1").innerHTML=txt3.substr(0,j--);
				setTimeout(erase3, z);
			}
			else {i=0;
				setTimeout(typeWriter, z);
			}
		}

