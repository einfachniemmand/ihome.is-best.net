
            onload = function () {
                onloadanimation();
            }
            setInterval(function(){
                if(localStorage.getItem('cookiesok')==1){}else{
                    location.href = 'cookie.html';
                }
            },1000)
function onloadanimation () {
                location.href = '#'
                if(ca == 1){
                    var anfang = window.innerWidth / 1.9;
                document.getElementById('white_ani').style.left = (anfang)+'px';
                document.getElementById('rot_ani').style.left = (anfang-((anfang/4)*1))+'px';
                document.getElementById('beige_ani').style.left = (anfang-((anfang/4)*2))+'px';
                document.getElementById('green_ani').style.left = (anfang-((anfang/4)*2))+'px';
                document.getElementById('blue_ani').style.left = (anfang-((anfang/4)*3))+'px';
                document.getElementById('pink_ani').style.left = (anfang-((anfang/4)*4))+'px';
                }
                else {
                var anfang = window.innerWidth / 3.2;
                document.getElementById('white_ani').style.left = (anfang)+'px';
                document.getElementById('rot_ani').style.left = (anfang-((anfang/2.65)*1))+'px';
                document.getElementById('beige_ani').style.left = (anfang-((anfang/2.65)*2))+'px';
                document.getElementById('green_ani').style.left = (anfang-((anfang/2.65)*3))+'px';
                document.getElementById('blue_ani').style.left = (anfang-((anfang/2.65)*4))+'px';
                document.getElementById('pink_ani').style.left = (anfang-((anfang/2.65)*5))+'px';
                }
                document.getElementById('opacthree').style.transition = '3000ms';
                setTimeout(function(){
                document.getElementById('rot_ani').style.transition = '750ms';
                document.getElementById('beige_ani').style.transition = '750ms';
                document.getElementById('green_ani').style.transition = '750ms';
                document.getElementById('blue_ani').style.transition = '750ms';
                document.getElementById('pink_ani').style.transition = '750ms';
                },2000)
                setTimeout(function(){
                    document.getElementById('opacthree').style.filter = 'blur(2px)';
                },1000)
                var anfang;
                    setInterval(function(){
                        if(isMobile()){}else{
                if(window.innerHeight < 500 || window.innerWidth < 1000){
                document.getElementById('white_ani').style.opacity = '0';
                document.getElementById('rot_ani').style.opacity = '0';
                document.getElementById('beige_ani').style.opacity = '0';
                anfang = window.innerWidth / 3.2;
                } else {
                document.getElementById('white_ani').style.opacity = '1';
                document.getElementById('rot_ani').style.opacity = '1';
                document.getElementById('beige_ani').style.opacity = '1';
                }
            }
            },100)
            }
            function isMobile(){
                return navigator.userAgent.match(/(iPhone|iPod|iPad|blackberry|android|Kindle|htc|lg|midp|mmp|mobile|nokia|opera mini|palm|pocket|psp|sgh|smartphone|symbian|treo mini|Playstation Portable|SonyEricsson|Samsung|MobileExplorer|PalmSource|Benq|Windows Phone|Windows Mobile|IEMobile|Windows CE|Nintendo Wii)/i);
            }
            function buy_select (nu) {
                var choosen_ = 0;
                if(isMobile()){}else{
                    if(document.getElementById('white_ani').style.bottom == '-50px'){
                        choosen_ = 1;
                    };
                    if(document.getElementById('rot_ani').style.bottom == '-50px'){
                        choosen_ = 2;
                    };
                    if(document.getElementById('beige_ani').style.bottom == '-50px'){
                        choosen_ = 3;
                    };
                    if(document.getElementById('green_ani').style.bottom == '-50px'){
                        choosen_ = 4;
                    };
                    if(document.getElementById('blue_ani').style.bottom == '-50px'){
                        choosen_ = 5;
                    };
                    if(document.getElementById('pink_ani').style.bottom == '-50px'){
                        choosen_ = 6;
                    };
                };
                    if(nu == '2'){
                        choosen_ = 2
                    }
                    localStorage.setItem('chose',choosen_);
                    location.href = 'cart.html';
            }
            
            setTimeout(function(){
            scrollTo({top: 0,left: 0,behavior: 'smooth',})
            },100)
            setInterval(function(){
                document.getElementById('opacthree').style.fontSize = window.innerHeight - 10 +'px';
                document.getElementById('opacthree').style.height = window.innerHeight - 5 +'px';
                document.getElementById('opacthree').style.width = window.width  +'px';
                if(scrollY < 501){
                document.getElementById('background_blur').style.filter = 'blur('+scrollY/50+'px)';
                }else{
                document.getElementById('background_blur').style.filter = 'blur('+500/50+'px)';
                }
                var hjk = window.innerHeight*4;
                if(scrollY > hjk){
                    document.getElementById('front').style.position = 'fixed';
                    document.getElementById('front').style.left = '0px';
                    document.getElementById('front').style.bottom = scrollY - (window.innerHeight*4) +'px';
                } else {
                    document.getElementById('front').style.position = '';
                    document.getElementById('front').style.bottom = '';
                }
                document.getElementById('price_new').style.opacity = '1';
                document.getElementById('first_outer_div').style.opacity = (scrollY*(window.innerHeight/window.innerHeight)/700)-'0.1';
                document.getElementById('second_outer_div').style.opacity = (scrollY*((window.innerHeight*2)/(window.innerHeight*2))/1400)-'0.2';
                document.getElementById('third_outer_div').style.opacity = (scrollY*((window.innerHeight*2)/(window.innerHeight*2))/2100)-'0.3';
            },0)
            
            let poX = 0;
