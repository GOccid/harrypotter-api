import mongoose from "mongoose";
const Schema = mongoose.Schema;

let character = new Schema({
  _id: {type: string},
  type: {type: string},
  name: {type: string, required: true },
  role: {type: string},
  house: {type: string},
  school: {type: string},
  ministryOfMagic: {type: Boolean},
  orderOfThePhoenix: {type: Boolean},
  dumArmy: {type: Boolean},
  deathEater: {type: Boolean},
  bloodStatus: { type: string},
  species: {type: string}
})

export default mongoose.model("characters", Character)