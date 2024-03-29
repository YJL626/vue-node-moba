const noop = ((...arg: unknown[]): void => undefined) as unknown
const hasOwnProperty = (
  target: Record<string | number | symbol, unknown> | Array<unknown>,
  property: string | number | symbol
): boolean => {
  return Object.prototype.hasOwnProperty.call(target, property)
}
export { noop, hasOwnProperty }
