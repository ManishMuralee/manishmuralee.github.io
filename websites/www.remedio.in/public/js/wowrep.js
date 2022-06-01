//get base url of website
var url = document.getElementById("baseurls").value;
//tooltip actived
$("[data-toggle=tooltip]").tooltip();
//get current url
var getcurl = window.location.href;
//make a tost alert
function tost(snaktext) {
    var snak = document.getElementById("snackbar");
    $("#snackbar").text(snaktext);
    snak.className = "show";
    setTimeout(function() { snak.className = snak.className.replace("show", ""); }, 3000);
}

// owlCarousel for Widget Slider ===========================================================
if ($('.widget-slider').exist()) {
    var widget_slider = $('.widget-slider');
    widget_slider.owlCarousel({
        items: 1,
        dots: false,
         autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    loop: true,
        nav: false 

    });
}

$('.product-slider').owlCarousel({

    responsive: {
        1700: {
            items: 6,
            nav: true,
            loop: false
        },
        1600: {
            items: 5,
            nav: true,
            loop: false
        },
        1500: {
            items: 5,
            nav: true,
            loop: false
        },
        1400: {
            items: 5,
            nav: true,
            loop: false
        },
        1300: {
            items: 4,
            nav: true,
            loop: false
        },
        1200: {
            items: 4,
            nav: true,
            loop: false
        },
        700: {
            items: 3,
            nav: true,
            loop: false
        },
        500: {
            items: 2,
            nav: false,
            loop: false
        },
        400: {
            items: 2,
            nav: true,
              dots: false,
            loop: false
        },
        300: {
            items: 1,
            nav: true,
              dots: false,
            loop: false
        }
    }
});

// $('#').on('keypress', function(e){
//   return e.metaKey || // cmd/ctrl
//     e.which <= 0 || // arrow keys
//     e.which == 8 || // delete key
//     /[0-9]/.test(String.fromCharCode(e.which)); // numbers
// });


$(".tpone").click(function() {
    $(this).addClass("active");
    $(".tptwo").removeClass("active");
    $(".tpthree").removeClass("active");
    $(".tpfour").removeClass("active");
});
$(".tptwo").click(function() {
    $(this).addClass("active");
    $(".tpone").removeClass("active");
    $(".tpthree").removeClass("active");
    $(".tpfour").removeClass("active");
});
$(".tpthree").click(function() {
    $(this).addClass("active");
    $(".tpone").removeClass("active");
    $(".tptwo").removeClass("active");
    $(".tpfour").removeClass("active");
});
$(".tpfour").click(function() {
    $(this).addClass("active");
    $(".tpone").removeClass("active");
    $(".tptwo").removeClass("active");
    $(".tpthree").removeClass("active");
});


//user registration (update loginandregister div data from html())
function wanttoregister() {
    $("#loginandregister").html('<form onsubmit="otpregister(event)" id="otpregister"><div class="form-group" id="removeeEMN"><label for="emn">Enter Mobile no *</label><input type="number" autocomplete="off" class="form-control" id="entermobno" autofocus=""><span class="_ind_cod">+91</span><a class="recent-otp" id="editnumbera" style="display:none;" href="javascript:void(0)" onclick="wanttoregister(event);">Edit number</a></div><div class="form-group btnregister"><button type="submit" class="register-login registerinbox"  id="continuew">Continue</button></div></form>');
    $("#loginandregister").css('display', '');
    $(".frgtpas").css('display', 'none');
}

//register with otp
function otpregister(e) {
    e.preventDefault();
    $(".image_spinner_on").css('display', '');
    var mob = $("#entermobno").val();
    var ml = mob.length;
    var regex = /^[0-9\_]+$/;
    //alert(regex.test(mob));
    if (mob == "") {
        var snaktext = "Please Enter a Valid Number";
        tost(snaktext);
        $(".image_spinner_on").css('display', 'none');
    } else if (ml != 10) {
        var snaktext = "Please Enter a Valid Number";
        tost(snaktext);
        $(".image_spinner_on").css('display', 'none');
    } else if (regex.test(mob) != true) {
        $(".image_spinner_on").css('display', 'none');
        var snaktext = "Please Enter a Valid Number!";
        tost(snaktext);
        return false;
    } else {
        $('#entermobno').prop('disabled', true);
        var ref = $(".ref_id").val();
        $.ajax({
            url: url + "Home/getusrlogin",
            type: "post",
            dataType: 'text',
            data: { 'mob': mob },
            success: function(data) {
                $(".image_spinner_on").css('display', 'none');
                datas = JSON.parse(data);
                // console.log(datas);
                if (datas.count == "1") {
                    var snaktext = "Phone number already registered please login";
                    tost(snaktext);
                    $("#loginandregister").html('<form onsubmit="lorinpls(event)" id="oginusers"><div class="form-group" id="removeeEMbgt"><label for="emn">Enter Mobile no *</label><input type="number" value="' + mob + '" class="form-control" autocomplete="off" id="loginmobile" autofocus=""><span class="_ind_cod">+91</span></div><div class="form-group" id="removeeEMN"><label for="emn">Enter Password *</label><input type="password" autocomplete="off" class="form-control" id="enterpass"><a class="fpassrt" onclick="forgotpass()">Forgot password</a></div><div class="form-group btnregister"><button type="submit" class="register-login registerinbox" id="continuew">Login</button><button type="submit" class="register-login iwantotoreguster" onclick="wanttoregister()" id="iwanttoregister">New User? Register</button></div></form>');
                } else if (datas.count == "2") {
                    var snaktext = "Sorry this number cannot login to user";
                    tost(snaktext);
                    $('#entermobno').prop('disabled', false);
                } else {

                    // alert(datas.otp);
                    var snaktext = "A verification code sent to given number";
                    tost(snaktext);

                    $("#loginandregister").html('<form onsubmit="validateotp(event)"><div class="form-group" id="removeeEMN"><label for="emn">Enter Mobile no *</label><input disabled type="number" value="' + mob + '" class="form-control" autocomplete="off" id="entermobno"><span class="_ind_cod">+91</span><a class="recent-otp" id="editnumbera"  href="javascript:void(0)" onclick="wanttoregister()">Edit number</a></div><div class="form-group" id="removeeFDRE"><label for="emn">Enter OTP *</label><input type="number" class="form-control" id="enterotp"><a class="recent-otp" id="resendotp"  href="javascript:void(0)" onclick="otpregister(event)">Resend OTP</a></div><div class="form-group" id="removeeFDRE"><label for="emn">Enter Email ID *</label><input type="email" class="form-control" id="emailidfrom"></div><div class="form-group" id="removeeDFER"><label for="emn">Enter Password *</label><a class="recent-otp showpasspasda" id="showpasspasda" href="javascript:void(0)" onclick="showpasspas()">Show</a><input type="password" autocomplete="off" class="form-control" id="enterpasword"> <br><div class="form-group" id="removeeFDRE"><label for="emn">Reference ID </label> <input type="text" class="form-control" id="refid"></div>  <button type="submit" class="register-login registerbox" id="registeronline">Register</button></div></form>');

                    if (ref != undefined) {
                        document.getElementById("refid").value = ref;
                    } else {
                        document.getElementById("refid").value = '';
                    }

                    console.log(ref);


                }
            }
        });
    }
}

function showpasspas() {
    var x = document.getElementById("enterpasword");
    if (x.type === "password") {
        x.type = "text";
        document.getElementById("showpasspasda").innerHTML = "Hide";
    } else {
        x.type = "password";
         document.getElementById("showpasspasda").innerHTML = "Show";
    }
}

 // if ($(this).text() == "Show") {
 //        $(this).text("Hide");
 //        $("#oldpassword, #newpassword, #confirmpass").attr('type', 'text');
 //    } else {
 //        $(this).text("Show");
 //        $("#oldpassword, #newpassword, #confirmpass").attr('type', 'password');
 //    }

// function showpasspas() {

//     var x = document.getElementById("showpasspas").innerHTML;
//     if (x == "Show password") {
//         document.getElementById("showpasspas").innerHTML = "Hide";
//         $("#enterpasword").attr('type', 'text');
//     } else {
//         document.getElementById("showpasspas").innerHTML = "Show";
//         $("#enterpasword").attr('type', 'password');
//     }


// }

$("#editnumberasqr").click(function(event) {
    $(".frgtpas").css('display', 'none');
    $("#loginandregister").css('display', '');
});

function forgotpass() {
    var mob = $("#loginmobile").val();
    $(".image_spinner_on").css('display', '');
    $("#entermobno").val($("#loginmobile").val())
    //    $("#loginandregister").html('');
    $(".frgtpas").css('display', '');
    $("#loginandregister").css('display', 'none');

    $.ajax({
        url: url + "Home/sendforgotpassotp",
        type: "post",
        dataType: 'text',
        data: { 'mob': mob },
        success: function(data) {
            datas = JSON.parse(data);
            //  console.log(datas);
            if (datas == 1) {
                $(".image_spinner_on").css('display', 'none');
                var snaktext = "A verification code sent to given number";
                tost(snaktext);
            }
        }
    });
}

function otpregisterFRGT() {
    var mob = $("#loginmobile").val();
    $("#continuew").attr('disabled', true);
    $(".image_spinner_on").css('display', '');
    $.ajax({
        url: url + "Home/sendforgotpassotp",
        type: "post",
        dataType: 'text',
        data: { 'mob': mob },
        success: function(data) {
            datas = JSON.parse(data);
            //console.log(datas);
            if (datas == 1) {
                $(".image_spinner_on").css('display', 'none');
                var snaktext = "A verification code sent to given number";
                tost(snaktext);
            } else {
                $(".image_spinner_on").css('display', 'none');
            }
        }
    });
}

$("#forgotupdate").click(function(event) {
    /* Act on the event */
    $(".image_spinner_on").css('display', '');
    var mob = $("#entermobno").val();
    var otp = $("#enterotpfr").val();
    var pass = $("#enterpaswordfrgt").val();
    var passl = pass.length;

    if (otp == "") {
        $(".image_spinner_on").css('display', 'none');
        var snaktext = "Please Enter OTP";
        tost(snaktext);
    } else if (otp > 9999) {
        $(".image_spinner_on").css('display', 'none');
        var snaktext = "Please Enter Valid OTP";
        tost(snaktext);
    } else if (pass == "") {
        $(".image_spinner_on").css('display', 'none');
        var snaktext = "Set a Password";
        tost(snaktext);
    } else if (passl <= 8) {
        var snaktext = "Password length is very short";
        tost(snaktext);
        $(".image_spinner_on").css('display', 'none');
    } else {
        $.ajax({
            url: url + "Home/updatepasswordandlogin",
            type: "post",
            dataType: 'text',
            data: {
                'otp': otp,
                'pass': pass,
                'mob': mob

            },
            success: function(data) {
                $(".image_spinner_on").css('display', 'none');
                if (data == 1) {
                    $(".image_spinner_on").css('display', 'none');
                    var snaktext = "Password changed please login!";
                    tost(snaktext);
                    location.reload();
                }
                if (data == 0) {
                    $(".image_spinner_on").css('display', 'none');
                    var snaktext = "Invalid OTP";
                    tost(snaktext);
                }
            }
        });
    }

});



