import * as React from 'react';
import {onlyUpdateForKeys} from 'recompose';
import {SFC} from "react";

interface UserProps {
  name: string;
  highlighted: boolean;
  userSelected: () => void;
}

const User: SFC<UserProps> = (props) => {
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

export default onlyUpdateForKeys<UserProps>(['name', 'highlighted'])(User);
