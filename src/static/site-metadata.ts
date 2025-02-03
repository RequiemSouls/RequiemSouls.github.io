interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Riding Page',
  siteUrl: 'https://www.code4what.com/run',
  logo: 'https://dgalywyr863hv.cloudfront.net/pictures/strava_o_auth/applications/143901/34589567/2/large.jpg',
  description: 'Ride to the hell',
  navLinks: [
    {
      name: 'Github',
      url: 'https://github.com/requiemsouls',
    },
  ],
};

export default data;
