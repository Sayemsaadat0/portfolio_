const repeatObject = (obj, repeatCount) => {
    return Array.from({ length: repeatCount }, () => ({ ...obj }));
  };
  
  export default repeatObject;