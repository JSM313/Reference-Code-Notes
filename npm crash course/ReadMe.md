## NPM CRASH COURSE...

> To initialize package.json()...

`npm init`

- To avoid conditioning questions like description, author etc...

`npm init --yes`

- To change the default configurations...

> To change the author name...

`npm config set init-author-name "Jasmeet Singh"`

`npm set init-license "MIT"`

and then run `npm init --yes `

> To get config in npm...
> `npm config get init-author-name`

> To delete config...
> `npm config delete init-license`

> To install dependency...

> `npm install lodash --save`
>
> ### `--save` is extremely important as it creates the pointer of the module in package.json() file

> To install a module as a dev dependency...
> `npm install gulp gullp-sass --save-dev`

### Difference between dependency and a dev dependency...

> The difference between these two, is that devDependencies are modules which are only required during development, while dependencies are modules which are also required at runtime. To save a dependency as a devDependency on installation we need to do an npm install --save-dev, instead of just an npm install --save.

> ### To remove a dependency/dev dependency...

```bash
npm uninstall gulp gulp--sass --save-dev


# OR...


npm remove gulp --save-dev
```

> ### GLOBAL MODULES

```bash

### INSTALL CERTAIN VERSIONS

npm install lodash@4.17.3 --save

### UPDATE

npm update lodash --save

### INSTALL GLOBAL MODULE

npm install -g nodemon
npm install -g live-server

# RUN NODEMON
nodemon

# FIND ROOT FOLDER
npm root -g

# REMOVE GLOBAL PACKAGES
npm remove -g nodemon
```

```bash

# LISTING PACKAGES
npm list
npm list --depth 0
npm list --depth 1

# INSTALL LIVE-SERVER LOCALLY
npm install live-server --save-dev


```

### NPM SCRIPTS

```json
# NPM SCRIPT
"scripts": {
    "start": "node index.js",
    "dev": "live-server"
  },
```

> To run the scripts...

```bash
npm start  // To run node index.js

npm run dev // To run live server
```
