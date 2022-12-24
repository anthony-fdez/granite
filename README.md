# Granite. A ReactJS component library

Live Demo: https://anthony-fdez.github.io/granite/

## Getting started

To install and get the project up and running you'll first need a React app

### Create ReactJS App

An easy and fast way to create a new React app is with Vite

Using JavaScript

```
npm create vite@latest my-react-app --template react
```

Using TypeScript

```
npm create vite@latest my-react-app --template react-ts
```

### Install Granite and peer dependencies

```
npm i @granite/core @emotion/react framer-motion
```

## Next up to work on:

- Figure out a nice way to have all the popup components not be rendered all the time on the DOM, but still have the animate nicely
- Fix Theming. Allow the user to have their own colors, as well as setting default stylings for everything that is shared on the app. All this would happen in `<ThemeProvider />` and some external files that handle constants.
- Add an animation for all popover components when they have clickOutside disabled. To let the user know that they can't click outside. Something subtle.

## Components to add:

### Theming

- [x] Theme Provider

### Overlays

- [x] Dialog
- [ ] Drawer
- [x] Modal
- [ ] Tour - https://reactour.vercel.app/
- [ ] ResponsiveMenu - This will be a `<Drawer />` for mobile, and a `<Popover />` for desktop. Both will have a `<Menu />` as children.
- [ ] Tooltip
- [ ] HoverCard - Same as the `Tooltip` but bigger, will have an optional `<HoverCard.Footer />`, `<HoverCard.Header />`, `<HoverCard.Body />
- [x] Loading overlay (backdrop) - This is the full screen spinner
- [ ] Popover
- [ ] Menu & MenuItem - Allow nested menu items, kind of like folders. The menu will be a list under the hood.
- [ ] Image - Just a normal image, but with a prop that would make it into a modal, like `expandable`

### Layout

- [x] Flex
- [x] Center
- [ ] Grid

### Buttons

- [x] Button
- [x] Close Button

### Navigation

- [ ] Tabs
- [ ] Breadcrumbs

### Inputs

- [ ] Text input
- [ ] Password input
- [ ] Number input
- [ ] Phone input - include the flag icon as they type the phone number
- [ ] Checkbox
- [ ] Radio
- [ ] Select (with autocomplete)
- [ ] Switch
- [ ] Text area
- [ ] Segmented control

### Data display

- [ ] Card (Make it clickable and animate when it opens with framer motion layoutId)
- [ ] Badge
- [ ] List - Take inspiration from MUi on the API side and BluepringJS on some looks
- [x] Accordion
- [ ] Avatar
- [ ] Paper - This would be just a div with some box shadow
- [ ] Performance indicator - from red to green, poor to excelent. Also allow for numbers or percent
- [ ] Collapse - Pretty much an isolated `<Accordion />` item. Will also have `<Collapse.Target />` (if not controlled) and `<Collapse.Content />`. The state of the component should be synched with the controlled state of the user.
- [ ] Code - A very simple codeblock with code hightlight (probably going to require Prism)

### Notifications

- [ ] Toast - this toast will be inisialized alongside the themeProvider and will be global.

```jsx
// Usage
<Button onClick={() => Toast.message("Hey")}>Say hey</Button>
```

### Feedback

- [ ] Alert
- [x] Spinner
- Currently only having cicrular spinner, dots is still to be added.
- [ ] Skeleton

### Utils

- [x] ClickAwayListener
- [ ] HoverListener
- [ ] MouseDownListener

### Extra (I don't know how to categorize these)

- [ ] Header - do something like stripes header
- [x] Divider
- [ ] AnimatedText - Put the custom component on my dev site into a component, should have the staggered animation.
- [ ] Reveal - Animate components when they are first visible on the screen
