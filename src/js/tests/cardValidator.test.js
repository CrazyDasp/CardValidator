import puppeteer from 'puppeteer'

describe('Card Validator', () => {
  let browser
  let page

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: false,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    page = await browser.newPage()
  })

  jest.setTimeout(15000)

  test('Testing valid card number', async () => {
    await page.goto('http://localhost:8080');

    const input = await page.$('input');
    const submitButton = await page.$('button');

    await input.type('789665123657')
    await submitButton.click()

    await page.waitForSelector('.result')
    const resultText = await page.$eval('.result', el => el.textContent)

    expect(resultText).toBe('Validator result: Number is a valid')
  })
})
