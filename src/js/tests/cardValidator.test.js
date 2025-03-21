import puppeteer from 'puppeteer'

describe('Card Validator', () => {
  let browser
  let page
  let server = null

  const baseUrl = "http://localhost:9030"

  beforeAll(async() => {
    server = await childProcess.fork(`${__dirname}/e2e.server.js`)

    await new Promise((resolve, reject) => {
      server.on("error", reject)
      server.on("message", (msg) => {
        if (msg === "ready") resolve()
      })
    })

    browser = await puppeteer.launch({
      headless: true,
      slowMo: 100,
      devtools: true,
    })

    page = await browser.newPage()

  })

  afterAll(async () => {
    await browser.close()
    server.kill()
  })

  jest.setTimeout(15000)

  test('Testing valid card number', async () => {
    await page.goto('http://192.168.0.187:8080/');

    const input = await page.$('input')
    const submitButton = await page.$('button')

    await input.type('789665123657')
    await submitButton.click()

    await page.waitForSelector('.result')
    const resultText = await page.$eval('.result', el => el.textContent)

    expect(resultText).toBe('Validator result: Number is a valid')
  })

})
