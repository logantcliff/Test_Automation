// const { firefox } = required('playwright'); select browser type
// const browser = await firefox.launch(); launch browser
// const context = await browser.newContext(); incognito type instance
// const page = await context.newPage(); create pages
// await page.goto('https://example.com') perform operations that we need to
// await browser.close(); close browser

const {chromium} = require('playwright');

(async() => {
    const browser = await chromium.launch({headless:false})
    // const context = await browser.newContext()
    // const page = await context.newPage()
    const page = await browser.newPage()
    await page.goto('https://todomvc.com/examples/react/#/')
    await page.screenshot({path:'todo.png'})
    await browser.close()

}) ()