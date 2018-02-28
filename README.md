# 元ネタ
ステートレスなコンポーネントによるReactのパフォーマンス最適化  
https://www.webprofessional.jp/optimizing-react-performance-stateless-components/

# 試した所感

- 何も考えずに実装してると、知らずに遅くなっている
  - その理由は、意図せず大量の re-render が走っているため
- shouldComponentUpdate でやるのは、大抵の場合はツライ
- PureComponent は単に使っただけでは効果はでない
  - インライン関数の除去
  - クロージャ部の調整
  - 書き方によっては更新してほしいのに更新されなくなるケースもあり、ハマりやすい
- recompose を使う
  - pure は全プロパティを比較するので、意図しない re-render がまだ起こる
    - 今回の場合、fetch でのデータ取得では name, highlighted は変わらないのに re-render してしまう
  - onlyUpdateForKeys なら個別にキーを指定して制御できる
  - インライン関数やクロージャ部の調整も不要
- ディスカッションではメモ化に触れられているが、具体的にどういうコードになるのかはよく分からない
