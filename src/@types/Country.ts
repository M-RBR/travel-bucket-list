export type CountryData = Country[];

export interface Country {
  flags: Flags;
  name: Name;
  independent: boolean;
  currencies: Currencies;
  capital: string[];
  region: string;
  subregion: string;
  languages: {
    [key: string]: string;
  };
  demonyms: Demonyms;
}

export type APIError = {
  error: string;
};

export interface Flags {
  png: string;
  svg: string;
  alt: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName: {
    [key: string]: NativeName;
  };
}

export interface NativeName {
  official: string;
  common: string;
}

export interface Currencies {
  [key: string]: Currency;
}

export interface Currency {
  name: string;
  symbol: string;
}

export interface Demonyms {
  eng: DemonymDetail;
  fra: DemonymDetail;
}

export interface DemonymDetail {
  f: string;
  m: string;
}

export const countries: Country[] = [
  {
    flags: {
      png: "https://flagcdn.com/w320/tg.png",
      svg: "https://flagcdn.com/tg.svg",
      alt: "The flag of Togo is composed of five equal horizontal bands of green alternating with yellow. A red square bearing a five-pointed white star is superimposed in the canton.",
    },
    name: {
      common: "Togo",
      official: "Togolese Republic",
      nativeName: {
        fra: {
          official: "République togolaise",
          common: "Togo",
        },
      },
    },
    independent: true,
    currencies: {
      XOF: {
        name: "West African CFA franc",
        symbol: "Fr",
      },
    },
    capital: ["Lomé"],
    region: "Africa",
    subregion: "Western Africa",
    languages: {
      fra: "French",
    },
    demonyms: {
      eng: {
        f: "Togolese",
        m: "Togolese",
      },
      fra: {
        f: "Togolaise",
        m: "Togolais",
      },
    },
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/yt.png",
      svg: "https://flagcdn.com/yt.svg",
      alt: "",
    },
    name: {
      common: "Mayotte",
      official: "Department of Mayotte",
      nativeName: {
        fra: {
          official: "Département de Mayotte",
          common: "Mayotte",
        },
      },
    },
    independent: false,
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    capital: ["Mamoudzou"],
    region: "Africa",
    subregion: "Eastern Africa",
    languages: {
      fra: "French",
    },
    demonyms: {
      eng: {
        f: "Mahoran",
        m: "Mahoran",
      },
      fra: {
        f: "Mahoraise",
        m: "Mahorais",
      },
    },
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/ge.png",
      svg: "https://flagcdn.com/ge.svg",
      alt: "The flag of Georgia has a white field with a large centered red cross that extends to the edges and divides the field into four quarters. A small red Bolnur-Katskhuri cross is centered in each quarter.",
    },
    name: {
      common: "Georgia",
      official: "Georgia",
      nativeName: {
        kat: {
          official: "საქართველო",
          common: "საქართველო",
        },
      },
    },
    independent: true,
    currencies: {
      GEL: {
        name: "lari",
        symbol: "₾",
      },
    },
    capital: ["Tbilisi"],
    region: "Asia",
    subregion: "Western Asia",
    languages: {
      kat: "Georgian",
    },
    demonyms: {
      eng: {
        f: "Georgian",
        m: "Georgian",
      },
      fra: {
        f: "Géorgienne",
        m: "Géorgien",
      },
    },
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/vu.png",
      svg: "https://flagcdn.com/vu.svg",
      alt: "The flag of Vanuatu is composed of two equal horizontal bands of red and green, with a black isosceles triangle superimposed on the hoist side of the field. This triangle has its base on the hoist end, spans about two-fifth the width of the field and is enclosed on its sides by the arms of a thin black-edged yellow horizontally oriented Y-shaped band which extends along the boundary of the red and green bands to the fly end of the field. A yellow boar's tusk encircling two yellow crossed namele leaves is centered in the triangle.",
    },
    name: {
      common: "Vanuatu",
      official: "Republic of Vanuatu",
      nativeName: {
        bis: {
          official: "Ripablik blong Vanuatu",
          common: "Vanuatu",
        },
        eng: {
          official: "Republic of Vanuatu",
          common: "Vanuatu",
        },
        fra: {
          official: "République de Vanuatu",
          common: "Vanuatu",
        },
      },
    },
    independent: true,
    currencies: {
      VUV: {
        name: "Vanuatu vatu",
        symbol: "Vt",
      },
    },
    capital: ["Port Vila"],
    region: "Oceania",
    subregion: "Melanesia",
    languages: {
      bis: "Bislama",
      eng: "English",
      fra: "French",
    },
    demonyms: {
      eng: {
        f: "Ni-Vanuatu",
        m: "Ni-Vanuatu",
      },
      fra: {
        f: "Vanuatuane",
        m: "Vanuatuan",
      },
    },
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/kg.png",
      svg: "https://flagcdn.com/kg.svg",
      alt: "The flag of Kyrgyzstan features a yellow sun with forty rays at the center of a red field. At the center of the sun is a stylized depiction of a tunduk.",
    },
    name: {
      common: "Kyrgyzstan",
      official: "Kyrgyz Republic",
      nativeName: {
        kir: {
          official: "Кыргыз Республикасы",
          common: "Кыргызстан",
        },
        rus: {
          official: "Кыргызская Республика",
          common: "Киргизия",
        },
      },
    },
    independent: true,
    currencies: {
      KGS: {
        name: "Kyrgyzstani som",
        symbol: "с",
      },
    },
    capital: ["Bishkek"],
    region: "Asia",
    subregion: "Central Asia",
    languages: {
      kir: "Kyrgyz",
      rus: "Russian",
    },
    demonyms: {
      eng: {
        f: "Kirghiz",
        m: "Kirghiz",
      },
      fra: {
        f: "Kirghize",
        m: "Kirghize",
      },
    },
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/ne.png",
      svg: "https://flagcdn.com/ne.svg",
      alt: "The flag of Niger features three equal horizontal bands of orange, white and green, with an orange circle centered in the white band.",
    },
    name: {
      common: "Niger",
      official: "Republic of Niger",
      nativeName: {
        fra: {
          official: "République du Niger",
          common: "Niger",
        },
      },
    },
    independent: true,
    currencies: {
      XOF: {
        name: "West African CFA franc",
        symbol: "Fr",
      },
    },
    capital: ["Niamey"],
    region: "Africa",
    subregion: "Western Africa",
    languages: {
      fra: "French",
    },
    demonyms: {
      eng: {
        f: "Nigerien",
        m: "Nigerien",
      },
      fra: {
        f: "Nigérienne",
        m: "Nigérien",
      },
    },
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/cn.png",
      svg: "https://flagcdn.com/cn.svg",
      alt: "The flag of China has a red field. In the canton are five yellow five-pointed stars — a large star and four smaller stars arranged in a vertical arc on the fly side of the large star.",
    },
    name: {
      common: "China",
      official: "People's Republic of China",
      nativeName: {
        zho: {
          official: "中华人民共和国",
          common: "中国",
        },
      },
    },
    independent: true,
    currencies: {
      CNY: {
        name: "Chinese yuan",
        symbol: "¥",
      },
    },
    capital: ["Beijing"],
    region: "Asia",
    subregion: "Eastern Asia",
    languages: {
      zho: "Chinese",
    },
    demonyms: {
      eng: {
        f: "Chinese",
        m: "Chinese",
      },
      fra: {
        f: "Chinoise",
        m: "Chinois",
      },
    },
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/tv.png",
      svg: "https://flagcdn.com/tv.svg",
      alt: "The flag of Tuvalu has a light blue field with the flag of the United Kingdom — the Union Jack — in the canton. A representation of the country's nine Islands using nine five-pointed yellow stars is situated in the fly half of the field.",
    },
    name: {
      common: "Tuvalu",
      official: "Tuvalu",
      nativeName: {
        eng: {
          official: "Tuvalu",
          common: "Tuvalu",
        },
        tvl: {
          official: "Tuvalu",
          common: "Tuvalu",
        },
      },
    },
    independent: true,
    currencies: {
      AUD: {
        name: "Australian dollar",
        symbol: "$",
      },
      TVD: {
        name: "Tuvaluan dollar",
        symbol: "$",
      },
    },
    capital: ["Funafuti"],
    region: "Oceania",
    subregion: "Polynesia",
    languages: {
      eng: "English",
      tvl: "Tuvaluan",
    },
    demonyms: {
      eng: {
        f: "Tuvaluan",
        m: "Tuvaluan",
      },
      fra: {
        f: "Tuvaluane",
        m: "Tuvaluan",
      },
    },
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/km.png",
      svg: "https://flagcdn.com/km.svg",
      alt: "The flag of Comoros is composed of four equal horizontal bands of yellow, white, red and blue, with a green isosceles triangle superimposed on the hoist side of the field. This triangle has its base on the hoist end, spans about two-fifth the width of the field and bears a fly-side facing white crescent and four five-pointed white stars arranged in a vertical line along the opening of the crescent.",
    },
    name: {
      common: "Comoros",
      official: "Union of the Comoros",
      nativeName: {
        ara: {
          official: "الاتحاد القمري",
          common: "القمر‎",
        },
        fra: {
          official: "Union des Comores",
          common: "Comores",
        },
        zdj: {
          official: "Udzima wa Komori",
          common: "Komori",
        },
      },
    },
    independent: true,
    currencies: {
      KMF: {
        name: "Comorian franc",
        symbol: "Fr",
      },
    },
    capital: ["Moroni"],
    region: "Africa",
    subregion: "Eastern Africa",
    languages: {
      ara: "Arabic",
      fra: "French",
      zdj: "Comorian",
    },
    demonyms: {
      eng: {
        f: "Comoran",
        m: "Comoran",
      },
      fra: {
        f: "Comorienne",
        m: "Comorien",
      },
    },
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/ba.png",
      svg: "https://flagcdn.com/ba.svg",
      alt: "The flag of Bosnia and Herzegovina has a blue field, at the center of which is a large yellow hoist-side facing right-angled triangle that is based on the top edge and spans the height of the field. Adjacent to the hypotenuse of this triangle are nine adjoining five-pointed white stars with the top and bottom stars cut in half by the edges of the field.",
    },
    name: {
      common: "Bosnia and Herzegovina",
      official: "Bosnia and Herzegovina",
      nativeName: {
        bos: {
          official: "Bosna i Hercegovina",
          common: "Bosna i Hercegovina",
        },
        hrv: {
          official: "Bosna i Hercegovina",
          common: "Bosna i Hercegovina",
        },
        srp: {
          official: "Босна и Херцеговина",
          common: "Босна и Херцеговина",
        },
      },
    },
    independent: true,
    currencies: {
      BAM: {
        name: "Bosnia and Herzegovina convertible mark",
        symbol: "KM",
      },
    },
    capital: ["Sarajevo"],
    region: "Europe",
    subregion: "Southeast Europe",
    languages: {
      bos: "Bosnian",
      hrv: "Croatian",
      srp: "Serbian",
    },
    demonyms: {
      eng: {
        f: "Bosnian, Herzegovinian",
        m: "Bosnian, Herzegovinian",
      },
      fra: {
        f: "Bosnienne",
        m: "Bosnien",
      },
    },
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/bh.png",
      svg: "https://flagcdn.com/bh.svg",
      alt: "The flag of Bahrain has a red field. On the hoist side, it features a white vertical band that spans about one-third the width of the field and is separated from the rest of the field by five adjoining fly-side pointing white isosceles triangles that serve as a serrated line.",
    },
    name: {
      common: "Bahrain",
      official: "Kingdom of Bahrain",
      nativeName: {
        ara: {
          official: "مملكة البحرين",
          common: "‏البحرين",
        },
      },
    },
    independent: true,
    currencies: {
      BHD: {
        name: "Bahraini dinar",
        symbol: ".د.ب",
      },
    },
    capital: ["Manama"],
    region: "Asia",
    subregion: "Western Asia",
    languages: {
      ara: "Arabic",
    },
    demonyms: {
      eng: {
        f: "Bahraini",
        m: "Bahraini",
      },
      fra: {
        f: "Bahreïnienne",
        m: "Bahreïnien",
      },
    },
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/so.png",
      svg: "https://flagcdn.com/so.svg",
      alt: "The flag of Somalia features a large five-pointed white star centered on a light blue field.",
    },
    name: {
      common: "Somalia",
      official: "Federal Republic of Somalia",
      nativeName: {
        ara: {
          official: "جمهورية الصومال‎‎",
          common: "الصومال‎‎",
        },
        som: {
          official: "Jamhuuriyadda Federaalka Soomaaliya",
          common: "Soomaaliya",
        },
      },
    },
    independent: true,
    currencies: {
      SOS: {
        name: "Somali shilling",
        symbol: "Sh",
      },
    },
    capital: ["Mogadishu"],
    region: "Africa",
    subregion: "Eastern Africa",
    languages: {
      ara: "Arabic",
      som: "Somali",
    },
    demonyms: {
      eng: {
        f: "Somali",
        m: "Somali",
      },
      fra: {
        f: "Somalienne",
        m: "Somalien",
      },
    },
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/bl.png",
      svg: "https://flagcdn.com/bl.svg",
      alt: "",
    },
    name: {
      common: "Saint Barthélemy",
      official: "Collectivity of Saint Barthélemy",
      nativeName: {
        fra: {
          official: "Collectivité de Saint-Barthélemy",
          common: "Saint-Barthélemy",
        },
      },
    },
    independent: false,
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    capital: ["Gustavia"],
    region: "Americas",
    subregion: "Caribbean",
    languages: {
      fra: "French",
    },
    demonyms: {
      eng: {
        f: "Saint Barthélemy Islander",
        m: "Saint Barthélemy Islander",
      },
      fra: {
        f: "Barthéloméenne",
        m: "Barthéloméen",
      },
    },
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/lv.png",
      svg: "https://flagcdn.com/lv.svg",
      alt: "The flag of Latvia has a carmine-red field with a thin white horizontal band across the middle of the field.",
    },
    name: {
      common: "Latvia",
      official: "Republic of Latvia",
      nativeName: {
        lav: {
          official: "Latvijas Republikas",
          common: "Latvija",
        },
      },
    },
    independent: true,
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    capital: ["Riga"],
    region: "Europe",
    subregion: "Northern Europe",
    languages: {
      lav: "Latvian",
    },
    demonyms: {
      eng: {
        f: "Latvian",
        m: "Latvian",
      },
      fra: {
        f: "Lettone",
        m: "Letton",
      },
    },
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/ky.png",
      svg: "https://flagcdn.com/ky.svg",
      alt: "",
    },
    name: {
      common: "Cayman Islands",
      official: "Cayman Islands",
      nativeName: {
        eng: {
          official: "Cayman Islands",
          common: "Cayman Islands",
        },
      },
    },
    independent: false,
    currencies: {
      KYD: {
        name: "Cayman Islands dollar",
        symbol: "$",
      },
    },
    capital: ["George Town"],
    region: "Americas",
    subregion: "Caribbean",
    languages: {
      eng: "English",
    },
    demonyms: {
      eng: {
        f: "Caymanian",
        m: "Caymanian",
      },
      fra: {
        f: "Caïmanienne",
        m: "Caïmanien",
      },
    },
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/nl.png",
      svg: "https://flagcdn.com/nl.svg",
      alt: "The flag of the Netherlands is composed of three equal horizontal bands of red, white and blue.",
    },
    name: {
      common: "Netherlands",
      official: "Kingdom of the Netherlands",
      nativeName: {
        nld: {
          official: "Koninkrijk der Nederlanden",
          common: "Nederland",
        },
      },
    },
    independent: true,
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    capital: ["Amsterdam"],
    region: "Europe",
    subregion: "Western Europe",
    languages: {
      nld: "Dutch",
    },
    demonyms: {
      eng: {
        f: "Dutch",
        m: "Dutch",
      },
      fra: {
        f: "Néerlandaise",
        m: "Néerlandais",
      },
    },
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/ls.png",
      svg: "https://flagcdn.com/ls.svg",
      alt: "The flag of Lesotho is composed of three horizontal bands of blue, white and green in the ratio of 3:4:3. A black mokorotlo — a Basotho hat — is centered in the white band.",
    },
    name: {
      common: "Lesotho",
      official: "Kingdom of Lesotho",
      nativeName: {
        eng: {
          official: "Kingdom of Lesotho",
          common: "Lesotho",
        },
        sot: {
          official: "Kingdom of Lesotho",
          common: "Lesotho",
        },
      },
    },
    independent: true,
    currencies: {
      LSL: {
        name: "Lesotho loti",
        symbol: "L",
      },
      ZAR: {
        name: "South African rand",
        symbol: "R",
      },
    },
    capital: ["Maseru"],
    region: "Africa",
    subregion: "Southern Africa",
    languages: {
      eng: "English",
      sot: "Sotho",
    },
    demonyms: {
      eng: {
        f: "Mosotho",
        m: "Mosotho",
      },
      fra: {
        f: "Lésothienne",
        m: "Lésothien",
      },
    },
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/ve.png",
      svg: "https://flagcdn.com/ve.svg",
      alt: "The flag of Venezuela is composed of three equal horizontal bands of yellow, blue and red. At the center of the blue band are eight five-pointed white stars arranged in a horizontal arc.",
    },
    name: {
      common: "Venezuela",
      official: "Bolivarian Republic of Venezuela",
      nativeName: {
        spa: {
          official: "República Bolivariana de Venezuela",
          common: "Venezuela",
        },
      },
    },
    independent: true,
    currencies: {
      VES: {
        name: "Venezuelan bolívar soberano",
        symbol: "Bs.S.",
      },
    },
    capital: ["Caracas"],
    region: "Americas",
    subregion: "South America",
    languages: {
      spa: "Spanish",
    },
    demonyms: {
      eng: {
        f: "Venezuelan",
        m: "Venezuelan",
      },
      fra: {
        f: "Vénézuélienne",
        m: "Vénézuélien",
      },
    },
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/ke.png",
      svg: "https://flagcdn.com/ke.svg",
      alt: "The flag of Kenya is composed of three equal horizontal bands of black, red with white top and bottom edges, and green. An emblem comprising a red, black and white Maasai shield covering two crossed white spears is superimposed at the center of the field.",
    },
    name: {
      common: "Kenya",
      official: "Republic of Kenya",
      nativeName: {
        eng: {
          official: "Republic of Kenya",
          common: "Kenya",
        },
        swa: {
          official: "Republic of Kenya",
          common: "Kenya",
        },
      },
    },
    independent: true,
    currencies: {
      KES: {
        name: "Kenyan shilling",
        symbol: "Sh",
      },
    },
    capital: ["Nairobi"],
    region: "Africa",
    subregion: "Eastern Africa",
    languages: {
      eng: "English",
      swa: "Swahili",
    },
    demonyms: {
      eng: {
        f: "Kenyan",
        m: "Kenyan",
      },
      fra: {
        f: "Kényane",
        m: "Kényan",
      },
    },
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/tr.png",
      svg: "https://flagcdn.com/tr.svg",
      alt: "The flag of Turkey has a red field bearing a large fly-side facing white crescent and a smaller five-pointed white star placed just outside the crescent opening. The white crescent and star are offset slightly towards the hoist side of center.",
    },
    name: {
      common: "Turkey",
      official: "Republic of Turkey",
      nativeName: {
        tur: {
          official: "Türkiye Cumhuriyeti",
          common: "Türkiye",
        },
      },
    },
    independent: true,
    currencies: {
      TRY: {
        name: "Turkish lira",
        symbol: "₺",
      },
    },
    capital: ["Ankara"],
    region: "Asia",
    subregion: "Western Asia",
    languages: {
      tur: "Turkish",
    },
    demonyms: {
      eng: {
        f: "Turkish",
        m: "Turkish",
      },
      fra: {
        f: "Turque",
        m: "Turc",
      },
    },
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/fj.png",
      svg: "https://flagcdn.com/fj.svg",
      alt: "The flag of Fiji has a light blue field. It features the flag of the United Kingdom — the Union Jack — in the canton and the shield of the national coat of arms centered in the fly half.",
    },
    name: {
      common: "Fiji",
      official: "Republic of Fiji",
      nativeName: {
        eng: {
          official: "Republic of Fiji",
          common: "Fiji",
        },
        fij: {
          official: "Matanitu Tugalala o Viti",
          common: "Viti",
        },
        hif: {
          official: "रिपब्लिक ऑफ फीजी",
          common: "फिजी",
        },
      },
    },
    independent: true,
    currencies: {
      FJD: {
        name: "Fijian dollar",
        symbol: "$",
      },
    },
    capital: ["Suva"],
    region: "Oceania",
    subregion: "Melanesia",
    languages: {
      eng: "English",
      fij: "Fijian",
      hif: "Fiji Hindi",
    },
    demonyms: {
      eng: {
        f: "Fijian",
        m: "Fijian",
      },
      fra: {
        f: "Fidjienne",
        m: "Fidjien",
      },
    },
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/tt.png",
      svg: "https://flagcdn.com/tt.svg",
      alt: "The flag of Trinidad and Tobago has a red field with a white-edged black diagonal band that extends from the upper hoist-side corner to the lower fly-side corner of the field.",
    },
    name: {
      common: "Trinidad and Tobago",
      official: "Republic of Trinidad and Tobago",
      nativeName: {
        eng: {
          official: "Republic of Trinidad and Tobago",
          common: "Trinidad and Tobago",
        },
      },
    },
    independent: true,
    currencies: {
      TTD: {
        name: "Trinidad and Tobago dollar",
        symbol: "$",
      },
    },
    capital: ["Port of Spain"],
    region: "Americas",
    subregion: "Caribbean",
    languages: {
      eng: "English",
    },
    demonyms: {
      eng: {
        f: "Trinidadian",
        m: "Trinidadian",
      },
      fra: {
        f: "Trinidadienne",
        m: "Trinidadien",
      },
    },
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/hn.png",
      svg: "https://flagcdn.com/hn.svg",
      alt: "The flag of Honduras is composed of three equal horizontal bands of turquoise, white and turquoise, with five small five-pointed turquoise stars arranged in a quincuncial pattern at the center of the white band.",
    },
    name: {
      common: "Honduras",
      official: "Republic of Honduras",
      nativeName: {
        spa: {
          official: "República de Honduras",
          common: "Honduras",
        },
      },
    },
    independent: true,
    currencies: {
      HNL: {
        name: "Honduran lempira",
        symbol: "L",
      },
    },
    capital: ["Tegucigalpa"],
    region: "Americas",
    subregion: "Central America",
    languages: {
      spa: "Spanish",
    },
    demonyms: {
      eng: {
        f: "Honduran",
        m: "Honduran",
      },
      fra: {
        f: "Hondurienne",
        m: "Hondurien",
      },
    },
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/je.png",
      svg: "https://flagcdn.com/je.svg",
      alt: "",
    },
    name: {
      common: "Jersey",
      official: "Bailiwick of Jersey",
      nativeName: {
        eng: {
          official: "Bailiwick of Jersey",
          common: "Jersey",
        },
        fra: {
          official: "Bailliage de Jersey",
          common: "Jersey",
        },
        nrf: {
          official: "Bailliage dé Jèrri",
          common: "Jèrri",
        },
      },
    },
    independent: false,
    currencies: {
      GBP: {
        name: "British pound",
        symbol: "£",
      },
      JEP: {
        name: "Jersey pound",
        symbol: "£",
      },
    },
    capital: ["Saint Helier"],
    region: "Europe",
    subregion: "Northern Europe",
    languages: {
      eng: "English",
      fra: "French",
      nrf: "Jèrriais",
    },
    demonyms: {
      eng: {
        f: "Channel Islander",
        m: "Channel Islander",
      },
      fra: {
        f: "Jersiaise",
        m: "Jersiais",
      },
    },
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/dj.png",
      svg: "https://flagcdn.com/dj.svg",
      alt: "The flag of Djibouti is composed of two equal horizontal bands of light blue and light green, with a white isosceles triangle superimposed on the hoist side of the field. The triangle has its base on the hoist end, spans about two-fifth the width of the field and bears a red five-pointed star at its center.",
    },
    name: {
      common: "Djibouti",
      official: "Republic of Djibouti",
      nativeName: {
        ara: {
          official: "جمهورية جيبوتي",
          common: "جيبوتي‎",
        },
        fra: {
          official: "République de Djibouti",
          common: "Djibouti",
        },
      },
    },
    independent: true,
    currencies: {
      DJF: {
        name: "Djiboutian franc",
        symbol: "Fr",
      },
    },
    capital: ["Djibouti"],
    region: "Africa",
    subregion: "Eastern Africa",
    languages: {
      ara: "Arabic",
      fra: "French",
    },
    demonyms: {
      eng: {
        f: "Djibouti",
        m: "Djibouti",
      },
      fra: {
        f: "Djiboutienne",
        m: "Djiboutien",
      },
    },
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/re.png",
      svg: "https://flagcdn.com/re.svg",
      alt: "",
    },
    name: {
      common: "Réunion",
      official: "Réunion Island",
      nativeName: {
        fra: {
          official: "Ile de la Réunion",
          common: "La Réunion",
        },
      },
    },
    independent: false,
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    capital: ["Saint-Denis"],
    region: "Africa",
    subregion: "Eastern Africa",
    languages: {
      fra: "French",
    },
    demonyms: {
      eng: {
        f: "Réunionese",
        m: "Réunionese",
      },
      fra: {
        f: "Réunionnaise",
        m: "Réunionnais",
      },
    },
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/sz.png",
      svg: "https://flagcdn.com/sz.svg",
      alt: "The flag of Eswatini is composed of three horizontal bands — a large central yellow-edged red band, and a light blue band above and beneath the red band. The red band is three times the height of the blue bands and bears a centered emblem made up of a large black and white Nguni shield covering two spears and a staff decorated with feather tassels, all placed horizontally.",
    },
    name: {
      common: "Eswatini",
      official: "Kingdom of Eswatini",
      nativeName: {
        eng: {
          official: "Kingdom of Eswatini",
          common: "Eswatini",
        },
        ssw: {
          official: "Umbuso weSwatini",
          common: "eSwatini",
        },
      },
    },
    independent: true,
    currencies: {
      SZL: {
        name: "Swazi lilangeni",
        symbol: "L",
      },
      ZAR: {
        name: "South African rand",
        symbol: "R",
      },
    },
    capital: ["Mbabane"],
    region: "Africa",
    subregion: "Southern Africa",
    languages: {
      eng: "English",
      ssw: "Swazi",
    },
    demonyms: {
      eng: {
        f: "Swazi",
        m: "Swazi",
      },
      fra: {
        f: "Swazie",
        m: "Swazie",
      },
    },
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/tj.png",
      svg: "https://flagcdn.com/tj.svg",
      alt: "The flag of Tajikistan is composed of three horizontal bands of red, white and green in the ratio of 2:3:2. A golden-yellow crown surmounted by an arc of seven five-pointed golden-yellow stars is centered in the white band.",
    },
    name: {
      common: "Tajikistan",
      official: "Republic of Tajikistan",
      nativeName: {
        rus: {
          official: "Республика Таджикистан",
          common: "Таджикистан",
        },
        tgk: {
          official: "Ҷумҳурии Тоҷикистон",
          common: "Тоҷикистон",
        },
      },
    },
    independent: true,
    currencies: {
      TJS: {
        name: "Tajikistani somoni",
        symbol: "ЅМ",
      },
    },
    capital: ["Dushanbe"],
    region: "Asia",
    subregion: "Central Asia",
    languages: {
      rus: "Russian",
      tgk: "Tajik",
    },
    demonyms: {
      eng: {
        f: "Tadzhik",
        m: "Tadzhik",
      },
      fra: {
        f: "Tadjike",
        m: "Tadjike",
      },
    },
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/sa.png",
      svg: "https://flagcdn.com/sa.svg",
      alt: "The flag of Saudi Arabia has a green field, at the center of which is an Arabic inscription — the Shahada — in white above a white horizontal sabre with its tip pointed to the hoist side of the field.",
    },
    name: {
      common: "Saudi Arabia",
      official: "Kingdom of Saudi Arabia",
      nativeName: {
        ara: {
          official: "المملكة العربية السعودية",
          common: "العربية السعودية",
        },
      },
    },
    independent: true,
    currencies: {
      SAR: {
        name: "Saudi riyal",
        symbol: "ر.س",
      },
    },
    capital: ["Riyadh"],
    region: "Asia",
    subregion: "Western Asia",
    languages: {
      ara: "Arabic",
    },
    demonyms: {
      eng: {
        f: "Saudi Arabian",
        m: "Saudi Arabian",
      },
      fra: {
        f: "Saoudienne",
        m: "Saoudien",
      },
    },
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/bm.png",
      svg: "https://flagcdn.com/bm.svg",
      alt: "",
    },
    name: {
      common: "Bermuda",
      official: "Bermuda",
      nativeName: {
        eng: {
          official: "Bermuda",
          common: "Bermuda",
        },
      },
    },
    independent: false,
    currencies: {
      BMD: {
        name: "Bermudian dollar",
        symbol: "$",
      },
    },
    capital: ["Hamilton"],
    region: "Americas",
    subregion: "North America",
    languages: {
      eng: "English",
    },
    demonyms: {
      eng: {
        f: "Bermudian",
        m: "Bermudian",
      },
      fra: {
        f: "Bermudienne",
        m: "Bermudien",
      },
    },
  },
];

