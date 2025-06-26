function toggleItem(itemId) {
		var item = document.getElementById(itemId) 
		
		if (item.style.display == "none")
			item.style.display = "" ;
		else
			item.style.display = "none" ;
		
	}