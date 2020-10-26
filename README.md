# aws-javascript-sdk-v3-playground

learn AWS JavaScript SDK v3

* [`index.js`](index.js)
* [`index.test.js`](index.test.js)

---

## New Features

### v3 Commands

>  commands for each AWS Service package to enable you to perform operations for that AWS Service. After you install an AWS Service, you can browse the available commands in your project's node-modules/@aws-sdk/client-PACKAGE_NAME/commands folder

### middleware stack

> can use a new middleware stack to control the lifecycle of an operation call

> Each middleware stage in the stack calls the next middleware stage after making any changes to the request object. This also makes debugging issues in the stack much easier, because you can see exactly which middleware stages were called leading up to the error.

---

## Running

```sh
# run tests that exercise new features
npm run test -- --watch
```

## Resources

* [aws/aws-sdk-js-v3](https://github.com/aws/aws-sdk-js-v3)
* [AWS SDK for JavaScript | Developer Guide for SDK Version 3](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/welcome.html)
* [Modular AWS SDK for JavaScript – Release Candidate](https://aws.amazon.com/blogs/developer/modular-aws-sdk-for-javascript-release-candidate/)