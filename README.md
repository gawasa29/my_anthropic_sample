# MY ANTHROPIC SAMPLE (Typscript)

このプロジェクトは anthropic の勉強用に作成したアプリです。

## How To Create The Sample

```bash

# Navigate into sample directory
mkdir my_anthropic_sample

# Navigate into sample directory
cd my_anthropic_sample

# npm initialize
npm init -yes

# install TypeScript and Node
npm install --save-dev typescript @types/node

# use local TypeScript for initialize
npx tsc --init

# create src directory
mkdir src

# create index file
touch index.ts

```

## Run The Sample

```bash

# Navigate into sample directory
cd my_anthropic_sample

# Install dependencies
npm install

# Navigate into sample directory
cd src

# Run TypeScript without compiling
npx ts-node index.ts

```
