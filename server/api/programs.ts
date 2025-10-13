
import { searchPrograms } from "../scraping/programs";

export default defineEventHandler(async (event) => {
  const { name } = getQuery(event)
  const programs = await searchPrograms(name as string || "")
  return {
    programs
  }
})
