import React, { useState } from "react";

function Form() {
  const [username, setUserName] = useState("");
  const [comments, setComments] = useState("");
  const [topic, setTopic] = useState("");

  function handleUsernameChange(e) {
    setUserName(e.target.value);
    console.log(username);
  }

  function handleCommentsChage(e) {
    setComments(e.target.value);
  }

  function handleTopicChange(e) {
    setTopic(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`${username} ${comments} ${topic} `);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label>Comments</label>
          <textarea
            value={comments}
            placeholder="type your comments..."
            onChange={handleCommentsChage}
          ></textarea>
        </div>
        <div>
          <label>Topic</label>
          <select value={topic} onChange={handleTopicChange}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
