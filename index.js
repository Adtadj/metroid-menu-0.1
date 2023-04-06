function show(){
    var menu = document.getElementById("menu")
    if(menu.style.display==="none"){
        menu.style.display = "block"}
    else{menu.style.display="none";
}
}
function show2(){
var image = document.getElementById("image")  
if(image.style.display==="none"){
    image.style.display= "block"}
    else{image.style.display="none"}
}

function show3(){
var samu= document.getElementById("image")
if(samu.style.filter="blur(0px)"){
    samu.style.filter="blur(5px)"}
    else{samu.style.filter="blur(0px)"}
}

function playsound(){
     var audio = document.getElementById("myAudio");
  audio.play();

}

function playhud(){
    var audio = document.getElementById("hud");
audio.play();
    }

function togglestatus(){
var status = document.getElementById("status")
{
if(status.style.display==="none")
    {status.style.display="block"}
    else{status.style.display="none";}}
}

function toggleweapons(){
    var weapons = document.getElementById("weapons")
    if(weapons.style.display==="none"){
        weapons.style.display="block"}
else{weapons.style.display="none"}
}

function toggleennemies(){
var ennemies= document.getElementById("ennemies")  
if (ennemies.style.display==="none"){
ennemies.style.display="block"}
else{ennemies.style.display="none"}
}

function togglenewrecruit(){
var newrecruit= document.getElementById("newrecruit")  
if (newrecruit.style.display==="none"){
newrecruit.style.display="block"}
else{newrecruit.style.display="none"}
}


function playson(){
     var audio = document.getElementById("audio");
  audio.play();

}


function togglearmorselector (){
    var armorselector=document.getElementById("armorselector")
    if(armorselector.style.display==="none"){
        armorselector.style.display="block"
    }
else{armorselector.style.display="none"}
}

var armor=[
    "armure/dark.png",
    "armure/light.png",
    "armure/gravity.png",
    "armure/ped.png",
    "armure/dread.png",
    "armure/phazon.png",
    "armure/varia.png",
    "armure/dreadvariasuit.png",
    "armure/dreadgravitysuit.png"
];

var num= 0;
function next3(){
var slider = document.getElementById("armorslider");num++;
    if(num>= armor.length){
        num=0;
    }
    slider.src= armor[num];
}

function prev3(){
    var slider= document.getElementById("armorslider");num--;
    if(num<0){
        num = armor.length-1;
    }
slider.src=armor[num];
    };

function togglebeamselector (){
    var beamselector=document.getElementById("beamselector")
    if(beamselector.style.display==="none"){
        beamselector.style.display="block"
    }
else{beamselector.style.display="none"}
}

var beam=[
"beam/beam_1.png",
"beam/beam_2.png",
"beam/beam_3.png",
"beam/beam_4.png",
"beam/beam_5.png",
"beam/beam_6.png",
"beam/beam_7.png",
"beam/beam_8.png",
"beam/beam_9.png",
"beam/beam_11.png",
"beam/beam_12.png",
"beam/beam_13.png",
"beam/beam_14.png",
"beam/beam_15.png",
"beam/beam_16.png",
    
];

var num= 0;
function nextbeam(){
var slider = document.getElementById("beamslider");num++;
    if(num>= beam.length){
        num=0;
    }
    slider.src= beam[num];
}

function prevbeam(){
    var slider= document.getElementById("beamslider");num--;
    if(num<0){
        num = beam.length-1;
    }
slider.src=beam[num];
    };


function togglebeamselectorleft (){
    var beamselectorleft=document.getElementById("beamselectorleft")
    if(beamselectorleft.style.display==="none"){
        beamselectorleft.style.display="block"
    }
else{beamselectorleft.style.display="none"}
}

function togglebeamselectorright (){
    var beamselectorright=document.getElementById("beamselectorright")
    if(beamselectorright.style.display==="none"){
        beamselectorright.style.display="block"
    }
else{beamselectorright.style.display="none"}
}

function toggleselectorleft (){
    var selectorleft=document.getElementById("selectorleft")
    if(selectorleft.style.display==="none"){
        selectorleft.style.display="block"
    }
else{selectorleft.style.display="none"}
}

function toggleselectorright (){
    var selectorright=document.getElementById("selectorright")
    if(selectorright.style.display==="none"){
        selectorright.style.display="block"
    }
else{selectorright.style.display="none"}
}

function toggleabilitiesselector (){
    var abilitiesselector=document.getElementById("abilitiesselector")
    if(abilitiesselector.style.display==="none"){
        abilitiesselector.style.display="block"
    }
else{abilitiesselector.style.display="none"}
}

function toggleabilitiesselectorleft (){
    var abilitiesselectorleft=document.getElementById("abilitiesselectorleft")
    if(abilitiesselectorleft.style.display==="none"){
        abilitiesselectorleft.style.display="block"
    }
else{abilitiesselectorleft.style.display="none"}
}

function toggleabilitiesselectorright (){
    var abilitiesselectorright=document.getElementById("abilitiesselectorright")
    if(abilitiesselectorright.style.display==="none"){
        abilitiesselectorright.style.display="block"
    }
else{abilitiesselectorright.style.display="none"}
}

