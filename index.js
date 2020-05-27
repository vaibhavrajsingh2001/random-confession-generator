const puppeteer = require('puppeteer');
const random_name = require('random-indian-name');

module.exports = async function confess (url, entry, count) {
    let quotes = [];
    let names = [];
    const browser = await puppeteer.launch();
    console.log("Puppeteer has been launched");
    const page = await browser.newPage();
    console.log("Scraping quotes...");
    for (let index = 1; index <= Math.ceil(count/20) ; index++) {
        await page.goto(`https://www.successories.com/iquote/category/44/love-quotes/${index}`);
        const textsArray = await page.evaluate(
            () => [...document.querySelectorAll('.quote')].map(elem => elem.innerText)
        );
        quotes.push(...textsArray);
    }

    quotes.forEach(() => names.push(random_name({random: Math.random})));

    console.log("Pushing confessions now!");
    for(let i = 0; i < count ; i++) {
        const message = `For ${names[i]}: ${quotes[i]}`;
        const newPage = await browser.newPage();
        await newPage.goto(`${url}?${entry}=${message}`);
        const btn = await newPage.$('.exportButtonContent');
        await btn.click();
        console.log(message);
        newPage.close();
    }
    process.exit();
    // ...
};