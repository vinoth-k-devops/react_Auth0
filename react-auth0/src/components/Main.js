import React from 'react';

function Main(props) {
  return (
    <div className="App">
      Do you want to see the secret area? <a href='/secret'>Click Here..!</a>

      <div>
            <hr/>
                Please login...
            <hr/>
            <button onClick={props.user.auth.login}>LOGIN</button>
      </div>
    </div>

  );
}

export default Main;
