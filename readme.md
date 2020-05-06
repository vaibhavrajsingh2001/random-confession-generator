# Random stuff generatoR.

*The main aim of this script is to just act as a skeleton for generating random stuff and posting them in places like google forms which
aim to spam individuals.*

Some of my friends were troubled by some confession pages of our institute, so made this random confessions generator that bombarded the google forms of those pages.

However, due to flexible nature of puppeteer, you can basically create random stuff and bombard any form with any generated stuff. Just use a different page to scrape stuff off. I used a romantic quotes page, cause that's what I needed for my purposes. But you could basically use anything since this a well written skeleton structure for doing fun things with puppeteer.

## Usage

Run:

```
npm install
npm run start
```

This will install the `puppeteer` and the `random-indian-name generator` libraries. Since I wasn't sure that everyone will have chromium setup on their systems and even if they had, they probably won't want to setup the path inside the script, so this will also install a small chromium package too. So, might take some time to install the dependencies, just note that.

The sample URL I have written in the `index.js` file is actually of one such confession page. The confessions I bombarded are in `confessions.txt`. If you want to get random names, use the `names.js` file.
