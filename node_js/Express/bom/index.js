function getWindow(){
    let ele = window.document.getElementById("windowSize")

    let width = window.innerWidth;
    let height = window.innerHeight;

    //url path
    let URl = window.location;


    ele.innerHTML = `window width : ${width} and height : ${height}  and url = ${URl}`
}

function forward() {
 
    window.history.forward();
    
}

function backward(){
    window.history.back()
}