
import { search } from "../scraping/search";

export default defineEventHandler(async (event) => {
  const { name } = getQuery(event)
  const programs = await search(name as string || "")
  return {
    programs
  }
})