function toggledreadgravitysuitvideo(){
var dreadgravitysuitvideo = document.getElementById("dreadgravitysuitvideo")
{
if(dreadgravitysuitvideo.style.display==="none")
{dreadgravitysuitvideo.style.display="block"}
    else{dreadgravitysuitvideo.style.display="none";}}
}

function toggledreadgravitysuitdescription(){
var dreadgravitysuitdescription = document.getElementById("dreadgravitysuitdescription")
{
if(dreadgravitysuitdescription.style.display==="none")
{dreadgravitysuitdescription.style.display="block"}
    else{dreadgravitysuitdescription.style.display="none";}}
}

function toggledarksuitvideo(){
var darksuitvideo = document.getElementById("darksuitvideo")
{
if(darksuitvideo.style.display==="none")
{darksuitvideo.style.display="block"}
    else{darksuitvideo.style.display="none";}}
}

function toggledarksuitdescription(){
var darksuitdescription = document.getElementById("darksuitdescription")
{
if(darksuitdescription.style.display==="none")
{darksuitdescription.style.display="block"}
    else{darksuitdescription.style.display="none";}}
}

function toggledarksuittext(){
var darksuittext = document.getElementById("darksuittext")
{
if(darksuittext.style.display==="none")
{darksuittext.style.display="block"}
    else{darksuittext.style.display="none";}}
}


function togglevariasuitvideo(){
var variasuitvideo = document.getElementById("variasuitvideo")
{
if(variasuitvideo.style.display==="none")
{variasuitvideo.style.display="block"}
    else{variasuitvideo.style.display="none";}}
}

function togglevariasuitdescription(){
var variasuitdescription = document.getElementById("variasuitdescription")
{
if(variasuitdescription.style.display==="none")
{variasuitdescription.style.display="block"}
    else{variasuitdescription.style.display="none";}}
}

function togglevariasuittext(){
var variasuittext = document.getElementById("variasuittext")
{
if(variasuittext.style.display==="none")
{variasuittext.style.display="block"}
    else{variasuittext.style.display="none";}}
}


function togglelightsuitvideo(){
var lightsuitvideo = document.getElementById("lightsuitvideo")
{
if(lightsuitvideo.style.display==="none")
{lightsuitvideo.style.display="block"}
    else{lightsuitvideo.style.display="none";}}
}

function togglelightsuitdescription(){
var lightsuitdescription = document.getElementById("lightsuitdescription")
{
if(lightsuitdescription.style.display==="none")
{lightsuitdescription.style.display="block"}
    else{lightsuitdescription.style.display="none";}}
}

function togglelightsuittext(){
var lightsuittext = document.getElementById("lightsuittext")
{
if(lightsuittext.style.display==="none")
{lightsuittext.style.display="block"}
    else{lightsuittext.style.display="none";}}
}

function togglephazonsuitvideo(){
var phazonsuitvideo = document.getElementById("phazonsuitvideo")
{
if(phazonsuitvideo.style.display==="none")
{phazonsuitvideo.style.display="block"}
    else{phazonsuitvideo.style.display="none";}}
}

function togglephazonsuitdescription(){
var phazonsuitdescription = document.getElementById("phazonsuitdescription")
{
if(phazonsuitdescription.style.display==="none")
{phazonsuitdescription.style.display="block"}
    else{phazonsuitdescription.style.display="none";}}
}

function togglephazonsuittext(){
var phazonsuittext = document.getElementById("phazonsuittext")
{
if(phazonsuittext.style.display==="none")
{phazonsuittext.style.display="block"}
    else{phazonsuittext.style.display="none";}}
}

function toggledreadsuitvideo(){
var dreadsuitvideo = document.getElementById("dreadsuitvideo")
{
if(dreadsuitvideo.style.display==="none")
{dreadsuitvideo.style.display="block"}
    else{dreadsuitvideo.style.display="none";}}
}

function toggledreadsuitdescription(){
var dreadsuitdescription = document.getElementById("dreadsuitdescription")
{
if(dreadsuitdescription.style.display==="none")
{dreadsuitdescription.style.display="block"}
    else{dreadsuitdescription.style.display="none";}}
}

function toggledreadsuittext(){
var dreadsuittext = document.getElementById("dreadsuittext")
{
if(dreadsuittext.style.display==="none")
{dreadsuittext.style.display="block"}
    else{dreadsuittext.style.display="none";}}
}


function togglepedsuitvideo(){
var pedsuitvideo = document.getElementById("pedsuitvideo")
{
if(pedsuitvideo.style.display==="none")
{pedsuitvideo.style.display="block"}
    else{pedsuitvideo.style.display="none";}}
}

function togglepedsuitdescription(){
var pedsuitdescription = document.getElementById("pedsuitdescription")
{
if(pedsuitdescription.style.display==="none")
{pedsuitdescription.style.display="block"}
    else{pedsuitdescription.style.display="none";}}
}

function togglepedsuittext(){
var pedsuittext = document.getElementById("pedsuittext")
{
if(pedsuittext.style.display==="none")
{pedsuittext.style.display="block"}
    else{pedsuittext.style.display="none";}}
}


