# SMStoGoogleSheets
A Google Apps Script to store incoming SMS from 46elks to a Google Sheet.

## Installation
1. Copy the Google Apps script to your drive from the [original file](https://script.google.com/d/1dEYFL3ABZNXfNodDVAke9ROD4WMWAAth7f0BYMUX0cMEg9buhTTe6K3v/edit?usp=sharing) by `File => Copy`.
2. Add the settings ```SpreadSheetID``` and ```SheetName``` in the ```File => Project properties => Script properties```. SpreadSheetID is the the id in the URL of the document, for example ```d2sPTTxOeL-GNcFC8caBLeZzXUuAJWT3NoBP9SGao9AKP``` is the key in https://docs.google.com/spreadsheets/d2sPTTxOeL-GNcFC8caBLeZzXUuAJWT3NoBP9SGao9AKP/edit#gid=0. SheetName is the name of the SheetTab. If you want to make a SMS Voting Spread Sheet then you may copy the this [Google SpreadSheet file](https://docs.google.com/spreadsheets/d/1AY8u7ACL6U9hYaB5tbcxTE-HlZxCrfm_551R3BgPLuo/edit?usp=sharing) by `File => Copy`, or make your own.
3. Initiate install by ```Run => doInstall``` and authorize the script access to the document. Make sure the fields are set to *To*, *From*, *Message* in the top Row in the Sheet with the selected Sheet Name.
4. Make into webbapp by ```Publish => Deploy as web app...``` select the latest ```Project version:``` (It will probably default to *New*, this is good), "Me" in ```Execute the app as:``` and "everyone, even anonymous" in ```Who has access to the app:```. Copy the ```Current web app URL:```.
5. Go to the [46elks](https://www.46elks.com) dashboard to configure your number.
6. Paste the url in your 46elks number in the ```sms_url``` field and press save.
