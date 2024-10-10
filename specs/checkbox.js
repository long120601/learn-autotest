import { browser, $ } from "@wdio/globals";

describe('checkbox', () => {
    it('true', async () => {
        await browser.url('https://the-internet.herokuapp.com/checkboxes');
    })
    it('checkbox', async () => {
        const checkboxes = await $$('#checkboxes input[type="checkbox"]');

        for(let i = 0; i < checkboxes.length; i ++) {
            if (!(await checkboxes[i].isSelected())) {
                await checkboxes[i].click();
            }
        }
        await browser.pause(6000)
    })
})