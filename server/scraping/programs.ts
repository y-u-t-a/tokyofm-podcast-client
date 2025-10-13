import { Program } from "~~/shared/model/program"
import { withBrowser } from "../utils/browser"

export async function search(keyword: string): Promise<Program[]> {
  return withBrowser(async (page) => {
    await page.goto("https://www.tfm.co.jp/podcast/")

    // 検索
    await page.locator(".p-search_box").fill(keyword)
    await page.keyboard.press("Enter")

    // 検索結果を取得
    return await page.evaluate(() => {
      const elements = Array.from(document.querySelectorAll("#programList > .p-podcast_item"))
      const programs = elements.map(e => {
        const title = e.querySelector(".p-podcast_item_ttl")?.textContent ?? ""
        const href = e.querySelector("a")?.href ?? ""
        const img = e.querySelector("img")?.src ?? ""
        const id = href.split("/").at(-2) ?? "" // 末尾にスラッシュがあるので 2番目の要素を取得
        return { id, title, href, img }
      }) satisfies Program[]
      return programs
    })
  })
}
