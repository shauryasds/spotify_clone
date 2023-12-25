console.log('welcome to Spotify');
//variable initilization
let songIndex=0;
let audioElement=new Audio('1.mp3');
let play=document.getElementById("masterPlay");
let gif=document.getElementById("gif");
let songItems=Array.from(document.getElementsByClassName('songItem'))
let masterPlayName=document.getElementById('masterPlayName')
let songItemPlay=Array.from(document.getElementsByClassName('songItemPlay'))
let myProgressBar=document.getElementById('myProgressBar')
let songs=[
    { songName:'jashn1',path:'1.mp3',cover:'bg.jpg'},
    { songName:'jashn2',path:'1.mp3',cover:'p.gif'},
    { songName:'jashn3',path:'1.mp3',cover:'bg.jpg'},
    { songName:'jashn4',path:'1.mp3',cover:'s1.jpg'},
    { songName:'jashn5',path:'1.mp3',cover:'bg.jpg'},
    { songName:'jashn6',path:'1.mp3',cover:'s1.jpg'},
    { songName:'jashn7',path:'1.mp3',cover:'bg.jpg'},
    { songName:'jashn8',path:'1.mp3',cover:'bg.jpg'}

]
function makeAllPlay(){
    songItemPlay.forEach((element)=>{
        element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle');

        
    })
}
songItemPlay.forEach((element)=>{
    element.addEventListener('click',(e)=>{
        
        audioElement.src=songs[songIndex].path;
        makeAllPlay();
        songIndex=e.target.id
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=songs[songIndex].path;
        audioElement.play();
        gif.style.opacity='1';
        masterPlayName.innerText=songs[songIndex].songName
        masterPlayName.color='white'
        }
    )
})
document.getElementById('next').addEventListener('click',()=>{
    
if(songIndex > 6){
    songIndex=0
    audioElement.src=songs[songIndex].path;
    audioElement.play();
    audioElement.currentTime=0;
}
else{
    songIndex+=1;
    audioElement.src=songs[songIndex].path;
    audioElement.play();
    audioElement.currentTime=0;
}
masterPlayName.innerText=songs[songIndex].songName
masterPlayName.color='white'

})

document.getElementById('back').addEventListener('click',()=>{
    if(songIndex < 1){
        songIndex=7
        audioElement.src=songs[songIndex].path;
    audioElement.play();
    audioElement.currentTime=0;
    }
    else{
        songIndex-=1;
        audioElement.src=songs[songIndex].path;
        audioElement.play();
        audioElement.currentTime=0;
    }
    
masterPlayName.innerText=songs[songIndex].songName
masterPlayName.color='white'
})
songItems.forEach((element,i)=>{
    element.querySelector('img').src=songs[i].cover;
    element.getElementsByClassName('songName')[0].innerHTML=songs[i].songName;
        
    })
        
play.addEventListener('click',()=>{
    // console.log('hello');
    
    if(audioElement.paused || audioElement.currentTime<=0){
        gif.style.opacity='1';
        audioElement.play();

        play.classList.remove('fa-play-circle')
        play.classList.add('fa-pause-circle')


    }
    else{
        gif.style.opacity='0';
        masterPlayName.style.color='black'
        audioElement.pause();
        play.classList.add('fa-play-circle')
        play.classList.remove('fa-pause-circle')

    }
    
    masterPlayName.innerText=songs[songIndex].songName
    masterPlayName.style.color='white'
}) 
audioElement.addEventListener('timeupdate',(e)=>{
    // console.log('time update');
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
    // update seek bar
    myProgressBar.value=progress;

})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=audioElement.duration*myProgressBar.value/100;
    
})
