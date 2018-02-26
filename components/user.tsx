import * as React from 'react';

interface UserProps {
  name: string;
  highlighted: boolean;
  userSelected: () => void;
}

class User extends React.Component<UserProps, {}> {
  render(): JSX.Element {
    const { name, highlighted, userSelected } = this.props;
    // console.log(`ユーザーをレンダリング中: ${}`)
    console.log("ユーザーをレンダリング中:", [name, highlighted]);
    return <div>
      <h3
        style={{ fontStyle: highlighted ? 'italic': 'normal'}}
        onClick={event => {
          userSelected();
        }}
        >
        {name}
      </h3>
    </div>;
  }
}

export default User;
