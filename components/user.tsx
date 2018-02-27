import * as React from 'react';
import {SFC} from "react";

interface UserProps {
  name: string;
  highlighted: boolean;
  userSelected: () => void;
}

class User extends React.Component<UserProps, {}> {

  shouldComponentUpdate(nextProps: UserProps) {
    return nextProps.name !== this.props.name || nextProps.highlighted !== this.props.highlighted;
  }

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
