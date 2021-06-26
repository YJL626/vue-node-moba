interface HeroInfo {
  score: Score
  addPointRec: AddPointRec
  equipmentRecs: EquipmentRecs
  runes: Rune[]
  _id: string
  heroId: HeroId
  bgcPic: string
  skins: SummonerSpell[]
  heroVideo: string
  skills: Skill[]
  tips: Tip[]
  heroRelations: HeroRelation[]
  learnVideos: LearnVideo[]
  infoPic: string
  createdAt: string
  updatedAt: string
  __v: number
}

interface LearnVideo {
  _id: string
  title: string
  src: string
  pic: string
  createTime: string
  clickCount: string
}

interface HeroRelation {
  _id: string
  title: string
  list: List[]
}

interface List {
  _id: string
  pic: string
  content: string
}

interface Tip {
  _id: string
  title: string
  content: string
}

interface Skill {
  _id: string
  name: string
  pic: string
  info: string
  plusValue: string
}

interface HeroId {
  categories: Category[]
  _id: string
  name: string
  title: string
  heroImg: string
  __v: number
}

interface Category {
  _id: string
  name: string
  parent: string
  __v: number
}

interface Rune {
  buffs: string[]
  _id: string
  name: string
  pic: string
  __v: number
}

interface EquipmentRecs {
  smoothly: Smoothly[]
  hard: Smoothly[]
}

interface Smoothly {
  _id: string
  name: string
  pic: string
  __v: number
}

interface AddPointRec {
  main: Main
  secondary: Main
  summonerSpell: SummonerSpell[]
}

interface SummonerSpell {
  _id: string
  pic: string
  name: string
}

interface Main {
  pic: string
  name: string
}

interface Score {
  difficult: number
  skill: number
  attack: number
  survive: number
}
export { HeroInfo }
