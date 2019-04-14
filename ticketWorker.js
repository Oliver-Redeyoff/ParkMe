function ticketWorker(){
	// get the number of current tickets in the valid zones
	var ticketRequest = new XMLHttpRequest()
	ticketRequest.open("GET", "https://ckc-emea.cisco.com/t/prague-city.com/cdp/v1/opendata/2.0/prague?domain=paidparkingreports&periodicity=last24hours&pageSize=1000&pageNumber=1&format=json", false)
	ticketRequest.setRequestHeader("Authorization", "Bearer "+token);
	ticketRequest.send()
	var ticketData = null;
	ticketData = JSON.parse(this.response)

	console.log("hey")

  setTimeout("timedCount()",500);
}

ticketWorker()
