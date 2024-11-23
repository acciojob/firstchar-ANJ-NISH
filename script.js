function firstChar(text) {

	let ans="";

	if(text.length===0)
	{
		return ans;
	}

	for(let i=0;i<text.length;i++)
		{
			if(text.charAt(i)!==" ")
			{
				ans=text.charAt(i);
				break;
			}
		}
	return ans;
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
//const text = prompt("Enter text:");
alert(firstChar(text));
