function formatDate(userDate) {
  // format from M/D/YYYY to YYYYMMDD
  let nD = new Date(userDate);
  let month = ("0" + (nD.getMonth() + 1)).slice(-2);
  let day = ("0" + nD.getDate()).slice(-2);
  return `${nD.getFullYear()}${month}${day}`;
}

console.log(formatDate("12/31/2014"));