setTimeout(function(){
document.addEventListener('mousemove', function(event) {
    poX = event.clientX;
    poY = event.clientY;
    var wsa = 0;
    var rtz = window.innerHeight-100;
    var zui = window.innerHeight-400;
    if(scrollY < 50){
    if(poY > zui){
        if(poY < rtz){
    if(poX > 1025){
        if(wsa == 0){
            if(poX < 1300){
        document.getElementById('white_ani').style.bottom = '-50px';
        document.getElementById('bg_').style.background = 'rgb(215, 215, 215)'
        wsa = 1;
            } else {
                document.getElementById('white_ani').style.bottom = '-100px';
                wsa = 1;
            }
        } else {
        document.getElementById('white_ani').style.bottom = '-100px';
        }
    } else {
        document.getElementById('white_ani').style.bottom = '-100px';
    };
    if(poX > 875){
        if(wsa == 0){
        document.getElementById('rot_ani').style.bottom = '-50px';
        document.getElementById('bg_').style.background = 'rgb(255, 237, 233)'
        wsa = 1;
        } else {
        document.getElementById('rot_ani').style.bottom = '-100px';
        }
    } else {
        document.getElementById('rot_ani').style.bottom = '-100px';
    };
    if(poX > 725){
        if(wsa == 0){
        document.getElementById('beige_ani').style.bottom = '-50px';
        document.getElementById('bg_').style.background = 'rgb(255, 255, 224)'
        wsa = 1;
        } else {
            
        document.getElementById('beige_ani').style.bottom = '-100px';
        }
    } else {
        document.getElementById('beige_ani').style.bottom = '-100px';
    };
    if(poX > 575){
        if(wsa == 0){
        document.getElementById('green_ani').style.bottom = '-50px';
        document.getElementById('bg_').style.background = 'rgb(253, 255, 228)'
        wsa = 1;
        } else {
            
        document.getElementById('green_ani').style.bottom = '-100px';
        }
    } else {
        document.getElementById('green_ani').style.bottom = '-100px';
    };
    if(poX > 425){
        if(wsa == 0){
        document.getElementById('blue_ani').style.bottom = '-50px';
        document.getElementById('bg_').style.background = 'rgb(243, 255, 255)'
        wsa = 1;
        } else {
            
        document.getElementById('blue_ani').style.bottom = '-100px';
        }
    } else {
        document.getElementById('blue_ani').style.bottom = '-100px';
    };
    if(poX > 100){
        if(wsa == 0){
        document.getElementById('pink_ani').style.bottom = '-50px';
        document.getElementById('bg_').style.background = 'rgb(255, 234, 255)'
        wsa = 1;
        } else {
        document.getElementById('pink_ani').style.bottom = '-100px';
        };
    } else {
        document.getElementById('pink_ani').style.bottom = '-100px';
    }
};
};
    };
if(wsa == 0){
    document.getElementById('white_ani').style.bottom = '-100px';
    document.getElementById('pink_ani').style.bottom = '-100px';
    document.getElementById('rot_ani').style.bottom = '-100px';
    document.getElementById('beige_ani').style.bottom = '-100px';
    document.getElementById('green_ani').style.bottom = '-100px';
    document.getElementById('blue_ani').style.bottom = '-100px';
    document.getElementById('bg_').style.background = 'rgb(255, 254, 254)';
    document.getElementById('nav_bar').style.opacity = '0.9';
    document.getElementById('logo').style.opacity = '0.95';
} else {
    document.getElementById('nav_bar').style.opacity = '0.25';
    document.getElementById('logo').style.opacity = '0.05';
}
});
},2100)

