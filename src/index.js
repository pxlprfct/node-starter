const message = `Hello, world!`;

const cat = () => `🐱`;

const dog = (input) => {
  if (input === 'standing') {
    return `🐕`;
  }

  return `🐶`;
};

dog('input');

module.exports = {
  message,
  cat,
};
