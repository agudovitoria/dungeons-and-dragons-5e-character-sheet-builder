export const signed = n => {
  if(Math.sign(n) < 0) {
    return `-${n}`;
  }
  
  if(Math.sign(n) > 0) {
    return `+${n}`;
  }

  return n;
};
