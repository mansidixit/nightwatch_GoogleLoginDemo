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
  }
};