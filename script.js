var track=true
function changeA(){
    
    if(track){
        document.getElementById("home").style.backgroundImage='url(Untitled.jpg)'
        track=false
    }
    else{
        console.log("sss")
        document.getElementById("home").style.backgroundImage='url(japan.jpg)'
        track=true
    }
    
}


function infoChange(num){
    var home=document.querySelector('.home')
    home.addEventListener('click',function(e){
        e.preventDefault
        home.classList.remove("opacity")
        void home.offsetWidth
        home.classList.add("opacity");
    
    }, false)

    if(num===1){
      
      document.querySelector('#item1 a').style.color="white"
      document.querySelector('#item2 a').style.color="rgb(90, 90, 90)"
      document.querySelector('#item3 a').style.color="rgb(90, 90, 90)"
      document.querySelector('.home').style.background="linear-gradient( rgba(0,0,0,0) 35%,rgba(0,0,0,0.98) 99%, rgb(0, 0, 0)), url(./japan.jpg)"
      document.querySelector('.home').backgroundRepeat="no-repeat";
      document.querySelector('.home').backgroundAttachment="scroll";
      document.querySelector('.home').backgroundPosition="100% 0%"
      document.querySelector('.home').style.backgroundSize="99vw 160vh";
    }
    if(num===2){
        document.querySelector('#item2 a').style.color="white"
        document.querySelector('#item3 a').style.color="rgb(90, 90, 90)"
        document.querySelector('#item1 a').style.color="rgb(90, 90, 90)"
        
        document.querySelector('.home').style.background="linear-gradient( rgba(0,0,0,0) 35%,rgba(0,0,0,0.98) 99%, rgb(0, 0, 0)), url(./temple.jpg)"
         document.querySelector('.home').backgroundRepeat="no-repeat";
         document.querySelector('.home').backgroundAttachment="scroll";
         document.querySelector('.home').backgroundPosition="100% 0%"
         document.querySelector('.home').style.backgroundSize="99vw 160vh";
    }
    if(num===3){
        document.querySelector('#item3 a').style.color="white"
        document.querySelector('#item2 a').style.color="rgb(90, 90, 90)"
        document.querySelector('#item1 a').style.color="rgb(90, 90, 90)"
      
       document.querySelector('.home').style.background="linear-gradient( rgba(0,0,0,0) 35%,rgba(0,0,0,1) 70%, rgb(0, 0, 0)), url(./kyoto.jpg)"
       document.querySelector('.home').backgroundRepeat="no-repeat";
       document.querySelector('.home').backgroundAttachment="scroll";
       document.querySelector('.home').backgroundPosition="150% 0%"
       document.querySelector('.home').style.backgroundSize="99vw 200vh";
    }
}

function itemClicked(num) {
    var selectedItem = document.querySelector('.selected');
    if (selectedItem) {
      selectedItem.className = selectedItem.className.replace('selected','');
    }
    var item = document.getElementById('item'+num);
    item.style.animation="opacityS 0.8"
    item.className += ' selected';
 }

function export1(){
    
    document.querySelector('.imgS').style.animation="0.8s slider ease"
    // document.querySelector('.imgS2').style.animation="0.8s slider2 ease"
    setTimeout(()=>{
        document.getElementById('labl1').htmlFor="i1"
    },1500)
}

function export2(){
    document.querySelector('.imgS').style.animation="1.2s slider2 ease"
    document.querySelector('.imgS2').style.animation="1.2s slider ease"
    setTimeout(()=>{
        document.getElementById('labl2').htmlFor="i2"
    },1500)
}