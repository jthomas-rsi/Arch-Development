import { CSSProperties } from 'react';
import {createTheme } from '@material-ui/core/styles';

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

  //TODO figure out how to add custom typography values to the theme
//   declare module '@material-ui/core/styles/createTypography' {
//     interface Typography {
//         tab:{
//             fontFamily: string,
//             textTransform: string,
//             fontWeight: number,
//             fontSize: string
//         }
//     }
    
//   }


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
    typography: {

    },
});

export default customTheme;