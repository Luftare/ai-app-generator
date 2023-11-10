# App Generator

It generates apps with OpenAI API.

## Prerequisites

1. Node 18.0+
2. OpenAI API access

## How to setup

1. Create new .env file in the root
2. Paste contents from .example-env and fill missing values
3. Create new specs.json file in the root
4. Paste contents from example-specs.json file and change values to your liking while maintaining the file structure
5. Install dependencies: `npm install`

## How to run

In the root: `node .`

## How does it work?

It generates one or more files and places them in an `<project root>/output/<id>` directory based on the provided specs. You can try to run the app to see if it works as specified!
