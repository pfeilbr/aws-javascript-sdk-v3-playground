const { DynamoDB, ListTablesCommand } = require("@aws-sdk/client-dynamodb");

const listTables = async () => {
  try {
    const dynamodb = new DynamoDB();

    const middlewareLogger = (step) => {
      return (next, context) => (args) => {
        console.log(`--step: ${step}--\n`, args);
        return next(args);
      };
    };

    // log every step
    "initialize,serialize,build,finalizeRequest,deserialize"
      .split(",")
      .forEach((step) => {
        dynamodb.middlewareStack.add(middlewareLogger(step), { step });
      });

    // example using middleware to add custom header
    dynamodb.middlewareStack.add(
      (next, context) => (args) => {
        args.request.headers["Custom-Header"] = "value";
        return next(args);
      },
      {
        step: "build", // steps in order: initialize, serialize, build, finalizeRequest, deserialize
      }
    );

    // list tables
    const resp = await dynamodb.send(new ListTablesCommand({}));
    return resp;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

module.exports = {
  listTables,
};
