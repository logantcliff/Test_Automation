const {chromium} = require('playwright');

(async() => {
    const browser = await chromium.launch({headless:false})
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://react-redux.realworld.io/#/login')
    // const signIn = await page.$('.btn')
    // '.' for class
    // '#' for ID 
    // alternative way -> await page.getByText ('Sign in')
    const signIn = await page.$('css=button')
    // const signIn = await page.$('xpath=//button[@type = "submit"]')
    // const signIn = await page.$('//button[@type = "submit"]')
    // const form = await page.$('css=form')
    // const signIn = await form.$("'Sign in'")
    // const form = await page.$("form >> 'Sign In'")
    const input = await page.$$('.form-control')
    await input[0].click()
    await input[1].click()
    await signIn.click()
    await page.getByText("email can't be blank").waitFor()
    await page.screenshot({path:'02_IdentifyElements/todo.png'})
    await browser.close()
}) ()