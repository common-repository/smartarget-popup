function init_popup (hash)
{
	if (!hash)
	{
		return;
	}

	insertJs_popup(hash);
}

function insertJs_popup (hash)
{
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = `https://smartarget.online/loader.js?ver=${Math.random()}&u=${hash}&source=wordpress_popup`;
	document.head.appendChild(script);
}

init_popup(smartarget_popup_params.hash);
