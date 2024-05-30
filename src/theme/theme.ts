/* theme.ts */
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    fonts: {
        heading: '--font-fauna',
        body: '--font-fauna',
    },
    styles: {
        global: {
            body: {
                bg: "black",
                color: "white",
            }
        }
    },
    colors: {
        purple: {
            "500": '#BA57CA'
        },
        blue: {
            "500": '#4861B7'
        }
    }
});