//validate otp ajax
function validateotp(e) {
    $(".image_spinner_on").css('display', '');
    e.preventDefault();
    var mob = $("#entermobno").val();
    var otpcode = $("#enterotp").val();
    var pass = $("#enterpasword").val();
    var email = $("#emailidfrom").val();
    var refid = $("#refid").val();
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    var ml = mob.length;
    var optl = otpcode.length;
    var passl = pass.length;
    var regex = /^[0-9\_]+$/;
    var passtro = /^[a-zA-Z0-9@]+$/;

    //mobile number validation
    if (mob == "") {
        var snaktext = "Please Enter a Valid Number";
        tost(snaktext);
        $(".image_spinner_on").css('display', 'none');
    } else if (ml != 10) {
        var snaktext = "Please Enter a Valid Number";
        tost(snaktext);
        $(".image_spinner_on").css('display', 'none');
    } else if (regex.test(mob) != true) {
        $(".image_spinner_on").css('display', 'none');
        var snaktext = "Please Enter a Valid Number!";
        tost(snaktext);
        return false;
    }


    //otp validation
    if (otpcode == "") {
        var snaktext = "Please Enter OTP";
        tost(snaktext);
        $(".image_spinner_on").css('display', 'none');
    } else if (optl != 4) {
        var snaktext = "Please Enter Valid OTP";
        tost(snaktext);
        $(".image_spinner_on").css('display', 'none');
    } else if (regex.test(otpcode) != true) {
        $(".image_spinner_on").css('display', 'none');
        var snaktext = "Please Enter Valid OTP!";
        tost(snaktext);
        return false;
    }

    //email validation
    // else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) != true) {
    //     $(".image_spinner_on").css('display', 'none');
    //         var snaktext = "Please Enter Valid Email Address";
    //         tost(snaktext);
    //         return false;
    // }
    //Password validation
    else if (pass == "") {
        var snaktext = "Set a Password";
        tost(snaktext);
        $(".image_spinner_on").css('display', 'none');
    }else if (passtro.test(pass) != true) {
        $(".image_spinner_on").css('display', 'none');
        var snaktext = "Please Enter a Valid Password";
        tost(snaktext);
        return false;
    } else if (passl <= 8) {
        var snaktext = "Password length is very short";
        tost(snaktext);
        $(".image_spinner_on").css('display', 'none');
    } else if (email == "") {
        var snaktext = "Enter email id";
        tost(snaktext);
        $(".image_spinner_on").css('display', 'none');
    } else if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
        $(".image_spinner_on").css('display', 'none');
        var snaktext = "Enter a valid email id";
        tost(snaktext);
    } else {
        $.ajax({
            url: url + "Home/signup",
            type: "post",
            dataType: 'text',
            data: {
                'otp': otpcode,
                'passwords': pass,
                'phone': mob,
                'email': email,
                'refid': refid
            },
            success: function(data) {
                datas = JSON.parse(data);
                if (datas.count == "1") {
                    $(".image_spinner_on").css('display', 'none');
                    var snaktext = "Registration Success, Please login.";
                    tost(snaktext);
                    location.reload();
                }
                if (datas.count == "0") {
                    $(".image_spinner_on").css('display', 'none');
                    var snaktext = "Invalid OTP";
                    tost(snaktext);
                }
                if (datas.count == "2") {
                    $(".image_spinner_on").css('display', 'none');
                    var snaktext = "Email id already exist!";
                    tost(snaktext);
                }
                if (datas.count == "3") {
                    $(".image_spinner_on").css('display', 'none');
                    var snaktext = "Invalid Reference ID!";
                    tost(snaktext);
                }
                // else
                // {
                //     $(".image_spinner_on").css('display', 'none');
                //     var snaktext = "Oops! somthing went wrong!!!";
                //     tost(snaktext);
                // }
            }
        });
    }

}

//loginuser to acc
var clicks = 0;

function lorinpls(e) {
    $(".image_spinner_on").css('display', '');
    e.preventDefault();
    var loginmobile = $("#loginmobile").val();
    var enterpass = $("#enterpass").val();
    var url_id = $("#url_id").val();
    if (loginmobile == "") {
        $(".image_spinner_on").css('display', 'none');
        var snaktext = "Please Enter Your Mobile Number";
        tost(snaktext);
    } else if (loginmobile > 9999999999) {
        $(".image_spinner_on").css('display', 'none');
        var snaktext = "Please Enter Valid Mobile Number";
        tost(snaktext);
    } else if (enterpass == "") {
        $(".image_spinner_on").css('display', 'none');
        var snaktext = "Please Enter Your Password";
        tost(snaktext);
    } else if (clicks > 5) {
        $(".image_spinner_on").css('display', 'none');
        var snaktext = "Maximum login attempts reached. Please try again.";
        tost(snaktext);
    } else {
        $.ajax({
            url: url + "Home/loginuser",
            type: "post",
            dataType: 'text',
            data: {
                'mobile': loginmobile,
                'passwords': enterpass,
                'url_id': url_id
            },
            success: function(data) {
                datas = JSON.parse(data)
                // console.log(data);
                if (datas.auth == "1") {
                    $('#loginorregisetr').modal('hide');
                    $(".image_spinner_on").css('display', 'none');
                    location.reload();
                    var snaktext = "User Login Success";
                    tost(snaktext);
                } else {
                    $(".image_spinner_on").css('display', 'none');
                    var snaktext = "Invalid User Details";
                    tost(snaktext);
                    clicks += 1;
                }
            }
        });
    }
}




$(document).on('click', '.dropdown-menu', function(e) {
    e.stopPropagation();
});


///carting
//getcookiee();
// var pplist = [];
// var retrievedObject = localStorage.getItem('pplist');
// console.log('products id: ', JSON.parse(retrievedObject));
// var cartdatas = JSON.parse(retrievedObject);
// $(".sessiondatas").val(retrievedObject);
// alert(cartdatas)
var urlp = $(location).attr('href').split("/").splice(0, 5).join("/");
//alert(urlp)
// $.ajax({
//     url: urlp + "/cartproducts",
//     type: "post",
//     dataType: 'text',
//     data: { 'retrievedObject': retrievedObject },
//     success: function(data) {
//         console.log("done");
//         //getcartdata(data);
//     }
// });

function removeA(arr) {
    var what, a = arguments,
        L = a.length,
        ax;
    while (L > 1 && arr.length) {
        what = a[--L];
        while ((ax = arr.indexOf(what)) !== -1) {
            arr.splice(ax, 1);
        }
    }
    return arr;
}

$(".my-cart-btn").click(function(pid, pname, pimage, pprice, purl, pcount) {
    var pid = $(this).data('id');
    var pname = $(this).data('name');
    var pprice = $(this).data('price');
    var pimage = $(this).data('image');
    var purl = $(this).data('url');
    var pcount = $(this).data('quantity');
    //cookiess(pid, pname, pimage, pprice, purl, pcount);     
    //pushproduct(pid, pname, pimage, pprice, purl, pcount);

    var isInArray = pplist.includes(pid);
    if (isInArray == true) {

    } else {
        pplist.push(pid);
        $(".product-list").append('<div class="media"><div class="media-left"><a href="' + purl + '"><img class="media-object img-thumbnail" src="' + pimage + '" width="50" alt="product"></a></div><div class="media-body"><a href="' + purl + '" class="media-heading">' + pname + '</a><div>x ' + pcount + ' <span style="color:black;">Rs ' + pprice + '</span></div></div><div class="media-right"><a href="#" data-toggle="tooltip" title="' + pname + '" data-original-title="Remove"><i class="fa fa-remove removepp"></i></a></div></div>');
    }

    localStorage.setItem('pplist', JSON.stringify(pplist));
    var retrievedObject = localStorage.getItem('pplist');
    // console.log('products id: ', JSON.parse(retrievedObject));
    var arlength = pplist.length;
    $(".my-cart-badge").text(arlength);
});

// $(".remove_btton_on_click").click(function(event) {
//     var pid = $(this).data('id');
//     var retrievedObject = localStorage.getItem('pplist');
//     console.log('products id: ', JSON.parse(retrievedObject));
//     var cartdatas = JSON.parse(retrievedObject);
//     var isInArray = cartdatas.includes(pid);
//     if (isInArray == true) {
//         alert(pid)
//         removeA(cartdatas, pid);

//         $(this).prev("input").val(cartdatas)
//         alert(cartdatas)
//         console.log('products id: ', cartdatas);

//     }

// });
//ajax live search
localStorage.setItem('data', "");
$("#searchresult").keyup(function(e) {
    console.log('ffffffffffffffff');
    var data = $(this).val();
    console.log(data);
    $("#segg_names").val(data);
    if ($(this).val() == "") {
        $("#suggesstion-box").css("display", "none");
    } else if ($(this).val() != "") {
        $.ajax({
            type: "post",
            url: url + "Home/searchallproducts",
            data: { 'data': data },
            success: function(data) {
                console.log(data);
                var getdata = localStorage.getItem('data');
                $("#suggesstion-box").show();
                if (getdata != data) {
                    $("#suggesstion-box").html(data);
                }
                localStorage.setItem('data', data);
                var $listItems = $('#suggesstion-box > li');
                var key = e.keyCode,
                    $selected = $listItems.filter('.selected'),
                    $current;
                if (key != 40 && key != 38) return;
                $listItems.removeClass('selected');
                if (key == 40) // Down key
                {
                    if (!$selected.length || $selected.is(':last-child')) {
                        $current = $listItems.eq(0);
                        // console.log($current.text());
                        var res = $current.text();
                        trimresult = res.replace(/(\r\n|\n|\r)/gm, "");
                        var subStr = trimresult.match("(.*)in");
                        // console.log(subStr[1]);
                        $("#segg_names").val(subStr[1].trim());
                        // html = $.parseHTML($current.html());
                    } else {
                        $current = $selected.next();
                        //console.log($current.text());
                        var res = $current.text();
                        trimresult = res.replace(/(\r\n|\n|\r)/gm, "");
                        var subStr = trimresult.match("(.*)in");
                        // console.log(subStr[1]);
                        //alert(subStr[1]);
                        $("#segg_names").val(subStr[1].trim());
                    }
                } else if (key == 38) // Up key
                {
                    if (!$selected.length || $selected.is(':first-child')) {
                        $current = $listItems.last();
                    } else {
                        $current = $selected.prev();
                        //console.log($current.text());
                        var res = $current.text();
                        trimresult = res.replace(/(\r\n|\n|\r)/gm, "");
                        var subStr = trimresult.match("(.*)in");
                        //console.log(subStr[1]);
                        //alert(subStr[1]);
                        $("#segg_names").val(subStr[1].trim());
                    }
                }
                $current.addClass('selected');
                if (data == "") {
                    $("#suggesstion-box").css("display", "none");
                }

            }
        });
    }
});

