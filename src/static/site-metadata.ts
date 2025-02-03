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
  logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTtc69JxHNcmN1ETpMUX4dozAgAN6iPjWalQ&usqp=CAU',
  description: 'Ride to the hell',
  navLinks: [
    {
      name: 'Github',
      url: 'https://github.com/requiemsouls',
    },
  ],
};

export default data;
