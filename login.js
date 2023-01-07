const { remote } = require('webdriverio');

async function runTest() {
  // Create a new Appium driver
  const driver = remote({
    port: 4723,
    path: "/wd/hub",
    capabilities: {
      platformName: 'Android',
      deviceName: 'Android Emulator',
      app: 'C:\\Users\\xgE\\Downloads\\mccb-online.apk',
    }
  });


    // Find the username field and tap on it
    const usernameField = await driver.findElement('00000000-0000-0050-ffff-ffff00000018', 'Email or Username');
    await usernameField.click();
  
    // Enter a username and tap on the password field
    await usernameField.setValue('myusername');
    const passwordField = await driver.findElement('00000000-0000-0066-ffff-ffff0000001c', 'Password');
    await passwordField.click();
  
    // Enter a password and submit the form
    await passwordField.setValue('mypassword');
    const submitButton = await driver.findElement('00000000-0000-0066-ffff-ffff0000001f', 'LOGIN');
    await submitButton.submit();
  }


runTest();