/*
 localStorage.setItem('data', "");
 $("#searchresult").keyup(function(e) {
 var thistext = $(".nd-search-index").text();
 var data = $(this).val();
 if ($(this).val() == "") {
 $("#suggesstion-box").css("display", "none");
 $(".nd-search-index").html("Search Restaurants");
 } else if ($(this).val() != "") {
 if ($(this).hasClass('valid')) {
 $.ajax({
 type: "post",
 url: url + "Home/searchallproducts",
 data: { 'data': data },
 success: function(data) {
 $(".nd-search-index").html("Search Restaurants");
 var getdata = localStorage.getItem('data');
 $("#suggesstion-box").show();
 if (getdata != data) {
 $("#suggesstion-box").html(data);
 }
 localStorage.setItem('data', data);
 // $("#searchinnadoo").removeClass('valid');
 var $listItems = $('#suggesstion-box > li');
 var key = e.keyCode,
 $selected = $listItems.filter('.selected'),
 $current;

 if (key != 40 && key != 38) return;

 $listItems.removeClass('selected');

 if (key == 40) // Down key
 {
 if (!$selected.length || $selected.is(':last-child')) {
 $current = $listItems.eq(0);
 // console.log($current.text());
 var res = $current.text();
 trimresult = res.replace(/(\r\n|\n|\r)/gm, "");
 var subStr = trimresult.match("(.*)in");
 // console.log(subStr[1]);
 $("#segg_names").val(subStr[1].trim());
 // html = $.parseHTML($current.html());
 } else {
 $current = $selected.next();
 //console.log($current.text());
 var res = $current.text();
 trimresult = res.replace(/(\r\n|\n|\r)/gm, "");
 var subStr = trimresult.match("(.*)in");
 // console.log(subStr[1]);
 //alert(subStr[1]);
 $("#segg_names").val(subStr[1].trim());
 }
 }
 else if (key == 38) // Up key
 {
 if (!$selected.length || $selected.is(':first-child')) {
 $current = $listItems.last();
 } else {
 $current = $selected.prev();
 //console.log($current.text());
 var res = $current.text();
 trimresult = res.replace(/(\r\n|\n|\r)/gm, "");
 var subStr = trimresult.match("(.*)in");
 //console.log(subStr[1]);
 //alert(subStr[1]);
 $("#segg_names").val(subStr[1].trim());
 }
 }

 $current.addClass('selected');
 if (data == "") {
 $("#suggesstion-box").css("display", "none");
 }
 }
 });
 }


 }

 });*/





// $('.search-input').typeahead({
//      fitToElement: true,
//      source: [
//        'IncultGeo Print Polo T-Shirt',
//        'Tommy HilfigerNavy Blue Printed Polo T-Shirt',
//        'WranglerNavy Blue Solid Polo T-Shirt',
//        'NikeAs Matchup -Pq Grey Polo T-Shirt',
//        'CelioKhaki Printed Round Neck T-Shirt',
//        'CelioOff White Printed Round Neck T-Shirt',
//        'Levi\'sNavy Blue Printed Round Neck T-Shirt',
//        'IncultAcid Wash Raglan Crew Neck T-Shirt',
//        'Avoir EnvieOlive Printed Round Neck T-Shirt',
//        'ElaboradoBrown Printed Round Neck T-Shirt',
//      ]
//    });

// $('#searchresult').typeahead({
//            source: function (query, result) {
//                $.ajax({
//                    url: "server.php",
//                    data: 'query=' + query,            
//                    dataType: "json",
//                    type: "POST",
//                    success: function (data) {
//                        result($.map(data, function (item) {
//                            return item;
//                        }));
//                    }
//                });
//            }
//        });





//close search result when focusout
$("#searchresult").focusout(function() {
    $("#suggesstion-box").show(0).delay(1000).hide(0);
});
//close search result when scrolll function
$(window).scroll(function() {
    $("#suggesstion-box").css("display", "none");

});


//plus and minus button (count)
$('.plus').click(function add() {
    var pid = $(this).data('id');
    var pprice = $(this).data('price');
    var $rooms = $(this).prevAll(".qty-input");
    var a = $rooms.val();
    a++;
    $(this).prevAll(".qty-input").prop("disabled", !a);
    $rooms.val(a);
    if (a >= 2) {
        $(this).prevAll("button").prop("disabled", false);
    }
    var plusvalue = $(this).prev(".qty-input").val()
});

$(".minus").prop("disabled");
$('.minus').click(function subst() {
    var $rooms = $(this).next(".qty-input");
    var b = $rooms.val();
    if (b >= 2) {
        b--;
        $rooms.val(b);
    } else {
        $(this).prop("disabled", true);
    }
});

if ($("#user_id").val() == "") {
    $("#user_reviews_op").css('display', 'none');
}

$("#submitreview").on("submit", function(event) {
    event.preventDefault();

    // var seria = $(this).serializeArray();
    // var data = JSON.stringify(seria);
    var user_id = $("#user_id").val();
    var product_id = $("#product_id").val();
    var rating = $(".ratingvalue").val();
    var review = $("#Review").val();
    var reviewlength = review.length;;
    //console.log(reviewlength);
    if (user_id == "") {
        var snaktext = "Please login to submit your review";
        tost(snaktext);
        window.location = url + "Home/Login";
    } else if (rating == "")  {
        var snaktext = "Please select star rating ";
        tost(snaktext);
    }
    else if (review == "")  {
        var snaktext = "Please add some description";
        tost(snaktext);
    }
    // else if ((rating == "") && (review == "")) {
    //     var snaktext = "Please select rating and add some description";
    //     tost(snaktext);
    // }
    else if (reviewlength < 3) {
        var snaktext = "Description length minimum 3 charactor";
        tost(snaktext);
    } else {

        $(".review_spiiner_c").css("display", "");

        $.ajax({
            type: "post",
            url: url + "Home/submitreview",
            data: {
                'review': review,
                'rating': rating,
                'user_id': user_id,
                'product_id': product_id
            },
            success: function(data) {
                $(".review_spiiner_c").css("display", "none");
                // $("#reviewmodel").modal('hide');
                // datas = JSON.parse(data);
                // $(".wellreview").html(datas.data);
                // $(".rivewList").html('<a href="javascript:void(0)">Reviews ('+datas.count+')</a>');
                localStorage.setItem('reviewProduct', "openreview");
                var snaktext = "Thank for your feedback";
                tost(snaktext);
                location.reload();

            }
        });
    }

});

//rating star
// use class name product_single_rating and use data attribute as data-star=""
$(".product_single_rating").each(function() {
    var star_count = $(this).data('star');
    // alert(star_count);
    if (star_count == 0.5) {
        $(this).html('<i class="fa fa-star-half-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>');
    }
    if (star_count == 1) {
        $(this).html('<i class="fa fa-star"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>');
    }
    if (star_count == 1.5) {
        $(this).html('<i class="fa fa-star"></i><i class="fa fa-star-half-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>');
    }
    if (star_count == 2) {
        $(this).html('<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>');
    }
    if (star_count == 2.5) {
        $(this).html('<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>');
    }
    if (star_count == 3) {
        $(this).html('<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>');
    }
    if (star_count == 3.5) {
        $(this).html('<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i><i class="fa fa-star-o"></i>');
    }
    if (star_count == 4) {
        $(this).html('<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-o"></i>');
    }
    if (star_count == 4.5) {
        $(this).html('<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i>');
    }
    if (star_count == 5) {
        $(this).html('<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>');
    }
});


$(".change_at_value").click(function(event) {
    $(this).attr('disabled', true);
    $(".image_spinner_on").css('display', '');
    var proqty = $(this).parent(".qntty_changer").find('.qnt_value').val();
    var proid = $(this).parent(".qntty_changer").find('.product_pid').val();
    var cartid = $(this).parent(".qntty_changer").find('.product_pid').data('cid');
    $.ajax({
        type: "post",
        url: url + "Home/addqty",
        data: {
            'proid': proid,
            'proqty': proqty,
            'cartid': cartid
        },
        success: function(data) {
            if (data == "1") {
                location.reload();
            }
        }
    });

});

$(".removefromcart").click(function(event) {
    $(".image_spinner_on").css('display', '');
    var proid = $(this).data('id');
    var cartid = $(this).data('cid');
    var prdiv = $(this);
    $.ajax({
        type: "post",
        url: url + "Home/removefromcart",
        data: {
            'proid': proid,
            'cartid': cartid
        },
        success: function(data) {
            if (data == 1) {
                location.reload();
                prdiv.parents(".order_histry_main_div").html("");
            }
        }
    });
});

$("#edmprf").click(function() {
    $("#firstname").prop("disabled", false);
    $("#lastnamein").prop("disabled", false);
    $("#emailatpr").prop("disabled", false);
    $("#phonenmberat").prop("disabled", false);
    $(this).css("display", "none");
    $("#asvempr").css("display", "");
});
// $("#asvempr").click(function() {
// });
$(".addressaditbtn").click(function() {
    $(this).nextAll(".pofileeditboxinner").css("display", "");
});
$(".canceleditbox").click(function() {
    $(this).parents(".pofileeditboxinner").css("display", "none");
});
$('.point_crt_rs').on('click', function() {
    $('.total_point_rs').toggle();
    $('.totla_poni_user').toggle();
});
$(".editcarddet").click(function() {
    $(this).prev(".saved_card_input").prop("disabled", false);
    $(this).css("display", "none");
    $(this).next(".savecarddet").css("display", "");
    $(this).prev(".saved_card_input").css("border", "1px solid #999");
});
$(".savecarddet").click(function() {
    $(this).prevAll(".saved_card_input").prop("disabled", true);
    $(this).css("display", "none");
    $(this).prev(".editcarddet").css("display", "");
    $(this).prevAll(".saved_card_input").css("border", "none");
});
$(".add_new_card_a_tag").click(function() {
    $(this).next("div").css("display", "");
});
$(".close_add_new_card").click(function() {
    $(this).parent("div").css("display", "none");
});

$(".addres_edit_button").click(function(event) {
    $(this).css('display', 'none');
    $(".addres_save_button").css('display', '');
    $(".form_addrres_input").attr('disabled', false);
});

$("#asvempr").click(function(event) {
    var fname = $("#firstname").val();
    var fnamel = fname.length;
    var lname = $("#lastnamein").val();
    var email = $("#emailatpr").val();
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    var userid = $(".userid").val();
    var alphatext = /^[a-zA-Z ]*$/;
    var lasttext = /^[a-zA-Z. ]*$/;
    //$(".form_addrres_input").prop("disabled", true);
    if ((fname == "") || (fnamel < 2)) {
        var snaktext = "Please enter your name";
        tost(snaktext);
    } else if (lname == "") {
        var snaktext = "Please enter your last name";
        tost(snaktext);
    } else if (alphatext.test(fname) != true) {
        $(".image_spinner_on").css('display', 'none');
        var snaktext = "Enter valid inputs as firstname";
        tost(snaktext);
    } else if (lasttext.test(lname) != true) {
        $(".image_spinner_on").css('display', 'none');
        var snaktext = "Enter valid inputs as lastname";
        tost(snaktext);
    } else if (email == "") {
        var snaktext = "Please enter your email address";
        tost(snaktext);
    } else if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
        var snaktext = "Enter a valid email id";
        tost(snaktext);
        $("#email").focus();
        } else {
        $.ajax({
            type: "post",
            url: url + "Home/updateprofile",
            data: {
                'fname': fname,
                'lname': lname,
                'email': email,
                'userid': userid
            },
            beforeSend: function() {
                // setting a timeout
                $(".image_spinner_on").css('display', '');
            },
            success: function(data) {
                if (data == 0) {
                    $("#firstname").prop("disabled", true);
                    $("#lastnamein").prop("disabled", true);
                    $("#emailatpr").prop("disabled", true);
                    $("#phonenmberat").prop("disabled", true);
                    $("#asvempr").css("display", "none");
                    $("#edmprf").css("display", "");
                    $(".image_spinner_on").css('display', 'none');
                    var snaktext = "Profile Updated!";
                    tost(snaktext);
                    $("#pronamediv, #usernamefromsection").text(fname);
                } else {
                    $(".image_spinner_on").css('display', 'none');

                    var snaktext = "Sorry!! this email id already used";
                    tost(snaktext);
                }
            }
        });
    }

});


