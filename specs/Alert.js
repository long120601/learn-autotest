import { browser, $ } from "@wdio/globals";

describe('Alert', () => {
    it('Alert', async () => {
        await browser.url('https://the-internet.herokuapp.com/context_menu');
        await browser.pause(2000)
        const hotpot = await $('div[id="hot-spot"]')
        await hotpot.click({ button: 'right' })
        // await browser.acceptAlert();
        await browser.waitUntil(async () => {
            try {
                await browser.getAlertText(); // Kiểm tra xem alert có xuất hiện không
                return true;
            } catch (e) {
                return false; // Nếu không có alert, trả về false
            }
        }),
        await browser.pause(6000)
    })
})