import { browser, expect, $ } from "@wdio/globals";

describe('login', () => {
    it('true', async () => {
        await browser.url('https://practicetestautomation.com/practice-test-login/');
        // await expect(browser.url == '')
    })

    it('login failed username', async () => {
        await $('#username').addValue('student1')
        await $('#password').addValue('Password123')
        await $('#submit').click()

        const myElem = await $('div[id="error"]')
        await expect(myElem).toHaveText('Your username is invalid!')
        // await browser.pause(2000)
    })
    it('login failed password', async () => {
        await $('#username').addValue('student')
        await $('#password').addValue('Password12')
        await $('#submit').click();
        await $('#error').toHaveText('Your password is invalid!')

        // await browser.pause(2000)
        // Your username is invalid!
    })
    it('login success', async () => {
        await $('#username').addValue('student')
        await $('#password').addValue('Password123')
        await $('#submit').click();
        // await browser.pause(2000)
    })
});