$(document).ready(function() {
    $("#adddeliveryFROMcheckout").submit(function(event) {
        event.preventDefault();
    });
});



$(document).on('click', '#updateuserddelivery', function(event) {

    var prdiv = $(this);
    var getusername = $("#getusername").val();
    var getphonenumber = $("#getphonenumber").val();
    var userpincode = $("#userpincode").val();
    var getaddress = $("#getaddress").val();
    var getcity = $("#getcity").val();
    var getstate = $("#getstate").val();
    var getlandmark = $("#getlandmark").val();
    var getaltrnate = $("#getaltrnate").val();
    var getlat = $("#getlat").val();
    var getlong = $("#getlong").val();
    var userid = $(".userid").val();
    var regex = /^[0-9\_]+$/;
    var alphatext = /^[a-zA-Z. ]*$/;

    var sendnamel = getusername.length;
    var sendphonel = getphonenumber.length;
    var sendoinl = userpincode.length;
    var sendaddresl = getaddress.length;
    var getaltrnatel = getaltrnate.length;

    if ((getusername == "") || (getphonenumber == "") || (userpincode == "") || (getaddress == "") || (getcity == "") || (getstate == "")) {
        var snaktext = "Please fill all required field";
        tost(snaktext);
        $(".image_spinner_on").css('display', 'none');
    } else if (sendnamel < 2) {
        var snaktext = "Name is too short!";
        tost(snaktext);
        $(".image_spinner_on").css('display', 'none');
    } else if (alphatext.test(getusername) != true) {
        $(".image_spinner_on").css('display', 'none');
        var snaktext = "Enter valid input in name field";
        tost(snaktext);
    } else if (sendphonel != 10) {
        var snaktext = "Enter Valid Phone Number";
        tost(snaktext);
        $(".image_spinner_on").css('display', 'none');
    } else if (regex.test(getphonenumber) != true) {
        $(".image_spinner_on").css('display', 'none');
        var snaktext = "Please Enter a Valid Number!";
        tost(snaktext);
    }
    // else if (getaltrnate != "") {
    //     if (getaltrnatel != 10) {
    //     var snaktext = "Please Enter a Valid Alternate Number!";
    //     tost(snaktext);
    //     $(".image_spinner_on").css('display', 'none');    
    //     }
    //     else if (regex.test(getaltrnate) != true) {
    //     var snaktext = "Please Enter a Valid Alternate Number!";
    //     tost(snaktext);
    //     $(".image_spinner_on").css('display', 'none');    
    //     }
    //     else
    //     {
    //          return;
    //     }
    // } 
    else if (sendoinl != 6) {
        var snaktext = "Enter Valid Pincode";
        tost(snaktext);
        $(".image_spinner_on").css('display', 'none');
    } else if (sendaddresl <= 10) {
        var snaktext = "Address length is too short";
        tost(snaktext);
        $(".image_spinner_on").css('display', 'none');
    } else {
        $.ajax({
            type: "post",
            url: url + "Home/updatedelivery",
            data: {
                'getusername': getusername,
                'getphonenumber': getphonenumber,
                'userpincode': userpincode,
                'getaddress': getaddress,
                'getcity': getcity,
                'getstate': getstate,
                'getlandmark': getlandmark,
                'getaltrnate': getaltrnate,
                'getlat': getlat,
                'getlong': getlong,
                'userid': userid
            },
            success: function(data) {
                // console.log(data);
                prdiv.css('display', 'none');
                $(".addres_edit_button").css('display', '');
                if (data == 0) {
                    var snaktext = "Delivery Address Updated";
                    tost(snaktext);
                    $("#updateaddress").text(getaddress);
                    $(".form_addrres_input").prop("disabled", true);
                    $(".pofileeditboxinner").css("background-color", "white");
                    $("#updateuserddelivery").css('display', 'none');
                    $("#editdeliceryaddress").css('display', '');
                    //location.reload();
                }
            }
        });
    }

});




$(document).on('click', '#updateuserddelivery_atorder', function(event) {
// $("#updateuserddelivery_atorder").click(function(event) {

    var prdiv = $(this);
    var getusername = $("#getusername").val();
    var getphonenumber = $("#getphonenumber").val();
    var userpincode = $("#userpincode").val();
    var getaddress = $("#getaddress").val();
    var getcity = $("#getcity").val();
    var getstate = $("#getstate").val();
    var getlandmark = $("#getlandmark").val();
    var getaltrnate = $("#getaltrnate").val();
    var getlat = $("#getlat").val();
    var getlong = $("#getlong").val();
    var userid = $(".userid").val();
    var gtotal = $(".gtotal").val();
    var medicineid = $(".medicineid").val();
    var regex = /^[0-9\_]+$/;
    var alphatext = /^[a-zA-Z. ]*$/;

    var sendnamel = getusername.length;
    var sendphonel = getphonenumber.length;
    var sendoinl = userpincode.length;
    var sendaddresl = getaddress.length;
    var getaltrnatel = getaltrnate.length;

    if ((getusername == "") || (getphonenumber == "") || (userpincode == "") || (getaddress == "") || (getcity == "") || (getstate == "")) {
        var snaktext = "Please fill all required field";
        tost(snaktext);
        $(".image_spinner_on").css('display', 'none');
    } else if (sendnamel < 2) {
        var snaktext = "Name is too short!";
        tost(snaktext);
        $(".image_spinner_on").css('display', 'none');
    } else if (alphatext.test(getusername) != true) {
        $(".image_spinner_on").css('display', 'none');
        var snaktext = "Enter valid input in name field";
        tost(snaktext);
    } else if (sendphonel != 10) {
        var snaktext = "Enter Valid Phone Number";
        tost(snaktext);
        $(".image_spinner_on").css('display', 'none');
    } else if (regex.test(getphonenumber) != true) {
        $(".image_spinner_on").css('display', 'none');
        var snaktext = "Please Enter a Valid Number!";
        tost(snaktext);
    }
    // else if (getaltrnate != "") {
    //     if (getaltrnatel != 10) {
    //     var snaktext = "Please Enter a Valid Alternate Number!";
    //     tost(snaktext);
    //     $(".image_spinner_on").css('display', 'none');    
    //     }
    //     else if (regex.test(getaltrnate) != true) {
    //     var snaktext = "Please Enter a Valid Alternate Number!";
    //     tost(snaktext);
    //     $(".image_spinner_on").css('display', 'none');    
    //     }
    //     else
    //     {
    //          return;
    //     }
    // } 
    else if (sendoinl != 6) {
        var snaktext = "Enter Valid Pincode";
        tost(snaktext);
        $(".image_spinner_on").css('display', 'none');
    } else if (sendaddresl <= 10) {
        var snaktext = "Address lenght is too short";
        tost(snaktext);
        $(".image_spinner_on").css('display', 'none');
    } else {

         $(".image_spinner_on").css('display', '');
        $.ajax({
            type: "post",
            url: url + "Home/updatedeliveryaddressformed",
            data: {
                'getusername': getusername,
                'getphonenumber': getphonenumber,
                'userpincode': userpincode,
                'getaddress': getaddress,
                'getcity': getcity,
                'getstate': getstate,
                'getlandmark': getlandmark,
                'getaltrnate': getaltrnate,
                'getlat': getlat,
                'getlong': getlong,
                'userid': userid,
                'medicineid':medicineid,
                'gtotal':gtotal
            },
            success: function(data) {
                var datas = JSON.parse(data);
                // console.log(data);
                //prdiv.css('display', 'none');
                $(".image_spinner_on").css('display', 'none');
                $(".addres_edit_button").css('display', '');
                if (datas.status == 1) {
                    var snaktext = "Delivery Address Updated";
                    tost(snaktext);
                    $("#updateaddress").text(getaddress);
                    $(".pofileeditboxinner").css("background-color", "white");
                    $("#updateuserddelivery").css('display', 'none');
                    $("#editdeliceryaddress").css('display', '');
                }
                $(".rem_pay_adddr").html(datas.html);

            }
        });
    }

});




// $("#getaltrnate").keyup(function(event) {
//     var getaltrnate = $("#getaltrnate").val();
//     var getaltrnatel = getaltrnate.length;
//     var regex = /^[0-9\_]+$/;
//     var alphatext = /^[a-zA-Z]*$/;
//     if (getaltrnate != "") {
//         if (getaltrnatel != 10) {
//             var snaktext = "Please Enter a Valid Alternate Number!";
//             tost(snaktext);
//            $(".image_spinner_on").css('display', 'none');
//             $("#updateuserddelivery").attr('disabled', true);
//             $(this).css('border', '1px solid red');
//         } else if (regex.test(getaltrnate) != true) {
//             var snaktext = "Please Enter a Valid Alternate Number!";
//             tost(snaktext);
//             $(".image_spinner_on").css('display', 'none');
//             $("#updateuserddelivery").attr('disabled', true);
//             $(this).css('border', '1px solid red');
//         } else {
//             $("#updateuserddelivery").attr('disabled', false);
//             $(this).css('border', '1px solid #e6e6e6');
//         }

//     }
// });

$("#editdeliceryaddress").click(function(event) {
    $(".form_addrres_input").prop("disabled", false);
    $(".pofileeditboxinner").css("background-color", "#eaeaea");
    $(this).css('display', 'none');
    $("#updateuserddelivery").css('display', '');
});


//$("#addinstaaddress").css("display", "none");
$("#addresspeview").click(function(event) {
    var userid = $("#getdeliveryuserid").val();
    if (userid == "") {
        $("#addinstaaddress").css("display", "none");
    } else {
        $("#addinstaaddress").css("display", "");
    }


});

// $("#sendalter").keyup(function(event) {
//     var sendalter = $("#sendalter").val();
//     var sendalterl = sendalter.length;
//     var regex = /^[0-9\_]+$/;
//     var alphatext = /^[a-zA-Z]*$/;
//     if (sendalter != "") {
//         if (sendalterl < 10 ) {
//             var snaktext = "Please Enter a Valid Alternate Number!";
//             tost(snaktext);
//             $(".image_spinner_on").css('display', 'none');
//             $("#sendaddressinfo").attr('disabled', true);
//             $(this).css('border', '1px solid red');
//         } else if (regex.test(sendalter) != true) {
//             var snaktext = "Please Enter a Valid Alternate Number!";
//             tost(snaktext);
//             $(".image_spinner_on").css('display', 'none');
//             $("#sendaddressinfo").attr('disabled', true);
//             $(this).css('border', '1px solid red');
//         } else {
//             $("#sendaddressinfo").attr('disabled', false);
//             $(this).css('border', '1px solid #e6e6e6');
//         }

//     }
// });

