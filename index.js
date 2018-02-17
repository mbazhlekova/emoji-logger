import emoji from "node-emoji";

const emojiLogger = store => next => action => {
  console.log(`${emoji.random().emoji} prev state`, store.getState());
  console.log(`${emoji.random().emoji} action`, action);
  const result = next(action);
  console.log(`${emoji.random().emoji} next state`, store.getState());
  return result;
};

export default emojiLogger;
