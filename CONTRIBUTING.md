# Contribution Guidelines

Thank you for considering contributing to the Bash Prompt Generator.
This document will help you with the first steps.
If anything is unclear, feel free to ask for help or clarification via an [issue](https://github.com/Scriptim/bash-prompt-generator/issues/new?template=question.yml "Ask a question").

## Reporting a Bug or Requesting a Feature

If you found a bug or have an idea for a new feature, please open an [issue](https://github.com/Scriptim/bash-prompt-generator/issues/new "Open a new issue").
The issue templates will guide you through the process.
Please always confirm that the issue you are about to open does not already exist.

## Contributing Code

Before you start working on the code, please open an [issue](https://github.com/Scriptim/bash-prompt-generator/issues/new "Open a new issue") to discuss the bug or feature you want to work on.
This way, you can ensure that your contribution is in line with the project's goals and that you are not working on something that is already in progress.
Otherwise, your pull request might be rejected, and I do not want you to waste your time.
For very minor changes, e.g., fixing a typo, you can skip this step.

When you are ready to contribute, fork the repository, create a branch for your changes, and open a pull request.
If you are not familiar with these steps, refer to this [guide](https://opensource.guide/how-to-contribute/#opening-a-pull-request "How to Contribute to Open Source").
Feel free to open a draft pull request if you need help or feedback early on.
Before finalizing your pull request, make sure to follow the instructions in the pull request template.

### Setup Development Environment

To set up your development environment, you need to have [Node.js](https://nodejs.org/ "Node.js") installed.
After cloning your fork, navigate to the project directory and run `npm install` to install the required dependencies.
You can the run `npm run serve` to start the development server which makes the Bash Prompt Generator available locally.
Any changes you make to the source code should immediately be reflected in the browser.
Before committing your changes, run `npm run lint` to verify the code style.

### Commit Messages

The subject line of your commit message should be capitalized, not exceed 50 characters, not end in punctuation and be written in the imperative mood.
Feel free to include a body to provide more context or explain the reasoning behind your changes.

### Code Review

All contributions will be reviewed before they are merged.
Please be patient since this process might take some time.
The project is currently maintained by a single person, and there is no fixed schedule for reviewing pull requests.
