const puppeteer = require('puppeteer');
const random_name = require('random-indian-name');
const url = "https://docs.google.com/forms/d/e/1FAIpQLSeXO9S5Gm__AodYYZsDoLLMHwR24_bVwsvti4C7v2f8mRif_Q/viewform";
const entry = "entry.2010684884";

(async () => {
    let quotes = [];
    let names = [];
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    for (let index = 1; index < 21; index++) {
        await page.goto(`https://www.successories.com/iquote/category/44/love-quotes/${index}`);
        const textsArray = await page.evaluate(
            () => [...document.querySelectorAll('.quote')].map(elem => elem.innerText)
        );
        await quotes.push(...textsArray);
    }

    for (let i = 0; i < 400; i++) {
        names.push(random_name({random: Math.random}));
    }
    // console.log(names);

    for(let i = 0; i < 400; i++) {
        const message = `For ${names[i]}: ${quotes[i]}`;
        const newPage = await browser.newPage();
        await newPage.goto(`${url}?${entry}=${message}`);
        const btn = await newPage.$('.exportButtonContent');
        await btn.click();
        console.log(message);
        newPage.close();
    }
    // ...
})();