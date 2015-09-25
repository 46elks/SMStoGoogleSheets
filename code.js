/*
   This function is used to install the app in the documnet you have selected.
   run this function in the editor by Run->doInstall, and confirm that the 
   script should have access to the required document.
   You need to add the ScriptProperties:
      SpreadSheetID and SheetName for the script to function.
*/
function doInstall() {
  // Get the script setting data:
  var prop = PropertiesService.getScriptProperties();
  
  // Open the requested SpreadSheet and Sheet:
  var ss = SpreadsheetApp.openById(prop.getProperty('SpreadSheetID'));
  var sheet = ss.getSheetByName(prop.getProperty('SheetName'));
  
  // Select the cells to put the collumn name in the first row:
  var cell = sheet.getRange('a1');
  cell.setValue("To");
  var cell = sheet.getRange('b1');
  cell.setValue("From");
  var cell = sheet.getRange('c1');
  cell.setValue("Message");
}

// Handle incomming POST request from 46elks server on incomming SMS.
function doPost(e) {
  // Get the script setting data:
  var prop = PropertiesService.getScriptProperties();
  
  // Put the input data in variables:
  var postFrom = e.parameter['from'];
  var postTo = e.parameter['to'];
  var postMessage = e.parameter['message'];
  
  // Open the requested SpreadSheet and Sheet:
  var ss = SpreadsheetApp.openById(prop.getProperty('SpreadSheetID'));
  var sheet = ss.getSheetByName(prop.getProperty('SheetName'));
  
  // Figure out the first available row:
  var cell = sheet.getRange('a1');
  nextRow = sheet.getLastRow();
  
  // Put data on the first available row:
  cell.offset(nextRow, 0).setValue(postTo);  
  cell.offset(nextRow, 1).setValue(postFrom);
  cell.offset(nextRow, 2).setValue(postMessage);
  
  // Return a empty text string to 46elks to prevent a response SMS from beeing sent:
  return ContentService.createTextOutput("");
}