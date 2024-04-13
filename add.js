function morning(){
	var first,sec,third,fourth,fifth,totals,overall;
	first=Number(am8.value);
	sec=Number(am9.value);
	third=Number(am10.value);
	fourth=Number(am11.value);
	fifth=Number(pm12.value);
    totals=first+sec+third+fourth+fifth;
	document.getElementById("amtotal").innerHTML=totals;
	var a,b,c,d,e,f;
	a=Number(pm1.value);
	b=Number(pm2.value);
	c=Number(pm3.value);
	d=Number(pm4.value);
	e=Number(pm5.value);
    f=a+b+c+d+e;
	document.getElementById("pmtotal").innerHTML=f;
	overall=totals+f;
	document.getElementById("total").innerHTML=overall;
}
function cleardata(){
var selectedValue=document.getElementById("day").value;
localStorage.setItem("selectedValue",selectedValue);
location.reload();
}
function restoreS(){
	//location.reload();
	var selectedValue=localStorage.getItem("selectedValue");
	document.getElementById("day").value=selectedValue;

}
restoreS();