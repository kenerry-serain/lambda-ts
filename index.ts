import { APIGatewayEvent } from "aws-lambda";

export const handler = async (event: APIGatewayEvent) => {
    // TODO implement
    const response = {
      statusCode: 200,
      body: JSON.stringify('Hello from Lambda 2!'),
    };
    return response;
  };
  