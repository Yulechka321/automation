module.exports = {
    'Demo test Saks' : function (browser) {
        browser
            .url('http://www.saksfifthavenue.com/Entry.jsp')
            .waitForElementVisible('body', 5000)
            .setValue('input[type=text]', 'dress')
            .click('button[type=submit]')
            .pause(4000)
            .click('button[type=submit]')
            .waitForElementVisible('a[#image-url-0400089085157]', 15000)
            .click('a[#image-url-0400089085157]')
            .pause(1000)
            .assert.containsText('#main', 'BCBGMAXAZRIA')
            .end();
    }
};