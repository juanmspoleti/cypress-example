/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
const fs = require("fs-extra");
const path = require("path");
const cucumber = require("cypress-cucumber-preprocessor").default;
let percyHealthCheck = require("@percy/cypress/task");

module.exports = (on, config) => {
  on("file:preprocessor", cucumber());
  on("task", percyHealthCheck);
  on("before:browser:launch", (browser = {}, args) => {
    if (browser.name === "chrome") {
      //args.push("--start-fullscreen");
      //NOT SUPPORTED INCOGNITO
      //args.push("--incognito");
      return args;
    }
    if (browser.name === "electron") {
      args["fullscreen"] = false;
      return args;
    }
  });

  function processConfigName(on, config) {
    const file = config.env.name || "default";
    return getConfigFile(file).then(function (file) {
      return file;
    });
  }

  function getConfigFile(file) {
    const pathToConfigFile = path.resolve("cypress", "config", `${file}.json`);
    return fs.readJson(pathToConfigFile);
  }
  return processConfigName(on, config);
};
