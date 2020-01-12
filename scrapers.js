const puppeteer = require ('puppeteer');

async function scrapeProduct (url)
{
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x(' //*[@id="imgBlkFront"]'); 
    const src= await el.getProperty('src');
    const imgURL = await src.jsonValue();

    const [el2] = await page.$x(' //*[@id="productTitle"]'); 
    const txt = await el2.getProperty('textContent');
    const title = await txt.jsonValue();

    const [el3] = await page.$x('//*[@id="buyNewSection"]/a/h5/div/div[2]/div/span[2]'); 
    const txt2 = await el3 .getProperty('textContent');
    const price = await txt2.jsonValue();


    console.log({imgURL, title, price});

    browser.close();
}

scrapeProduct('https://www.amazon.com/Black-Swan-Improbable-Robustness-Fragility/dp/081297381X/ref=sr_1_1?crid=KL5SS4ULB2K6&keywords=black+swan+book&qid=1578851014&s=books&sprefix=black+swan+book%2Csporting%2C233&sr=1-1');
 