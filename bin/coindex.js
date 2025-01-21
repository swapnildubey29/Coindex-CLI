#!/usr/bin/env node
const { Command } = require('commander')
const pkg = require('../package.json')

const program = new Command()

program
  .version(pkg.version)
  .command('key', 'Manage API key -- https://nomics.com') // Define a subcommand
  .parse(process.argv)

console.log("Hello from coindex")