$(document).on('click', '#sendaddressinfo', function(event) {
    var prdiv = $(this);
    var sendname = $("#sendname").val();
    var sendphone = $("#sendphone").val();
    var sendoin = $("#sendoin").val();
    var sendaddres = $("#sendaddres").val();
    var sendcity = $("#sendcity").val();
    var sendstate = $("#sendstate").val();
    var sendlandmark = $("#sendlandmark").val();
    var sendalter = $("#sendalter").val();
    var sendlat = $("#sendlat").val();
    var sendlong = $("#sendlong").val();
    var userid = $(".userid").val();
    var sendnamel = sendname.length;
    var sendphonel = sendphone.length;
    var sendalterl = sendalter.length;
    var sendoinl = sendoin.length;
    var sendaddresl = sendaddres.length;

    var regex = /^[0-9\_]+$/;
    var alphatext = /^[a-zA-Z ]*$/;

    if ((sendname == "") || (sendphone == "") || (sendoin == "") || (sendaddres == "") || (sendcity == "") || (sendstate == "")) {
        var snaktext = "Please fill required field";
        tost(snaktext);
        $(".image_spinner_on").css('display', 'none');
    } else if (regex.test(sendphone) != true) {
        $(".image_spinner_on").css('display', 'none');
        var snaktext = "Invalid phone number ";
        tost(snaktext);
    } else if (sendnamel < 2) {
        var snaktext = "Name is too short!";
        tost(snaktext);
        $(".image_spinner_on").css('display', 'none');
    } else if (sendphonel != 10) {
        var snaktext = "Enter Valid Phone Number";
        tost(snaktext);
        $(".image_spinner_on").css('display', 'none');
    } else if (sendoinl != 6) {
        var snaktext = "Enter Valid Pincode";
        tost(snaktext);
        $(".image_spinner_on").css('display', 'none');
    } else if (sendaddresl <= 10) {
        var snaktext = "Address lenght is too short";
        tost(snaktext);
        $(".image_spinner_on").css('display', 'none');
    } else {
        $.ajax({
            type: "post",
            url: url + "Home/adddelivery",
            data: {
                'sendname': sendname,
                'sendphone': sendphone,
                'sendoin': sendoin,
                'sendaddres': sendaddres,
                'sendcity': sendcity,
                'sendstate': sendstate,
                'sendlandmark': sendlandmark,
                'sendalter': sendalter,
                'sendlat': sendlat,
                'sendlong': sendlong,
                'userid': userid
            },
            beforeSend: function() {
                // setting a timeout
                $(".image_spinner_on").css('display', '');
            },
            success: function(data) {
                $(".image_spinner_on").css('display', 'none');
                //   console.log(data);
                if (data == 1) {

                    location.reload();
                    var snaktext = "Delivery Address Added";
                    tost(snaktext);
                    $("#updateaddress").text(sendaddres);
                }
            }
        });
    }




    // console.log(sendname, sendphone, sendoin, sendaddres, sendcity, sendstate, sendlandmark, sendalter, userid);




});




$("#DeleteAddress").click(function(event) {
    $(".image_spinner_on").css('display', '');
    var userid = $(".userid").val();
    $.ajax({
        type: "post",
        url: url + "Home/DeleteAddress",
        data: {
            'userid': userid
        },
        success: function(data) {
            // console.log(data);
            if (data == 1) {
                $(".image_spinner_on").css('display', 'none');
                var snaktext = "Delivery Address Deleted";
                tost(snaktext);
                var location = "address";
                setlocalstorage(location);
                reload();


            }
        }
    });
});

function reload() {
    location.reload();
}

if (window.location.href.indexOf("myprofile") > -1) {
    locationset();
}




if (window.location.href.indexOf("completeorder") > -1) {
    localStorage.setItem('prlocation', "history");
}


function setlocalstorage(location) {
    localStorage.setItem('location', location);
}

function locationset() {
    var cclocation = localStorage.getItem('location');
    // console.log(cclocation);
    if (cclocation == "address") {
        $('#addresspeview').trigger('click');
        setTimeout(
            function() {
                localStorage.setItem('location', "Wowkerala");
            }, 2000);

    }
}


//ajax filtering

var scrolldata = [{ "name": "limit", "value": "0" }, { "name": "offset", "value": "12" }, { "name": "priceranges", "value": "1-200000" }];
var offsetCount = 12;
var limitCount = 12;
var isScroll = true;
var totalcount = 0;
var currentpage = 1;

var main_cat = $("#main_cat").val();

function formarea(event, sorting, flag) {

    if (flag == true) {

        offsetCount = 12;
        limitCount = 12;
        isScroll = true;
        totalcount = 0;
        currentpage = 1;

        if ($('.Price_Class').is(':checked') || $('.class_inputcolor').is(':checked')) {
            var serial = $(".filerproducts").serializeArray();
            console.log(serial);
            if (event.target.className == "sortby") {
                serial.push({ name: 'sort', value: sorting })
            }
            serial.unshift({ "name": "limit", "value": "0" });
            serial.unshift({ "name": "offset", "value": "12" });


            var data = JSON.stringify(serial);
            scrolldata = data;




            publickajax(data, true);

            console.log('yyyyyyyyyyyyyyyyyyyyyy');

            console.log(totalcount);


            //console.log(data);
        }

    } else {


        currentpage++;
        //
        scrolldata = JSON.parse(scrolldata);

        var paginator = new pagination.SearchPaginator({ prelink: '/', current: currentpage, rowsPerPage: 12, totalResult: totalcount });
        var pages = paginator.getPaginationData();
        console.log(pages);
        var limit1 = pages.fromResult - 1;
        var calcLimit = pages.toResult;
        var limit2 = calcLimit - limit1;
        scrolldata[0].value = limit2; //offset
        // console.log(scrolldata[0]);

        scrolldata[1].value = pages.fromResult - 1;; //limit 
        scrolldata = JSON.stringify(scrolldata);
        publickajax(scrolldata, false);
        console.log(pages);
        if (pages.toResult == pages.totalResult) {
            $('.loadmoreproducts').hide();
        }
        // if(totalcount<limitCount){
        //    return false;
        // }
        // else if(limitCount>totalcount){
        //     console.log('hhhhhhhhhhhhhh');
        // }

        // if(totalcount>=limitCount ){
        //         console.log('totalcount>=limitCount && totalcount <=offsetCount');

        //         publickajax(scrolldata, false);


        //          //    limitCount = limitCount + 6;
        //          // offsetCount = offsetCount + 12;

        //     }
        //     else if(totalcount<limitCount){
        //         console.log('totalcount<limitCount');   
        //         limitCount = limitCount-6;
        //         offsetCount = offsetCount - 12;

        //         console.log(limitCount);
        //         console.log(offsetCount);
        //         if(totalcount>=limitCount ){
        //         console.log('totalcount>=limitCount && totalcount <=offsetCount');
        //          scrolldata[0].value = totalcount; //offset
        // // console.log(scrolldata[0]);
        // scrolldata[1].value = 12; //limit 
        //         publickajax(scrolldata, false);


        //          //    limitCount = limitCount + 6;
        //          // offsetCount = offsetCount + 12;

        //     }

        //     }

        // if(limitCount >= totalcount){
        //     limitCount = totalcount;
        // }else{



        //     if(limitCount >= totalcount){
        //     limitCount = totalcount;
        //      }
        // }

        //  console.log('####******************************###');
        // console.log(totalcount);
        // console.log(limitCount);
        // console.log(offsetCount);

        // if(limitCount > totalcount){
        //     limitCount = totalcount;
        //      }

        // console.log('#####################################');
        // console.log(totalcount);
        // console.log(limitCount);
        // console.log(offsetCount);
        // if(totalcount==limitCount){
        //     return false;
        // }
        // console.log(scrolldata);

        // console.log(totalcount);
        // console.log(limitCount);
        // console.log(offsetCount);
        // limitCount = limitCount + 6;
        //          offsetCount = offsetCount + 12;


        //         limitCount = limitCount + 6;
        //         offsetCount = offsetCount + 12;
        // console.log('************************************************************');




    }



}

$(".Price_Class, .class_inputcolor, .sortby").click(function(event) {
    console.log($(this).val());
    // if($(this).val() =='1-20000'){
    $('.loadmoreproducts').show();
    offsetCount = 12;
    limitCount = 12;
    isScroll = true;
    totalcount = 0;
    // }
    //     var offsetCount = 12;
    // var limitCount = 12;
    // var isScroll = true;
    // var totalcount=0;
    formarea(event, $(this).val(), true);


    

});



///pagination
$(".loadmoreproducts").click(function() {
    var counter = 0;
    var scroll = "scroll";
    if (isScroll) {
        isScroll = false;
        formarea("", "", false);

    }
});



// $(window).scroll(function() {
//     if ($(window).scrollTop() >= ($(document).height() - $(window).height()) * 0.3) {
//         var scroll = "scroll";
//         if (isScroll) {
//             isScroll = false;
//             formarea("", "", false);
//         }

//     }
// });



function publickajax(data, flag) {
    $.ajax({
        type: "post",
        url: url + "Home/fillterproduct",
        data: {
            'data': data
        },
        success: function(data) {
            var result = JSON.parse(data);
            console.log(result);
            totalcount = result.total;
            isScroll = true;
            if (result == 0) {
                $("#dataproducts").html('');
                //$(".loadmoreproducts").css("display", "none");
            } else if (flag) {
                $("#dataproducts").html(result.res);
            } else {
                // console.log('--------');
                //$(".loadmoreproducts").css("display", "");
                $("#dataproducts").append(result.res);
            }


            if (flag == true) {
                var paginator = new pagination.SearchPaginator({ prelink: '/', current: currentpage, rowsPerPage: 12, totalResult: totalcount });
                var pages = paginator.getPaginationData();
                console.log(pages);
                if (pages.toResult == pages.totalResult) {
                    $('.loadmoreproducts').hide();
                }
            }

            if ($("#dataproducts").html() == "0") {
        $("#dataproducts").html('<div class="your_cart_is_empty"> <div class="cart_empty_image"></div><div class="cart_empty_text"><h3>No item found!</h3></div><div class="cart_empty_text"><a href="'+url+'"><i class="fa fa-chevron-left" aria-hidden="true"></i> Continue Shopping</a></div></div>');
    }


        }
    });
}
//trigger button onoad
$(".trigger_button_load").trigger("click");
//end filter


//var reddem = localStorage.getItem('redeem');
$("#redeempoints").click(function(event) {
    var userid = $(".userid").val();
    $.ajax({
        type: "post",
        url: url + "Home/redeempoints",
        data: {
            'userid': userid
        },
        success: function(data) {
            var snaktext = "Point Is Applied";
            tost(snaktext);
            location.reload();
        }
    });
});


function applyvoucher() {
    var voucher = $("#vouchercode").val();
    if (voucher != "") {
        $.ajax({
            type: "post",
            url: url + "Home/applyvoucher",
            data: {
                'voucher': voucher
            },
            success: function(data) {
                datas = JSON.parse(data);
            }
        });
    }
}


$("#voucherapplied").click(function(event) {
    var vouchercode = $("#vouchercode").val();
    var user_id = $(".user_id").val(); // please add input type hidden in the page for user id

    // alert(user_id);
    // alert(vouchercode);
    $.ajax({
        url: url + "Home/checkvoucher",
        type: "post",
        dataType: 'text',
        data: {
            'vouchercode': vouchercode,
            'user_id': user_id
        },
        success: function(data) {
            alert(data);
            if (data == 1) {
                var snaktext = "Voucher Is Applied";
                tost(snaktext);
                location.reload();
            } else if (data == 2) {
                var snaktext = "Entered Voucher Is Invalid";
                tost(snaktext);
            } else if (data == 3) {
                var snaktext = "This Voucher Is Already Used";
                tost(snaktext);
            }
        }
    });
});


$("#profileprevew").click(function(event) {
    $("#profileviewfull .profile_tab_manager").css("display", "none");
    $("#myprofile").css("display", "");
    localStorage.setItem('prlocation', "profile");
});

$("#addresspeview").click(function(event) {
    $("#profileviewfull .profile_tab_manager").css("display", "none");
    $("#myaddress").css("display", "");
    localStorage.setItem('prlocation', "address");
});
$("#historyprevew").click(function(event) {
    $("#profileviewfull .profile_tab_manager").css("display", "none");
    $("#myhistory").css("display", "");
    localStorage.setItem('prlocation', "history");
});

