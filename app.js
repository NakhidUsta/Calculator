var optDurum = false ,opt  = "",sonuc = 0 ;
var btnreqem  = document.querySelectorAll(".btnreqem");
var txtgosretge = document.querySelector(".gosterge")
var btnOpt = document.querySelectorAll(".btnOpt")
var islem = document.querySelector(".islem")
var btnC = document.querySelector(".btnC");
var btnCE = document.querySelector(".btnCE");
var btnN = document.querySelector(".btnN");
var btnB = document.querySelector(".btnB");




btnreqem.forEach(function(element)
{
    element.onclick =function(e)
    {
        if(txtgosretge.textContent=="0" || optDurum)
        txtgosretge.textContent="";
        txtgosretge.textContent+=this.textContent;
        optDurum=false;
    }
});
btnOpt.forEach(function(element)
{
    element.onclick=function(e)
    {
        optDurum=true ;
        var yeniOpt = this.textContent;
        islem.textContent =islem.textContent+" "+txtgosretge.textContent+" "+yeniOpt;
        switch(opt)
        {
            case  "+" : txtgosretge.textContent =(sonuc+ Number(txtgosretge.textContent)); break ;
            case  "-" : txtgosretge.textContent =(sonuc-Number(txtgosretge.textContent)); break ;
            case  "*" : txtgosretge.textContent =(sonuc* Number(txtgosretge.textContent)); break ;
            case  "/" : txtgosretge.textContent =(sonuc/Number(txtgosretge.textContent)); break ;
            default : break ;
        }
       
        sonuc =Number(txtgosretge.textContent) ;
        opt = yeniOpt ;

    }
})

btnC.onclick = function(e)
{
    txtgosretge.textContent=""
}
btnCE.onclick = function(e)
{
    txtgosretge.textContent="";
    islem.textContent="";
    sonuc= 0;
    opt="";
}

btnB.onclick =function(e)
{
    islem.textContent="";
    optDurum=true;
    switch(opt)
        {
            case  "+" : txtgosretge.textContent =(sonuc+ Number(txtgosretge.textContent)); break ;
            case  "-" : txtgosretge.textContent =(sonuc-Number(txtgosretge.textContent)); break ;
            case  "*" : txtgosretge.textContent =(sonuc* Number(txtgosretge.textContent)); break ;
            case  "/" : txtgosretge.textContent =(sonuc/Number(txtgosretge.textContent)); break ;
            default : break ;
        }
        sonuc =Number(txtgosretge.textContent);
        txtgosretge.textContent =sonuc ;
        sonuc =  0 ;
        opt = ""
}
btnN.onclick=function(e)
{
    if(!optDurum && !txtgosretge.textContent.includes("."))
    {
        txtgosretge.textContent += ".";
    }
    else if (optDurum)
    {
        txtgosretge.textContent= "0";
    }
    if(!txtgosretge.textContent.includes("."))
    {
        txtgosretge.textContent += ".";
    }
    optDurum= false ;
}