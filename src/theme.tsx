import React, {PropsWithChildren} from "react";
import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        headerBg: '#4B3B7A',
        lightText: `#fff`,
        secondaryBg: `#F2F2F3`,
        primaryBg: `#fff`,
        darkText: `#222224`,
        darkIcons: `#222224`,
        accent: `#7635AB`,
        darkBg: `#43245C`,
        systemRed: `#FF0000`,
        systemYellow: `#FFC700`,

        border: `#D6D8E0`,
    },
    fonts: ["sans-serif", "Roboto"],
    fontSizes: {
        small: "1em",
        medium: "2em",
        large: "3em"
    }
};



const Theme:React.FC<PropsWithChildren> = ({ children }) => {
    return(
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )


    };

export default Theme;