/* 

export type CountryData = Country[];

export interface Country {
  flags: Flags;
  name: Name;
  currencies: Currencies;
  capital: string[];
  region: string;
  languages: Languages;
  independent: boolean;
}

export interface Flags {
  png: string;
  svg: string;
  alt: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

export interface NativeName {
  fra?: Fra;
  kat?: Kat;
  bis?: Bis;
  eng?: Eng;
  kir?: Kir;
  rus?: Rus;
  zho?: Zho;
  tvl?: Tvl;
  ara?: Ara;
  zdj?: Zdj;
  bos?: Bos;
  hrv?: Hrv;
  srp?: Srp;
  som?: Som;
  lav?: Lav;
  nld?: Nld;
  sot?: Sot;
  spa?: Spa;
  swa?: Swa;
  tur?: Tur;
  fij?: Fij;
  hif?: Hif;
  nrf?: Nrf;
  ssw?: Ssw;
  tgk?: Tgk;
  mri?: Mri;
  nzs?: Nzs;
  bel?: Bel;
  kon?: Kon;
  lin?: Lin;
  lua?: Lua;
  nya?: Nya;
  arc?: Arc;
  ckb?: Ckb;
  niu?: Niu;
  por?: Por;
  fas?: Fas;
  lao?: Lao;
  sin?: Sin;
  tam?: Tam;
  pap?: Pap;
  ber?: Ber;
  mey?: Mey;
  est?: Est;
  deu?: Deu;
  ltz?: Ltz;
  afr?: Afr;
  her?: Her;
  hgm?: Hgm;
  kwn?: Kwn;
  loz?: Loz;
  ndo?: Ndo;
  tsn?: Tsn;
  sqi?: Sqi;
  mya?: Mya;
  heb?: Heb;
  grn?: Grn;
  msa?: Msa;
  slk?: Slk;
  run?: Run;
  tuk?: Tuk;
  nbl?: Nbl;
  nso?: Nso;
  tso?: Tso;
  ven?: Ven;
  xho?: Xho;
  zul?: Zul;
  kaz?: Kaz;
  pol?: Pol;
  ita?: Ita;
  smo?: Smo;
  nor?: Nor;
  glv?: Glv;
  mfe?: Mfe;
  isl?: Isl;
  ell?: Ell;
  nno?: Nno;
  nob?: Nob;
  smi?: Smi;
  jam?: Jam;
  aym?: Aym;
  que?: Que;
  mon?: Mon;
  aze?: Aze;
  kor?: Kor;
  dan?: Dan;
  cat?: Cat;
  gsw?: Gsw;
  roh?: Roh;
  mkd?: Mkd;
  hat?: Hat;
  pov?: Pov;
  ces?: Ces;
  fin?: Fin;
  swe?: Swe;
  bwg?: Bwg;
  kck?: Kck;
  khi?: Khi;
  ndc?: Ndc;
  nde?: Nde;
  sna?: Sna;
  toi?: Toi;
  zib?: Zib;
  jpn?: Jpn;
  crs?: Crs;
  ron?: Ron;
  bul?: Bul;
  tir?: Tir;
  cnr?: Cnr;
  nep?: Nep;
  bar?: Bar;
  sag?: Sag;
  cal?: Cal;
  cha?: Cha;
  lit?: Lit;
  ton?: Ton;
  prs?: Prs;
  pus?: Pus;
  nau?: Nau;
  rar?: Rar;
  hun?: Hun;
  slv?: Slv;
  lat?: Lat;
  mlt?: Mlt;
  mah?: Mah;
  tha?: Tha;
  gle?: Gle;
  div?: Div;
  vie?: Vie;
  hye?: Hye;
  urd?: Urd;
  tet?: Tet;
  hmo?: Hmo;
  tpi?: Tpi;
  khm?: Khm;
  amh?: Amh;
  gil?: Gil;
  dzo?: Dzo;
  ben?: Ben;
  kal?: Kal;
  pau?: Pau;
  pih?: Pih;
  fil?: Fil;
  hin?: Hin;
  ind?: Ind;
  kin?: Kin;
  mlg?: Mlg;
  fao?: Fao;
  uzb?: Uzb;
  ukr?: Ukr;
  bjz?: Bjz;
  nfr?: Nfr;
  tkl?: Tkl;
}

export interface Fra {
  official: string;
  common: string;
}

export interface Kat {
  official: string;
  common: string;
}

export interface Bis {
  official: string;
  common: string;
}

export interface Eng {
  official: string;
  common: string;
}

export interface Kir {
  official: string;
  common: string;
}

export interface Rus {
  official: string;
  common: string;
}

export interface Zho {
  official: string;
  common: string;
}

export interface Tvl {
  official: string;
  common: string;
}

export interface Ara {
  official: string;
  common: string;
}

export interface Zdj {
  official: string;
  common: string;
}

export interface Bos {
  official: string;
  common: string;
}

export interface Hrv {
  official: string;
  common: string;
}

export interface Srp {
  official: string;
  common: string;
}

export interface Som {
  official: string;
  common: string;
}

export interface Lav {
  official: string;
  common: string;
}

export interface Nld {
  official: string;
  common: string;
}

export interface Sot {
  official: string;
  common: string;
}

export interface Spa {
  official: string;
  common: string;
}

export interface Swa {
  official: string;
  common: string;
}

export interface Tur {
  official: string;
  common: string;
}

export interface Fij {
  official: string;
  common: string;
}

export interface Hif {
  official: string;
  common: string;
}

export interface Nrf {
  official: string;
  common: string;
}

export interface Ssw {
  official: string;
  common: string;
}

export interface Tgk {
  official: string;
  common: string;
}

export interface Mri {
  official: string;
  common: string;
}

export interface Nzs {
  official: string;
  common: string;
}

export interface Bel {
  official: string;
  common: string;
}

export interface Kon {
  official: string;
  common: string;
}

export interface Lin {
  official: string;
  common: string;
}

export interface Lua {
  official: string;
  common: string;
}

export interface Nya {
  official: string;
  common: string;
}

export interface Arc {
  official: string;
  common: string;
}

export interface Ckb {
  official: string;
  common: string;
}

export interface Niu {
  official: string;
  common: string;
}

export interface Por {
  official: string;
  common: string;
}

export interface Fas {
  official: string;
  common: string;
}

export interface Lao {
  official: string;
  common: string;
}

export interface Sin {
  official: string;
  common: string;
}

export interface Tam {
  official: string;
  common: string;
}

export interface Pap {
  official: string;
  common: string;
}

export interface Ber {
  official: string;
  common: string;
}

export interface Mey {
  official: string;
  common: string;
}

export interface Est {
  official: string;
  common: string;
}

export interface Deu {
  official: string;
  common: string;
}

export interface Ltz {
  official: string;
  common: string;
}

export interface Afr {
  official: string;
  common: string;
}

export interface Her {
  official: string;
  common: string;
}

export interface Hgm {
  official: string;
  common: string;
}

export interface Kwn {
  official: string;
  common: string;
}

export interface Loz {
  official: string;
  common: string;
}

export interface Ndo {
  official: string;
  common: string;
}

export interface Tsn {
  official: string;
  common: string;
}

export interface Sqi {
  official: string;
  common: string;
}

export interface Mya {
  official: string;
  common: string;
}

export interface Heb {
  official: string;
  common: string;
}

export interface Grn {
  official: string;
  common: string;
}

export interface Msa {
  official: string;
  common: string;
}

export interface Slk {
  official: string;
  common: string;
}

export interface Run {
  official: string;
  common: string;
}

export interface Tuk {
  official: string;
  common: string;
}

export interface Nbl {
  official: string;
  common: string;
}

export interface Nso {
  official: string;
  common: string;
}

export interface Tso {
  official: string;
  common: string;
}

export interface Ven {
  official: string;
  common: string;
}

export interface Xho {
  official: string;
  common: string;
}

export interface Zul {
  official: string;
  common: string;
}

export interface Kaz {
  official: string;
  common: string;
}

export interface Pol {
  official: string;
  common: string;
}

export interface Ita {
  official: string;
  common: string;
}

export interface Smo {
  official: string;
  common: string;
}

export interface Nor {
  official: string;
  common: string;
}

export interface Glv {
  official: string;
  common: string;
}

export interface Mfe {
  official: string;
  common: string;
}

export interface Isl {
  official: string;
  common: string;
}

export interface Ell {
  official: string;
  common: string;
}

export interface Nno {
  official: string;
  common: string;
}

export interface Nob {
  official: string;
  common: string;
}

export interface Smi {
  official: string;
  common: string;
}

export interface Jam {
  official: string;
  common: string;
}

export interface Aym {
  official: string;
  common: string;
}

export interface Que {
  official: string;
  common: string;
}

export interface Mon {
  official: string;
  common: string;
}

export interface Aze {
  official: string;
  common: string;
}

export interface Kor {
  official: string;
  common: string;
}

export interface Dan {
  official: string;
  common: string;
}

export interface Cat {
  official: string;
  common: string;
}

export interface Gsw {
  official: string;
  common: string;
}

export interface Roh {
  official: string;
  common: string;
}

export interface Mkd {
  official: string;
  common: string;
}

export interface Hat {
  official: string;
  common: string;
}

export interface Pov {
  official: string;
  common: string;
}

export interface Ces {
  official: string;
  common: string;
}

export interface Fin {
  official: string;
  common: string;
}

export interface Swe {
  official: string;
  common: string;
}

export interface Bwg {
  official: string;
  common: string;
}

export interface Kck {
  official: string;
  common: string;
}

export interface Khi {
  official: string;
  common: string;
}

export interface Ndc {
  official: string;
  common: string;
}

export interface Nde {
  official: string;
  common: string;
}

export interface Sna {
  official: string;
  common: string;
}

export interface Toi {
  official: string;
  common: string;
}

export interface Zib {
  official: string;
  common: string;
}

export interface Jpn {
  official: string;
  common: string;
}

export interface Crs {
  official: string;
  common: string;
}

export interface Ron {
  official: string;
  common: string;
}

export interface Bul {
  official: string;
  common: string;
}

export interface Tir {
  official: string;
  common: string;
}

export interface Cnr {
  official: string;
  common: string;
}

export interface Nep {
  official: string;
  common: string;
}

export interface Bar {
  official: string;
  common: string;
}

export interface Sag {
  official: string;
  common: string;
}

export interface Cal {
  official: string;
  common: string;
}

export interface Cha {
  official: string;
  common: string;
}

export interface Lit {
  official: string;
  common: string;
}

export interface Ton {
  official: string;
  common: string;
}

export interface Prs {
  official: string;
  common: string;
}

export interface Pus {
  official: string;
  common: string;
}

export interface Nau {
  official: string;
  common: string;
}

export interface Rar {
  official: string;
  common: string;
}

export interface Hun {
  official: string;
  common: string;
}

export interface Slv {
  official: string;
  common: string;
}

export interface Lat {
  official: string;
  common: string;
}

export interface Mlt {
  official: string;
  common: string;
}

export interface Mah {
  official: string;
  common: string;
}

export interface Tha {
  official: string;
  common: string;
}

export interface Gle {
  official: string;
  common: string;
}

export interface Div {
  official: string;
  common: string;
}

export interface Vie {
  official: string;
  common: string;
}

export interface Hye {
  official: string;
  common: string;
}

export interface Urd {
  official: string;
  common: string;
}

export interface Tet {
  official: string;
  common: string;
}

export interface Hmo {
  official: string;
  common: string;
}

export interface Tpi {
  official: string;
  common: string;
}

export interface Khm {
  official: string;
  common: string;
}

export interface Amh {
  official: string;
  common: string;
}

export interface Gil {
  official: string;
  common: string;
}

export interface Dzo {
  official: string;
  common: string;
}

export interface Ben {
  official: string;
  common: string;
}

export interface Kal {
  official: string;
  common: string;
}

export interface Pau {
  official: string;
  common: string;
}

export interface Pih {
  official: string;
  common: string;
}

export interface Fil {
  official: string;
  common: string;
}

export interface Hin {
  official: string;
  common: string;
}

export interface Ind {
  official: string;
  common: string;
}

export interface Kin {
  official: string;
  common: string;
}

export interface Mlg {
  official: string;
  common: string;
}

export interface Fao {
  official: string;
  common: string;
}

export interface Uzb {
  official: string;
  common: string;
}

export interface Ukr {
  official: string;
  common: string;
}

export interface Bjz {
  official: string;
  common: string;
}

export interface Nfr {
  official: string;
  common: string;
}

export interface Tkl {
  official: string;
  common: string;
}

export interface Currencies {
  XOF?: Xof;
  EUR?: Eur;
  GEL?: Gel;
  VUV?: Vuv;
  KGS?: Kgs;
  CNY?: Cny;
  AUD?: Aud;
  TVD?: Tvd;
  KMF?: Kmf;
  BAM?: Bam;
  BHD?: Bhd;
  SOS?: Sos;
  KYD?: Kyd;
  LSL?: Lsl;
  ZAR?: Zar;
  VES?: Ves;
  KES?: Kes;
  TRY?: Try;
  FJD?: Fjd;
  TTD?: Ttd;
  HNL?: Hnl;
  GBP?: Gbp;
  JEP?: Jep;
  DJF?: Djf;
  SZL?: Szl;
  TJS?: Tjs;
  SAR?: Sar;
  BMD?: Bmd;
  NZD?: Nzd;
  BYN?: Byn;
  GMD?: Gmd;
  XPF?: Xpf;
  CDF?: Cdf;
  CRC?: Crc;
  MWK?: Mwk;
  XAF?: Xaf;
  OMR?: Omr;
  IQD?: Iqd;
  LBP?: Lbp;
  AOA?: Aoa;
  IRR?: Irr;
  USD?: Usd;
  LAK?: Lak;
  LKR?: Lkr;
  AWG?: Awg;
  STN?: Stn;
  XCD?: Xcd;
  DZD?: Dzd;
  MAD?: Mad;
  MRU?: Mru;
  GNF?: Gnf;
  PAB?: Pab;
  YER?: Yer;
  GYD?: Gyd;
  NAD?: Nad;
  LYD?: Lyd;
  MMK?: Mmk;
  ILS?: Ils;
  ARS?: Ars;
  UGX?: Ugx;
  MYR?: Myr;
  ZMW?: Zmw;
  BIF?: Bif;
  RSD?: Rsd;
  TMT?: Tmt;
  KZT?: Kzt;
  CAD?: Cad;
  PLN?: Pln;
  QAR?: Qar;
  GIP?: Gip;
  NOK?: Nok;
  IMP?: Imp;
  EGP?: Egp;
  JOD?: Jod;
  MUR?: Mur;
  SLE?: Sle;
  ISK?: Isk;
  KWD?: Kwd;
  TWD?: Twd;
  MOP?: Mop;
  CUC?: Cuc;
  CUP?: Cup;
  BRL?: Brl;
  SBD?: Sbd;
  JMD?: Jmd;
  TZS?: Tzs;
  BOB?: Bob;
  MNT?: Mnt;
  TND?: Tnd;
  SYP?: Syp;
  CLP?: Clp;
  AZN?: Azn;
  KRW?: Krw;
  GHS?: Ghs;
  DKK?: Dkk;
  ANG?: Ang;
  CHF?: Chf;
  MKD?: Mkd2;
  SSP?: Ssp;
  HTG?: Htg;
  PEN?: Pen;
  CZK?: Czk;
  MXN?: Mxn;
  ZWL?: Zwl;
  JPY?: Jpy;
  SCR?: Scr;
  ALL?: All;
  MDL?: Mdl;
  GTQ?: Gtq;
  BGN?: Bgn;
  PYG?: Pyg;
  ERN?: Ern;
  SDG?: Sdg;
  COP?: Cop;
  NGN?: Ngn;
  NPR?: Npr;
  BND?: Bnd;
  SGD?: Sgd;
  BSD?: Bsd;
  LRD?: Lrd;
  RON?: Ron2;
  AED?: Aed;
  BWP?: Bwp;
  CVE?: Cve;
  TOP?: Top;
  AFN?: Afn;
  FKP?: Fkp;
  CKD?: Ckd;
  HUF?: Huf;
  THB?: Thb;
  MVR?: Mvr;
  VND?: Vnd;
  AMD?: Amd;
  PKR?: Pkr;
  RUB?: Rub;
  NIO?: Nio;
  PGK?: Pgk;
  UYU?: Uyu;
  KHR?: Khr;
  ETB?: Etb;
  KID?: Kid;
  BTN?: Btn;
  INR?: Inr;
  DOP?: Dop;
  SRD?: Srd;
  BDT?: Bdt;
  BBD?: Bbd;
  KPW?: Kpw;
  PHP?: Php;
  IDR?: Idr;
  RWF?: Rwf;
  MGA?: Mga;
  HKD?: Hkd;
  WST?: Wst;
  FOK?: Fok;
  SEK?: Sek;
  MZN?: Mzn;
  UZS?: Uzs;
  UAH?: Uah;
  BZD?: Bzd;
  SHP?: Shp;
  GGP?: Ggp;
}

export interface Xof {
  name: string;
  symbol: string;
}

export interface Eur {
  name: string;
  symbol: string;
}

export interface Gel {
  name: string;
  symbol: string;
}

export interface Vuv {
  name: string;
  symbol: string;
}

export interface Kgs {
  name: string;
  symbol: string;
}

export interface Cny {
  name: string;
  symbol: string;
}

export interface Aud {
  name: string;
  symbol: string;
}

export interface Tvd {
  name: string;
  symbol: string;
}

export interface Kmf {
  name: string;
  symbol: string;
}

export interface Bam {
  name: string;
  symbol: string;
}

export interface Bhd {
  name: string;
  symbol: string;
}

export interface Sos {
  name: string;
  symbol: string;
}

export interface Kyd {
  name: string;
  symbol: string;
}

export interface Lsl {
  name: string;
  symbol: string;
}

export interface Zar {
  name: string;
  symbol: string;
}

export interface Ves {
  name: string;
  symbol: string;
}

export interface Kes {
  name: string;
  symbol: string;
}

export interface Try {
  name: string;
  symbol: string;
}

export interface Fjd {
  name: string;
  symbol: string;
}

export interface Ttd {
  name: string;
  symbol: string;
}

export interface Hnl {
  name: string;
  symbol: string;
}

export interface Gbp {
  name: string;
  symbol: string;
}

export interface Jep {
  name: string;
  symbol: string;
}

export interface Djf {
  name: string;
  symbol: string;
}

export interface Szl {
  name: string;
  symbol: string;
}

export interface Tjs {
  name: string;
  symbol: string;
}

export interface Sar {
  name: string;
  symbol: string;
}

export interface Bmd {
  name: string;
  symbol: string;
}

export interface Nzd {
  name: string;
  symbol: string;
}

export interface Byn {
  name: string;
  symbol: string;
}

export interface Gmd {
  name: string;
  symbol: string;
}

export interface Xpf {
  name: string;
  symbol: string;
}

export interface Cdf {
  name: string;
  symbol: string;
}

export interface Crc {
  name: string;
  symbol: string;
}

export interface Mwk {
  name: string;
  symbol: string;
}

export interface Xaf {
  name: string;
  symbol: string;
}

export interface Omr {
  name: string;
  symbol: string;
}

export interface Iqd {
  name: string;
  symbol: string;
}

export interface Lbp {
  name: string;
  symbol: string;
}

export interface Aoa {
  name: string;
  symbol: string;
}

export interface Irr {
  name: string;
  symbol: string;
}

export interface Usd {
  name: string;
  symbol: string;
}

export interface Lak {
  name: string;
  symbol: string;
}

export interface Lkr {
  name: string;
  symbol: string;
}

export interface Awg {
  name: string;
  symbol: string;
}

export interface Stn {
  name: string;
  symbol: string;
}

export interface Xcd {
  name: string;
  symbol: string;
}

export interface Dzd {
  name: string;
  symbol: string;
}

export interface Mad {
  name: string;
  symbol: string;
}

export interface Mru {
  name: string;
  symbol: string;
}

export interface Gnf {
  name: string;
  symbol: string;
}

export interface Pab {
  name: string;
  symbol: string;
}

export interface Yer {
  name: string;
  symbol: string;
}

export interface Gyd {
  name: string;
  symbol: string;
}

export interface Nad {
  name: string;
  symbol: string;
}

export interface Lyd {
  name: string;
  symbol: string;
}

export interface Mmk {
  name: string;
  symbol: string;
}

export interface Ils {
  name: string;
  symbol: string;
}

export interface Ars {
  name: string;
  symbol: string;
}

export interface Ugx {
  name: string;
  symbol: string;
}

export interface Myr {
  name: string;
  symbol: string;
}

export interface Zmw {
  name: string;
  symbol: string;
}

export interface Bif {
  name: string;
  symbol: string;
}

export interface Rsd {
  name: string;
  symbol: string;
}

export interface Tmt {
  name: string;
  symbol: string;
}

export interface Kzt {
  name: string;
  symbol: string;
}

export interface Cad {
  name: string;
  symbol: string;
}

export interface Pln {
  name: string;
  symbol: string;
}

export interface Qar {
  name: string;
  symbol: string;
}

export interface Gip {
  name: string;
  symbol: string;
}

export interface Nok {
  name: string;
  symbol: string;
}

export interface Imp {
  name: string;
  symbol: string;
}

export interface Egp {
  name: string;
  symbol: string;
}

export interface Jod {
  name: string;
  symbol: string;
}

export interface Mur {
  name: string;
  symbol: string;
}

export interface Sle {
  name: string;
  symbol: string;
}

export interface Isk {
  name: string;
  symbol: string;
}

export interface Kwd {
  name: string;
  symbol: string;
}

export interface Twd {
  name: string;
  symbol: string;
}

export interface Mop {
  name: string;
  symbol: string;
}

export interface Cuc {
  name: string;
  symbol: string;
}

export interface Cup {
  name: string;
  symbol: string;
}

export interface Brl {
  name: string;
  symbol: string;
}

export interface Sbd {
  name: string;
  symbol: string;
}

export interface Jmd {
  name: string;
  symbol: string;
}

export interface Tzs {
  name: string;
  symbol: string;
}

export interface Bob {
  name: string;
  symbol: string;
}

export interface Mnt {
  name: string;
  symbol: string;
}

export interface Tnd {
  name: string;
  symbol: string;
}

export interface Syp {
  name: string;
  symbol: string;
}

export interface Clp {
  name: string;
  symbol: string;
}

export interface Azn {
  name: string;
  symbol: string;
}

export interface Krw {
  name: string;
  symbol: string;
}

export interface Ghs {
  name: string;
  symbol: string;
}

export interface Dkk {
  name: string;
  symbol: string;
}

export interface Ang {
  name: string;
  symbol: string;
}

export interface Chf {
  name: string;
  symbol: string;
}

export interface Mkd2 {
  name: string;
  symbol: string;
}

export interface Ssp {
  name: string;
  symbol: string;
}

export interface Htg {
  name: string;
  symbol: string;
}

export interface Pen {
  name: string;
  symbol: string;
}

export interface Czk {
  name: string;
  symbol: string;
}

export interface Mxn {
  name: string;
  symbol: string;
}

export interface Zwl {
  name: string;
  symbol: string;
}

export interface Jpy {
  name: string;
  symbol: string;
}

export interface Scr {
  name: string;
  symbol: string;
}

export interface All {
  name: string;
  symbol: string;
}

export interface Mdl {
  name: string;
  symbol: string;
}

export interface Gtq {
  name: string;
  symbol: string;
}

export interface Bgn {
  name: string;
  symbol: string;
}

export interface Pyg {
  name: string;
  symbol: string;
}

export interface Ern {
  name: string;
  symbol: string;
}

export interface Sdg {
  name: string;
  symbol: string;
}

export interface Cop {
  name: string;
  symbol: string;
}

export interface Ngn {
  name: string;
  symbol: string;
}

export interface Npr {
  name: string;
  symbol: string;
}

export interface Bnd {
  name: string;
  symbol: string;
}

export interface Sgd {
  name: string;
  symbol: string;
}

export interface Bsd {
  name: string;
  symbol: string;
}

export interface Lrd {
  name: string;
  symbol: string;
}

export interface Ron2 {
  name: string;
  symbol: string;
}

export interface Aed {
  name: string;
  symbol: string;
}

export interface Bwp {
  name: string;
  symbol: string;
}

export interface Cve {
  name: string;
  symbol: string;
}

export interface Top {
  name: string;
  symbol: string;
}

export interface Afn {
  name: string;
  symbol: string;
}

export interface Fkp {
  name: string;
  symbol: string;
}

export interface Ckd {
  name: string;
  symbol: string;
}

export interface Huf {
  name: string;
  symbol: string;
}

export interface Thb {
  name: string;
  symbol: string;
}

export interface Mvr {
  name: string;
  symbol: string;
}

export interface Vnd {
  name: string;
  symbol: string;
}

export interface Amd {
  name: string;
  symbol: string;
}

export interface Pkr {
  name: string;
  symbol: string;
}

export interface Rub {
  name: string;
  symbol: string;
}

export interface Nio {
  name: string;
  symbol: string;
}

export interface Pgk {
  name: string;
  symbol: string;
}

export interface Uyu {
  name: string;
  symbol: string;
}

export interface Khr {
  name: string;
  symbol: string;
}

export interface Etb {
  name: string;
  symbol: string;
}

export interface Kid {
  name: string;
  symbol: string;
}

export interface Btn {
  name: string;
  symbol: string;
}

export interface Inr {
  name: string;
  symbol: string;
}

export interface Dop {
  name: string;
  symbol: string;
}

export interface Srd {
  name: string;
  symbol: string;
}

export interface Bdt {
  name: string;
  symbol: string;
}

export interface Bbd {
  name: string;
  symbol: string;
}

export interface Kpw {
  name: string;
  symbol: string;
}

export interface Php {
  name: string;
  symbol: string;
}

export interface Idr {
  name: string;
  symbol: string;
}

export interface Rwf {
  name: string;
  symbol: string;
}

export interface Mga {
  name: string;
  symbol: string;
}

export interface Hkd {
  name: string;
  symbol: string;
}

export interface Wst {
  name: string;
  symbol: string;
}

export interface Fok {
  name: string;
  symbol: string;
}

export interface Sek {
  name: string;
  symbol: string;
}

export interface Mzn {
  name: string;
  symbol: string;
}

export interface Uzs {
  name: string;
  symbol: string;
}

export interface Uah {
  name: string;
  symbol: string;
}

export interface Bzd {
  name: string;
  symbol: string;
}

export interface Shp {
  name: string;
  symbol: string;
}

export interface Ggp {
  name: string;
  symbol: string;
}

export interface Languages {
  fra?: string;
  kat?: string;
  bis?: string;
  eng?: string;
  kir?: string;
  rus?: string;
  zho?: string;
  tvl?: string;
  ara?: string;
  zdj?: string;
  bos?: string;
  hrv?: string;
  srp?: string;
  som?: string;
  lav?: string;
  nld?: string;
  sot?: string;
  spa?: string;
  swa?: string;
  tur?: string;
  fij?: string;
  hif?: string;
  nrf?: string;
  ssw?: string;
  tgk?: string;
  mri?: string;
  nzs?: string;
  bel?: string;
  kon?: string;
  lin?: string;
  lua?: string;
  nya?: string;
  arc?: string;
  ckb?: string;
  niu?: string;
  por?: string;
  fas?: string;
  lao?: string;
  sin?: string;
  tam?: string;
  pap?: string;
  ber?: string;
  mey?: string;
  est?: string;
  deu?: string;
  ltz?: string;
  afr?: string;
  her?: string;
  hgm?: string;
  kwn?: string;
  loz?: string;
  ndo?: string;
  tsn?: string;
  sqi?: string;
  mya?: string;
  heb?: string;
  grn?: string;
  msa?: string;
  slk?: string;
  run?: string;
  tuk?: string;
  nbl?: string;
  nso?: string;
  tso?: string;
  ven?: string;
  xho?: string;
  zul?: string;
  kaz?: string;
  pol?: string;
  ita?: string;
  smo?: string;
  nor?: string;
  glv?: string;
  mfe?: string;
  isl?: string;
  ell?: string;
  nno?: string;
  nob?: string;
  smi?: string;
  jam?: string;
  aym?: string;
  que?: string;
  mon?: string;
  aze?: string;
  kor?: string;
  dan?: string;
  cat?: string;
  gsw?: string;
  roh?: string;
  mkd?: string;
  hat?: string;
  pov?: string;
  ces?: string;
  fin?: string;
  swe?: string;
  bwg?: string;
  kck?: string;
  khi?: string;
  ndc?: string;
  nde?: string;
  sna?: string;
  toi?: string;
  zib?: string;
  eus?: string;
  glc?: string;
  jpn?: string;
  crs?: string;
  ron?: string;
  bul?: string;
  tir?: string;
  cnr?: string;
  nep?: string;
  sag?: string;
  cal?: string;
  cha?: string;
  lit?: string;
  ton?: string;
  prs?: string;
  pus?: string;
  nau?: string;
  rar?: string;
  hun?: string;
  slv?: string;
  lat?: string;
  mlt?: string;
  mah?: string;
  tha?: string;
  gle?: string;
  div?: string;
  vie?: string;
  hye?: string;
  urd?: string;
  tet?: string;
  hmo?: string;
  tpi?: string;
  khm?: string;
  amh?: string;
  gil?: string;
  dzo?: string;
  ben?: string;
  kal?: string;
  pau?: string;
  pih?: string;
  fil?: string;
  hin?: string;
  ind?: string;
  kin?: string;
  mlg?: string;
  fao?: string;
  uzb?: string;
  ukr?: string;
  bjz?: string;
  nfr?: string;
  tkl?: string;
}

export type APIError = {
  error: string;
};

/* Alternative: 

export interface Welcome8 {
    flags:      Flags;
    name:       Name;
    currencies: { [key: string]: Currency };
    capital:    string[];
    region:     Region;
    languages:  { [key: string]: string };
}

export interface Currency {
    name:   string;
    symbol: string;
}

export interface Flags {
    png: string;
    svg: string;
    alt: string;
}

export interface Name {
    common:     string;
    official:   string;
    nativeName: { [key: string]: NativeName };
}

export interface NativeName {
    official: string;
    common:   string;
}

export enum Region { // ENUM!!
    Africa = "Africa",
    Americas = "Americas",
    Antarctic = "Antarctic",
    Asia = "Asia",
    Europe = "Europe",
    Oceania = "Oceania",
}

*/
