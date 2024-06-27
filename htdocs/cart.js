
function isMobile(){
                return navigator.userAgent.match(/(iPhone|iPod|iPad|blackberry|android|Kindle|htc|lg|midp|mmp|mobile|nokia|opera mini|palm|pocket|psp|sgh|smartphone|symbian|treo mini|Playstation Portable|SonyEricsson|Samsung|MobileExplorer|PalmSource|Benq|Windows Phone|Windows Mobile|IEMobile|Windows CE|Nintendo Wii)/i);
            }
            function second_next () {
                localStorage.setItem('soffer','0');
            if(localStorage.getItem('credits') > (price - 1)){
            document.getElementById('buy_second').style.opacity = '0';
            setTimeout(function(){
                document.getElementById('buy_second').style.display = 'none';
                if(isMobile()){
                    document.getElementById('buy_menu').style.height = '220px';
                } else {
                    document.getElementById('buy_menu').style.height = '125px';
                }
                    document.getElementById('buy_third').style.display = 'flex';
                setTimeout(function(){
                    document.getElementById('buy_third').style.opacity = '1'
                    setTimeout(function(){
                        document.getElementById('buy_third').style.opacity = '0';
                        setTimeout(function(){
                            document.getElementById('buy_third').style.display = 'none'
                            var vh = localStorage.getItem('credits')
                            parseInt(vh);
                            vh = vh - price;
                            localStorage.setItem('credits',vh)
                            document.getElementById('buy_last').style.display = 'block'
                if(isMobile()){
                    document.getElementById('buy_menu').style.width = '750px';
                } else {
                    document.getElementById('buy_menu').style.width = '700px';
                }
                            setTimeout(function(){
                                document.getElementById('buy_last').style.opacity = '1';
                            },400)
                        },251)
                    },7500)
                },500)
            },251)
        } else {
            document.getElementById('endend_price').style.background = 'red';
            setTimeout(function(){
                document.getElementById('endend_price').style.background = '';
            },500)
        }
        }
        function addcredits (e) {
            e.innerHTML = "Loading...";
            setTimeout(function(){
                window.open('/ynw.html','Loading','width=400,height=500')
                setTimeout(function(){
                    e.innerHTML = "Add credits";
                },1000)
            },900)
        }
        function onbuy() {
                        document.getElementById('buy_blur').style.filter = 'blur(20px)';
                        document.getElementById('buy_blur').style.overflowX = 'hidden';
                        document.getElementById('buy_now_outer').style.display= 'flex';
                        document.getElementById('end_price').innerHTML = price + '.00&ThinSpace;&euro;';
                        document.getElementById('buy_img').src = document.getElementById('vorschau_img').src;
                    }
                    function cancel () {
                        document.getElementById('buy_blur').style.filter = 'blur(0)';
                        document.getElementById('buy_blur').style.overflowY = 'hidden';
                        document.getElementById('buy_now_outer').style.display= 'none';
                    }
                    function checkcoupon () {
                        var gcode = document.getElementById('coupon_input').value;
                        var firstgroup = parseInt(gcode.charAt(0)) + parseInt(gcode.charAt(1)) + parseInt(gcode.charAt(2)) + parseInt(gcode.charAt(3));
                        var secondgroup = parseInt(gcode.charAt(4)) + parseInt(gcode.charAt(5)) + parseInt(gcode.charAt(6)) + parseInt(gcode.charAt(7));
                        var thirdgroup = parseInt(gcode.charAt(8)) + parseInt(gcode.charAt(9)) + parseInt(gcode.charAt(10)) + parseInt(gcode.charAt(11));
                        var lastgroup = parseInt(gcode.charAt(12)) + parseInt(gcode.charAt(13)) + parseInt(gcode.charAt(14)) + parseInt(gcode.charAt(15));
                        if(gcode < 9999999999999999){
                        if(firstgroup == 31 || firstgroup == 17){
                            if(secondgroup == 23 || secondgroup == 9){
                                if(thirdgroup == 12 || thirdgroup == 7){
                                    if(lastgroup == 24 || lastgroup == 35){
                                        richtig = 1;
                                        richt();
                                        console.log("coupon:true")
                                    }
                                }
                            }
                        }
                    }
                    if(richtig == 0){
                        console.log("coupon:false")
                    }
                    if(gcode > 0){
                        document.getElementById('coupon_div').style.backgroundColor = 'rgba(100,100,100,0.3)';
                    }
                    }
                    function coupon (e){
                        if(e.checked){
                            document.getElementById('couponcode').style.display = 'block'
                        } else {
                            document.getElementById('couponcode').style.display = 'none'
                            location.href = '#';
                        }
                    }
                    function addpen (e){
                        if(e.checked){
                            setTimeout(function(){
                            if(ca==1){
                            price = '12';
                            document.getElementById('penex').innerHTML = '- 5&euro;';
                            document.getElementById('price_').innerHTML = '&ensp;12 &euro;&ensp;';
                            document.getElementById('old__price').innerHTML = '26 &euro;';
                            } else {
                            price = '8';
                            document.getElementById('penex').innerHTML = '- 2&euro;';
                            document.getElementById('price_').innerHTML = '&ensp;8 &euro;&ensp;';
                            document.getElementById('old__price').innerHTML = '14 &euro;';
                            }
                            },5)
                        } else {
                            setTimeout(function(){
                            if(ca==1){
                            price = '7';
                            document.getElementById('penex').innerHTML = '+ 5&euro;';
                            document.getElementById('price_').innerHTML = '&ensp;7 &euro;&ensp;';
                            document.getElementById('old__price').innerHTML = '19 &euro;';
                            } else {
                            price = '6';
                            document.getElementById('penex').innerHTML = '+ 2&euro;';
                            document.getElementById('price_').innerHTML = '&ensp;6 &euro;&ensp;';
                            document.getElementById('old__price').innerHTML = '10 &euro;';
                            }
                        },5)
                    };
                    };
                    setInterval(function(){
                        holesize(document.getElementById('1_1'),1);
                        holesize(document.getElementById('2_1'),2);
                        holesize(document.getElementById('3_1'),3);
                    },0)
                    function holesize (elem,num) {
                        var onow = elem.value;
                            if(elem.value > 99){
                                elem.value = onow.charAt(0)+''+onow.charAt(1);
                            }else {
                            if(elem.value > 20){
                                elem.value = elem.value - 1;
                            } else {
                                if(elem.value < 0){
                                    elem.value = '0'
                                } else {
                                    document.getElementById(num+'_2').innerHTML = onow;
                                    document.getElementById(num+'_3').innerHTML = onow;
                                    if(onow > 13 || onow == 13){
                                        document.getElementById(num+'_3').style.display = 'none';
                                        document.getElementById(num+'_2').style.display = 'flex';
                                        document.getElementById(num+'_3').style.width = '50px';
                                        document.getElementById(num+'_2').style.width = '50px';
                                        document.getElementById(num+'_1').style.width = '50px';
                                        document.getElementById(num+'_3').style.height = '50px';
                                        document.getElementById(num+'_2').style.height = '50px';
                                        document.getElementById(num+'_1').style.height = '50px';
                                        document.getElementById(num+'_1').style.opacity = '1';
                                    } else {
                                        if(onow < 3){
                                        document.getElementById(num+'_3').style.display = 'none';
                                        document.getElementById(num+'_2').style.display = 'none';
                                        document.getElementById(num+'_1').style.opacity = '0.1';
                                        document.getElementById(num+'_3').style.width = '40px';
                                        document.getElementById(num+'_2').style.width = '40px';
                                        document.getElementById(num+'_1').style.width = '40px';
                                        document.getElementById(num+'_3').style.height = '40px';
                                        document.getElementById(num+'_2').style.height = '40px';
                                        document.getElementById(num+'_1').style.height = '40px';
                                    } else {
                                        document.getElementById(num+'_3').style.display = 'flex';
                                        document.getElementById(num+'_2').style.display = 'flex';
                                        document.getElementById(num+'_1').style.opacity = '1';
                                        document.getElementById(num+'_3').style.width = '40px';
                                        document.getElementById(num+'_2').style.width = '40px';
                                        document.getElementById(num+'_1').style.width = '40px';
                                        document.getElementById(num+'_3').style.height = '40px';
                                        document.getElementById(num+'_2').style.height = '40px';
                                        document.getElementById(num+'_1').style.height = '40px';
                                    }
                                    }
                            }
                            }
                        }
                    }
        setInterval(function(){
            document.getElementById('credits_eu').innerHTML = localStorage.getItem('credits') + '.00&ThinSpace;&euro;'
        },100)
        var richtig = 0;
        function richt () {
            richtig = 1;
        }
        function first_next () {
            document.getElementById('buy_first').style.opacity = '0'
            setTimeout(function(){
                document.getElementById('buy_first').style.display = 'none';
                document.getElementById('buy_second').style.display = 'block';
                setTimeout(function(){
                var el = document.getElementById('coupon_check');
                    if(el.checked){
                        if(document.getElementById('coupon_input').value == ''){
                        document.getElementById('off_coupon_outer').style.display = 'none';
                    }else{
                        document.getElementById('off_coupon_outer').style.display = 'block';
                        document.getElementById('coupon_ersatz').style.display = 'none';
                        if(richtig == 1){
                            document.getElementById('off_coupon').innerHTML = "You got 50% discount with the coupon:&ensp;<span class='fett'>" + document.getElementById('coupon_input').value + '</span>';
                            price = Math.round(price/2);
                        } else {
                            document.getElementById('off_coupon').innerHTML = "You got 0% discount with the coupon:&ensp;<span class='fett'>" + document.getElementById('coupon_input').value + "</span>";
                        }
                    }
                    } else {
                        document.getElementById('off_coupon_outer').style.display = 'none'
                        document.getElementById('coupon_ersatz').style.display = 'block';
                    }
                document.getElementById('buy_second').style.opacity = '1';
                document.getElementById('endend_price').innerHTML = 'Pay ' + price + '.00 &ThinSpace;&euro;'
            },5)
            },251)
        }
        setTimeout(function(){
                if(localStorage.getItem('buyb') == '1'){
                    setTimeout(function(){
                    document.getElementById('nav_buy').style.opacity = '0';
                    localStorage.setItem('buyb','0');
                    },100)
                } else {
                    document.getElementById('nav_buy').style.display = 'none';
                }
                },0)
                setInterval(function(){
                if(localStorage.getItem('reload') == '1'){
                    localStorage.setItem('reload','0');
                    location.reload();
                }
                if(isMobile()){} else {
                    if(ca==1){
                    document.getElementById('coupon_input').style.width = ((window.innerWidth/2) - 200) + 'px';
                    document.getElementById('scrolld').style.height = ((window.innerHeight/1) - 300) + 'px';
                    document.getElementById('details').style.width = window.innerWidth/2 + 'px';
                    document.getElementById('details').style.maxHeight = ((window.innerHeight/1) - 80) + 'px';
                    document.getElementById('vorschau_outer').style.height = window.innerHeight + 'px';
                    document.getElementById('vorschau_outer').style.width = window.innerWidth/2 + 'px';
                    document.getElementById('vorschau').style.height = '505px';
                    document.getElementById('vorschau').style.width = (window.innerWidth/2)-80 + 'px';
                    document.getElementById('vorschau_img').style.width = (window.innerWidth*0.5)-80 + 'px';
                    document.getElementById('vorschau_img').style.left = '8%';
                    document.getElementById('vorschau_img').style.top = '20%';
                    document.getElementById('buy_img').style.marginLeft = '10%';
                    }else{
                    document.getElementById('coupon_input').style.width = ((window.innerWidth/2) - 200) + 'px';
                    document.getElementById('scrolld').style.height = ((window.innerHeight/1) - 300) + 'px';
                    document.getElementById('details').style.width = window.innerWidth/2 + 'px';
                    document.getElementById('details').style.maxHeight = ((window.innerHeight/1) - 80) + 'px';
                    document.getElementById('vorschau_outer').style.height = window.innerHeight + 'px';
                    document.getElementById('vorschau_outer').style.width = window.innerWidth/2 + 'px';
                    document.getElementById('vorschau').style.height = '505px';
                    document.getElementById('vorschau').style.width = (window.innerWidth/2)-80 + 'px';
                    document.getElementById('vorschau_img').style.width = (window.innerWidth*1.3)-80 + 'px';
                    }
                }
                if(localStorage.getItem('chose') == '2'){
                    document.getElementById('vorschau_img').src = 'images/rot.png'
                    document.getElementById('vorschau').style.backgroundColor = 'rgb(255, 237, 233)'
                }
                if(localStorage.getItem('chose') == '1'){
                    document.getElementById('vorschau_img').src = 'images/white.png'
                    document.getElementById('vorschau').style.backgroundColor = 'rgb(240, 240, 240)'
                }
                if(localStorage.getItem('chose') == '3'){
                    document.getElementById('vorschau_img').src = 'images/beige.png'
                    document.getElementById('vorschau').style.backgroundColor = 'rgb(255, 255, 224)'
                }
                if(localStorage.getItem('chose') == '4'){
                    document.getElementById('vorschau_img').src = 'images/green.png'
                    document.getElementById('vorschau').style.backgroundColor = 'rgb(253, 255, 228)'
                }
                if(localStorage.getItem('chose') == '5'){
                    document.getElementById('vorschau_img').src = 'images/blue.png'
                    document.getElementById('vorschau').style.backgroundColor = 'rgb(243, 255, 255)'
                }
                if(localStorage.getItem('chose') == '6'){
                    document.getElementById('vorschau_img').src = 'images/pink.png'
                    document.getElementById('vorschau').style.backgroundColor = 'rgb(255, 234, 255)'
                }
                document.getElementById('bg').style.backgroundColor = document.getElementById('vorschau').style.backgroundColor
            },1)
            if(localStorage.getItem('sec') > -1){
                var seconds = localStorage.getItem('sec')
                var minuten = localStorage.getItem('min')
                var stunden = localStorage.getItem('hrs')
            } else {
                var seconds = 0;
                var minuten = 0;
                var stunden = 5;
            }
                document.getElementById('countdown').innerHTML = stunden + ':' + minuten + ':' + seconds;
            setInterval(function(){
                if(seconds == 0){
                    seconds = 59;
                    if(minuten == 0){
                        minuten = 59;
                        if(stunden == 0){
                            stunden = 4;
                        } else {
                            stunden = stunden - 1;
                        }
                        
                if(stunden < 10){
                    stunden = '0'+stunden;
                };
                    } else {
                        minuten--;
                    }
                if(minuten < 10){
                    minuten = '0'+minuten;
                };
                } else {
                    seconds--;
                }
                if(seconds < 10){
                    seconds = '0'+seconds;
                };
                document.getElementById('countdown').innerHTML = stunden + ':' + minuten + ':' + seconds;
                localStorage.setItem('sec',seconds);
                localStorage.setItem('min',minuten);
                localStorage.setItem('hrs',stunden);
            },999)
            document.getElementById('nav_bar').style.backgroundColor = 'transparent';
            if(localStorage.getItem('credits') > -1){}else{
                localStorage.setItem('credits', 0);
            }
            if(localStorage.getItem('credits')==null){
                localStorage.setItem('credits', 0);
            }
            setInterval(function(){
                if(localStorage.getItem('cookiesok')==1){}else{
                    location.href = '/cookie.html';
                }
            },1000)
            setInterval(function(){
            if(isMobile()){
                document.getElementById('titel__').style.display = 'none'
                document.getElementById('price_new').style.display = 'none'
                document.getElementById('details').style.width = '100%'
                document.getElementById('details').style.top = '40%'
                document.getElementById('details').style.height = '50%'
                document.getElementById('details').style.maxHeight = '60%'
                document.getElementById('vorschau_outer').style.height = '40%'
                document.getElementById('vorschau_outer').style.width = '100%'
                document.getElementById('vorschau').style.width = (window.innerWidth/1 - 30) + 'px';
                document.getElementById('vorschau').style.height = (window.innerHeight/2 - 60) + 'px';
                document.getElementById('vorschau').style.margin = '15px';
                document.getElementById('vorschau_outer').style.paddingLeft = '0';
                document.getElementById('details').style.paddingRight = '5px'
                document.getElementById('scrolld').style.height = '60%';
                document.getElementById('scrolld').style.width = '100%';
                document.getElementById('addcss').innerHTML = '.outer,#color_outer {margin-left:5px;}#buy_b{width:90%}#buy_b,#buy_outer{margin:0;}#buy_outer{margin-top:20px;max-width:100%;}'
                document.getElementById('buy_method').style.display = 'none';
                document.getElementById('nav_buy').style.display = 'none';
                if(ca==1){
                document.getElementById('vorschau_img').style.width = (window.innerWidth*1.1) + 'px';
                document.getElementById('vorschau_img').style.left = '-15px'
                document.getElementById('vorschau_img').style.top = '80px'
                } else {
                document.getElementById('vorschau_img').style.width = (window.innerWidth*2.5) + 'px';
                document.getElementById('vorschau_img').style.left = '-290px'
                document.getElementById('vorschau_img').style.top = '-70px'
                }
            }
        },100)
        setInterval(function(){
            if(localStorage.getItem('soffer') == '1'){
               document.getElementById('price_').innerHTML = '&ensp;3&euro;&ensp;'
                price = 3;
               document.getElementById('coupon_check').checked = '';
               document.getElementById('q_coupon').style.display = 'none'
               document.getElementById('waiting_').innerHTML = 'Your order has been placed. You can now close this page.'
               document.getElementById('waiting_').onclick = '';
               document.getElementById('waiting_').style.cursor = '';
            }
            if(ca==1){
            if(localStorage.getItem('chose') == '3'){
                localStorage.setItem('chose','4')
            }
            };
        },1)
        setTimeout(function(){
            if(ca==0){
                    document.getElementById('vorschau_img').style.filter = 'brightness(1)';
            }
        },5)
        setTimeout(function(){
            setInterval(function(){
                if(localStorage.getItem('si') == '1'){
                    localStorage.setItem('si','0')
                    if(ca=='1'){
                        location.href = '/PenHolder/3'
                    } else {
                        location.href = '/CableOrganizer'
                    }
                }
            },5)
        },200)
        function unblur () {
    setTimeout(function() {
        document.getElementById('nav_buy').style.cursor = 'unset';
    }, 999);
        }
        onload = function () {
    if (localStorage.getItem('chose') == '0') {
        localStorage.setItem('chose', '1');
    };
    unblur()
}