import 'styled-components'

import { defaultTheme } from '../lib/styles/theme'

type Theme = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
