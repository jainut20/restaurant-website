$(function() {
	$("#navbarToggle").blur(function(event) {
		var width=window.innerWidth;
		if(width<768){
			$("#collapseable-nav").collapse('hide');
		}
	});
});
$('.minus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());
 
    if (value > 1) {
        value = value - 1;
    } else {
        value = 0;
    }
 
  $input.val(value);
 
});
 
$('.plus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());
 
    if (value < 100) {
        value = value + 1;
    } else {
        value =100;
    }
 
    $input.val(value);
});
var total=0;
var arr_price=[];
var arr_name=[];
var q=[];
var flag=0;
$('.atc').on('click', function(e) {
  flag=1;
    var sp_name=document.querySelectorAll(".special-name");
    var price=document.querySelectorAll(".price");
    var quantity=document.querySelectorAll(".quantity");
    var temp = price[this.name].innerText;
    temp = (temp.slice(1))*(quantity[this.name].value);
    total = temp+total;
    console.log(total)
    arr_price[this.name]=(price[this.name].innerText);
    arr_name[this.name]=(sp_name[this.name].innerText);
    q[this.name]=(quantity[this.name].value);
});
  
$('#ptc').on('click', function(e) {
        
        if(flag==0){
          alert("NOTHING IN THE CART");
          return;
        }
        confirm("Press OK to confirm, and to get your invoice")
        document.getElementById('aa').innerHTML="<h3>YOUR INVOICE</h3>";
        $('.row').hide();
        $('#ptc').hide();
       $("#bill").append("<tr><th> Name </th> <th> Rate </th> <th>  quantity </th> </tr>");
      for (var i =0; i<10; i++) {
        if(q[i]){
       $("#bill").append("<br>");
       $("#bill").append("<tr> <td>"+arr_name[i]+"</td> <td>"+arr_price[i]+"</td>  <td>X"+q[i]+ "</td> <tr>")
     }
      }
      $(".afterbill").append("Total:₹"+total+"")
  } );
 $(document).ready(function(){
  $("#submit").click(function(){
    var fname = $("#fname").val();
    var lname = $("#lname").val();
    var email = $("#email").val();
    var sel = $("#sel").val();
    var text=$("#subject").val();
    var flag=0;
              $(".error").remove();
    if (fname.length < 1) {
      $('#fname').after('<span class="error">This field is required </span>');
      flag=1;
    }
    if (lname.length < 1) {
      $('#lname').after('<span class="error">This field is required </span>');
      flag=1;
    }
    if (email.length < 1) {
      $('#email').after('<span class="error">This field is required </span>');
      flag=1;
    }
    else {
      var regEx =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
      var validEmail = regEx.test(email);
      if (!validEmail) {
        $('#email').after('<span class="error">Enter a Valid Email id </span>');
        flag=1;
      }
    }
    if (sel.length < 1) {
      $('#sel').after('<span class="error">This field is required </span>');
      flag=1;
    }
    if(text.length<1)
       {
      $('#subject').after('<span class="error">This field is required </span>');
      flag=1;
    }
    if(flag==0){
      document.getElementById('fname').value="";
      document.getElementById('lname').value="";
      document.getElementById('email').value="";
      document.getElementById('sel').value="";
      document.getElementById('subject').value="";
      alert("SUCCEFULLY SUBMITTED");
     
    }
  });
});
