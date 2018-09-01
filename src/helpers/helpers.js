export const capitalize = string => {
  if (typeof string === 'string') {
    return string[0].toUpperCase() + string.split('').slice(1).join('');
  }
};

