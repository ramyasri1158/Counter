let counterElement=document.getElementById("counterValue");
function increment(){
    let a=counterElement.textContent;
    let b=parseInt(a) + 1;
    counterElement.textContent=b;
    if(b>0){
        counterElement.style.color="green";
    }

}
function decrement(){
    let a=counterElement.textContent;
    let b=parseInt(a) - 1;
    counterElement.textContent=b;
    if(b<0){
        counterElement.style.color="red";
    }
}
function reset(){
    let b=0;
    counterElement.textContent=b;
    if(b==0){
        counterElement.style.color="#51abc6";
    }
}