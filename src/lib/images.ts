const REMOTE_IMAGE_REPO_BASE_URL =
  import.meta.env.VITE_IMAGE_REPO_BASE_URL ??
  "https://raw.githubusercontent.com/natnaelasnake16-maker/impala-communication-images/main";

const localAssetModules = import.meta.glob(
  "../../impala-communication-images/**/*.{png,jpg,jpeg,webp,avif,gif,svg}",
  { eager: true, import: "default" },
) as Record<string, string>;

const LOCAL_ASSET_PREFIX = "../../impala-communication-images/";

const localAssetUrls = Object.fromEntries(
  Object.entries(localAssetModules).map(([filePath, assetUrl]) => [
    filePath.replace(LOCAL_ASSET_PREFIX, ""),
    assetUrl,
  ]),
) as Record<string, string>;

const isLocalAssetRuntime = () => {
  return import.meta.env.DEV;
};

const asset = (path: string) => {
  if (isLocalAssetRuntime()) {
    return localAssetUrls[path] ?? `${REMOTE_IMAGE_REPO_BASE_URL}/${path}`;
  }

  return `${REMOTE_IMAGE_REPO_BASE_URL}/${path}`;
};
const archive = (path: string) => asset(`archive/${path}`);
const publicAsset = (path: string) => `/${path}`;
const clientLogo = (slug: string, name: string, fileName = `${slug}.png`) => ({
  slug,
  name,
  logoUrl: asset(`site/clients/${fileName}`),
  alt: `${name} logo`,
});

export interface ClientLogo {
  alt: string;
  logoUrl: string;
  name: string;
  slug: string;
}

export const imageRepoBaseUrl = REMOTE_IMAGE_REPO_BASE_URL;

export const brandAssets = {
  impalaLogo: asset("site/branding/impala-logo.png"),
};

export const clientLogos = {
  "african-business-magazine": {
    slug: "african-business-magazine",
    name: "African Business Magazine",
    logoUrl: publicAsset("work-logos/african-business-magazine.png"),
    alt: "African Business Magazine logo",
  },
  amref: clientLogo("amref", "AMREF"),
  "african-union": clientLogo("african-union", "African Union"),
  awib: {
    slug: "awib",
    name: "AWiB",
    logoUrl: publicAsset("work-logos/awib.png"),
    alt: "AWiB logo",
  },
  "bill-and-melinda-gates-foundation": clientLogo(
    "bill-and-melinda-gates-foundation",
    "Bill & Melinda Gates Foundation",
    "bill-and-melinda-gates-foundation.jpeg",
  ),
  cirht: clientLogo("cirht", "CIRHT"),
  cmag: {
    slug: "cmag",
    name: "CMAG",
    logoUrl: publicAsset("work-logos/cmag-branding.png"),
    alt: "CMAG logo",
  },
  dkt: clientLogo("dkt", "DKT", "dkt.jpg"),
  ecx: clientLogo("ecx", "ECX", "ecx.jpg"),
  entro: clientLogo("entro", "ENTRO"),
  esdp: {
    slug: "esdp",
    name: "ESDP",
    logoUrl: publicAsset("work-logos/esdp.png"),
    alt: "ESDP logo",
  },
  "ethiopian-airlines": clientLogo("ethiopian-airlines", "Ethiopian Airlines"),
  "european-union": clientLogo(
    "european-union",
    "European Union",
    "european-union.jpeg",
  ),
  acfif: {
    slug: "acfif",
    name: "Africa Cocoa Finance & Investment Forum",
    logoUrl: publicAsset("work-logos/acfif.jpeg"),
    alt: "Africa Cocoa Finance & Investment Forum logo",
  },
  haset: {
    slug: "haset",
    name: "Haset",
    logoUrl: publicAsset("work-logos/haset.png"),
    alt: "Haset logo",
  },
  ilo: clientLogo("ilo", "ILO", "ilo.webp"),
  iwmi: {
    slug: "iwmi",
    name: "IWMI",
    logoUrl: archive("clients-logo/iwmi.png"),
    alt: "IWMI logo",
  },
  lonadd: clientLogo("lonadd", "LonAdd"),
  "nile-basin-initiative": clientLogo(
    "nile-basin-initiative",
    "Nile Basin Initiative",
    "nile-basin-initiative.svg",
  ),
  ewla: {
    slug: "ewla",
    name: "EWLA",
    logoUrl: archive("clients-logo/ewla-logo.jpg"),
    alt: "EWLA logo",
  },
  "university-michigan": {
    slug: "university-michigan",
    name: "University of Michigan",
    logoUrl: archive("clients-logo/university-of-michigan.png"),
    alt: "University of Michigan logo",
  },
  "save-the-children": clientLogo("save-the-children", "Save the Children"),
  technoserve: clientLogo("technoserve", "TechnoServe"),
  unicef: clientLogo("unicef", "UNICEF", "unicef.jpeg"),
  who: clientLogo("who", "WHO"),
  "world-bank": clientLogo("world-bank", "World Bank"),
  "zemen-bank": clientLogo("zemen-bank", "Zemen Bank", "zemen-bank.jpeg"),
} satisfies Record<string, ClientLogo>;

type ClientSlug = keyof typeof clientLogos;

const pickClients = (slugs: ClientSlug[]) => slugs.map((slug) => clientLogos[slug]);

