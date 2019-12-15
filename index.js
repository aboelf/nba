const puppeteer = require('puppeteer');

(async () => {

    const browser = await puppeteer.launch({

        headless: false,
        defaultViewport:{
            width:1920,
            height:1280,
        }
    })
    let pages = await browser.pages();
    let page_leisu = pages[0];
    let page_qiutan = await browser.newPage();

    await page_leisu.goto('https://live.leisu.com/lanqiu')
    await page_qiutan.goto('http://lq3.win007.com/nba.htm')

    page_leisu.on("load",()=>{

    })
    page_qiutan.on("load",()=>{
        
    })

})()