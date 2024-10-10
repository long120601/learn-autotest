import { browser, $, expect } from "@wdio/globals";

describe('dropdown', () => {
    it('true', async () => {
        await browser.url('https://the-internet.herokuapp.com/dropdown');
    })
    it('dropdown', async () => {
        // await browser.pause(6000)
        // await $('#dropdown').selectByVisibleText('Option 2')
        await $('#dropdown').selectByAttribute('value','1')
        await browser.pause(6000)
    })

})