export const homeTickerClients = pickClients([
  "unicef",
  "world-bank",
  "ilo",
  "amref",
  "awib",
  "african-business-magazine",
  "cmag",
  "university-michigan",
  "ewla",
  "iwmi",
  "lonadd",
  "esdp",
  "african-union",
  "european-union",
  "ethiopian-airlines",
  "who",
  "entro",
  "acfif",
  "haset",
  "zemen-bank",
  "cirht",
]);

export const featuredClientStrip = pickClients([
  "awib",
  "african-business-magazine",
  "cmag",
  "lonadd",
  "acfif",
  "university-michigan",
  "esdp",
  "haset",
  "world-bank",
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

export const clientWallClients = pickClients([
  "awib",
  "african-business-magazine",
  "cmag",
  "esdp",
  "acfif",
  "university-michigan",
  "haset",
  "lonadd",
  "world-bank",
  "who",
  "european-union",
  "bill-and-melinda-gates-foundation",
  "ilo",
  "unicef",
  "african-union",
  "nile-basin-initiative",
  "ewla",
  "iwmi",
  "ecx",
  "ethiopian-airlines",
  "entro",
  "amref",
  "save-the-children",
  "dkt",
  "technoserve",
  "cirht",
  "zemen-bank",
]);

export const homeImages = {
  hero: archive("home-page/Hero.png"),
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
    awib: archive("our-works/awib-woe-scaled.jpg"),
    michuCirht: archive("our-works/michu.jpg"),
    rohaMedicalCampus: archive("our-works/roha-image.webp"),
    worldBank: archive("our-works/world-bank-hall-led.jpg"),
  },
};

export const whoWeAreImages = {
  about: archive("who-we-are/bw-image.jpg"),
  hero: archive("who-we-are/impala-home.jpg"),
  meronCEO: "https://raw.githubusercontent.com/natnaelasnake16-maker/impala-communication-images/main/site/leadership/meron-feleke-ceo.jpeg",
  visualStrip: [
    archive("who-we-are/22977935673-6f69e9de57-o-980x653.jpg"),
    archive("who-we-are/img-2659-scaled.jpg"),
    archive("who-we-are/img-3238-scaled.jpg"),
    archive("who-we-are/filming.jpg"),
  ],
};


export const ourServicesImages = {
  hero: "https://github.com/natnaelasnake16-maker/impala-communication-images/raw/98e5341d4234770bcd8375c15075d829ca727cfc/archive/12771984205_8d3975e096_b.jpg",
  successAlone: archive("home-page/img-4147-scaled.jpg"),
  communityCollage: [
    archive("home-page/story.jpeg"),
    archive("home-page/colaborate.jpg"),
    archive("who-we-are/img-3238-scaled.jpg"),
    archive("who-we-are/22977935673-6f69e9de57-o-980x653.jpg"),
  ],
  serviceCards: [
    archive("home-page/story.jpeg"),
    archive("home-page/important.jpg"),
    archive("who-we-are/img-3238-scaled.jpg"),
    archive("our-works/world-bank-hall-led.jpg"),
    archive("who-we-are/filming.jpg"),
    archive("home-page/sport-show-national.jpg"),
    archive("home-page/colaborate.jpg"),
    archive("who-we-are/camera-hold.jpg"),
    archive("home-page/machine.jpg"),
  ],
};

export const ourWorkImages = {
  caseStudies: {
    awib: [
      archive("our-works/awib-woe-scaled.jpg"),
      archive("our-works/woe-2023-crystal-photo-1.png"),
    ],
    cmag: [publicAsset("work-images/cmag-newsletter.jpg")],
    esdp: [
      archive("our-works/corporate.jpg"),
      archive("our-works/group-478.png"),
    ],
    acfif: [publicAsset("work-logos/acfif.jpeg")],
    iwmi: [
      archive("our-works/iwmi.jpg"),
      archive("our-works/field-project.jpg"),
    ],
    michu: [
      archive("our-works/michu.jpg"),
      archive("our-works/20180126-michu-029-scaled.jpg"),
      archive("our-works/20190411-michu-training-001-web-1-scaled.jpg"),
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

export const brandMarks = {
  acsis: archive("clients-logo/acsis-logo.png"),
  africanBusiness: asset("site/work-logos/african-business-magazine.png"),
  awib: archive("clients-logo/awib-logo.png"),
  cirht: archive("clients-logo/cirht.png"),
  cmag: publicAsset("work-logos/cmag-branding.png"),
  dereja: publicAsset("work-logos/dereja-mastercard-foundation.jpeg"),
  esdp: archive("clients-logo/esdp-logo-1.png"),
  ewla: archive("clients-logo/ewla-logo.jpg"),
  acfif: publicAsset("work-logos/acfif.jpeg"),
  haset: publicAsset("work-logos/haset.png"),
  iwmi: archive("clients-logo/iwmi.png"),
  lonadd: archive("clients-logo/LonAdd.png"),
  roha: archive("clients-logo/roha-medical-campus-plc.webp"),
  ukBlackBusiness: publicAsset(
    "work-logos/uk-black-business-entrepreneurs-conference.png",
  ),
  universityMichigan: archive("clients-logo/university-of-michigan.png"),
  worldBank: archive("clients-logo/worldbank.png"),
};

export const getInTouchImages = {
  hero: archive("who-we-are/camera-hold.jpg"),
  quote: archive("home-page/colaborate.jpg"),
};
