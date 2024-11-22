import exp from "constants";

export const siteURL = "https://www.saucedemo.com/";

export const users = [
  { username: "standard_user", password: "secret_sauce" },
  { username: "problem_user", password: "secret_sauce" },
  { username: "performance_glitch_user", password: "secret_sauce" },
  { username: "error_user", password: "secret_sauce" },
  { username: "visual_user", password: "secret_sauce" },
];

export const negativeUsers = [
  {
    username: "standard_user",
    password: "59559",
    Message:
      "Epic sadface: Username and password do not match any user in this service",
  },
  {
    username: "standard_users",
    password: "secret_sauce",
    Message:
      "Epic sadface: Username and password do not match any user in this service",
  },
  {
    username: "standard_users",
    password: "fdhfhdufud",
    Message:
      "Epic sadface: Username and password do not match any user in this service",
  },
  {
    username: "",
    password: "secret_sauce",
    Message: "Epic sadface: Username is required",
  },
  {
    username: "error_user",
    password: "",
    Message: "Epic sadface: Password is required",
  },
  { username: "", password: "", Message: "Epic sadface: Username is required" },
  {
    username: "locked_out_user",
    password: "secret_sauce",
    Message: "Epic sadface: Sorry, this user has been locked out.",
  },
];
