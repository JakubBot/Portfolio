const isPdfFile = (url) => {
  if (!url) return false;
  return url.toString().toLowerCase().endsWith(".pdf");
};

export default isPdfFile;