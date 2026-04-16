const IMAGE_REPO_BASE_URL =
  "https://raw.githubusercontent.com/natnaelasnake16-maker/impala-communication-images/main";

const asset = (path: string) => `${IMAGE_REPO_BASE_URL}/${path}`;
const archive = (path: string) => asset(`archive/${path}`);
const clientLogo = (slug: string, name: string) => ({
  slug,
  name,
  logoUrl: asset(`site/clients/${slug}.png`),
  alt: `${name} logo`,
});

export interface ClientLogo {
  alt: string;
  logoUrl: string;
  name: string;
  slug: string;
}

export const imageRepoBaseUrl = IMAGE_REPO_BASE_URL;

export const clientLogos = {
  amref: clientLogo("amref", "AMREF"),
  "african-union": clientLogo("african-union", "African Union"),
  "bill-and-melinda-gates-foundation": clientLogo(
    "bill-and-melinda-gates-foundation",
    "Bill & Melinda Gates Foundation",
  ),
  cirht: clientLogo("cirht", "CIRHT"),
  dkt: clientLogo("dkt", "DKT"),
  ecx: clientLogo("ecx", "ECX"),
  entro: clientLogo("entro", "ENTRO"),
  "ethiopian-airlines": clientLogo("ethiopian-airlines", "Ethiopian Airlines"),
  "european-union": clientLogo("european-union", "European Union"),
  ilo: clientLogo("ilo", "ILO"),
  lonadd: clientLogo("lonadd", "LonAdd"),
  "nile-basin-initiative": clientLogo(
    "nile-basin-initiative",
    "Nile Basin Initiative",
  ),
  "save-the-children": clientLogo("save-the-children", "Save the Children"),
  technoserve: clientLogo("technoserve", "TechnoServe"),
  unicef: clientLogo("unicef", "UNICEF"),
  who: clientLogo("who", "WHO"),
  "world-bank": clientLogo("world-bank", "World Bank"),
  "zemen-bank": clientLogo("zemen-bank", "Zemen Bank"),
} satisfies Record<string, ClientLogo>;

type ClientSlug = keyof typeof clientLogos;

const pickClients = (slugs: ClientSlug[]) => slugs.map((slug) => clientLogos[slug]);

export const homeTickerClients = pickClients([
  "unicef",
  "world-bank",
  "ilo",
  "amref",
  "african-union",
  "european-union",
  "ethiopian-airlines",
  "who",
  "entro",
  "zemen-bank",
  "cirht",
]);

export const featuredClientStrip = pickClients([
  "world-bank",
  "african-union",
  "who",
  "unicef",
  "european-union",
  "ethiopian-airlines",
]);

export const clientGroups = [
  {
    title: "Global Development Partners",
    clients: pickClients([
      "world-bank",
      "who",
      "european-union",
      "bill-and-melinda-gates-foundation",
      "ilo",
      "unicef",
    ]),
  },
  {
    title: "Regional & Institutional Partners",
    clients: pickClients([
      "african-union",
      "nile-basin-initiative",
      "ecx",
      "ethiopian-airlines",
      "entro",
    ]),
  },
  {
    title: "NGOs & Impact Organizations",
    clients: pickClients([
      "amref",
      "save-the-children",
      "dkt",
      "technoserve",
      "cirht",
    ]),
  },
  {
    title: "Private Sector & Strategic Clients",
    clients: pickClients(["zemen-bank", "lonadd"]),
  },
];

export const homeImages = {
  hero: archive("home-page/colaborate.jpg"),
  whyImpala: {
    collaborativePartnerships: archive("home-page/women.jpg"),
    culturalSensitivity: archive("home-page/23309275930-5dc32a26db-o-scaled.jpg"),
    drivingSocialChange: archive(
      "home-page/boga-ethiopian-women-with-children.jpg",
    ),
    innovativeApproach: archive("home-page/machine.jpg"),
    messageDevelopment: archive("home-page/story.jpeg"),
    prStrategy: archive("home-page/important.jpg"),
  },
  priorities: {
    climateChange: archive("our-works/nature-photo.jpg"),
    communityDevelopment: archive("home-page/older-woman-and-manfacture.jpg"),
    empoweringWomen: archive(
      "gender-social-impact/screenshot-2026-03-15-at-18-05-01.png",
    ),
    genderEquality: archive(
      "gender-social-impact/screenshot-2026-03-15-at-18-04-46.png",
    ),
    youthEmployment: archive("home-page/youth.jpg"),
  },
  featuredWork: {
    michuCirht: archive("our-works/michu.jpg"),
    rohaMedicalCampus: archive("our-works/roha-image.webp"),
    worldBank: archive("our-works/world-bank-hall-led.jpg"),
  },
};

export const whoWeAreImages = {
  about: archive("who-we-are/bw-image.jpg"),
  hero: archive("who-we-are/impala-home.jpg"),
  visualStrip: [
    archive("who-we-are/22977935673-6f69e9de57-o-980x653.jpg"),
    archive("who-we-are/img-2659-scaled.jpg"),
    archive("who-we-are/img-3238-scaled.jpg"),
    archive("who-we-are/filming.jpg"),
  ],
};

export const ourServicesImages = {
  communityCollage: [
    archive("home-page/story.jpeg"),
    archive("home-page/colaborate.jpg"),
    archive("who-we-are/img-3238-scaled.jpg"),
    archive("home-page/sport-show-national.jpg"),
  ],
};

export const ourWorkImages = {
  caseStudies: {
    awib: [
      archive("our-works/awib-woe-scaled.jpg"),
      archive("our-works/woe-2023-crystal-photo-1.png"),
    ],
    esdp: [
      archive("our-works/corporate.jpg"),
      archive("our-works/group-478.png"),
    ],
    iwmi: [
      archive("our-works/iwmi.jpg"),
      archive("our-works/field-project.jpg"),
    ],
    roha: [
      archive("our-works/roha-image.webp"),
      archive("who-we-are/img-1445-scaled.jpg"),
    ],
  },
  heroMosaic: [
    archive("our-works/hero-for-our-wrotk-scaled.jpg"),
    archive("our-works/nature-photo.jpg"),
    archive("our-works/through-her-eyes.jpg"),
    archive("our-works/field-project.jpg"),
  ],
};

export const getInTouchImages = {
  hero: archive("who-we-are/camera-hold.jpg"),
  quote: archive("home-page/colaborate.jpg"),
};
