# Component library

## Next up to work on:
- Fix theming. Allow the user to have their own colors, as well as setting default stylings for everything that is shared on the app. All this would happen in `<ThemeProvider />` and some external files that handle constants.


## Components to add:

There is a lot of things to do in regards to the colors. There is currently only two colors.

### Theming

- [x] Theme Provider

### Overlays

- [x] Dialog
- [ ] Drawer
- [x] Modal
- [ ] ResponsiveMenu - This will be a `<Drawer />` for mobile, and a `<Popover />` for desktop. Both will have a `<Menu />` as children.
- [ ] Tooltip
- [x] Loading overlay (backdrop) - This is the full screen spinner
- [ ] Popover

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
- [ ] Menu & MenuItem - Allow nested menu items, kind of like folders

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
- [x] Accordion
- [ ] Avatar
- [ ] Badge
- [ ] Paper - This would be just a div with some box shadow
- [ ] Performance indicator - from red to green, poor to excelent. Also allow for numbers or percent 

### Notifications

- [ ] Toast - this toast will be inisialized alongside the themeProvider and will be global.

```jsx
  // Usage
  <Button onClick={() => Toast.message("Hey")}>Say hey</Button>
```

### Feedback

- [ ] Alert
- [x] Spinner
- [ ] Skeleton

### Utils

- [x] Click away listener

### Extra (I don't know how to categorize these)

- [ ] Header - do something like stripes header
- [x] Divider
