import db from "../db/connection.js";
import House from "../models/House.js"
import Character from "../models/characters.js";
import houses from "./houses.json" assert {type: "json"};
import characters from "./characters.json" assert {type: "json"};

const insertData = async () => {
  await db.dropDatabase()
  await character.insertMany(characters)
  await House.insertMany(houses);
  db.close();
}

insertData();

