const devConfig = {
  host: "localhost",
  database: "ts",
  user: "root",
  password: "123456",
};
const prodConfig = {
  host: "",
  database: "",
  port: 3306,
};

module.exports =
  process.env.NODE_ENV === "development" ? devConfig : prodConfig;
