# Arch Development

- Reactjs
- Typescript
- MUI v4

## Project Objective

Improve my software development skills in the areas of:

- Compartmentalization of component concerns
- Responsive design utilizing MUI components
- Utilization of custom theming
- Component testing
- Technical writing
- Error handling / Bug fixing

### Remain Tasks

- Update Typography && Tab types so custom styling can be added to customTheme object
- Centralize all component styles into one main file and export to where they're used in application
- create Layout component including Header - Footer - and pages content
- Remove custom margin component used `Header.tsx` and `PageMenu.tsx`, add into component styling

### Technical Explanations

What situations did you run into and how did you solve them?

- Changing MenuItem && ListItem types to button in the module d.ts files
  -- found idea here => https://github.com/mui/material-ui/issues/33799
- Updating modules to include custom values for the theme object

- Detecting user device type using user agent information
  -- installed `react-useragent` in PagesMenu to detect IOS devices

- Installation of React-Lottie to create picture animations
  -- is there another way to handle animations in MUI/React apps

### Information Resources

What good information did you learn and where did you find it?
