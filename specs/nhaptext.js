import { browser, expect, $ } from "@wdio/globals";

describe('login1', () => {
    it('true', async () => {
        await browser.url('https://practicetestautomation.com/practice-test-exceptions/');
    })
    it('add and remove', async () => {
        await $('#add_btn').click()
        await $('#row2 > input').setValue('test')
        // await $('#remove_btn').waitForExist()
        // await $('#remove_btn').waitForDisplayed()
        await $('#save_btn[name="Save"]').click()
        // const notice = await $('div[id="confirmation"]')
        // await expect(notice).toHaveText('Row 2 was saved')
        await browser.pause(2000)
    })
})