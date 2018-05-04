module.exports={
Remark:(name,remarks)=>{
	
	var a=document.getElementById("Remark");
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

}
}