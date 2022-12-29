const { Schema, model } = require("mongoose");

function listValidator(list) {
  if (list.length < 24) {
    return false;
  }
  for (let i = 0; i < list.length; i++) {
    for (let j = i + 1; j < list.length; j++) {
      if (list[j] === list[i]) {
        return false;
      }
    }
  }
  return true;
}

const bingoListSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    list: [
      {
        type: String,
        maxLength: 120,
        validate: listValidator(this.list),
        required: true,
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const BingoList = model("BingoList", bingoListSchema);

module.exports = BingoList;
