
/*This Script allows people to enter by using a form that asks for a
User and password*/
//*Index.html*/
function pasuser(form) {
	$.ajax({
		type: "POST",
		url: "./RobotClient.py",
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		data: JSON.stringify({user:'30.5' , pwd : '4.5'}),
		success: function(response){
        //window.location="http://mycity.parseapp.com/city/cgi-bin/test1.py"
        console.log(response.message);
        console.log(response.keys);
        console.log(response.data);

    }
	});
	if (form.robot.value=="Probationer") { 
		if (form.password.value=="ohyeah") {              
			location="./robot.html" 
		} else {
		alert("Invalid Password")
		}
	} else {  alert("Invalid UserID")
	}
}

/*This Script allows people to enter by using a form that asks for a
UserID and Password*/
/*login.html*/
function signup(form) {
	if (form.robot_acc.value=="Probationer") { 
		if (form.robot_pw.value=="ohyeah") {              
			location="./robot.html" 
		} else {
		alert("Invalid Password")
		}
	} else {  alert("Invalid UserID")
	}
}
