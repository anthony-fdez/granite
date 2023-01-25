export default {
  no_context: `
    Cannot use component outside of '<ThemeProvider />'. 
    Please wrap your application around a '<ThemeProvider />' component
    
    eg:
      <ThemeProvider theme="dark">
        <App /> // The rest of your app goes here
      </ThemeProvider>
    `,
};
