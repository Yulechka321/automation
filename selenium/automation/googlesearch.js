module.exports = {
    'Demo test Saks' : function (browser) {
        browser
            .url('https://www.google.com')
            .waitForElementVisible('body', 5000)
            .setValue('input[type=text]', 'nightwatch')
            .click('button[type=submit]')
            .pause(4000)
            .waitForElementVisible('h3[class="r"]', 15000)
            .click('h3[class="r"]')
            .pause(1000)
            .assert.containsText('Nightwatch')
            .end();
    }
};