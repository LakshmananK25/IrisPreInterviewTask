## Playwright UI Automation

This respository contains the test case to verify the News articles are getting displayed

##### Defect Summary
Error messages are getting displayed once the user navigated to the QAtest profile

##### Steps to Reproduce
1. Launch the browser and navigate to "https://osa-web.t-cg.co.uk"
2. Enter the search term "B16 8PE"
3. Scroll down and select the Active "Contact Group" of "5862 Hagley Road, Birmingham, B 16 8PE" from the list
4. Click on the "News" title
5. Verify the News displays on the page
6. Navigate to "https://osa-web.t-cg.co.uk/qatest"
7. Verify the application working fine and News are displays

##### Expected: 
No error message should be displayed and News should be displayed
##### Actual: 
The error message is getting displayed after hitting QATest

##### Environment: 
https://osa-web.t-cg.co.uk/qatest

##### Severity: High

##### To access the Test Case
tests\IrisTest.spec.js

###### To Run the file, use the below command in Visual Code Terminal
npx playwright test --ui
- Once executed the command, Playwright Test Runner screen will be open
- Select the "IrisTest.spec.js" and click Run icon
- Observe the results

