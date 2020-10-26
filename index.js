const { DynamoDB, ListTablesCommand } = require("@aws-sdk/client-dynamodb");

const listTables = async () => {
  try {
    const dynamodb = new DynamoDB();

    // example using middleware to add custom header
    dynamodb.middlewareStack.add(
      (next, context) => (args) => {
        args.request.headers["Custom-Header"] = "value";
        return next(args);
      },
      {
        step: "build",
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
