module.exports = {
  'Verify an Invalid Google login' : function (browser) {
    browser
      .url('https://accounts.google.com')
      .waitForElementVisible('#identifierNext')
      .setValue('#identifierId', 'mansi.4288')
      .click('#identifierNext')
      .pause(3000)
      .assert.containsText('#initialView', 'password')
      .setValue('div#password input', 'WrongPassword') // Entered a wrong password
	  .click('#passwordNext')
	  .pause(2000)
	  .assert.containsText('#password', 'Wrong password. Try again or click Forgot password to reset it.')
	  .end();
  },
  
  'Verify an Invalid Google email ID' : function (browser) {
    browser
      .url('https://accounts.google.com')
      .waitForElementVisible('#identifierNext')
      .setValue('#identifierId', 'mansi.42sdfdsfs88')
      .click('#identifierNext')
      .pause(3000)
      .assert.containsText('#view_container', 'Couldn\'t find your Google Account')
      .end();
  },
  
  'Verify a valid Google login' : function (browser) {
    browser
      .url('https://accounts.google.com')
      .waitForElementVisible('#identifierNext')
      .setValue('#identifierId', 'mansi.4288')
      .click('#identifierNext')
      .pause(3000)
      .assert.containsText('#initialView', 'password')
      .setValue('div#password input', '**********') // For security reason , I am not putting my password in it , if you put yours and try it , it will work! 
	  .click('#passwordNext')
	  .pause(3000)
	  .waitForElementVisible('#yDmH0d')
	  .assert.containsText('#yDmH0d', 'Welcome') // Kept it generic for now , as the user might change
	  .end();
  }
};