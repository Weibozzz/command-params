function getCommandParams () {
  const reg = /^--([^-]+)/;
  const result = {};
  const argv = process.argv.slice(2);
  argv.forEach((s, i) => {
    const tar = s.match(reg);
    const val = argv[i + 1];
    if (tar && val) {
      result[tar[1]] = val;
    }
  });
  return result;
}
export default getCommandParams;
