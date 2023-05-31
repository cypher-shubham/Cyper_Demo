const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "4vx33z",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});