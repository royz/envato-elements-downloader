require('dotenv').config()
const puppeteer = require('puppeteer')

class Envato {
  constructor() {
    this.browser = null
  }

  init = async () => {
    this.browser = await puppeteer.launch({
      headless: false,
      executablePath: process.env.CHROME_PATH,
      defaultViewport: null,
      args: ['--start-maximized'],
    });

    const page = await this.browser.newPage();
    await page.goto('https://elements.envato.com/sign-in', {waitUntil: 'networkidle0'});

    // login
    await page.type('input[name="username"]', process.env.ENVATO_USERNAME)
    await page.type('input[name="password"]', process.env.ENVATO_PASSWORD)
    await page.click('button[data-test-selector="sign-in-submit"]')
  }

  downloadPresentationTemplates = async () => {

  }
}

const main = async () => {
  const envato = new Envato(false)
  await envato.init()
}

main().then()
