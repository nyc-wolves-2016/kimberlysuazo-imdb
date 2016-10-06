class App extends React.Component {
  constructor() {
    super();
    this.state = {
      titles: []
    };

  }
  render(){
    return(
      <div>
        <header id="top-nav">
          <div id="brand">Baby IMDB API</div>
          <form id="search-form">
            <input id="search" type="text" name="query" />
          </form>
        </header>
        <section className="container">
          {/* <ComposeTweet onCreateTweet={this.handleCreateTweet} /> */}
          {/* tweets={this.state.titles.poster} */}
          <Poster  />
          <Info />
        </section>
        <section id="titles-list">
          <h3>Popular</h3>
          <ul>
            <li>filler</li>
            <li>filler</li>
            <li>filler</li>
            <li>filler</li>
            <li>filler</li>
            <li>filler</li>
            <li>filler</li>
            <li>filler</li>
            <li>filler</li>
            <li>filler</li>
          </ul>
        </section>
      </div>
    );
  }

}
