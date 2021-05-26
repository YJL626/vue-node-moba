import { getHeroesInfo } from './crawler/getHeroesInfo'
;(async () => {
  await getHeroesInfo()
  console.log('end')

  process.exit()
})()
