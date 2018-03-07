<%'SoHosted Domeinhouder
DomeinHouderURL = "https://www.sohosted.com/placeholder/?klantnummer=8887&domein=remcohoeneveld.nl"
Set XMLHTTP = CreateObject("MSXML2.ServerXMLHTTP") 
XMLHTTP.Open "GET", DomeinHouderURL, false 
XMLHTTP.Send "" 
Response.Write XMLHTTP.ResponseText 
Set XMLHTTP = nothing 
Response.End
%>
