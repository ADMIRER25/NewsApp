// import React, { Component } from "react";
import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  //   articles = [
  //     {
  //       source: {
  //         id: "bbc-news",
  //         name: "BBC News",
  //       },
  //       author: "BBC News",
  //       title:
  //         "Authorities return body of Alexei Navalny to mother 8 days after death",
  //       description:
  //         "Alexei Navalny's mother has been demanding the return of his body since his death in a Russian prison.",
  //       url: "https://www.bbc.co.uk/news/world-europe-68393412",
  //       urlToImage:
  //         "https://ichef.bbci.co.uk/news/1024/branded_news/CF0B/production/_132730035_d6ac7bcfef609aa1df26bf7c92c4eb6a394f45e9.jpg",
  //       publishedAt: "2024-02-25T08:22:17.8256306Z",
  //       content:
  //         "The body of leading Russian opposition figure Alexei Navalny has been returned to his mother, his spokeswoman says. \r\nIn a post on X, Kira Yarmysh thanked everybody who had demanded that the authorit… [+2236 chars]",
  //     },
  //     {
  //       source: {
  //         id: "bbc-news",
  //         name: "BBC News",
  //       },
  //       author: "BBC News",
  //       title: "Kim Petras on sexual liberation and fighting TiKTok",
  //       description:
  //         "The pop star talks about her sex-positive EP, and why artists need to take a stand over royalties.",
  //       url: "https://www.bbc.co.uk/news/entertainment-arts-68362810",
  //       urlToImage:
  //         "https://ichef.bbci.co.uk/news/1024/branded_news/14891/production/_132731148_kim-problematique-klein.jpg",
  //       publishedAt: "2024-02-25T08:22:16.3884886Z",
  //       content:
  //         "You probably shouldn't play Kim Petras's new EP to your mum.\r\nTitled Slut Pop Miami, it's an outrageous, sex-positive, club-ready tribute to the joys of carnal pleasure.\r\nReleased on Valentines' Day,… [+7972 chars]",
  //     },
  //     {
  //       source: {
  //         id: "bbc-news",
  //         name: "BBC News",
  //       },
  //       author: "BBC News",
  //       title:
  //         "Oppenheimer: Cillian Murphy film dominates SAG Awards ahead of Oscars",
  //       description:
  //         "Cillian Murphy and Robert Downey Jr won acting prizes, while the film won best ensemble cast.",
  //       url: "https://www.bbc.co.uk/news/entertainment-arts-68395355",
  //       urlToImage:
  //         "https://ichef.bbci.co.uk/news/1024/branded_news/4B17/production/_132732291_crgettyimages-2036678208.jpg",
  //       publishedAt: "2024-02-25T04:52:12.872734Z",
  //       content:
  //         "Oppenheimer continued its dominance of awards season as it scored several major prizes at the Screen Actors Guild (SAG) Awards on Saturday.\r\nChristopher Nolan's film won best film cast, while Cillian… [+8118 chars]",
  //     },
  //     {
  //       source: {
  //         id: "bbc-news",
  //         name: "BBC News",
  //       },
  //       author: "BBC News",
  //       title:
  //         "South Carolina primary: Donald Trump easily defeats Nikki Haley in her home state",
  //       description:
  //         "The former president continues his march towards the Republican nomination with a huge win in his rival's home state.",
  //       url: "https://www.bbc.co.uk/news/world-us-canada-68395414",
  //       urlToImage:
  //         "https://ichef.bbci.co.uk/news/1024/branded_news/88CF/production/_132732053_gettyimages-2036427265.jpg",
  //       publishedAt: "2024-02-25T04:22:11.5131826Z",
  //       content:
  //         "Media caption, Watch: 'Joe, you're fired' - Trump focuses on Biden as Haley fights on\r\nDonald Trump is one step closer to the Republican presidential nomination after a massive win over Nikki Haley i… [+4576 chars]",
  //     },
  //     {
  //       source: {
  //         id: "bbc-news",
  //         name: "BBC News",
  //       },
  //       author: "BBC News",
  //       title: "Margot Robbie and Emma Stone walk SAG Awards red carpet",
  //       description:
  //         "Reese Witherspoon was among the TV and film stars posing for pictures ahead of the ceremony.",
  //       url: "https://www.bbc.co.uk/news/entertainment-arts-68395354",
  //       urlToImage:
  //         "https://ichef.bbci.co.uk/news/1024/branded_news/167DB/production/_132732129_robbindgettyimages-2028792461-1.jpg",
  //       publishedAt: "2024-02-25T01:37:13.2161189Z",
  //       content:
  //         "The event, hosted by the Screen Actors Guild, celebrates the best on-screen performances of the last year.",
  //     },
  //     {
  //       source: {
  //         id: "bbc-news",
  //         name: "BBC News",
  //       },
  //       author: "BBC News",
  //       title: "Japan naked festival: Women join Hadaka Matsuri for first time",
  //       description:
  //         "Women take part despite some in the community suggesting it should remain a men-only event.",
  //       url: "https://www.bbc.co.uk/news/world-asia-68378651",
  //       urlToImage:
  //         "https://ichef.bbci.co.uk/news/1024/branded_news/9044/production/_132723963_ad91dcfc335edad4d2e07a9bad9fcc014fb518190_0_5500_36541000x664.jpg",
  //       publishedAt: "2024-02-25T01:22:17.1071586Z",
  //       content:
  //         "The sea of chanting, nearly-naked men tussle, push and shove towards the shrine. \"Washoi! Washoi!\" they yell - let's go, let's go.\r\nIt is scene that has barely changed in the 1,250 years the Hadaka M… [+5612 chars]",
  //     },
  //     {
  //       source: {
  //         id: "bbc-news",
  //         name: "BBC News",
  //       },
  //       author: "BBC News",
  //       title: "The blind Ukrainian amputee whose wife's voice kept him alive",
  //       description:
  //         "Serhiy suffered catastrophic injuries - including losing both his legs - when an anti-tank mine blew up his vehicle.",
  //       url: "https://www.bbc.co.uk/news/world-europe-68376700",
  //       urlToImage:
  //         "https://ichef.bbci.co.uk/news/1024/branded_news/5143/production/_132730802_serhiyvaleriia4.jpg",
  //       publishedAt: "2024-02-25T00:37:13.7481595Z",
  //       content:
  //         "As Serhiy slowly began to regain consciousness in his hospital bed in Kyiv, he realised he couldn't see, speak, or feel his legs - but he could hear his wife Valeria's voice. Comforted, he lost consc… [+3753 chars]",
  //     },
  //     {
  //       source: {
  //         id: "bbc-news",
  //         name: "BBC News",
  //       },
  //       author: "BBC News",
  //       title:
  //         "Wendy Williams thanks fans for support after dementia and aphasia diagnosis",
  //       description:
  //         'The talk show host says she feels "immense gratitude" for the supportive messages sent to her.',
  //       url: "https://www.bbc.co.uk/news/entertainment-arts-68391330",
  //       urlToImage:
  //         "https://ichef.bbci.co.uk/news/1024/branded_news/5C1E/production/_132728532_gettyimages-1181706364.jpg",
  //       publishedAt: "2024-02-25T00:07:21.4669074Z",
  //       content:
  //         'Former US talk show host Wendy Williams has thanked fans for their support over her dementia and aphasia diagnosis. \r\nWilliams, 59, said their response had been "overwhelming" and she had "immense gr… [+1954 chars]',
  //     },
  //     {
  //       source: {
  //         id: "bbc-news",
  //         name: "BBC News",
  //       },
  //       author: "BBC News",
  //       title: "US and UK carry out fresh strikes on Houthi targets in Yemen",
  //       description:
  //         "The US says the allies targeted 18 sites, including missile storages, drones and radars.",
  //       url: "https://www.bbc.co.uk/news/world-middle-east-68395173",
  //       urlToImage:
  //         "https://ichef.bbci.co.uk/news/1024/branded_news/93B5/production/_132731873_3e88c194a3af0591b45d6d0f0a4a5619cfe269d9-1.jpg",
  //       publishedAt: "2024-02-25T00:07:20.8889264Z",
  //       content:
  //         "Media caption, Watch: Smoke billowing over Yemen's capital, Sanaa\r\nThe Pentagon says US and UK fighter planes have carried out strikes on 18 Houthi sites in Yemen - the fourth such joint operation by… [+2528 chars]",
  //     },
  //     {
  //       source: {
  //         id: "bbc-news",
  //         name: "BBC News",
  //       },
  //       author: "BBC News",
  //       title: "Fossil reveals 240 million year-old 'dragon'",
  //       description:
  //         "A remarkably complete fossil of a bizarre Triassic reptile in unprecedented detail has been found.",
  //       url: "https://www.bbc.co.uk/news/science-environment-68374520",
  //       urlToImage:
  //         "https://ichef.bbci.co.uk/news/1024/branded_news/A0C9/production/_132716114_dinocephalosaurusorientalis.jpg",
  //       publishedAt: "2024-02-25T00:07:11.9602621Z",
  //       content:
  //         'Scientists have revealed a new, remarkably complete fossil - a 16ft (5m)-long aquatic reptile from the Triassic period. \r\nThe creature dates back 240 million years and has been dubbed a "dragon" beca… [+1343 chars]',
  //     },
  //   ];

  // static defaultProps = {
  //   country: "in",
  //   pageSize: 8,
  //   category: "general",
  // };

  // PropTypes = {
  //   country: PropTypes.string,
  //   pageSize: PropTypes.number,
  //   category: PropTypes.string,
  // };

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  // constructor(props){
  //   super(props);
  //   // console.log("inside constructor from news component");
  //   this.state = {
  //     articles: [],
  //     loading: false,
  //     page: 1,
  //     totalResults: 0,
  //   };
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  document.title = `${capitalizeFirstLetter(props.category)}-NewsApp`;

  const updateNews = async () => {
    // console.log(`Inside upDateNews.....${page}`);
    props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    // this.setState({ loading: true });
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(20);
    let parseData = await data.json();
    props.setProgress(40);
    // console.log(parseData);
    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setLoading(false);

    // this.setState({
    //   articles: parseData.articles,
    //   totalResults: parseData.totalResults,
    //   loading: false,
    // });
    props.setProgress(80);
    props.setProgress(100);
  };

  // useEffect(() => {
  //   updateNews();
  // },[have to write dependecies]);

  useEffect(() => {
    updateNews();
  },[]);

  // const componentDidMount = async () => {
  //   console.log("Inside componentDidMount.....");
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;
  //   // this.setState({ loading: true });
  //   // let data = await fetch(url);
  //   // let parseData = await data.json();
  //   // console.log(parseData);
  //   // this.setState({
  //   //   articles: parseData.articles,
  //   //   totalResults: parseData.totalResults,
  //   //   loading: false,
  //   // });
  //   this.updateNews();
  // };

  // const handlePreviousClick = async () => {
  //   console.log("Previous Click");
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${
  //   //   props.country
  //   // }&category=${
  //   //   props.category
  //   // }&apiKey=${props.apiKey}&page=${
  //   //   this.state.page - 1
  //   // } &pageSize=${props.pageSize}`;

  //   // this.setState({ laoding: true });

  //   // let data = await fetch(url);
  //   // let parseData = await data.json();
  //   // // console.log(parseData);

  //   // console.log(`${this.state.page}`);

  //   // this.setState({
  //   //   page: this.state.page - 1,
  //   //   articles: parseData.articles,
  //   //   loading: false,
  //   // });

  //   await this.setState({ page: this.state.page - 1 });
  //   this.updateNews();
  // await setPage(page+1);
  // updateNews();
  // };
  // handleNextClick = async () => {
  //   console.log("Next Click");

  //   // let url = `https://newsapi.org/v2/top-headlines?country=${
  //   //   props.country
  //   // }&category=${
  //   //   props.category
  //   // }&apiKey=${props.apiKey}&page=${
  //   //   this.state.page + 1
  //   // }&pageSize=${props.pageSize}`;

  //   // this.setState({ laoding: true });

  //   // let data = await fetch(url);
  //   // let parseData = await data.json();
  //   // // console.log(parseData);
  //   // // console.log(`${this.state.page}`);
  //   // this.setState({
  //   //   page: this.state.page + 1,
  //   //   articles: parseData.articles,
  //   //   laoding: false,
  //   // });
  //   // await this.setState({ page: this.state.page + 1 });
  //   // await setPage(page+1);
  //   // updateNews();
  // };
  const fetchMoreData = async () => {
    // console.log("fetch more Data called 1");
    // console.log(`before ${this.state.page}`);

    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;

    setPage(page + 1);
    setLoading(true);
    // this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    // console.log(parseData);

    setArticles(articles.concat(parseData.articles));
    setTotalResults(parseData.totalResults);
    // setLoading(false);

    // this.setState({
    //   articles: this.state.articles.concat(parseData.articles),
    //   totalResults: parseData.totalResults,
    //   loading: false,
    //   page: this.state.page + 1,
    // });
    // console.log("fetch more Data called 2");
    // console.log(`After ${this.state.page}`);
  };
  // console.log("Rendering news page...");
  // console.log(`${this.state.page}`);
  return (
    <div className="container my-4">
      <h2 className="text-center" style={{ margin: "70px 0px 25px 0px" }}>
        NewsApp- Top {capitalizeFirstLetter(props.category)} Headlines
      </h2>
      {/* {this.state.loading && <Spinner />} */}
      {/* md-3: if device width is 3 then it will show 3 cols */}
      <InfiniteScroll
    dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col my-2" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 40) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 80)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>

      {/* <div className="container d-flex justify-content-between my-4">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-success"
            onClick={this.handlePreviousClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page ===
              Math.ceil(this.state.totalResults / props.pageSize)
            }
            type="button"
            className="btn btn-success"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
    </div>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;