function togglegravitysuitvideo(){
var gravitysuitvideo = document.getElementById("gravitysuitvideo")
{
if(gravitysuitvideo.style.display==="none")
{gravitysuitvideo.style.display="block"}
    else{gravitysuitvideo.style.display="none";}}
}

function togglegravitysuitdescription(){
var gravitysuitdescription = document.getElementById("gravitysuitdescription")
{
if(gravitysuitdescription.style.display==="none")
{gravitysuitdescription.style.display="block"}
    else{gravitysuitdescription.style.display="none";}}
}

function togglegravitysuittext(){
var gravitysuittext = document.getElementById("gravitysuittext")
{
if(gravitysuittext.style.display==="none")
{gravitysuittext.style.display="block"}
    else{gravitysuittext.style.display="none";}}
}


function toggledreadvariasuitvideo(){
var dreadvariasuitvideo = document.getElementById("dreadvariasuitvideo")
{
if(dreadvariasuitvideo.style.display==="none")
{dreadvariasuitvideo.style.display="block"}
    else{dreadvariasuitvideo.style.display="none";}}
}

function toggledreadvariasuitdescription(){
var dreadvariasuitdescription = document.getElementById("dreadvariasuitdescription")
{
if(dreadvariasuitdescription.style.display==="none")
{dreadvariasuitdescription.style.display="block"}
    else{dreadvariasuitdescription.style.display="none";}}
}

function toggleelist(){
var elist = document.getElementById("elist")
{
if(elist.style.display==="none")
    {elist.style.display="block"}
else{elist.style.display="none";}}
    }

function toggleemmivideo(){
var emmivideo = document.getElementById("emmivideo")
{
if(emmivideo.style.display==="none")
{emmivideo.style.display="block"}
    else{emmivideo.style.display="none";}}
}

function toggleemmidescription(){
var emmidescription = document.getElementById("emmidescription")
{
if(emmidescription.style.display==="none")
{emmidescription.style.display="block"}
    else{emmidescription.style.display="none";}}
}

function toggleemmiphoto(){
var emmiphoto = document.getElementById("emmiphoto")
{
if(emmiphoto.style.display==="none")
{emmiphoto.style.display="block"}
    else{emmiphoto.style.display="none";}}
}

function togglerobotphoto(){
var robotphoto = document.getElementById("robotphoto")
{
if(robotphoto.style.display==="none")
{robotphoto.style.display="block"}
    else{robotphoto.style.display="none";}}
}

function togglemuzbyphoto(){
var muzbyphoto = document.getElementById("muzbyphoto")
{
if(muzbyphoto.style.display==="none")
{muzbyphoto.style.display="block"}
    else{muzbyphoto.style.display="none";}}
}

function toggleridleyphoto(){
var ridleyphoto = document.getElementById("ridleyphoto")
{
if(ridleyphoto.style.display==="none")
{ridleyphoto.style.display="block"}
    else{ridleyphoto.style.display="none";}}
}

function toggledarksamusphoto(){
var darksamusphoto = document.getElementById("darksamusphoto")
{
if(darksamusphoto.style.display==="none")
{darksamusphoto.style.display="block"}
    else{darksamusphoto.style.display="none";}}
}

function togglemuzbydescription(){
var muzbydescription = document.getElementById("muzbydescription")
{
if(muzbydescription.style.display==="none")
{muzbydescription.style.display="block"}
    else{muzbydescription.style.display="none";}}
}

function toggleridleydescription(){
var ridleydescription = document.getElementById("ridleydescription")
{
if(ridleydescription.style.display==="none")
{ridleydescription.style.display="block"}
    else{ridleydescription.style.display="none";}}
}

function toggledarksamusdescription(){
var darksamusdescription = document.getElementById("darksamusdescription")
{
if(darksamusdescription.style.display==="none")
{darksamusdescription.style.display="block"}
    else{darksamusdescription.style.display="none";}}
}

function togglerobotdescription(){
var robotdescription = document.getElementById("robotdescription")
{
if(robotdescription.style.display==="none")
{robotdescription.style.display="block"}
    else{robotdescription.style.display="none";}}
}

function toggleridleyvideo(){
var ridleyvideo = document.getElementById("ridleyvideo")
{
if(ridleyvideo.style.display==="none")
{ridleyvideo.style.display="block"}
    else{ridleyvideo.style.display="none";}}
}

function toggledarksamusvideo(){
var darksamusvideo = document.getElementById("darksamusvideo")
{
if(darksamusvideo.style.display==="none")
{darksamusvideo.style.display="block"}
    else{darksamusvideo.style.display="none";}}
}

function togglerobotvideo(){
var robotvideo = document.getElementById("robotvideo")
{
if(robotvideo.style.display==="none")
{robotvideo.style.display="block"}
    else{robotvideo.style.display="none";}}
}

function togglemuzbyvideo(){
var muzbyvideo = document.getElementById("muzbyvideo")
{
if(muzbyvideo.style.display==="none")
{muzbyvideo.style.display="block"}
    else{muzbyvideo.style.display="none";}}
}

