import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            background: string,
            main: string,
            yellow_main: string,
            second: string,
            gray_100: string,
            white: string,
            blue: string,
        }
    }
}