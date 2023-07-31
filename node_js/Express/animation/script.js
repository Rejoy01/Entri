function StartAnimation(){
    let id = null;
    console.log("animation");
    const element = document.getElementById("child");
    let pos = 0;
    id = setInterval(animate,5);

    function animate() {

    if(pos ==450){    
   
        clearInterval(id);
    }else{
        pos++;
        element.style.top= pos + "px"
        element.style.left = pos + "px"
    }

    }

}

