function extractFile(path) {
  let pathParts = path.split('\\');
  let file = pathParts.pop();

  let lastDotIndex = file.lastIndexOf('.');

  let fileName = file.substring(0, lastDotIndex);
  let fileExtension = file.substring(lastDotIndex + 1);

  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${fileExtension}`);
}

extractFile('C:\\Internal\\training-internal\\Template.pptx');