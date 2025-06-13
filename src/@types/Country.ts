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