setInterval(function(){
            if(isMobile()){
                if(ca==1){
                document.getElementById('fillin').innerHTML = 'iframe{width:100%;position:fixed;bottom:-140px;transition:300ms}iframe:hover{bottom:-1px;}.buy_idea{width:90%;border:black;}.outer_div{margin-top:75px;width:100%;margin:0%}.titel_{font-size:35px}#bnumber{opacity:0;margin-top:0px}'
                }else{
                   document.getElementById('fillin').innerHTML = 'iframe{width:100%;position:fixed;bottom:-140px;transition:300ms}iframe:hover{bottom:-1px;}.buy_idea{width:90%;border:black;}.outer_div{margin-top:75px;width:100%;margin:0%}.titel_{font-size:35px}#bnumber{opacity:0;margin-top:0px}.ani_img{filter:brightness(1)}' 
                }
                document.getElementById('titel_text').innerHTML = ''
                document.getElementById('mob_a').style.display = 'none'
                document.getElementById('nav_buy').style.marginLeft = '15px'
                document.getElementById('nav_buy').style.width = '100px'
                document.getElementById('info_content').style.width = '100%'
                document.getElementById('body').style.width = '100%'
                document.getElementById('_sch').style.fontWeight = '700'
                document.getElementById('adj').style.padding = '0';
                document.getElementById('sod').style.height = '120%';
                document.getElementById('opacthree').style.display = 'none'
                document.getElementById('nav_bar').style.zIndex = '30';
                document.getElementById('logo').style.opacity = '0';
                if(ca==1){
                document.getElementById('_sch').style.fontSize = '25px'
                    document.getElementById('pink_ani').style.top = '300px'
                document.getElementById('pink_ani').style.left = '-100px'
                document.getElementById('blue_ani').style.top = '225px'
                document.getElementById('blue_ani').style.left = '-75px'
                document.getElementById('green_ani').style.top = '150px'
                document.getElementById('green_ani').style.left = '-50px'
                document.getElementById('rot_ani').style.top = '75px'
                document.getElementById('rot_ani').style.left = '-25px'
                document.getElementById('white_ani').style.top = '0px'
                document.getElementById('white_ani').style.left = '0px'
                document.getElementById('pink_ani').style.width = '400px'
                document.getElementById('blue_ani').style.width = '400px'
                document.getElementById('green_ani').style.width = '400px'
                document.getElementById('rot_ani').style.width = '400px'
                document.getElementById('white_ani').style.width = '400px'
                } else {
                    document.getElementById('pink_ani').style.top = '200px'
                document.getElementById('pink_ani').style.left = '-500px'
                document.getElementById('blue_ani').style.top = '125px'
                document.getElementById('blue_ani').style.left = '-475px'
                document.getElementById('green_ani').style.top = '50px'
                document.getElementById('green_ani').style.left = '-450px'
                document.getElementById('beige_ani').style.top = '-25px'
                document.getElementById('beige_ani').style.left = '-425px'
                document.getElementById('rot_ani').style.top = '-100px'
                document.getElementById('rot_ani').style.left = '-400px'
                }
            } else {
                if(ca==0){
                document.getElementById('fillin').innerHTML = '.ani_img{filter:brightness(1)}'
            }
            }
        },1)
            if(localStorage.getItem('sec') > -1 || localStorage.getItem('sec') == null){
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
                localStorage.setItem('hrs',stunden)
            },999)
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