$(document).ready(function(){
$(window).scroll(function(){    
                $(".card").animate({'opacity':'1'},1500);
             });
$(".buzz").mouseenter(()=>{
$(".buzz").attr("src","as");
});
$(".buzz").mouseleave(()=>{
$(".buzz").attr("src","portfolio/buzznow.png");
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
			setTimeout(erase, z);
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
			setTimeout(erase1, z);
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
			setTimeout(erase2, z);
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
			setTimeout(erase3, z);
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


var xhttp=new XMLHttpRequest;
xhttp.onreadystatechange=function(){
if(this.readystate==4 && this.status==200)
	{
	Remark(this);
	}
};

xhttp.open("GET","data.xml",true);	
xhttp.send();

function Remark(){
	var a=document.getElementById("Remark");
	var name=document.getElementById("name").value;
	var remarks=document.getElementById("comment").value;
	if(name=="" )
	{	
	if(remarks=="")
		alert("Please enter name and a remark");
	else alert("Please enter your name"); 
	}
	else 
	if(remarks=="")
		alert("Please enter a remark");
	else{
	a.innerHTML+=`
		
		<div class="media remark" >
			<div class="media-body">
				<h4 class="media-heading"><b><i>  &nbsp`+ name + `</i></b> says: </h4>
				<p style="background-color:white;padding:5px;margin:0px;color:black;">
		 			`+remarks+`
		 		</p>	
			</div>
		</div>
		`;
	}
	var text="<Name>"+name+"</Name>"+
			"<Remark>"+remarks+"</Remark";

	var xmlDoc = xml.responseXML;
	var newElement=xmlDoc.createElement("name");
	xmlDoc.getElementByTagName("Remarks")[0].appendChild(newElement);
	var xmlDoc=parser.parseFromString("text","text/xml");
	xmlDoc.getElementByTagName("Remarks")[0].childnodes[0].insertData(0,name);

}
