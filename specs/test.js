import { browser, expect} from "@wdio/globals";

describe('shoppe', () => {
    it('true', async() =>{
        await browser.url('https://shopee.vn/');
        await expect(browser)
    } )
});