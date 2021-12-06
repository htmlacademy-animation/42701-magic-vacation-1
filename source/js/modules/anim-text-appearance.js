export default () => {
  const elements = document.querySelectorAll(`.anim-text`);

  for (const element of elements) {
    const createWord = (word, id) => word
      .split(``)
      .map((char) => {
        const charContainer = document.createElement(`span`);
        charContainer.classList.add(`anim-text__char`);
        charContainer.style.transitionDelay = Math.round(Math.random() * 300 + id * 300) + `ms`;
        charContainer.append(char);
        return charContainer;
      });

    const elWords = element.textContent
      .trim()
      .split(/(?<=[a-zA-Zа-яА-Я])\s+/g)
      .map((word, id) => {
        const wordContainer = document.createElement(`span`);
        wordContainer.classList.add(`anim-text__word`);
        createWord(word, id).forEach((char) => wordContainer.append(char));
        return wordContainer;
      });

    const result = document.createDocumentFragment();
    elWords.forEach((word) => result.append(word));

    element.innerHTML = ``;
    element.append(result);
  }
};
