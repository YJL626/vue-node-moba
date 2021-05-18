import { resolve } from 'path'
/* eslint-disable @typescript-eslint/no-var-requires */
import { basename } from 'path'
import { anyObject } from '../type'
import { getDirFilesPath } from './getDirFilesPath'

const getDirModules = (
  path: string,
  option?: {
    excludes?: Array<RegExp>
    includes?: Array<RegExp>
    deep: boolean
    completeModule?: boolean
  }
): unknown[] => {
  //筛选一下忽略的数组
  const {
    deep = false,
    excludes = [],
    includes = [/\.[t,j]s$/],
    completeModule = false,
  } = option || {}
  let filePathArr: string[] = getDirFilesPath(path, { deep })
  const result: unknown[] = []
  filePathArr.filter((filePath) => includes.some((reg) => reg.test(filePath)))
  if (excludes.length) {
    //匹配到的则移除
    filePathArr = filePathArr.filter(
      (filePath) =>
        excludes.some((reg) => reg.test(basename(filePath))) === false
    )
  }
  //根据文件名去读取module，

  filePathArr.forEach((filePath) => {
    try {
      const module: anyObject = require(filePath)
      if (completeModule) {
        result.push(module)
      } else {
        result.push(...Object.values(module))
      }
    } catch {
      null
    }
  })
  return result
}

export { getDirModules }
