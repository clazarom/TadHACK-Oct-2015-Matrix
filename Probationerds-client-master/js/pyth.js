<script type="text/javascript" src="./jquery1.11.1.js">

function do_some_ajax(user, password) {
   $.ajax({
    type: "POST",
    url: "./script_print.py",
    datatype: "json",
    data: {robot: 'user', pw: 'password'}
    success: success
}),
}