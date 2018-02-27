import * as React from 'react';
import {IUser} from "../index";

interface UserProps {
  user: IUser;
  userSelected: (user: IUser) => void;
}

class User extends React.PureComponent<UserProps, {}> {

  render() {
    const { props } = this;
    console.log("ユーザーをレンダリング中:", [props.user.name, props.user.highlighted]);
    return <div>
      <h3
        style={{fontStyle: props.user.highlighted ? 'italic' : 'normal'}}
        onClick={event => {
          props.userSelected(props.user);
        }}
      >
        {props.user.name}
      </h3>
    </div>;
  };
}

export default User;
