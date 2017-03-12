// module.exports = {
//   'Demo teema' : function (browser) {
//     browser
//       .url('http://www.teemagroup.com/')
//       .waitForElementVisible('body', 1000)
//       .waitForElementPresent('a[href="http://www.teemagroup.com/apply-here/"]', 1000)
//       .click('a[href="http://www.teemagroup.com/apply-here/"]')
//       .assert.containsText("a[href='http://www.teemagroup.com/submit-a-resume/']","Submit a Resume")
//       .pause(1000)
//       .click("a[href='http://www.teemagroup.com/submit-a-resume/']")
//       .waitForElementVisible('body', 1000)
//       .assert.containsText('h1[class="entry-title"]',"Submit a Resume")
//       .end();
//   }
// };



module.exports = {
  'Demo teema' : function (browser) {
    browser
      .url('http://www.teemagroup.com/')
      .waitForElementVisible('body', 1000)
      .waitForElementPresent('a[href="http://www.teemagroup.com/apply-here/"]', 1000)
      .click('a[href="http://www.teemagroup.com/apply-here/"]')
      .assert.containsText("a[href='http://www.teemagroup.com/submit-a-resume/']","Submit a Resume")
      .pause(1000)
      .click("a[href='http://www.teemagroup.com/submit-a-resume/']")
      .waitForElementVisible('body', 1000)
      .assert.containsText('h1.entry-title',"Submit a Resume")
      .end();
  }
};
