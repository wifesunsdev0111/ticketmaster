var whitespace = " \t\n\r";
function isValidEmail(s)
{   
	if (isEmpty(s)) return false;
	if (isWhitespace(s)) return false;
	var i = 1;
	var sLength = s.length;
	while ((i < sLength) && (s.charAt(i) != "@"))
	{ i++
	}
	if ((i >= sLength) || (s.charAt(i) != "@")) return false;
	else i += 2;
	while ((i < sLength) && (s.charAt(i) != "."))
	{ i++
	}
	if ((i >= sLength - 1) || (s.charAt(i) != ".")) return false;
	else return true;
}
function isEmpty(s)
{   
	return ((s == null) || (s.length == 0))
}
function isWhitespace(s)
{   
	var i;
    if (isEmpty(s)) return true;
    for (i = 0; i < s.length; i++)
    {   
		var c = s.charAt(i);
		if (whitespace.indexOf(c) == -1) return false;
    }
    return true;
}
function checkForm() { 
	if (!isValidEmail(document.subscribeForm.elements['Email Address'].value)) {
		document.subscribeForm.elements['Email Address'].style.backgroundColor='yellow';
		alert(unescape("Bitte g%FCltige E-Mail-Adresse eingeben."));
		document.subscribeForm.elements['Email Address'].focus();
		return false;
	}
	else{
		var subskey=document.getElementById('CLIENT_CODE').value +'-'+document.getElementById('EmailAddress').value;
		document.getElementById('ETSubscriberKey').value = subskey;
	}
}