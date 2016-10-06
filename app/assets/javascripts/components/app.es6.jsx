class App extends React.Component {
  constructor() {
    super();
    this.state = {
      titles: []
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
          <Poster titles={this.state.titles}/>
          <Info titles={this.state.titles}/>
        </section>
        {/* <section id="titles-list">
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
        </section> */}
      </div>
    );
  }

}
