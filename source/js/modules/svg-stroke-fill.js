export default () => {
  const BITE_LENGTH = 220;
  const DURATION = (13 / 30).toFixed(3) + `s`;

  document.body.addEventListener(`screenChanged`, ({detail}) => {
    const {screenName, screenElement} = detail;

    if (!screenName.startsWith(`result`)) {
      return;
    }

    Array.from(screenElement.querySelectorAll(`.result__title svg path`))
      .map((el) => {
        const pathLength = Math.ceil(el.getTotalLength());

        const animateTag = document.createElementNS(`http://www.w3.org/2000/svg`, `animate`);
        animateTag.setAttribute(`dur`, DURATION);
        animateTag.setAttribute(`attributeName`, `stroke-dasharray`);
        animateTag.setAttribute(`fill`, `freeze`);

        if (pathLength < BITE_LENGTH) {
          animateTag.setAttribute(`values`, `0,${pathLength};${pathLength},0`);
        } else {
          const piecesNumber = Math.ceil(pathLength / BITE_LENGTH);
          const pieceLength = Math.round(pathLength / piecesNumber);
          const values = `${(`0,${pieceLength} `).repeat(piecesNumber)}; ${(pieceLength + `,0 `).repeat(piecesNumber)}`;
          animateTag.setAttribute(`values`, values);
        }

        el.append(animateTag);
        animateTag.beginElement();
      });
  });
};
