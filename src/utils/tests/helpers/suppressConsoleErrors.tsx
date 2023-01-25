const suppressConsoleError = () => {
  return {
    suppress: () => jest.spyOn(console, "error").mockImplementation(() => {}),
    resume: () => jest.spyOn(console, "error").mockRestore(),
  };
};

export default suppressConsoleError;