$("#newsletterprevw").click(function(event) {
    $("#profileviewfull .profile_tab_manager").css("display", "none");
    $("#newsleers").css("display", "");
    localStorage.setItem('prlocation', "news");

});

$("#medicinerevew").click(function(event) {
    $("#profileviewfull .profile_tab_manager").css("display", "none");
    $("#mymedicine").css("display", "");
    localStorage.setItem('prlocation', "medicine");

});

$("#shareearn").click(function(event) {
    $("#profileviewfull .profile_tab_manager").css("display", "none");
    $("#shareandearn").css("display", "");
    localStorage.setItem('prlocation', "share");
});

$("#rewardspreview").click(function(event) {
    $("#profileviewfull .profile_tab_manager").css("display", "none");
    $("#rewards").css("display", "");
    localStorage.setItem('prlocation', "rewards");

});

$(".gotoprofiile").click(function(event) {
    localStorage.setItem('prlocation', "profile");
});

$(".gotoorders").click(function(event) {
    localStorage.setItem('prlocation', "history");
});

$(".gototrackorder").click(function(event) {
    localStorage.setItem('suportlocation', "track");
});

$(".suportprofile").click(function(event) {
    localStorage.setItem('suportlocation', "history");
});



var loclocation = localStorage.getItem('prlocation');


if (loclocation == "profile") {
    $("#navprofile li").removeClass('active');
    $("#profileprevew").addClass('active');
    $("#profileviewfull .profile_tab_manager").css("display", "none");
    $("#myprofile").css("display", "");
    //localStorage.setItem('prlocation', "");
}
if (loclocation == "address") {
    $("#navprofile li").removeClass('active');
    $("#addresspeview").addClass('active');
    $("#profileviewfull .profile_tab_manager").css("display", "none");
    $("#myaddress").css("display", "");
    //localStorage.setItem('prlocation', "");
}
if (loclocation == "history") {
    $("#navprofile li").removeClass('active');
    $("#historyprevew").addClass('active');
    $("#profileviewfull .profile_tab_manager").css("display", "none");
    $("#myhistory").css("display", "");
    //localStorage.setItem('prlocation', "");
}


if (loclocation == "news") {
    $("#navprofile li").removeClass('active');
    $("#newsletterprevw").addClass('active');
    $("#profileviewfull .profile_tab_manager").css("display", "none");
    $("#newsleers").css("display", "");
    //localStorage.setItem('prlocation', "");
}
if (loclocation == "rewards") {
    $("#navprofile li").removeClass('active');
    $("#rewardspreview").addClass('active');
    $("#profileviewfull .profile_tab_manager").css("display", "none");
    $("#rewards").css("display", "");
    //localStorage.setItem('prlocation', "");
}

if (loclocation == "share") {
    $("#navprofile li").removeClass('active');
    $("#shareearn").addClass('active');
    $("#profileviewfull .profile_tab_manager").css("display", "none");
    $("#shareandearn").css("display", "");
    //localStorage.setItem('prlocation', "");
}

if (loclocation == "medicine") {
    $("#navprofile li").removeClass('active');
    $("#medicinerevew").addClass('active');
    $("#profileviewfull .profile_tab_manager").css("display", "none");
    $("#mymedicine").css("display", "");
    //localStorage.setItem('prlocation', "");
}

$(".trackorderTOprofile").click(function(event) {
    localStorage.setItem('prlocation', "history");
});



if (window.location.href.indexOf("myprofile") > -1) {
    var suportlocation = localStorage.getItem('suportlocation');
    if (suportlocation == "history") {
        $("#navprofile li").removeClass('active');
        $("#historyprevew").addClass('active');
        $("#profileviewfull .profile_tab_manager").css("display", "none");
        $("#myhistory").css("display", "");
        $('.support_section_btn').tooltip('toggle');
        setTimeout(function() {
            $('.tooltip').fadeOut('slow');
        }, 3000);

        //localStorage.setItem('prlocation', "");
    }
    if (suportlocation == "track") {
        $("#navprofile li").removeClass('active');
        $("#historyprevew").addClass('active');
        $("#profileviewfull .profile_tab_manager").css("display", "none");
        $("#myhistory").css("display", "");
        $('.track_order').tooltip('toggle');
        setTimeout(function() {
            $('.tooltip').fadeOut('slow');
        }, 3000);

        //localStorage.setItem('prlocation', "");
    }
    localStorage.setItem('suportlocation', "");
}








$("#invoiceOrder").css("display", "none");

$(".printorder").click(function(event) {
    $(".image_spinner_on").css('display', '');
    var userid = $(this).data("user");
    var orderid = $(this).data("order");
    $.ajax({
        type: "post",
        url: url + "Home/printorder",
        data: {
            'userid': userid,
            'orderid': orderid
        },
        success: function(data) {

            datas = JSON.parse(data);
            console.log(datas);
            //   console.log(datas.order[0].vendor_display_name);
            // $("#vendordetails").html(datas.order[0].vendor_display_name);
            // $("#vendoraddress").html(datas.order[0].vendor_address);
            $("#orderidprint").text(datas.order[0].order_id);
            $("#order_date_print").text(datas.order[0].create_date);
            // $("#payment_method").text(datas.order[0].payment_type);
            $("#order_date_print").text(datas.order[0].create_date);
            if (datas.order[0].payment_type == 0) {
                $("#payment_method").text("COD");
            } else if (datas.order[0].payment_type == 1) {
                $("#payment_method").text("Online Payment");
            }

            $("#user_firstname").text(datas.order[0].firstname);
            $("#user_address").text(datas.order[0].address);
            $("#user_city").text(datas.order[0].city);
            $("#user_country").text(datas.order[0].country);
            $("#user_phone").text(datas.order[0].phone);
            //data order end
            //data address start
            $("#del_name").text(datas.address[0].display_name);
            $("#del_address").text(datas.address[0].addressline);
            $("#del_landmark").text(datas.address[0].landmark);
            $("#del_locality").text(datas.address[0].town);
            $("#del_state").text(datas.address[0].state);
            $("#del_pincode").text(datas.address[0].pincode);
            $("#del_phone").text(datas.address[0].mobile);
            // var subtotal = parseInt(datas.order[0].ototal) * parseInt(datas.order[0].qty);
            var subtotal = parseFloat(datas.order[0].ototal) * parseInt(datas.order[0].qty);
            $("#display_cover_name").text(datas.order[0].product_name);
            $("#pr_qntty").text(datas.order[0].qty);
            $("#product_real_price").text(datas.order[0].product_list_price);
            $("#product_offerprice").text(datas.order[0].ototal);
            $("#product_subtotal").text(subtotal);
            $("#pr_subtotal").text(subtotal);
            //alert(datas.order[0].sub_total);

            if (datas.order[0].product_shipping_price == 0) {
                $("#pr_shipping_cost").text("Free");
                // var grandtotal = parseInt(subtotal) + 0;
                // $("#pr_grandtotal").text(grandtotal);
                var grandtotal = parseFloat(subtotal) + 0;
                $("#pr_grandtotal").text(Math.round(grandtotal));
            } else {
                $("#pr_shipping_cost").text(datas.order[0].product_shipping_price);
                // var grandtotal = parseInt(subtotal) + parseInt(datas.order[0].product_shipping_price);
                // $("#pr_grandtotal").text(grandtotal);
                var grandtotal = parseFloat(subtotal) + parseInt(datas.order[0].product_shipping_price);
                $("#pr_grandtotal").text(Math.round(grandtotal));
            }
            $(".image_spinner_on").css('display', 'none');

        }
    });
});

function printorder() {
    var prtContent = document.getElementById("invoiceOrder");
    var WinPrint = window.open('', '', '');
    WinPrint.document.write(prtContent.innerHTML);
    WinPrint.document.close();
    WinPrint.focus();
    WinPrint.print();
    WinPrint.close();

    $('#confirmmodel_print').modal('hide');
}

var order_status_count = $(".order_ststus").val();
if (order_status_count == 1) {
    $(".order1").removeClass('disabled');
    $(".order1").addClass('complete');
}
if (order_status_count == 2) {
    $(".order1, .order2").removeClass('disabled');
    $(".order1, .order2").addClass('complete');
}
if (order_status_count == 3) {
    $(".order1, .order2, .order3").removeClass('disabled');
    $(".order1, .order2, .order3").addClass('complete');
}
if (order_status_count == 4) {
    $(".order1, .order2, .order3, .order4").removeClass('disabled');
    $(".order1, .order2, .order3, .order4").addClass('complete');
}
if (order_status_count == 5) {
    $(".order1, .order2, .order3, .order4, .order5").removeClass('disabled');
    $(".order1, .order2, .order3, .order4, .order5").addClass('complete');
}

$("#defaddress").text($("#getusername").val());
$("#defaddresfuul").text($("#getaddress").val());

$(".updatepassword").click(function(event) {
    $(".image_spinner_on2").css('display', '');
    var oldpassword = $("#oldpassword").val();
    var userid = $(".userid").val();
    $.ajax({
        type: "post",
        url: url + "Home/checkpassword",
        data: {
            'oldpassword': oldpassword,
            'userid': userid
        },
        success: function(data) {
            $(".image_spinner_on2").css('display', 'none');
            if (data == 1) {
                var snaktext = "Enter new password";
                tost(snaktext);
                $("#checkoldpass").css("display", "none");
                $("#setnewpassword").css("display", "");
            } else {
                var snaktext = "Enter your current password";
                tost(snaktext);
            }
            // if (data == oldpassword) {
            //   
            // }
        }
    });


});


$(".pass_change_word").click(function(event) {
    $("#setnewpassword").css('display', 'none');
    $("#checkoldpass").css('display', '');
    $("#oldpassword").val("");
});










$(".setpasword").click(function(event) {
    $(".image_spinner_on2").css('display', '');
    var oldpassword = $("#oldpassword").val();
    var newpassword = $("#newpassword").val();
    var confirmpass = $("#confirmpass").val();
    var newpasswordL = newpassword.length;
    var userid = $(".userid").val();

    if (newpassword == oldpassword) {
        var snaktext = "Old password and New password are same!";
        tost(snaktext);
        $(".image_spinner_on2").css('display', 'none');
    } else if (newpasswordL < 8) {
        var snaktext = "Password length is too short";
        tost(snaktext);
        $(".image_spinner_on2").css('display', 'none');
    } else if (newpassword != confirmpass) {
        var snaktext = "Passwords missmatch!";
        tost(snaktext);
        $(".image_spinner_on2").css('display', 'none');
    } else if (newpassword == confirmpass) {
        $.ajax({
            type: "post",
            url: url + "Home/updatepassword",
            data: {
                'oldpassword': oldpassword,
                'userid': userid,
                'confirmpass': confirmpass
            },
            success: function(data) {
                $(".image_spinner_on2").css('display', 'none');
                if (data == 1) {
                    localStorage.setItem('prlocation', "profile");
                    window.location = url + 'Home/Login';
                }
            }
        });
    }



});





$(".showpassword").click(function(event) {
    if ($(this).text() == "Show") {
        $(this).text("Hide");
        $("#oldpassword, #newpassword, #confirmpass").attr('type', 'text');
    } else {
        $(this).text("Show");
        $("#oldpassword, #newpassword, #confirmpass").attr('type', 'password');
    }
});

