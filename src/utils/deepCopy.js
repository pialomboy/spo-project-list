const deepCopy = x => (
    JSON.parse(JSON.stringify(x))
);

export default deepCopy;