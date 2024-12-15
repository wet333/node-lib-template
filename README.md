# Your Node.js Library

This is a template repository for building Node.js backend libraries. It comes with testing, linting, formatting, and
GitHub Actions workflows to help you quickly bootstrap a new library project and publish it to npm.

## Getting Started

1. Click "Use this template" on GitHub to create a new repository from this template.
2. Update `package.json` fields like name, version, and description.
3. Install dependencies with `npm install`.
4. Write your code in `src/` and add tests in `test/`.
5. Run `npm test`, `npm run lint`, and `npm run format` as needed.

## Updating Versions

To manage the version of the project using npm's built-in versioning system, follow these steps:

1. Determine the type of update you need:

    - **Patch** (e.g., `1.0.0` to `1.0.1`): Use this for bug fixes or minor changes that don’t add features.
    - **Minor** (e.g., `1.0.0` to `1.1.0`): Use this for adding new features that don’t break existing functionality.
    - **Major** (e.g., `1.0.0` to `2.0.0`): Use this for changes that break compatibility with previous versions.


2. Run the appropriate command:

    ```bash
    npm version patch   # For a patch update
    npm version minor   # For a minor update
    npm version major   # For a major update
    ```

3. Push the changes and tags to GitHub:

    ```bash
    git push --follow-tags
    ```

4. The GitHub Actions workflow will handle publishing the new version to npm if all checks pass.

## Publishing

Set the `NPM_TOKEN` secret in your repository’s settings. When you create a new release, GitHub Actions will run
`npm publish` automatically if all checks pass.

## License

MIT
