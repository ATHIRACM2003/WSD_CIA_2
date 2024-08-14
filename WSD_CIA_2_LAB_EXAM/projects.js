let para=document.getElementsByClassName('para');
let buttonn=document.getElementById('btnn')
buttonn.addEventListener('click',function(){
    const xreq=new XMLHttpRequest()
    xreq.onreadystatechange();{
        if(xreq.readyState==4 && xreq.status==200)
            {
            para.innerHTML=xreq.responseText;
            }
            xreq.open("GET",'https://athiracm2003.github.io/WEB_EXAm/');
            xreq.send();
    }
})
