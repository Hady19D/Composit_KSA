//Create a function to trigger Call Clickstream
function myClickstreamSafety(){

	//Create a variable to hold your Call Clickstream values
	var myObject = {};
	
	//Assign values to Call Clickstream fields that you would like to record (see http://bit.ly/2aXess7 for more details)
	myObject.Track_Element_Id_vod__c = "Safety";
	myObject.Track_Element_Description_vod__c = "Safety";
	myObject.Usage_Duration_vod__c = 0;
	myObject.Answer_vod__c = "Safety";
	myObject.Usage_Start_Time_vod__c = new Date();
	myObject.Track_Element_Type_vod__c = "Safety";
	
	//Create a new Call Clickstream record in the CRM and assign the contents of your variable to it
	com.veeva.clm.createRecord("Call_Clickstream_vod__c", myObject, printSavedResultsSafety);
	
// document.location = 'veeva:gotoSlide(CLM_HIDDEN_SAFETY_KM.zip,CLM_CERT_HIDDEN_SAFETY)'
}

function myClickstreamEfficacy(){

	//Create a variable to hold your Call Clickstream values
	var myObjectOne = {};
	
	//Assign values to Call Clickstream fields that you would like to record (see http://bit.ly/2aXess7 for more details)
	myObjectOne.Track_Element_Id_vod__c = "Efficacy";
	myObjectOne.Track_Element_Description_vod__c = "Efficacy";
	myObjectOne.Usage_Duration_vod__c = 0;
	myObjectOne.Answer_vod__c = "Efficacy";
	myObjectOne.Usage_Start_Time_vod__c = new Date();
	myObjectOne.Track_Element_Type_vod__c = "Efficacy";
	
	//Create a new Call Clickstream record in the CRM and assign the contents of your variable to it
	com.veeva.clm.createRecord("Call_Clickstream_vod__c", myObjectOne, printSavedResultsEfficacy);
		
}

//Print the result to an alert to test your Call Clickstream
function printSavedResultsSafety(result) {
	alert(JSON.stringify(result));
	document.location = 'veeva:gotoSlide(CLM_HIDDEN_SAFETY_KM.zip,CLM_CERT_HIDDEN_SAFETY)'
}
function printSavedResultsEfficacy(result) {
	alert(JSON.stringify(result));
	document.location = 'veeva:gotoSlide(CLM_HIDDEN_EFFICACY_KM.zip,CLM_CERT_HIDDEN_EFFICACY)'
}