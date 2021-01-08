export const required = value => {
  if(value) return undefined;
  return "Field required";
}

export const maxLengthCreator = (maxLength) => (value) => {
  if(value && value.length > maxLength) return `Max length ${maxLength} symbols`;
  return undefined;
}

export const minLengthCreator = (minLength) => (value) => {
  if(value && value.length < minLength) return `Min length ${minLength} symbols`;
  return undefined;
}