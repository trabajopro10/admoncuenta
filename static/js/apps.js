function fnlogin(){
    //alert("Entramos al login");
    window.open('login.html', '_blank');
}

/* TOMADO DEL SITIO http://www.javascripter.net/faq/searchin.htm  */
function fmbuscar () {
    //if (parseInt(navigator.appVersion)<4) return;
    //var strFound;
    if (window.find) {
   
     // CODE FOR BROWSERS THAT SUPPORT window.find
     datoBuscado = document.querySelector("#id_busqueda").value
     strFound=self.find(datoBuscado);
     if (!strFound) {
      strFound=self.find(str,0,1);
      while (self.find(str,0,1)) continue;
     }
    }
    else if (navigator.appName.indexOf("Microsoft")!=-1) {
   
     // EXPLORER-SPECIFIC CODE
   
     if (TRange!=null) {
      TRange.collapse(false);
      strFound=TRange.findText(str);
      if (strFound) TRange.select();
     }
     if (TRange==null || strFound==0) {
      TRange=self.document.body.createTextRange();
      strFound=TRange.findText(str);
      if (strFound) TRange.select();
     }
    }
    else if (navigator.appName=="Opera") {
     alert ("Opera browsers not supported, sorry...")
     return;
    }
    if (!strFound) alert ("String '"+str+"' not found!")
    return;
   }