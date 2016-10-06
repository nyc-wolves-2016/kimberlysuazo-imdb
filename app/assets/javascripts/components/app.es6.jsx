class App extends React.Component {
  constructor() {
    super();
    this.state = {
      titles: [],
      results: []
    };
     this.handleSearchTitle = this.handleSearchTitle.bind(this);
  }

  componentDidMount() {
    $.ajax({
      url: "http://www.omdbapi.com/?t=eternal%20sunshine%20of%20the%20spotless%20mind"
    })
    .done((response) => {
      this.setState({titles: response});
    })
  }

  handleSearchTitle(title){
    this.setState({
      titles: title
    })
  }

  render(){
    return(
      <div>
        <header id="top-nav">
          <Search onSearchTitle= {this.handleSearchTitle}/>
        </header>

        <section className="container">
          <Results />
          <Poster titles={this.state.titles}/>
          <Info titles={this.state.titles}/>
        </section>
      </div>
    );
  }

}
