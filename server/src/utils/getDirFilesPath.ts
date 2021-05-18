import { resolve } from 'path'
import { readdirSync } from 'fs'

/**
 * @description: 读取目录下的文件
 * @param {string} path 要读取的文件根路径
 * @param { deep?: true } deep:是否深度读取
 * @return string[]
 */
const getDirFilesPath = (
  path: string,
  option?: { deep?: boolean }
): string[] => {
  const { deep = false } = option || {}
  const result: string[] = []
  const dirents = readdirSync(path, { withFileTypes: true })
  if (deep) {
    dirents.forEach((dirent) => {
      if (dirent.isDirectory()) {
        //递归的读取目录文件
        const files = getDirFilesPath(resolve(path, dirent.name), {
          deep: true,
        })
        result.push(...files)
        return
      }
      if (dirent.isFile()) {
        result.push(resolve(path, dirent.name))
      }
    })
  } else {
    dirents.forEach(
      (dirent) => dirent.isFile() && result.push(resolve(path, dirent.name))
    )
  }
  return result
}
export { getDirFilesPath }