$(".savenumber").css('display', 'none');
var text = $("#edit_phone_in_profile").html();
  var mobileupdate = $("#mobileupdate").val();
$("#edit_phone_in_profile").click(function(event) {
  
    if ($(this).text() != "Cancel") {
        $(this).text('Cancel');
        $("#mobileupdate").prop('disabled', false);
        $("#mobileupdate").focus();
        $(".savenumber").css('display', '');
    } else {
        $("#mobileupdate").prop('disabled', true);
        $(".savenumber").css('display', 'none');
        $(this).html(text);
        $("#mobileupdate").val(mobileupdate);
    }
});



$("#savenumber").click(function(event) {
    $(".image_spinner_on").css('display', '');
    var phone = $("#mobileupdate").val();
    var userid = $(".userid").val();
     var myphon =/^[0-9\_]+$/;
     var sendphone = phone.length;
     if (myphon.test(phone) != true) {
     $(".image_spinner_on").css('display', 'none');
        var snaktext = "Please Enter a Valid Phone Number!";
        tost(snaktext);
    } else if (sendphone != 10) {
        var snaktext = "Enter Valid Phone Number";
        tost(snaktext);
        $(".image_spinner_on").css('display', 'none');
    } else {
        
    $.ajax({
        type: "post",
        url: url + "Home/updatephonenumber",
        data: {
            'userid': userid,
            'phone': phone
        },
        success: function(data) {
            $(".image_spinner_on").css('display', 'none');
            // alert(data);
            if (data == 0) {
                localStorage.setItem('prlocation', "profile");
                var snaktext = "Please enter new number!";
                tost(snaktext);
            }
            if (data == 1) {
                $('#cnfrm_phonenumber').modal('show');
                var snaktext = "OTP has been sent to your mobile";
                tost(snaktext);
            }
            if (data == 2) {
                var snaktext = "Phone number already existing";
                tost(snaktext);
            }
        }
    });
}
});
$("#submitphone_update").click(function(event) {
    $(".image_spinner_on1").css('display', '');
    var phone = $("#mobileupdate").val();
    var userid = $(".userid").val();
    var otp = $("#update_phone_nmbr_pr").val();
    $.ajax({
        type: "post",
        url: url + "Home/updateotpaccount",
        data: {
            'otp': otp,
            'phone': phone,
            'userid': userid
        },
        success: function(data) {
            $(".image_spinner_on1").css('display', 'none');
            // alert(data);
            if (data == 0) {
                localStorage.setItem('prlocation', "profile");
                var snaktext = "Invalid OTP!";
                tost(snaktext);
            }
            if (data == 1) {
                localStorage.setItem('prlocation', "profile");
                var snaktext = "Phone number Changed!";
                tost(snaktext);
                $('#cnfrm_phonenumber').modal('hide');
                location.reload();
            }

        }
    });
});
$("#Submit_reson").click(function(event) {
    var cancell_dis = $(".Cancellation_dicription").val();
    var Reason_select = $(".Reason_select").val();
    var userid = $(".userid").val();
    var Product_id = $(".Product_id").val();
    var order_id = $(".order_id").val();
    var order_item_id = $(".order_item_id").val();

  if( $(".Reason_select option:selected").val()=='default'){
 var snaktext = "Please select reason";
            tost(snaktext);
    }
    else {

    $.ajax({
        type: "post",
        url: url + "Home/cancellationrequest",
        data: {
            'cancell_dis': cancell_dis,
            'Reason_select': Reason_select,
            'userid': userid,
            'Product_id': Product_id,
            'order_id': order_id,
            'order_item_id': order_item_id
        },
        success: function(data) {
            var snaktext = "You cancelled the order!";
            tost(snaktext);
            location.reload();
        }
    });
}

});

$(".set_cancel_stor").click(function(event) {
    localStorage.setItem('prlocationCANCEL', "cancelorder");
});


if (window.location.href.indexOf("trackorder") > -1) {
    var Cancellocation = localStorage.getItem('prlocationCANCEL');
    if (Cancellocation == "cancelorder") {
        $('#goinjgtocancel').modal('show');
        localStorage.setItem('prlocationCANCEL', "");
    }
}


$(".rivewList").click(function(event) {
    $(".prod_full_des li").removeClass('active');
    $(this).addClass('active');
    $(".pr_tb_cnt .tab-pane").css('display', 'none');
    $("#review").css('display', 'block');
});

$(".description_in").click(function(event) {
    $(".prod_full_des li").removeClass('active');
    $(this).addClass('active');
    $(".pr_tb_cnt .tab-pane").css('display', 'none');
    $("#desc").css('display', '');
});

$(".set_rate_review").click(function(event) {
    localStorage.setItem('reviewProduct', "openreview");
});

if (window.location.href.indexOf("singleproducts") > -1) {
    var Cancellocation = localStorage.getItem('reviewProduct');
    if (Cancellocation == "openreview") {
        $(".prod_full_des li").removeClass('active');
        $(".rivewList").addClass('active');
        $(".pr_tb_cnt .tab-pane").css('display', 'none');
        $("#review").css('display', 'block');
        $('html, body').animate({
            scrollTop: $("#add_product").offset().top
        }, 2000);
    }
    localStorage.setItem('reviewProduct', "");
}

$(".support_section_btn").click(function(event) {
    $('#support_section').modal('show');
    $(".orderidZ").val($(this).data("orderid"));
    $(".vidZ").val($(this).data("vid"));
    $(".pridZ").val($(this).data("prid"));
    $(".useridZ").val($(this).data("userid"));
});


$(".support_for_medicine").click(function(event) {
    $('#support_section_medincine').modal('show');
    $(".orderidZ").val($(this).data("orderid"));
    $(".vidZ").val($(this).data("vid"));
    $(".pridZ").val($(this).data("prid"));
    $(".useridZ").val($(this).data("userid"));
});

$(".submit_issue_in").click(function(event) {
    var select = $('.issue_select :selected').val();
    var selectMessage = $(".issue_message").val();
    var order_id = $(".orderidZ").val();
    var proid = $(".pridZ").val();
    var userid = $(".useridZ").val();


    if( $(".issue_select option:selected").val()=='0'){
 var snaktext = "Please Select Issue";
            tost(snaktext);
    }
    else {
    $.ajax({
        type: "post",
        url: url + "Home/requestissue",
        data: {
            'select': select,
            'selectMessage': selectMessage,
            'order_id': order_id,
            'proid': proid,
            'userid': userid
        },
        success: function(data) {
            var snaktext = "Your complaint has been registered!";
            tost(snaktext);
            $('#support_section').modal('hide');
            $('.issue_select').val("0");
            $(".issue_message").val("");
            //location.reload();
        }
    });
}
});

$(".submit_issue_in_medicine").click(function(event) { 
    var select = $('.issue_select_med :selected').val();
    var selectMessage = $(".issue_message_med").val();
    var order_id = $(".orderidZ").val();
    var userid = $(".useridZ").val();
    // alert('hi');
        if( $(".issue_select_med option:selected").val()=='0'){
 var snaktext = "Please Select Issue";
            tost(snaktext);
    }
    else {
    $.ajax({
        type: "post",
        url: url + "Home/requestmedicineissue",
        data: {
            'select': select,
            'selectMessage': selectMessage,
            'order_id': order_id,
            'userid': userid
        },
        success: function(data) {
            console.log(data);
            var snaktext = "Your complaint has been registered!";
            tost(snaktext);
            $('#support_section').modal('hide');
            $('.issue_select_med').val("0");
            $(".issue_message_med").val("");
            location.reload();
        }
    });
}
});


$("#subscribenews").click(function(event) {
    $(".image_spinner_on").css('display', '');
    var email = $(".newletter_subcription").val();
    var userid = $(".userid").val();
       var atpos = email.indexOf("@");
        var dotpos = email.lastIndexOf(".");
    if (email == "") {
        var snaktext = "Enter a email id";
        tost(snaktext);
      $(".newletter_subcription").focus();
     $(".image_spinner_on").css('display', 'none');
    } else if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
        var snaktext = "Enter a valid email id";
        tost(snaktext);
        $(".newletter_subcription").focus();
        $(".image_spinner_on").css('display', 'none');
        } else {
        $.ajax({
            type: "post",
            url: url + "Home/newssubscription",
            data: {
                'email': email,
                'userid': userid
            },
            success: function(data) {
                $(".image_spinner_on").css('display', 'none');
                if (data == 0) {
                    var snaktext = "Already Used This Email!";
                    tost(snaktext);
                } else if (data == 1) {
                    var snaktext = "Subscription completed!";
                    tost(snaktext);
                   setTimeout(function(){ location.reload(); },1000);
                }

            }
        });
    }

});



$("#shareandearnpoints").click(function(event) {
    $(".image_spinner_on").css('display', '');
    var sharemobnum = $("#sharemobnum").val();
    var userid = $(".userid").val();
    if (sharemobnum == "") {
        var snaktext = "Enter a phone number";
        tost(snaktext);
        $(".image_spinner_on").css('display', 'none');
    } else {
        $.ajax({
            type: "post",
            url: url + "Home/shareandearn",
            data: {
                'sharemobnum': sharemobnum,
                'userid': userid
            },
            success: function(data) {
                $(".image_spinner_on").css('display', 'none');
                if (data == 0) {
                    var snaktext = "Invited Successfully!";
                    tost(snaktext);
                    $("#sharemobnum").val('');
                } else if (data == 1) {
                    var snaktext = "Subscription completed!";
                    tost(snaktext);
                    location.reload();
                }

            }
        });
    }

});


$("#subscription_edit").click(function(event) {
    $(this).css('display', 'none');
    $("#Savebutton_db").css('display', '');
    var email = $(".newletter_subcription").val();
    $(".newletter_subcription").attr({
        disabled: false,
        readonly: false
    });
    $(".newletter_subcription").focus();
});

$("#Savebutton_db").click(function(event) {
    $(".image_spinner_on").css('display', '');
    var email = $(".newletter_subcription").val();
        var atpos = email.indexOf("@");
        var dotpos = email.lastIndexOf(".");
    var userid = $(".userid").val();
    if (email == "") {
        $(".image_spinner_on").css('display', 'none');
        var snaktext = "Enter a email ID";
        tost(snaktext);
    } else if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
        var snaktext = "Enter a valid email id";
        tost(snaktext);
        $(".newletter_subcription").focus();
        $(".image_spinner_on").css('display', 'none');
        } else {
        $.ajax({
            type: "post",
            url: url + "Home/newssubscriptionupdate",
            data: {
                'email': email,
                'userid': userid
            },
            success: function(data) {
                $(".image_spinner_on").css('display', 'none');
                $("#Savebutton_db").css('display', 'none');
                $("#subscription_edit").css('display', '');
                if (data == 1) {
                    var snaktext = "Subscription completed!";
                     // swal(" Thank you ", "Subscription completed!", "success");
                    tost(snaktext);
                    $(".newletter_subcription").attr({
                        disabled: true,
                        readonly: true
                    });
                } else if (data == 0) {
                    var snaktext = "Already Used This Email!";
                    tost(snaktext);
                   setTimeout(function(){ location.reload(); }, 1000);
                }

            }
        });
    }
});

$("#subscription_delete").click(function(event) {
    $(".image_spinner_on").css('display', '');
    var email = $(".newletter_subcription").val();
    var userid = $(".userid").val();
    $.ajax({
        type: "post",
        url: url + "Home/newssubscriptionRemove",
        data: {
            'email': email,
            'userid': userid
        },
        success: function(data) {
            $(".image_spinner_on").css('display', 'none');
            if (data == 1) {
                var snaktext = "Subscription Removed!";
                tost(snaktext);
                location.reload();
            }

        }
    });
});


