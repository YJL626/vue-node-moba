import { getHeroesInfo } from './crawler/getHeroesInfo'
;(async () => {
  await getHeroesInfo()
  process.exit()
})()
