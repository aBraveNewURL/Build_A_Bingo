const { Schema, model } = require("mongoose");

// does 'this' refer to the document or the schema?
function squaresValidator(squares) {
  if (squares.length < 25) {
    return false;
  }
  for (let i = 0; i < squares.length; i++) {
    for (let j = i + 1; j < squares.length; j++) {
      if (
        squares[j].text === squares[i].text ||
        squares[j].location === squares[i].location
      ) {
        return false;
      }
    }
  }
  return true;
}

// subdocument schema to be used inside bingoCardSchema
const squareSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
    match: [/^[a-e][1-5]$/, "Invalid format for square address"],
  },
  status: {
    type: Boolean,
  },
});

const bingoCardSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  parentList: {
    type: Schema.Types.ObjectId,
    ref: "BingoList",
  },
  squares: {
    type: [squareSchema],
    required: true,
    validate: squaresValidator
  },
  status: {
    type: Boolean,
  },
});

const BingoCard = model("BingoCard", bingoCardSchema);

module.exports = BingoCard;
