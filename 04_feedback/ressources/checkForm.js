function validate_required(field,alerttxt)
{
	with (field) {
		if (value==null||value=="") {
			alert(alerttxt);return false;
		}
		else {
			return true;
		}
	}
}

function validate_form(thisform) {
	with (thisform) {

		if (validate_required(txtName,"Name can not be empty.")==false)
		{txtName.focus();return false;}

		if (validate_required(mtxMessage,"Message can not be empty.")==false)
		{mtxMessage.focus();return false;}

	}
}

