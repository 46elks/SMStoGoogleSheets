# SMStoGoogleSheets
A Google Apps Script to store incoming SMS from 46elks to a Google Sheet.

## Installation
1. Copy google apps script to your drive from the origional [file](https://script.google.com/d/1dEYFL3ABZNXfNodDVAke9ROD4WMWAAth7f0BYMUX0cMEg9buhTTe6K3v/edit?usp=sharing).
2. Add the settings ```SpreadSheetID``` and ```SheetName``` in the ```Project properties => Script properties```. Spreadsheet is the the id in the URL of the document for example ```d2sPTTxOeL-GNcFC8caBLeZzXUuAJWT3NoBP9SGao9AKP``` is the key in https://docs.google.com/spreadsheets/d2sPTTxOeL-GNcFC8caBLeZzXUuAJWT3NoBP9SGao9AKP/edit#gid=0. SheetName is the name of the SheetTab.
3. Initiate install by ```Run => doInstall``` and accept the script access to the document. Make sure the the the fields are filled with,  To, From, Message in the top Row in the Sheet with the selected Sheet Name.
4. Make into webbapp by ```Publish => Deploy as web app...``` select the latest ```Project version:```, "Me" in ```Execute the app as:``` and "everyone, even anonymous" in ```Who has access to the app:```. Copy the ```Current web app URL:```.
5. Paste the url in your 46elks number in the ```sms_url``` field and press save.
