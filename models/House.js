import mongoose from "mongoose";
const Schema = mongoose.Schema;

let House = new Schema({
  _id: {type: string},
  type: {type: string},
  name: {type: string},
  mascot: {type: string},
  headOfHouse: {type: string},
  houseGhost: {type: string},
  founder: {type: string},
  school: {type: string},
  members: [{type: Schema.Types.ObjectId, ref: "characters"}],
  values:[{type: string}],
  colors: [{type:string}],

})

export default mongoose.model("houses", House);
