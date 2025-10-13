import { getEpisodes } from "~~/server/scraping/episodes"

export default defineEventHandler(async (event) => {
  const programId = getRouterParam(event, "program") as string
  const episodes = await getEpisodes(programId)
  return {
    episodes
  }
})