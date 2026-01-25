const formatParams = (options) => {
  if (!options || Object.keys(options).length === 0) return "";
  const params = new URLSearchParams(options).toString();
  return `#${params}`;
};

export default formatParams;