// var indexpage = $(".indexpage").val();
// if (indexpage == 1) {
//
//     var slideIndex = 1;
//     showSlides(slideIndex);
//
//     function plusSlides(n) {
//         showSlides(slideIndex += n);
//     }
//
//     function currentSlide(n) {
//         showSlides(slideIndex = n);
//     }
//
//     function showSlides(n) {
//         var i;
//         var slides = document.getElementsByClassName("mySlides");
//         var dots = document.getElementsByClassName("dot");
//         if (n > slides.length) { slideIndex = 1 }
//         if (n < 1) { slideIndex = slides.length }
//         for (i = 0; i < slides.length; i++) {
//             slides[i].style.display = "none";
//         }
//         for (i = 0; i < dots.length; i++) {
//             dots[i].className = dots[i].className.replace(" active", "");
//         }
//         slides[slideIndex - 1].style.display = "block";
//         dots[slideIndex - 1].className += " active";
//     }
// }



$("#cardpayment").click(function() {
    $("#rdeempointsid").css("display", "");
    $("#voucherbtn").css("display", "");
});

$("#codpayment").click(function() {
    $("#rdeempointsid").css("display", "none");
    $("#voucherbtn").css("display", "none");
});



$(".addressaditbtn").click(function(event) {
    $(".pofileeditboxinner").css('display', 'block');
});


var valueoflogin = $(".valueoflogin").val();

if (valueoflogin == 1) {
    $(".loginloginpage").css('display', 'none');
}


//share products 
var pageURL = $(location).attr("href");
 // $(".image_spinner_on_main").css('display', 'none');
$('.sharetogoogleplus').click(function(e) {
    // $(".image_spinner_on_main").css('display', '');
    window.location = 'https://plus.google.com/share?url=' + pageURL + '';
});
$('.sharetolinkdn').click(function(e) {
    // $(".image_spinner_on_main").css('display', '');
    window.location = 'https://www.linkedin.com/shareArticle?mini=true&url=' + pageURL + '/&title=&summary=&source=';
});
$('.sharetomail').click(function(e) {
    // $(".image_spinner_on_main").css('display', '');
    window.location = 'mailto:info@hotelbozz.com';
});
$('.sharetofacebook').click(function(e) {
    // $(".image_spinner_on_main").css('display', '');
    window.location = 'https://www.facebook.com/sharer/sharer.php?u=' + pageURL + '';
});
$('.sharetotwitter').click(function(e) {
    // $(".image_spinner_on_main").css('display', '');
    window.location = 'https://twitter.com/home?status=' + pageURL + '';
});
$('.sharetopin').click(function(e) {
    // $(".image_spinner_on_main").css('display', '');
    window.location = 'https://pinterest.com/pin/create/button/?url=&media=' + pageURL + '/&description=';
});

$(".buton_check_outy").click(function(event) {
    $(".image_spinner_on_jaffer").css('display', '');
});


$(".return_section_button").click(function(event) {
    $("#return_section").modal('show');
    $(".orderidZ").val($(this).data("orderid"));
    $(".vidZ").val($(this).data("vid"));
    $(".pridZ").val($(this).data("prid"));
    $(".useridZ").val($(this).data("userid"));
    $(".orderidfullZ").val($(this).data("orderidfull"));
});

$(".submit_returnissue").click(function() {
    var select = $('.returnorder_issue :selected').val();
    var selectMessage = $(".retun_message").val();
    var order_id = $(".orderidZ").val();
    var order_id_full = $(".orderidfullZ").val();
    var proid = $(".pridZ").val();
    var userid = $(".useridZ").val();

         if( $(".returnorder_issue option:selected").val()=='0'){
 var snaktext = "Please Select Issue";
            tost(snaktext);
    }
    else {
    $.ajax({
        type: "post",
        url: url + "Home/productreturn",
        data: {
            'select': select,
            'selectMessage': selectMessage,
            'order_id': order_id,
            'proid': proid,
            'userid': userid,
            'order_id_full': order_id_full
        },
        success: function(data) {
            var snaktext = "Return request submited!";
            tost(snaktext);
            $('#return_section').modal('hide');
            $('.returnorder_issue').val("0");
            $(".retun_message").val("");
            location.reload();
        }
    });
}
});


//moving bg
$(function() {
    var x = 0;
    setInterval(function() {
        x -= 1;
        $(".movebg").css('background-position', x + 'px 0');
    }, 100);
})

$(".norefresh").submit(function(e) {
    e.preventDefault();
});
$(".repeatpass").submit(function(e) {
    e.preventDefault();
});

var cart_count = $("#cart_count").val();
var cart_size = $("#sizechart").val();

// if (cart_count > 1) {
//     $("#add_product").css('display', 'none');
//     $("#gotocart").css('display', '');
// }
// if (cart_count == 0) {
//     $("#add_product").css('display', '');
//     $("#gotocart").css('display', 'none');   
// }
// if (cart_count == "") {
//     $("#add_product").css('display', '');
//     $("#gotocart").css('display', 'none');   
// }
// $(".sizeactive:first-child").addClass('size_active');
// var fvalue = $(".sizeactive:first-child").val();
//$("#sizechart").val(fvalue);
$(".sizeactive").each(function(index, el) {
    var cas = $(this);
    var size = $(this).text();
    var cartdata = $(this).data("cart");
    if (cartdata != 0) {
        //$(this).addClass('size_active');
        $("#add_product").css('display', 'none');
        $("#gotocart").css('display', '');
    }
});

$(".sizeactive").click(function(event) {
    var cartdata = $(this).data("cart");
    $(".size_chart_master").removeClass('size_chart_master_error');
    $(".sizeactive_div .sizeactive").removeClass('size_active');
    $(this).addClass('size_active');
    var size = $(this).text();
    $("#sizechart").val(size);
    if (size == cartdata) {
        $("#add_product").css('display', 'none');
        $("#gotocart").css('display', '');
    }
    if (size != cartdata) {
        $("#add_product").css('display', '');
        $("#gotocart").css('display', 'none');
    }
});


$("#product_master_info form").submit(function(e) {
    if ($("#sizechart").val() == "") {
        e.preventDefault();
        $(".size_chart_master").addClass('size_chart_master_error');
    }
});

$(".sone_login").click(function(event) {
    $("#loginorregisetr").modal("show");
});


$('.rem_file_upload').click(function() {
    $('.click_to_upload').css('display',"");
});

// $("#rem_pre_upload_id").change(function(event) {

// var wrapper = $('<div/>').css({height:0,width:0,'overflow':'hidden'});
// var fileInput = $(':file').wrap(wrapper);
// var text;

//  $this = $(this);
//  $('#upload-img-btn').html($this.val());
//  text = $('#upload-img-btn').html();




// if(text.length >0){
//      text = text.substring(text.lastIndexOf("\\") + 1, text.length);
// $('#upload-img-btn').html(text);
//         }
//         else{

//         $('#upload-img-btn').html("Please choose file");

//         }


//     $('.submit_pre_rem').css('display',"");
 
//    $('#upload-img-btn').show();
// });



$(".click_to_change form").submit(function(event) {
    /* Act on the event */
    $("div#divLoading").addClass('show');
});

if (window.location.href.indexOf("uploadprescription") > -1) {
    $('.rem_file_upload').css('border', 'none');
    $('.remedio_call_backed').css('border-bottom', '4px solid #29a8df');
    
}
// $(".rem_file_upload").click(function(event) {


// });

$(".star_value").each(function(index, el) {
    var x = $(this).find('span').text();
    if (x == "0") {
        $(this).css('display', 'none');
    }
});

$(".rem_me_image_pre").click(function(event) {
    /* Act on the event */
    $("#view_main_order_image").modal("show");
});

$(".rem_cancel_button_cancel").click(function(event) {
    /* Act on the event */
    $("#rem_pre_order_cancel").modal("show");
});

$(".order_cnfirm_rem").click(function(event) {
    /* Act on the event */
     $("#view_submit_address").modal("show");
});



$(document).on('click', ".cod_to_confirm", function() {
    var method = $(this).data("mt");
    var userid = $(".userid").val();
    var orderid = $(".medicineid").val();
    var gtotal = $(".gtotal").val();
       console.log(method, orderid, userid, gtotal);
        $(".image_spinner_on").css('display', '');
      $.ajax({
        type: "post",
        url: url + "Home/completemedicineorder",
        data: {
            'userid': userid,
            'orderid': orderid,
            'method' : method,
            'gtotal' : gtotal
        },
        success: function(data) {

           if (data == 1) {
             $(".image_spinner_on").css('display', 'none');
             location.reload();
           }

        }
    });  
});


$(".btn_submit_cancellation_rem").click(function(event) {
    /* Act on the event */
    var cancell_dis = $(".Cancellation_dicription").val();
    var Reason_select = $(".Reason_select").val();
    var userid = $(".userid").val();
    var medicineid = $(".medicineid").val();

  if( $(".Reason_select option:selected").val()=='default'){
 var snaktext = "Please select reason";
            tost(snaktext);
    }
    else { 
         $(".image_spinner_on").css('display', '');
        $.ajax({
        type: "post",
        url: url + "Home/cancelmedicineorder",
        data: {
            'cancell_dis': cancell_dis,
            'Reason_select': Reason_select,
            'userid': userid,
            'medicineid': medicineid
            },
        success: function(data) {
            if (data == 1) {
                   // $(".image_spinner_on").css('display', 'none');
                  var snaktext = "You cancelled the order!";
                    tost(snaktext);
                    location.reload();
            }
            // location.reload();
        }
    });
}
});

$(".waitingforrem").each(function(index, el) {
    var tr = $(this);
    console.log(tr);
    var testes = $(this).text().replace(/ /g,'');
    var testtwo = testes.replace(/(\r\n\t|\n|\r\t)/gm,"");
    if (testtwo == "Waitforremedioresponse") {
        tr.prev(" ").css('display', 'none');
    }
});

$(".cancelled_order").each(function(index, el) {
     var texts = $(this).text().replace(/ /g,'');
      var testtwo = texts.replace(/(\r\n\t|\n|\r\t)/gm,"");
      console.log(testtwo);
      if (testtwo == "Cancelled") {
       $(this).html("Cancelled");
       $(this).css({
           background: 'red',
           color: 'white',
           border:'none'
       });
    }
    console.log(texts);
});

$("#newpassword, #enterpasword").keyup(function(event){var src=$(this).val();string=src.replace(/ +/g,'');$(this).val(string)});
$("input").keyup(function(event){var src=$(this).val();string=src.replace(/  +/g,'');$(this).val(string)});
$("#email").keyup(function(event){var src=$(this).val();string=src.replace(/ +/g,'');$(this).val(string)});
$("input").keyup(function(event){var inputs=$(this).val();if(inputs==""){$(this).val("")}});
$('.charconly,.charconlyda').bind('keyup blur',function(){var node=$(this);node.val(node.val().replace(/[^a-zA-Z ]/g,''))});
$('.myfullnameda').bind('keyup blur',function(){var node=$(this);node.val(node.val().replace(/[^a-zA-Z. ]/g,''))});
$('.numonly ').bind('keyup blur',function(){var node=$(this);node.val(node.val().replace(/[^0-9+ ]/g,''))});


