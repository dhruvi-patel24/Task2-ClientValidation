
function fname_validate(){
  let first = document.getElementById("fname").value;
  // let last = document.getElementById("lname").value;
  var name_pattern = /^[A-Za-z]+$/;
 if (!first.match(name_pattern)) {
          // $(#id1).val();
        document.getElementById("id1").innerHTML="Fill Fname";
        // return false;
      }
  else{
              document.getElementById("id1").innerHTML="";
  }
}
function lname_validate(){
  let last = document.getElementById("lname").value;
  var name_pattern = /^[A-Za-z]+$/;
  if (!last.match(name_pattern)) {
            // alert("Please provide your last name");
    document.getElementById("id2").innerHTML="Fill Lastname";
            // return false;
          }
  else{
              document.getElementById("id2").innerHTML="";
          }
}

function add1validate(){
  let add1 = document.getElementById("address1").value;
  var add_pattern = /^[0-9][A-Za-z0-9]+$/;
  if (!add1.match(add_pattern)) {
        // alert("Please provide full address");
        document.getElementById("id3").innerHTML="Fill Address1";
      
        // return false;
      } else{
        document.getElementById("id3").innerHTML="";
    }
  }
  function add2validate(){
    let add2 = document.getElementById("address2").value;
    if (add2 == "") {
      // alert("Please provide full address");
      document.getElementById("id4").innerHTML="Fill Address2";
    
      // return false
    } else{
      document.getElementById("id4").innerHTML="";
  }
  }  
  
  function city_validate(){
    let cname = document.getElementById("city").value;
    if (cname == "") {
      // alert("Please provide full address");
      document.getElementById("id5").innerHTML="Fill City";
      // return false;
  } else{
      document.getElementById("id5").innerHTML="";
}
  }

function state_validate(){
  let pname = document.getElementById("province").value;
  if (pname == "") {
    // alert("Please provide full address");
    document.getElementById("id6").innerHTML="Fill State";
  } else{
    document.getElementById("id6").innerHTML="";
}
}
  
function postal_validate(){
    let postalcode = document.getElementById("pscode").value;
    var ps_pattern = /^[0-9]{6}$/;
    if (!postalcode.match(ps_pattern)) {
      // alert("Please provide correct full address");
      document.getElementById("id7").innerHTML="Fill Postal Code";
      // return false;
    } else{
      document.getElementById("id7").innerHTML="";
  }     
  }
  
function phone_validate(){
  let phonenum = document.getElementById("phone").value;
  var phone_pattern = /^[789]\d{9}$/;
  if (phonenum=="" || !phonenum.match(phone_pattern)) {
        // alert("Please provide correct phone number");
        document.getElementById("id8").innerHTML="Fill Phone Number";
      } else{
        document.getElementById("id8").innerHTML="";
    }
}

function email_validate(){
  let emailid = document.getElementById("email").value;
  var email_pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (emailid == "" || !emailid.match(email_pattern)) {
        //  debugger
        // alert("Please provide email");
        document.getElementById("id9").innerHTML="Fill Email"
  }else{
        document.getElementById("id9").innerHTML="";
    }
}
function drop_validate(){
  let dropdown1 = document.getElementById("abt-btn").value;
    if(dropdown1 ==""){
     document.getElementById("id10").innerHTML = "Please select any one option";
    }
    else{
      document.getElementById("id10").innerHTML = "";
    }
  }

function feed_validate(){
  let feed = document.getElementById("feedback").value;
  if (feed.length<5) {
      //  debugger
      // alert("Please provide email");
      document.getElementById("id11").innerHTML="Fill Suggesstions";
    
  }else{
      document.getElementById("id11").innerHTML="";
    }
}
function suggesstion_validate(){
  let sugg = document.getElementById("suggestions").value;
  if (sugg.length<5) {
      //  debugger
      // alert("Please provide email");
      document.getElementById("id12").innerHTML="Fill Suggesstions";
    }else{
      document.getElementById("id12").innerHTML="";
    }
}

function checkbox_validate(){
  let recomend= document.getElementById("recommend");
  if (!recomend.checked) {  
      // debugger
      document.getElementById("id13").innerHTML="Fill recommendation";
      
    }else{
      // document.getElementById("id13").chec;
      document.getElementById("id13").innerHTML="";
    }
  
}

