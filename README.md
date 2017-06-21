# kexpress boiler plate for express API projects
---

### Usage

In the terminal type

```bash
 $ git clone https://github.com/Paradzayi/kexpress.git my-api-app-folder
 $ cd my-api-app-folder
 $ npm install
```

  Add a remote that points to your own repo.

```sh
$ git remote remove origin
$ git remote add origin "http://the-name-of-your-repo's-host.com/repo.git"
```
### Environment Variables
Place these variables in the ```.env``` file. Use ```.env.default``` for guidance.

```
  # the port number, e.g 3000
  PORT=

  # a random seqence for use in signing jsonWebTokens, 
  e.g => JWT_SECRET=fbh847ryw4r578t234t296r
  JWT_SECRET=

  # database connection to use when NODE_ENV==development,
  e.g. => DEV_DATABASE_URL=postgres://localhost:5432/database_name
  DEV_DATABASE_URL=

  # database connection to use when NODE_ENV==test,
  e.g. =>TEST_DATABASE_URL=postgres://localhost:5432/database_name_test
  TEST_DATABASE_URL=
  
  #The environment for node. Should have values
   development | test | production
  NODE_ENV=
```

You are good to go. Add/remove functionality as you wish, this is just a boilerplate.

Hope its useful.