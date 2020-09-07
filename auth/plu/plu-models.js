const db = require("../../config/dbConfig");

module.exports = {
  getProduce
};

function getProduce() {
  return db
    .select("PLU", "CATEGORY", "COMMODITY", "VARIETY", "SIZE")
    .from("produce");
}
