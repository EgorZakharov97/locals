export const validateString = (val) => {
  if(typeof val !== 'string')
    return "Name must be a string";
  else
    return true;
}

// The problem is here!!!!!!!