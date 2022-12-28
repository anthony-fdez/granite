const suppressConsoleError = () => {
  return jest.spyOn(console, "error").mockImplementation(() => {}); // Silence errors, they are expected
};

export default suppressConsoleError;
