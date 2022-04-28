function setcookie(cname, cvalue) 
                    {
                              // var cname= document.getElementById("cname").value
                              // var cvalue= document.getElementById("cvalue").value
                              var expdate= new Date();
                              expdate.setDate(expdate.getDate()+10);
                              document.cookie= cname+"="+cvalue+";expires="+expdate.toString();
                              
                    }

                    function getcookie(cname) 
                    {
                              
                              // var cname= document.getElementById("cname").value;
                              var cvalue="";
                              var cookie = document.cookie;
                              console.log(cookie);
                              if(cookie.length>0){
                                        var start= cookie.indexOf(cname+"=");
                                        if(start != -1){
                                        start+= cname.legnth+1;
                                        var end= cookie.indexOf(";",start)
                                        if(end== -1)
                                        {
                                                  end= cookie.length;
                                        }
                                        cvalue=cookie.substring(start,end);
                              }
                              }
                              // document.getElementById("divcookie").innerHTML=cvalue;
                              return cvalue;
                    }

                    function clearcookie(cname) 
                    {
                              // var cname= document.getElementById("cname").value
                              var cvalue= "";
                              var expdate= new Date();
                              expdate.setDate(expdate.getDate()-10);
                              document.cookie= cname+"="+cvalue+";expires="+expdate.toString();
                    }