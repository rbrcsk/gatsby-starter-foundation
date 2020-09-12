import type { GatsbyPlugin } from "../../../types"
import { linterPlugins } from "./linters"
import { miscPlugins } from "./misc"
import { sourcePlugins } from "./sources"
import { transformerPlugins } from "./transformers"
import { stylePlugins } from "./style"

export const plugins: GatsbyPlugin[] = [
  ...stylePlugins,
  ...sourcePlugins,
  ...transformerPlugins,
  ...miscPlugins,
]

export { linterPlugins }
