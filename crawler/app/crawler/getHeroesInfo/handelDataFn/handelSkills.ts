import { CheerioAPI } from 'cheerio'
type skillInfo = {
  name: string
  pic: string
  info: string
  plusValue: string
}
const handelSkills = async ($: CheerioAPI): Promise<undefined> => {
  const skills: Array<skillInfo> = Array.from({ length: 4 }).map(() => {
    return {
      name: '',
      pic: '',
      info: '',
      plusValue: '',
    }
  })
  $('.plus-tab.controller  img').each((i, elem) => {
    skills[i].pic = elem.attribs.src
  })
  $('.plus-name').each((i, elem) => {
    skills[i].name = $(elem).text() || ''
  })
  $('.plus-value').each((i, elem) => {
    skills[i].plusValue = $(elem).text() || ''
  })
  $('.plus-int').each((i, elem) => {
    skills[i].info = $(elem).text() || ''
  })
  console.log(skills)

  process.exit()
}
export { handelSkills }
