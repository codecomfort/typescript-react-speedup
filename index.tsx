import * as React from "react";
import * as ReactDOM from "react-dom";
import User from "./components/user";

interface IUser {
  name: string;
  highlighted: boolean;
}

interface AppProps {
}

interface AppState {
  otherData: any;
  users: IUser[];
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      otherData: null,
      users: [
        {name: 'Hiro', highlighted: false},
        {name: 'Kazu', highlighted: true}
      ],
    };
  }

  // なぜか記事の通りに書くと例外になるので、リンク先の CodeSandbox の書き方にする。
  // 記事(および元記事(英語))とリンク先でコードが違うのも謎だが
  componentDidMount() {
    fetch('https://api.github.com/')
      .then(r => r.json())
      .then(whatever => {
        this.setState({otherData: whatever});
      });
  }

  toggleUserHighlight = (name: string) => {
    this.setState(prevState => ({
      users: prevState.users.map(u => {
        if (u.name === name) {
          u.highlighted = !u.highlighted;
        }
        return u;
      }),
    }));
  }


  render() {
    return <div>
      <h1>Users</h1>
      {
        this.state.users.map(u => {
          return <User
            key={u.name}
            name={u.name}
            highlighted={u.highlighted}
            userSelected={this.toggleUserHighlight}
          />;
        })
      }
    </div>;
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById("root")
);