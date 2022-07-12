introduceElement= document.querySelector('.introduce');
btnElement=document.querySelector('.btn');
btnElement.onclick=function(e){
e.target.style.display= 'none';
introduceElement.style.display= 'block';


}
closeElement =document.querySelector('.close');
closeElement.onclick=function(){

    introduceElement.style.display= 'none';
btnElement.style.display= 'block';
}