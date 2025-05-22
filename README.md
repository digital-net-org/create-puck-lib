<h1>
    <img width="300" src="https://raw.githubusercontent.com/digital-net-org/.github/refs/heads/master/assets/logo_v2025.svg">
</h1>
<div justify="center">
    <a href="https://dotnet.microsoft.com/en-us/"><img src="https://img.shields.io/badge/Typescript-blue.svg"></a>
</div>
<p>
    <em>@digital-net-org/create-puck-lib</em>
</p>
<p>
    Script that provides a project for building Puck a components librairy.
</p>

## Install create-puck-lib
Install the script globally
```
npm i -g github:digital-net-org/create-puck-lib
```

## Usage
Use the following command to create a new puck lib template
```
npx create-puck-lib --path "path/to/project" --name "name-of-the-project"
```

## Warning
Be aware that you need to export a function that takes `React` as parameter. The library wont load if you don't.