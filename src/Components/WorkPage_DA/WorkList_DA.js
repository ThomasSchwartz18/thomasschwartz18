import NBA_Trends from "../../assets/images/projects/NBA_Trends.png";
import Biodiversity from "../../assets/images/projects/Biodiversity.jpg";

export const projects = [
  {
    image: NBA_Trends,
    name: "NBA Trends",
    tools: "Python, Pandas, Numpy, Seaborn, matplotlib.pyplot, scipy.stats",
    description:
      "In this project, an analysis of National Basketball Association (NBA) data is conducted to explore associations between teams, win-rates, playoff appearances, and more. The dataset, originally sourced from 538's Analysis of the Complete History Of The NBA, includes unmodified data from Basketball Reference and additional variables added by 538 for their own analysis. The project employs Python libraries such as pandas, numpy, scipy.stats, matplotlib, and seaborn for data manipulation, statistical analysis, and visualization. The focus is initially on the 2010 NBA season, comparing the New York Knicks and the Brooklyn Nets in terms of points scored per game. Subsequently, the analysis extends to the 2014 season, showcasing differences in average points scored. The project further explores the relationship between franchises and points scored per game, presenting side-by-side boxplots. Additionally, it investigates the association between game results and locations, employing contingency tables and chi-square statistics. The impact of 538's win probability forecasts on game outcomes is examined through covariance and correlation calculations, followed by the creation of a scatter plot to visualize the relationship between forecasted win probabilities and point differentials.",
    link: "https://thomasschwartz18.github.io/nba_Trends/",
  },
  {
    image: Biodiversity,
    name: "Biodiversity",
    tools: "Python, Pandas, Numpy, matplotlib.pyplot, Seaborn",
    description:
      "The project successfully analyzed biodiversity data, answered key questions, and made data visualizations. Some conclusions include the distribution of conservation status, the likelihood of certain species being endangered, and the significant differences in conservation status among species. The analysis also identified the most prevalent species (bats) and their distribution among parks.",
    link: "https://thomasschwartz18.github.io/Biodiversity/",
  },
];
