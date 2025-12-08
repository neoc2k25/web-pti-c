export const moveButton = (cb: Function) => {
  const randomX = Math.random() * 200 - 160; // -160 → 160 px
  const randomY = Math.random() * 200 - 160;

  cb({ x: randomX, y: randomY });
};
