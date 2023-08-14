import React, { useState } from 'react';

const App = () => {
  const [state, setState] = useState();

  const testRequestPost = (e) => {
    e.preventDefault();
    console.log('preventDefault');
  }

  return (
    <div>
      <form action="/" method="post" name="test-form" onSubmit={testRequestPost}>
        <input type="text" placeholder="sample" />
        <input type="password" placeholder="비밀번호를 입력해주세요." />
        <button type="submit">Submit</button>
      </form>  
    </div>
  );
};

export default App;