import * as React from 'react';

interface UserProps {
  name: string;
  highlighted: boolean;
  userSelected: () => void;
}

class User extends React.PureComponent<UserProps, {}> {

  render() {
    const { props } = this;
    console.log("ユーザーをレンダリング中:", [props.name, props.highlighted]);
    return <div>
      <h3
        style={{fontStyle: props.highlighted ? 'italic' : 'normal'}}
        onClick={event => {
          props.userSelected();
        }}
      >
        {props.name}
      </h3>
    </div>;
  };
}

export default User;
