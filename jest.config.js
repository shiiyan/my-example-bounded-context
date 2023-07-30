/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "^@collaboration/(.*)$": "<rootDir>/boundedContexts/collaboration/$1",
    "^@iam/(.*)$": "<rootDir>/boundedContexts/iam/$1",
    "^@common/(.*)$": "<rootDir>/boundedContexts/common/$1",
  },
};
