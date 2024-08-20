import React from 'react';

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  let displayEmojis;
  let emojiType;
  
  if (minutes < 30) {
    emojiType = "☕️";
    displayEmojis = Math.ceil(minutes / 5);
  } else {
    emojiType = "🍱";
    displayEmojis = Math.ceil(minutes / 10);
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <p>
        {emojiType.repeat(displayEmojis)} {minutes} min read
      </p>
    </article>
  );
}

export default Article;
