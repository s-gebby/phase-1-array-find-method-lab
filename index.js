// code your solution here
const record = [
  { year: "2015", result: "W" },
  { year: "2013", result: "L" },
  { year: "2014", result: "N/A" },
];

function superbowlWin(records) {
  for (let i = 0; i < records.length; i++) {
    if (records[i].result === "W") {
      return records[i].year;
    }
  }
}
