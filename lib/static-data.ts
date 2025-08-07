// Static data to replace Basehub queries
export interface StaticTheme {
  accent: string;
  grayScale: string;
}

export interface StaticLogo {
  dark: {
    url: string;
    alt: string | null;
    width: number;
    height: number;
    aspectRatio: string;
    blurDataURL: string;
  };
  light: {
    url: string;
    alt: string | null;
    width: number;
    height: number;
    aspectRatio: string;
    blurDataURL: string;
  };
}

export interface StaticHeaderLink {
  _id: string;
  _title: string;
  href: string | null;
  sublinks: {
    items: {
      _id: string;
      _title: string;
      link: {
        text?: string;
        page?: {
          pathname: string;
          _title: string;
        };
      };
    }[];
  };
}

export interface StaticButton {
  _id: string;
  label: string;
  href: string;
  type: string;
  icon?: string;
}

export interface StaticHeader {
  navbar: {
    items: StaticHeaderLink[];
  };
  rightCtas: {
    items: StaticButton[];
  };
}

export interface StaticNewsletter {
  title: string;
  description: string;
  placeholder: string;
  buttonText: string;
  submissions: {
    ingestKey: string;
    schema: Record<string, any>;
  };
}

export interface StaticFooter {
  newsletter: StaticNewsletter;
  copyright: string;
  navbar: {
    items: {
      _title: string;
      url: string;
    }[];
  };
  socialLinks: {
    _title: string;
    icon: {
      url: string;
    };
    url: string;
  }[];
}

export interface StaticSettings {
  theme: StaticTheme;
  logo: StaticLogo;
  showUseTemplate: boolean;
}

export interface StaticPage {
  _id: string;
  pathname: string;
  _analyticsKey: string;
  sections: any[];
  metadataOverrides?: {
    title?: string;
    description?: string;
  };
}

export interface StaticSite {
  settings: StaticSettings;
  header: StaticHeader;
  footer: StaticFooter;
  pages: {
    items: StaticPage[];
  };
  generalEvents: {
    ingestKey: string;
  };
}

// Default static data
export const defaultStaticData: StaticSite = {
  settings: {
    theme: {
      accent: "blue",
      grayScale: "gray",
    },
    logo: {
      dark: {
        url: "/placeholder-logo.svg",
        alt: "Logo",
        width: 120,
        height: 40,
        aspectRatio: "3",
        blurDataURL: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjMDAwIi8+Cjx0ZXh0IHg9IjYwIiB5PSIyNSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TG9nbzwvdGV4dD4KPC9zdmc+",
      },
      light: {
        url: "/placeholder-logo.svg",
        alt: "Logo",
        width: 120,
        height: 40,
        aspectRatio: "3",
        blurDataURL: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjMDAwIi8+Cjx0ZXh0IHg9IjYwIiB5PSIyNSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TG9nbzwvdGV4dD4KPC9zdmc+",
      },
    },
    showUseTemplate: false,
  },
  header: {
    navbar: {
      items: [
        {
          _id: "1",
          _title: "Home",
          href: "/",
          sublinks: {
            items: [],
          },
        },
        {
          _id: "2",
          _title: "Features",
          href: "/features",
          sublinks: {
            items: [],
          },
        },
        {
          _id: "3",
          _title: "Pricing",
          href: "/pricing",
          sublinks: {
            items: [],
          },
        },
        {
          _id: "4",
          _title: "About",
          href: "/about",
          sublinks: {
            items: [],
          },
        },
      ],
    },
    rightCtas: {
      items: [
        {
          _id: "cta-1",
          label: "Get Started",
          href: "/signup",
          type: "primary",
        },
      ],
    },
  },
  footer: {
    newsletter: {
      title: "Stay updated",
      description: "Get the latest updates and news.",
      placeholder: "Enter your email",
      buttonText: "Subscribe",
      submissions: {
        ingestKey: "newsletter_submission",
        schema: {},
      },
    },
    copyright: "© 2024 Your Company. All rights reserved.",
    navbar: {
      items: [
        { _title: "Privacy", url: "/privacy" },
        { _title: "Terms", url: "/terms" },
        { _title: "Contact", url: "/contact" },
      ],
    },
    socialLinks: [
      {
        _title: "Twitter",
        icon: { url: "/placeholder.svg" },
        url: "https://twitter.com",
      },
      {
        _title: "GitHub",
        icon: { url: "/placeholder.svg" },
        url: "https://github.com",
      },
    ],
  },
  pages: {
    items: [
      {
        _id: "home",
        pathname: "/",
        _analyticsKey: "home",
        sections: [],
        metadataOverrides: {
          title: "Home",
          description: "Welcome to our website",
        },
      },
    ],
  },
  generalEvents: {
    ingestKey: "default",
  },
}; 