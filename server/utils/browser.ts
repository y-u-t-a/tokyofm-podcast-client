import puppeteer, { Page, Browser } from "puppeteer"

// シングルトンでブラウザインスタンスを保持
let _browser: Browser | null = null

async function getBrowser(): Promise<Browser> {
  if (_browser) {
    if (_browser.connected) {
      return _browser
    } else {
      _browser.close()
    }
  }
  _browser = await puppeteer.launch()
  return _browser
}

export async function withBrowser<T>(callback: (page: Page) => Promise<T>): Promise<T> {
  const browser = await getBrowser()
  const page = await browser.newPage()
  await page.goto("https://www.tfm.co.jp/podcast/")
  try {
    return await callback(page)
  } finally {
    await page.close()
  }
}
