import { createTheme } from '@material-ui/core/styles';
import { TypographyOptions } from '@material-ui/core/styles/createTypography';

//custom color codes
const archBlue = "#0B72B9";
const archOrange = "#FFBA60";

// this declaration is needed for the TS implementation of a MUI custom palette colors
declare module '@material-ui/core/styles/createPalette' {
    interface CommonColors {
      blue?: string;
      orange?: string;
    }
  }


const customTheme = createTheme({
    palette:{
        common:{
            blue:`${archBlue}`,
            orange:`${archOrange}`,
        },
        primary:{
            main:`${archBlue}`
        },
        secondary:{
            main:`${archOrange}`
        }
    },
    typography:{
        h3:{
        fontWeight:300
        }
    },
});

export default customTheme;