function radio_validate(){
  let gender1=document.querySelector('input[name="gender"]:checked');
    if (gender1==null) {
          document.getElementById("id14").innerHTML="&nbspFill gender";
          
      }else{
        // document.getElementById("id13").chec;
        document.getElementById("id14").innerHTML="";
      }
  
    // var ml = document.getElementsByName('gender');
    //   var genValue = false;
    //     for(var i=0; i<ml.length;i++){
    //       if(ml[i].checked == true){
    //         genValue = true;    
    //         }
    //       }
}
// function fvalidate() {
//   let first = document.getElementById("fname").value;
//   let last = document.getElementById("lname").value;
//   let add1 = document.getElementById("address1").value;
//   let add2 = document.getElementById("address2").value;
//   let cname = document.getElementById("city").value;
//   let pname = document.getElementById("province").value;
//   let postalcode = document.getElementById("pscode").value;
//   let phonenum = document.getElementById("phone").value;
//   let emailid = document.getElementById("email").value;
//   let feed = document.getElementById("feedback").value;
//   let sugg = document.getElementById("suggestions").value;
//  let recomend= document.getElementById("recommend");
//  let gender1=document.querySelector('input[name="gender"]:checked');
// // console.log(gender1);
// // debugger
//   var name_pattern = /^[A-Za-z]+$/;
//   var ps_pattern = /^[0-9]{6}$/;
//   var phone_pattern = /^[789]\d{9}$/;
//   var email_pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  

//    // if( add1=="" || add2==""||city==""|| province=="" || pscode==""){
//   //     alert("Please provide full address");
//   //
//   //   
//   //     return false;
//   // }

//   if (add1 == "") {
//     // alert("Please provide full address");
//     document.getElementById("id3").innerHTML="Fill Address1";
  
//     // return false;
//   } else{
//     document.getElementById("id3").innerHTML="";
// }
//   if (add2 == "") {
//     // alert("Please provide full address");
//     document.getElementById("id4").innerHTML="Fill Address2";
  
//     // return false
//   } else{
//     document.getElementById("id4").innerHTML="";
// }
//   if (cname == "") {
//     // alert("Please provide full address");
//     document.getElementById("id5").innerHTML="Fill City";
//     // return false;
//   } else{
//     document.getElementById("id5").innerHTML="";
// }
//   if (pname == "") {
//     // alert("Please provide full address");
//     document.getElementById("id6").innerHTML="Fill State";
  
//     // return false;
//   } else{
//     document.getElementById("id6").innerHTML="";
// }


//   if (!postalcode.match(ps_pattern)) {
//     // alert("Please provide correct full address");
//     document.getElementById("id7").innerHTML="Fill Postal Code";
//     // return false;
//   } else{
//     document.getElementById("id7").innerHTML="";
// }

//   if (!phonenum.match(phone_pattern)) {
//     // alert("Please provide correct phone number");
//     document.getElementById("id8").innerHTML="Fill Phone Number";
//   } else{
//     document.getElementById("id8").innerHTML="";
// }

//   if (emailid == "" || !emailid.match(email_pattern)) {
//     //  debugger
//     // alert("Please provide email");
//     document.getElementById("id9").innerHTML="Fill Email"
//   }else{
//     document.getElementById("id9").innerHTML="";
// }

// if (feed.length<5) {
//   //  debugger
//   // alert("Please provide email");
//   document.getElementById("id11").innerHTML="Fill Suggesstions";

// }else{
//   document.getElementById("id11").innerHTML="";
// }

// if (sugg.length<5) {
//   //  debugger
//   // alert("Please provide email");
//   document.getElementById("id12").innerHTML="Fill Suggesstions";
// }else{
//   document.getElementById("id12").innerHTML="";
// }
// // debugger
// if (!recomend.checked) {  
//   // debugger
//   document.getElementById("id13").innerHTML="Fill recommendation";
  
// }else{
//   // document.getElementById("id13").chec;
//   document.getElementById("id13").innerHTML="";
// }
// // debugger

// if (gender1==null) {
//     document.getElementsByName("gender").innerHTML="Fill recommendation";
    
// }else{
//   // document.getElementById("id13").chec;
//   document.getElementsByName("gender").innerHTML="";
// }

// }