import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A ISO 8601 compliant datetime value */
  DateTime: any;
  ItemId: any;
  MetaTagAttributes: any;
  /** Represents `true` or `false` values. */
  BooleanType: any;
  UploadId: any;
  /** Represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  IntType: any;
  CustomData: any;
  /** Represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). */
  FloatType: any;
  JsonField: any;
};

/** The query root for this schema */
export type IQuery = {
  __typename?: 'Query';
  /** Returns meta information regarding a record collection */
  _allLandingpagesMeta: ICollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allProductgroupsMeta: ICollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allProduktsMeta: ICollectionMetadata;
  /** Returns meta information regarding an assets collection */
  _allUploadsMeta?: Maybe<ICollectionMetadata>;
  /** Returns the single instance record */
  _site: ISite;
  /** Returns a collection of records */
  allLandingpages: Array<ILandingpageRecord>;
  /** Returns a collection of records */
  allProductgroups: Array<IProductgroupRecord>;
  /** Returns a collection of records */
  allProdukts: Array<IProduktRecord>;
  /** Returns a collection of assets */
  allUploads: Array<IFileField>;
  /** Returns a specific record */
  landingpage?: Maybe<ILandingpageRecord>;
  /** Returns a specific record */
  productgroup?: Maybe<IProductgroupRecord>;
  /** Returns a specific record */
  produkt?: Maybe<IProduktRecord>;
  /** Returns the single instance record */
  produkte?: Maybe<IProdukteRecord>;
  /** Returns a specific asset */
  upload?: Maybe<IFileField>;
};

/** The query root for this schema */
export type IQuery_AllLandingpagesMetaArgs = {
  locale?: Maybe<ISiteLocale>;
  filter?: Maybe<ILandingpageModelFilter>;
};

/** The query root for this schema */
export type IQuery_AllProductgroupsMetaArgs = {
  locale?: Maybe<ISiteLocale>;
  filter?: Maybe<IProductgroupModelFilter>;
};

/** The query root for this schema */
export type IQuery_AllProduktsMetaArgs = {
  locale?: Maybe<ISiteLocale>;
  filter?: Maybe<IProduktModelFilter>;
};

/** The query root for this schema */
export type IQuery_AllUploadsMetaArgs = {
  locale?: Maybe<ISiteLocale>;
  filter?: Maybe<IUploadFilter>;
};

/** The query root for this schema */
export type IQuery_SiteArgs = {
  locale?: Maybe<ISiteLocale>;
};

/** The query root for this schema */
export type IQueryAllLandingpagesArgs = {
  locale?: Maybe<ISiteLocale>;
  skip?: Maybe<Scalars['IntType']>;
  first?: Maybe<Scalars['IntType']>;
  filter?: Maybe<ILandingpageModelFilter>;
  orderBy?: Maybe<Array<Maybe<ILandingpageModelOrderBy>>>;
};

/** The query root for this schema */
export type IQueryAllProductgroupsArgs = {
  locale?: Maybe<ISiteLocale>;
  skip?: Maybe<Scalars['IntType']>;
  first?: Maybe<Scalars['IntType']>;
  filter?: Maybe<IProductgroupModelFilter>;
  orderBy?: Maybe<Array<Maybe<IProductgroupModelOrderBy>>>;
};

/** The query root for this schema */
export type IQueryAllProduktsArgs = {
  locale?: Maybe<ISiteLocale>;
  skip?: Maybe<Scalars['IntType']>;
  first?: Maybe<Scalars['IntType']>;
  filter?: Maybe<IProduktModelFilter>;
  orderBy?: Maybe<Array<Maybe<IProduktModelOrderBy>>>;
};

/** The query root for this schema */
export type IQueryAllUploadsArgs = {
  locale?: Maybe<ISiteLocale>;
  skip?: Maybe<Scalars['IntType']>;
  first?: Maybe<Scalars['IntType']>;
  filter?: Maybe<IUploadFilter>;
  orderBy?: Maybe<Array<Maybe<IUploadOrderBy>>>;
};

/** The query root for this schema */
export type IQueryLandingpageArgs = {
  locale?: Maybe<ISiteLocale>;
  filter?: Maybe<ILandingpageModelFilter>;
  orderBy?: Maybe<Array<Maybe<ILandingpageModelOrderBy>>>;
};

/** The query root for this schema */
export type IQueryProductgroupArgs = {
  locale?: Maybe<ISiteLocale>;
  filter?: Maybe<IProductgroupModelFilter>;
  orderBy?: Maybe<Array<Maybe<IProductgroupModelOrderBy>>>;
};

/** The query root for this schema */
export type IQueryProduktArgs = {
  locale?: Maybe<ISiteLocale>;
  filter?: Maybe<IProduktModelFilter>;
  orderBy?: Maybe<Array<Maybe<IProduktModelOrderBy>>>;
};

/** The query root for this schema */
export type IQueryProdukteArgs = {
  locale?: Maybe<ISiteLocale>;
};

/** The query root for this schema */
export type IQueryUploadArgs = {
  locale?: Maybe<ISiteLocale>;
  filter?: Maybe<IUploadFilter>;
  orderBy?: Maybe<Array<Maybe<IUploadOrderBy>>>;
};

/** Record of type Produkt (produkt) */
export type IProduktRecord = {
  __typename?: 'ProduktRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _updatedAt: Scalars['DateTime'];
  bild?: Maybe<IFileField>;
  createdAt: Scalars['DateTime'];
  highlight?: Maybe<Scalars['BooleanType']>;
  id: Scalars['ItemId'];
  newsIdentifier?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['String']>;
  teaser?: Maybe<Scalars['String']>;
  titel?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

/** Record of type Produkt (produkt) */
export type IProduktRecord_SeoMetaTagsArgs = {
  locale?: Maybe<ISiteLocale>;
};

/** Record of type Produkt (produkt) */
export type IProduktRecordTeaserArgs = {
  markdown?: Maybe<Scalars['Boolean']>;
};

export type ITag = {
  __typename?: 'Tag';
  attributes?: Maybe<Scalars['MetaTagAttributes']>;
  content?: Maybe<Scalars['String']>;
  tag: Scalars['String'];
};

export enum ISiteLocale {
  En = 'en',
}

export enum IItemStatus {
  Draft = 'draft',
  Updated = 'updated',
  Published = 'published',
}

export type IFileField = {
  __typename?: 'FileField';
  _createdAt: Scalars['DateTime'];
  _updatedAt: Scalars['DateTime'];
  alt?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  basename: Scalars['String'];
  blurUpThumb?: Maybe<Scalars['String']>;
  blurhash?: Maybe<Scalars['String']>;
  colors: Array<Maybe<IColorField>>;
  copyright?: Maybe<Scalars['String']>;
  customData?: Maybe<Scalars['CustomData']>;
  exifInfo?: Maybe<Scalars['CustomData']>;
  filename: Scalars['String'];
  focalPoint?: Maybe<IFocalPoint>;
  format: Scalars['String'];
  height?: Maybe<Scalars['IntType']>;
  id: Scalars['UploadId'];
  mimeType: Scalars['String'];
  notes?: Maybe<Scalars['String']>;
  responsiveImage?: Maybe<IResponsiveImage>;
  size: Scalars['IntType'];
  smartTags: Array<Maybe<Scalars['String']>>;
  tags: Array<Maybe<Scalars['String']>>;
  title?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  video?: Maybe<IUploadVideoField>;
  width?: Maybe<Scalars['IntType']>;
};

export type IFileFieldAltArgs = {
  locale?: Maybe<ISiteLocale>;
};

export type IFileFieldBlurUpThumbArgs = {
  punch?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<IImgixParams>;
};

export type IFileFieldCustomDataArgs = {
  locale?: Maybe<ISiteLocale>;
};

export type IFileFieldFocalPointArgs = {
  locale?: Maybe<ISiteLocale>;
};

export type IFileFieldResponsiveImageArgs = {
  imgixParams?: Maybe<IImgixParams>;
  sizes?: Maybe<Scalars['String']>;
};

export type IFileFieldTitleArgs = {
  locale?: Maybe<ISiteLocale>;
};

export type IFileFieldUrlArgs = {
  imgixParams?: Maybe<IImgixParams>;
};

export type IColorField = {
  __typename?: 'ColorField';
  alpha?: Maybe<Scalars['IntType']>;
  blue?: Maybe<Scalars['IntType']>;
  green?: Maybe<Scalars['IntType']>;
  hex?: Maybe<Scalars['String']>;
  red?: Maybe<Scalars['IntType']>;
};

export type IFocalPoint = {
  __typename?: 'focalPoint';
  x?: Maybe<Scalars['FloatType']>;
  y?: Maybe<Scalars['FloatType']>;
};

export type IImgixParams = {
  /**
   * Aspect Ratio
   *
   * Specifies an aspect ratio to maintain when resizing and cropping the image
   *
   * Depends on: `fit=crop`
   */
  ar?: Maybe<Scalars['String']>;
  /**
   * Automatic
   *
   * Applies automatic enhancements to images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/auto)
   */
  auto?: Maybe<Array<IImgixParamsAuto>>;
  /**
   * Background Color
   *
   * Colors the background of padded and partially-transparent images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/bg)
   */
  bg?: Maybe<Scalars['String']>;
  /**
   * Blend Align
   *
   * Changes the blend alignment relative to the parent image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-align)
   */
  blendAlign?: Maybe<Array<IImgixParamsBlendAlign>>;
  /**
   * Blend Alpha
   *
   * Changes the alpha of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-alpha)
   */
  blendAlpha?: Maybe<Scalars['IntType']>;
  /**
   * Blend Color
   *
   * Specifies a color to use when applying the blend.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-color)
   */
  blendColor?: Maybe<Scalars['String']>;
  /**
   * Blend Crop
   *
   * Specifies the type of crop for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-crop)
   */
  blendCrop?: Maybe<Array<IImgixParamsBlendCrop>>;
  /**
   * Blend Fit
   *
   * Specifies the fit mode for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-fit)
   */
  blendFit?: Maybe<IImgixParamsBlendFit>;
  /**
   * Blend Height
   *
   * Adjusts the height of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-h)
   */
  blendH?: Maybe<Scalars['FloatType']>;
  /**
   * Blend Mode
   *
   * Sets the blend mode for a blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-mode)
   */
  blendMode?: Maybe<IImgixParamsBlendMode>;
  /**
   * Blend Padding
   *
   * Applies padding to the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-pad)
   */
  blendPad?: Maybe<Scalars['IntType']>;
  /**
   * Blend Size
   *
   * Adjusts the size of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-size)
   */
  blendSize?: Maybe<IImgixParamsBlendSize>;
  /**
   * Blend Width
   *
   * Adjusts the width of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-w)
   */
  blendW?: Maybe<Scalars['FloatType']>;
  /**
   * Blend X Position
   *
   * Adjusts the x-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-x)
   */
  blendX?: Maybe<Scalars['IntType']>;
  /**
   * Blend Y Position
   *
   * Adjusts the y-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-y)
   */
  blendY?: Maybe<Scalars['IntType']>;
  /**
   * Blend
   *
   * Specifies the location of the blend image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend)
   */
  blend?: Maybe<Scalars['String']>;
  /**
   * Gaussian Blur
   *
   * Applies a gaussian blur to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/blur)
   */
  blur?: Maybe<Scalars['IntType']>;
  /**
   * Border Bottom
   *
   * Sets bottom border of an image.
   *
   * Depends on: `border`
   */
  borderBottom?: Maybe<Scalars['IntType']>;
  /**
   * Border Left
   *
   * Sets left border of an image.
   *
   * Depends on: `border`
   */
  borderLeft?: Maybe<Scalars['IntType']>;
  /**
   * Inner Border Radius
   *
   * Sets the inner radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner)
   */
  borderRadiusInner?: Maybe<Scalars['String']>;
  /**
   * Outer Border Radius
   *
   * Sets the outer radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-radius)
   */
  borderRadius?: Maybe<Scalars['String']>;
  /**
   * Border Right
   *
   * Sets right border of an image.
   *
   * Depends on: `border`
   */
  borderRight?: Maybe<Scalars['IntType']>;
  /**
   * Border Top
   *
   * Sets top border of an image.
   *
   * Depends on: `border`
   */
  borderTop?: Maybe<Scalars['IntType']>;
  /**
   * Border Size & Color
   *
   * Applies a border to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border)
   */
  border?: Maybe<Scalars['String']>;
  /**
   * Brightness
   *
   * Adjusts the brightness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/bri)
   */
  bri?: Maybe<Scalars['IntType']>;
  /**
   * Client Hints
   *
   * Sets one or more Client-Hints headers
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/ch)
   */
  ch?: Maybe<Array<IImgixParamsCh>>;
  /**
   * Chroma Subsampling
   *
   * Specifies the output chroma subsampling rate.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/chromasub)
   */
  chromasub?: Maybe<Scalars['IntType']>;
  /**
   * Color Quantization
   *
   * Limits the number of unique colors in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/colorquant)
   */
  colorquant?: Maybe<Scalars['IntType']>;
  /**
   * Palette Color Count
   *
   * Specifies how many colors to include in a palette-extraction response.
   *
   * Depends on: `palette`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/colors)
   */
  colors?: Maybe<Scalars['IntType']>;
  /**
   * Contrast
   *
   * Adjusts the contrast of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/con)
   */
  con?: Maybe<Scalars['IntType']>;
  /**
   * Mask Corner Radius
   *
   * Specifies the radius value for a rounded corner mask.
   *
   * Depends on: `mask=corners`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask/corner-radius)
   */
  cornerRadius?: Maybe<Scalars['String']>;
  /**
   * Crop Mode
   *
   * Specifies how to crop an image.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/crop)
   */
  crop?: Maybe<Array<IImgixParamsCrop>>;
  /**
   * Color Space
   *
   * Specifies the color space of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/cs)
   */
  cs?: Maybe<IImgixParamsCs>;
  /**
   * Download
   *
   * Forces a URL to use send-file in its response.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/dl)
   */
  dl?: Maybe<Scalars['String']>;
  /**
   * Dots Per Inch
   *
   * Sets the DPI value in the EXIF header.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/dpi)
   */
  dpi?: Maybe<Scalars['IntType']>;
  /**
   * Device Pixel Ratio
   *
   * Adjusts the device-pixel ratio of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/dpr)
   */
  dpr?: Maybe<Scalars['FloatType']>;
  /**
   * Duotone Alpha
   *
   * Changes the alpha of the duotone effect atop the source image.
   *
   * Depends on: `duotone`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/duotone-alpha)
   */
  duotoneAlpha?: Maybe<Scalars['IntType']>;
  /**
   * Duotone
   *
   * Applies a duotone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/duotone)
   */
  duotone?: Maybe<Scalars['String']>;
  /**
   * Exposure
   *
   * Adjusts the exposure of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/exp)
   */
  exp?: Maybe<Scalars['IntType']>;
  /**
   * Url Expiration Timestamp
   *
   * A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/expires)
   */
  expires?: Maybe<Scalars['IntType']>;
  /**
   * Face Index
   *
   * Selects a face to crop to.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/faceindex)
   */
  faceindex?: Maybe<Scalars['IntType']>;
  /**
   * Face Padding
   *
   * Adjusts padding around a selected face.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/facepad)
   */
  facepad?: Maybe<Scalars['FloatType']>;
  /**
   * Json Face Data
   *
   * Specifies that face data should be included in output when combined with `fm=json`.
   *
   * Depends on: `fm=json`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/faces)
   */
  faces?: Maybe<Scalars['IntType']>;
  /**
   * Fill Color
   *
   * Sets the fill color for images with additional space created by the fit setting
   *
   * Depends on: `fill=solid`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-color)
   */
  fillColor?: Maybe<Scalars['String']>;
  /**
   * Fill Mode
   *
   * Determines how to fill in additional space created by the fit setting
   *
   * Depends on: `fit`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill)
   */
  fill?: Maybe<IImgixParamsFill>;
  /**
   * Resize Fit Mode
   *
   * Specifies how to map the source image to the output image dimensions.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/fit)
   */
  fit?: Maybe<IImgixParamsFit>;
  /**
   * Flip Axis
   *
   * Flips an image on a specified axis.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/flip)
   */
  flip?: Maybe<IImgixParamsFlip>;
  /**
   * Output Format
   *
   * Changes the format of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/fm)
   */
  fm?: Maybe<IImgixParamsFm>;
  /**
   * Focal Point Debug
   *
   * Displays crosshairs identifying the location of the set focal point
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-debug)
   */
  fpDebug?: Maybe<Scalars['BooleanType']>;
  /**
   * Focal Point X Position
   *
   * Sets the relative horizontal value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-x)
   */
  fpX?: Maybe<Scalars['FloatType']>;
  /**
   * Focal Point Y Position
   *
   * Sets the relative vertical value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-y)
   */
  fpY?: Maybe<Scalars['FloatType']>;
  /**
   * Focal Point Zoom
   *
   * Sets the relative zoom value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-z)
   */
  fpZ?: Maybe<Scalars['IntType']>;
  /**
   * Gamma
   *
   * Adjusts the gamma of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/gam)
   */
  gam?: Maybe<Scalars['IntType']>;
  /**
   * Grid Colors
   *
   * Sets grid colors for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   */
  gridColors?: Maybe<Scalars['String']>;
  /**
   * Grid Size
   *
   * Sets grid size for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   */
  gridSize?: Maybe<Scalars['IntType']>;
  /**
   * Image Height
   *
   * Adjusts the height of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/h)
   */
  h?: Maybe<Scalars['FloatType']>;
  /**
   * Highlight
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/high)
   */
  high?: Maybe<Scalars['IntType']>;
  /**
   * Halftone
   *
   * Applies a half-tone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/htn)
   */
  htn?: Maybe<Scalars['IntType']>;
  /**
   * Hue Shift
   *
   * Adjusts the hue of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/hue)
   */
  hue?: Maybe<Scalars['IntType']>;
  /**
   * Invert
   *
   * Inverts the colors on the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/invert)
   */
  invert?: Maybe<Scalars['BooleanType']>;
  /**
   * Lossless Compression
   *
   * Specifies that the output image should be a lossless variant.
   *
   * Depends on: `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/lossless)
   */
  lossless?: Maybe<Scalars['BooleanType']>;
  /**
   * Watermark Alignment Mode
   *
   * Changes the watermark alignment relative to the parent image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-align)
   */
  markAlign?: Maybe<Array<IImgixParamsMarkAlign>>;
  /**
   * Watermark Alpha
   *
   * Changes the alpha of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-alpha)
   */
  markAlpha?: Maybe<Scalars['IntType']>;
  /**
   * Watermark Base Url
   *
   * Changes base URL of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-base)
   */
  markBase?: Maybe<Scalars['String']>;
  /**
   * Watermark Fit Mode
   *
   * Specifies the fit mode for watermark images.
   *
   * Depends on: `mark`, `markw`, `markh`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-fit)
   */
  markFit?: Maybe<IImgixParamsMarkFit>;
  /**
   * Watermark Height
   *
   * Adjusts the height of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-h)
   */
  markH?: Maybe<Scalars['FloatType']>;
  /**
   * Watermark Padding
   *
   * Applies padding to the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-pad)
   */
  markPad?: Maybe<Scalars['IntType']>;
  /**
   * Watermark Scale
   *
   * Adjusts the scale of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-scale)
   */
  markScale?: Maybe<Scalars['IntType']>;
  /**
   * Watermark Width
   *
   * Adjusts the width of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-w)
   */
  markW?: Maybe<Scalars['FloatType']>;
  /**
   * Watermark X Position
   *
   * Adjusts the x-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-x)
   */
  markX?: Maybe<Scalars['IntType']>;
  /**
   * Watermark Y Position
   *
   * Adjusts the y-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-y)
   */
  markY?: Maybe<Scalars['IntType']>;
  /**
   * Watermark Image Url
   *
   * Specifies the location of the watermark image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark)
   */
  mark?: Maybe<Scalars['String']>;
  /**
   * Mask Background Color
   *
   * Colors the background of the transparent mask area of images
   *
   * Depends on: `mask`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask/mask-bg)
   */
  maskBg?: Maybe<Scalars['String']>;
  /**
   * Mask Type
   *
   * Defines the type of mask and specifies the URL if that type is selected.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask)
   */
  mask?: Maybe<Scalars['String']>;
  /**
   * Maximum Height
   *
   * Specifies the maximum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/max-height)
   */
  maxH?: Maybe<Scalars['IntType']>;
  /**
   * Maximum Width
   *
   * Specifies the maximum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/max-width)
   */
  maxW?: Maybe<Scalars['IntType']>;
  /**
   * Minimum Height
   *
   * Specifies the minimum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/min-height)
   */
  minH?: Maybe<Scalars['IntType']>;
  /**
   * Minimum Width
   *
   * Specifies the minimum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/min-width)
   */
  minW?: Maybe<Scalars['IntType']>;
  /**
   * Monochrome
   *
   * Applies a monochrome effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/monochrome)
   */
  monochrome?: Maybe<Scalars['String']>;
  /**
   * Noise Reduction Bound
   *
   * Reduces the noise in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/noise-reduction/nr)
   */
  nr?: Maybe<Scalars['IntType']>;
  /**
   * Noise Reduction Sharpen
   *
   * Provides a threshold by which to sharpen an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/noise-reduction/nrs)
   */
  nrs?: Maybe<Scalars['IntType']>;
  /**
   * Orientation
   *
   * Changes the image orientation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/orient)
   */
  orient?: Maybe<Scalars['IntType']>;
  /**
   * Padding Bottom
   *
   * Sets bottom padding of an image.
   */
  padBottom?: Maybe<Scalars['IntType']>;
  /**
   * Padding Left
   *
   * Sets left padding of an image.
   */
  padLeft?: Maybe<Scalars['IntType']>;
  /**
   * Padding Right
   *
   * Sets right padding of an image.
   */
  padRight?: Maybe<Scalars['IntType']>;
  /**
   * Padding Top
   *
   * Sets top padding of an image.
   */
  padTop?: Maybe<Scalars['IntType']>;
  /**
   * Padding
   *
   * Pads an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad)
   */
  pad?: Maybe<Scalars['IntType']>;
  /**
   * Pdf Page Number
   *
   * Selects a page from a PDF for display.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/pdf-page-number)
   */
  page?: Maybe<Scalars['IntType']>;
  /**
   * Color Palette Extraction
   *
   * Specifies an output format for palette-extraction.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/palette)
   */
  palette?: Maybe<IImgixParamsPalette>;
  /**
   * Css Prefix
   *
   * Specifies a CSS prefix for all classes in palette-extraction.
   *
   * Depends on: `palette=css`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/prefix)
   */
  prefix?: Maybe<Scalars['String']>;
  /**
   * Pixellate
   *
   * Applies a pixelation effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/px)
   */
  px?: Maybe<Scalars['IntType']>;
  /**
   * Output Quality
   *
   * Adjusts the quality of an output image.
   *
   * Depends on: `fm=jpg`, `fm=pjpg`, `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/q)
   */
  q?: Maybe<Scalars['IntType']>;
  /**
   * Source Rectangle Region
   *
   * Crops an image to a specified rectangle.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/rect)
   */
  rect?: Maybe<Scalars['String']>;
  /**
   * Rotation
   *
   * Rotates an image by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/rot)
   */
  rot?: Maybe<Scalars['FloatType']>;
  /**
   * Saturation
   *
   * Adjusts the saturation of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/sat)
   */
  sat?: Maybe<Scalars['IntType']>;
  /**
   * Sepia Tone
   *
   * Applies a sepia effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/sepia)
   */
  sepia?: Maybe<Scalars['IntType']>;
  /**
   * Shadow
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/shad)
   */
  shad?: Maybe<Scalars['FloatType']>;
  /**
   * Sharpen
   *
   * Adjusts the sharpness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/sharp)
   */
  sharp?: Maybe<Scalars['FloatType']>;
  /**
   * Transparency
   *
   * Adds checkerboard behind images which support transparency.
   */
  transparency?: Maybe<IImgixParamsTransparency>;
  /**
   * Trim Color
   *
   * Specifies a trim color on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-color)
   */
  trimColor?: Maybe<Scalars['String']>;
  /**
   * Trim Mean Difference
   *
   * Specifies the mean difference on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-md)
   */
  trimMd?: Maybe<Scalars['FloatType']>;
  /**
   * Trim Padding
   *
   * Pads the area of the source image before trimming.
   *
   * Depends on: `trim`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-pad)
   */
  trimPad?: Maybe<Scalars['IntType']>;
  /**
   * Trim Standard Deviation
   *
   * Specifies the standard deviation on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-sd)
   */
  trimSd?: Maybe<Scalars['FloatType']>;
  /**
   * Trim Tolerance
   *
   * Specifies the tolerance on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-tol)
   */
  trimTol?: Maybe<Scalars['FloatType']>;
  /**
   * Trim Image
   *
   * Trims the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim)
   */
  trim?: Maybe<IImgixParamsTrim>;
  /**
   * Text Align
   *
   * Sets the vertical and horizontal alignment of rendered text relative to the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-align)
   */
  txtAlign?: Maybe<Array<IImgixParamsTxtAlign>>;
  /**
   * Text Clipping Mode
   *
   * Sets the clipping properties of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-clip)
   */
  txtClip?: Maybe<Array<IImgixParamsTxtClip>>;
  /**
   * Text Color
   *
   * Specifies the color of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-color)
   */
  txtColor?: Maybe<Scalars['String']>;
  /**
   * Text Fit Mode
   *
   * Specifies the fit approach for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-fit)
   */
  txtFit?: Maybe<IImgixParamsTxtFit>;
  /**
   * Text Font
   *
   * Selects a font for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-font)
   */
  txtFont?: Maybe<Scalars['String']>;
  /**
   * Text Leading
   *
   * Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/typesetting/txt-lead)
   */
  txtLead?: Maybe<Scalars['IntType']>;
  /**
   * Text Ligatures
   *
   * Controls the level of ligature substitution
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-lig)
   */
  txtLig?: Maybe<Scalars['IntType']>;
  /**
   * Text Outline Color
   *
   * Specifies a text outline color.
   *
   * Depends on: `txt`, `txtline`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-line-color)
   */
  txtLineColor?: Maybe<Scalars['String']>;
  /**
   * Text Outline
   *
   * Outlines the rendered text with a specified color.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-line)
   */
  txtLine?: Maybe<Scalars['IntType']>;
  /**
   * Text Padding
   *
   * Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-pad)
   */
  txtPad?: Maybe<Scalars['IntType']>;
  /**
   * Text Shadow
   *
   * Applies a shadow to rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-shad)
   */
  txtShad?: Maybe<Scalars['FloatType']>;
  /**
   * Text Font Size
   *
   * Sets the font size of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-size)
   */
  txtSize?: Maybe<Scalars['IntType']>;
  /**
   * Text Tracking
   *
   * Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/typesetting/txt-track)
   */
  txtTrack?: Maybe<Scalars['IntType']>;
  /**
   * Text Width
   *
   * Sets the width of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-width)
   */
  txtWidth?: Maybe<Scalars['IntType']>;
  /**
   * Text String
   *
   * Sets the text string to render.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt)
   */
  txt?: Maybe<Scalars['String']>;
  /**
   * Unsharp Mask
   *
   * Sharpens the source image using an unsharp mask.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/usm)
   */
  usm?: Maybe<Scalars['IntType']>;
  /**
   * Unsharp Mask Radius
   *
   * Specifies the radius for an unsharp mask operation.
   *
   * Depends on: `usm`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/usmrad)
   */
  usmrad?: Maybe<Scalars['FloatType']>;
  /**
   * Vibrance
   *
   * Adjusts the vibrance of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/vib)
   */
  vib?: Maybe<Scalars['IntType']>;
  /**
   * Image Width
   *
   * Adjusts the width of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/w)
   */
  w?: Maybe<Scalars['FloatType']>;
};

export enum IImgixParamsAuto {
  Enhance = 'enhance',
  Format = 'format',
  Redeye = 'redeye',
  Compress = 'compress',
}

export enum IImgixParamsBlendAlign {
  Top = 'top',
  Bottom = 'bottom',
  Middle = 'middle',
  Left = 'left',
  Right = 'right',
  Center = 'center',
}

export enum IImgixParamsBlendCrop {
  Top = 'top',
  Bottom = 'bottom',
  Left = 'left',
  Right = 'right',
  Faces = 'faces',
}

export enum IImgixParamsBlendFit {
  Clamp = 'clamp',
  Clip = 'clip',
  Crop = 'crop',
  Scale = 'scale',
  Max = 'max',
}

export enum IImgixParamsBlendMode {
  Color = 'color',
  Burn = 'burn',
  Dodge = 'dodge',
  Darken = 'darken',
  Difference = 'difference',
  Exclusion = 'exclusion',
  Hardlight = 'hardlight',
  Hue = 'hue',
  Lighten = 'lighten',
  Luminosity = 'luminosity',
  Multiply = 'multiply',
  Overlay = 'overlay',
  Saturation = 'saturation',
  Screen = 'screen',
  Softlight = 'softlight',
  Normal = 'normal',
}

export enum IImgixParamsBlendSize {
  Inherit = 'inherit',
}

export enum IImgixParamsCh {
  Width = 'width',
  Dpr = 'dpr',
  SaveData = 'saveData',
}

export enum IImgixParamsCrop {
  Top = 'top',
  Bottom = 'bottom',
  Left = 'left',
  Right = 'right',
  Faces = 'faces',
  Entropy = 'entropy',
  Edges = 'edges',
  Focalpoint = 'focalpoint',
}

export enum IImgixParamsCs {
  Srgb = 'srgb',
  Adobergb1998 = 'adobergb1998',
  Tinysrgb = 'tinysrgb',
  Strip = 'strip',
}

export enum IImgixParamsFill {
  Solid = 'solid',
  Blur = 'blur',
}

export enum IImgixParamsFit {
  Clamp = 'clamp',
  Clip = 'clip',
  Crop = 'crop',
  Facearea = 'facearea',
  Fill = 'fill',
  Fillmax = 'fillmax',
  Max = 'max',
  Min = 'min',
  Scale = 'scale',
}

export enum IImgixParamsFlip {
  H = 'h',
  V = 'v',
  Hv = 'hv',
}

export enum IImgixParamsFm {
  Gif = 'gif',
  Jpg = 'jpg',
  Jp2 = 'jp2',
  Json = 'json',
  Jxr = 'jxr',
  Pjpg = 'pjpg',
  Mp4 = 'mp4',
  Png = 'png',
  Png8 = 'png8',
  Png32 = 'png32',
  Webp = 'webp',
  Webm = 'webm',
}

export enum IImgixParamsMarkAlign {
  Top = 'top',
  Middle = 'middle',
  Bottom = 'bottom',
  Left = 'left',
  Center = 'center',
  Right = 'right',
}

export enum IImgixParamsMarkFit {
  Clip = 'clip',
  Crop = 'crop',
  Fill = 'fill',
  Max = 'max',
  Scale = 'scale',
}

export enum IImgixParamsPalette {
  Css = 'css',
  Json = 'json',
}

export enum IImgixParamsTransparency {
  Grid = 'grid',
}

export enum IImgixParamsTrim {
  Auto = 'auto',
  Color = 'color',
}

export enum IImgixParamsTxtAlign {
  Top = 'top',
  Middle = 'middle',
  Bottom = 'bottom',
  Left = 'left',
  Center = 'center',
  Right = 'right',
}

export enum IImgixParamsTxtClip {
  Start = 'start',
  Middle = 'middle',
  End = 'end',
  Ellipsis = 'ellipsis',
}

export enum IImgixParamsTxtFit {
  Max = 'max',
}

export type IResponsiveImage = {
  __typename?: 'ResponsiveImage';
  alt?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['FloatType'];
  base64?: Maybe<Scalars['String']>;
  bgColor?: Maybe<Scalars['String']>;
  height: Scalars['IntType'];
  sizes: Scalars['String'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  webpSrcSet: Scalars['String'];
  width: Scalars['IntType'];
};

export type IUploadVideoField = {
  __typename?: 'UploadVideoField';
  duration: Scalars['Int'];
  framerate: Scalars['Int'];
  mp4Url?: Maybe<Scalars['String']>;
  muxAssetId: Scalars['String'];
  muxPlaybackId: Scalars['String'];
  streamingUrl: Scalars['String'];
  thumbnailUrl: Scalars['String'];
};

export type IUploadVideoFieldMp4UrlArgs = {
  res?: Maybe<IVideoMp4Res>;
  exactRes?: Maybe<IVideoMp4Res>;
};

export type IUploadVideoFieldThumbnailUrlArgs = {
  format?: Maybe<IMuxThumbnailFormatType>;
};

export enum IMuxThumbnailFormatType {
  Jpg = 'jpg',
  Png = 'png',
  Gif = 'gif',
}

export enum IVideoMp4Res {
  Low = 'low',
  Medium = 'medium',
  High = 'high',
}

export type IProduktModelFilter = {
  _createdAt?: Maybe<ICreatedAtFilter>;
  createdAt?: Maybe<ICreatedAtFilter>;
  id?: Maybe<IItemIdFilter>;
  _firstPublishedAt?: Maybe<IPublishedAtFilter>;
  _publicationScheduledAt?: Maybe<IPublishedAtFilter>;
  _publishedAt?: Maybe<IPublishedAtFilter>;
  _status?: Maybe<IStatusFilter>;
  _updatedAt?: Maybe<IUpdatedAtFilter>;
  updatedAt?: Maybe<IUpdatedAtFilter>;
  _isValid?: Maybe<IBooleanFilter>;
  teaser?: Maybe<ITextFilter>;
  highlight?: Maybe<IBooleanFilter>;
  newsIdentifier?: Maybe<IStringFilter>;
  tags?: Maybe<IStringFilter>;
  bild?: Maybe<IFileFilter>;
  titel?: Maybe<IStringFilter>;
  OR?: Maybe<Array<Maybe<IProduktModelFilter>>>;
};

/** Specifies how to filter by creation datetime */
export type ICreatedAtFilter = {
  /** Filter records with a value that's strictly greater than the one specified */
  gt?: Maybe<Scalars['DateTime']>;
  /** Filter records with a value that's less than the one specified */
  lt?: Maybe<Scalars['DateTime']>;
  /** Filter records with a value that's greater than or equal to than the one specified */
  gte?: Maybe<Scalars['DateTime']>;
  /** Filter records with a value that's less or equal than the one specified */
  lte?: Maybe<Scalars['DateTime']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: Maybe<Scalars['BooleanType']>;
  /** Search for records with an exact match (seconds are truncated) */
  eq?: Maybe<Scalars['DateTime']>;
  /** Exclude records with an exact match */
  neq?: Maybe<Scalars['DateTime']>;
};

/** Specifies how to filter by ID */
export type IItemIdFilter = {
  /** Search the record with the specified ID */
  eq?: Maybe<Scalars['ItemId']>;
  /** Exclude the record with the specified ID */
  neq?: Maybe<Scalars['ItemId']>;
  /** Search records with the specified IDs */
  in?: Maybe<Array<Maybe<Scalars['ItemId']>>>;
  /** Search records that do not have the specified IDs */
  notIn?: Maybe<Array<Maybe<Scalars['ItemId']>>>;
};

/** Specifies how to filter by publication datetime */
export type IPublishedAtFilter = {
  /** Filter records with a value that's strictly greater than the one specified */
  gt?: Maybe<Scalars['DateTime']>;
  /** Filter records with a value that's less than the one specified */
  lt?: Maybe<Scalars['DateTime']>;
  /** Filter records with a value that's greater than or equal to than the one specified */
  gte?: Maybe<Scalars['DateTime']>;
  /** Filter records with a value that's less or equal than the one specified */
  lte?: Maybe<Scalars['DateTime']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: Maybe<Scalars['BooleanType']>;
  /** Search for records with an exact match (seconds are truncated) */
  eq?: Maybe<Scalars['DateTime']>;
  /** Exclude records with an exact match */
  neq?: Maybe<Scalars['DateTime']>;
};

/** Specifies how to filter by status */
export type IStatusFilter = {
  /** Search the record with the specified status */
  eq?: Maybe<IItemStatus>;
  /** Exclude the record with the specified status */
  neq?: Maybe<IItemStatus>;
  /** Search records with the specified statuses */
  in?: Maybe<Array<Maybe<IItemStatus>>>;
  /** Search records without the specified statuses */
  notIn?: Maybe<Array<Maybe<IItemStatus>>>;
};

/** Specifies how to filter by update datetime */
export type IUpdatedAtFilter = {
  /** Filter records with a value that's strictly greater than the one specified */
  gt?: Maybe<Scalars['DateTime']>;
  /** Filter records with a value that's less than the one specified */
  lt?: Maybe<Scalars['DateTime']>;
  /** Filter records with a value that's greater than or equal to than the one specified */
  gte?: Maybe<Scalars['DateTime']>;
  /** Filter records with a value that's less or equal than the one specified */
  lte?: Maybe<Scalars['DateTime']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: Maybe<Scalars['BooleanType']>;
  /** Search for records with an exact match (seconds are truncated) */
  eq?: Maybe<Scalars['DateTime']>;
  /** Exclude records with an exact match */
  neq?: Maybe<Scalars['DateTime']>;
};

/** Specifies how to filter Boolean fields */
export type IBooleanFilter = {
  /** Search for records with an exact match */
  eq?: Maybe<Scalars['BooleanType']>;
};

/** Specifies how to filter text fields */
export type ITextFilter = {
  /** Filter records based on a regular expression */
  matches?: Maybe<IStringMatchesFilter>;
  /** Exclude records based on a regular expression */
  notMatches?: Maybe<IStringMatchesFilter>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: Maybe<Scalars['BooleanType']>;
};

export type IStringMatchesFilter = {
  pattern: Scalars['String'];
  caseSensitive?: Maybe<Scalars['BooleanType']>;
  regexp?: Maybe<Scalars['BooleanType']>;
};

/** Specifies how to filter Single-line string fields */
export type IStringFilter = {
  /** Filter records based on a regular expression */
  matches?: Maybe<IStringMatchesFilter>;
  /** Exclude records based on a regular expression */
  notMatches?: Maybe<IStringMatchesFilter>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: Maybe<Scalars['BooleanType']>;
  /** Search for records with an exact match */
  eq?: Maybe<Scalars['String']>;
  /** Exclude records with an exact match */
  neq?: Maybe<Scalars['String']>;
  /** Filter records that equal one of the specified values */
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Filter records that do not equal one of the specified values */
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Specifies how to filter Single-file/image fields */
export type IFileFilter = {
  /** Search for records with an exact match. The specified value must be an Upload ID */
  eq?: Maybe<Scalars['UploadId']>;
  /** Exclude records with an exact match. The specified value must be an Upload ID */
  neq?: Maybe<Scalars['UploadId']>;
  /** Filter records that have one of the specified uploads */
  in?: Maybe<Array<Maybe<Scalars['UploadId']>>>;
  /** Filter records that do not have one of the specified uploads */
  notIn?: Maybe<Array<Maybe<Scalars['UploadId']>>>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: Maybe<Scalars['BooleanType']>;
};

export enum IProduktModelOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  HighlightAsc = 'highlight_ASC',
  HighlightDesc = 'highlight_DESC',
  NewsIdentifierAsc = 'newsIdentifier_ASC',
  NewsIdentifierDesc = 'newsIdentifier_DESC',
  TagsAsc = 'tags_ASC',
  TagsDesc = 'tags_DESC',
  TitelAsc = 'titel_ASC',
  TitelDesc = 'titel_DESC',
}

export type ICollectionMetadata = {
  __typename?: 'CollectionMetadata';
  count: Scalars['IntType'];
};

/** Record of type Produkte (produkte) */
export type IProdukteRecord = {
  __typename?: 'ProdukteRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _updatedAt: Scalars['DateTime'];
  beschreibungstext?: Maybe<Scalars['String']>;
  content?: Maybe<Array<Maybe<IProdukteModelContentField>>>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  previewlink?: Maybe<Scalars['JsonField']>;
  seoTags?: Maybe<ISeoField>;
  titel?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

/** Record of type Produkte (produkte) */
export type IProdukteRecord_SeoMetaTagsArgs = {
  locale?: Maybe<ISiteLocale>;
};

/** Record of type Produkte (produkte) */
export type IProdukteRecordBeschreibungstextArgs = {
  markdown?: Maybe<Scalars['Boolean']>;
};

export type IProdukteModelContentField =
  | IProductcategorylistRecord
  | IFeaturedproductlistRecord;

/** Record of type Auflistung von Produkt Kategorien  (productcategorylist) */
export type IProductcategorylistRecord = {
  __typename?: 'ProductcategorylistRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _updatedAt: Scalars['DateTime'];
  beschreibungstext?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  headline?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  insection?: Maybe<Scalars['BooleanType']>;
  productcategories: Array<IProductgroupRecord>;
  sectionvariant?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

/** Record of type Auflistung von Produkt Kategorien  (productcategorylist) */
export type IProductcategorylistRecord_SeoMetaTagsArgs = {
  locale?: Maybe<ISiteLocale>;
};

/** Record of type Auflistung von Produkt Kategorien  (productcategorylist) */
export type IProductcategorylistRecordBeschreibungstextArgs = {
  markdown?: Maybe<Scalars['Boolean']>;
};

/** Record of type ProduktGruppe (productgroup) */
export type IProductgroupRecord = {
  __typename?: 'ProductgroupRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _updatedAt: Scalars['DateTime'];
  beschreibung?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  produkte: Array<IProduktRecord>;
  seo?: Maybe<ISeoField>;
  seoText?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  titel?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

/** Record of type ProduktGruppe (productgroup) */
export type IProductgroupRecord_SeoMetaTagsArgs = {
  locale?: Maybe<ISiteLocale>;
};

/** Record of type ProduktGruppe (productgroup) */
export type IProductgroupRecordBeschreibungArgs = {
  markdown?: Maybe<Scalars['Boolean']>;
};

/** Record of type ProduktGruppe (productgroup) */
export type IProductgroupRecordSeoTextArgs = {
  markdown?: Maybe<Scalars['Boolean']>;
};

export type ISeoField = {
  __typename?: 'SeoField';
  description?: Maybe<Scalars['String']>;
  image?: Maybe<IFileField>;
  title?: Maybe<Scalars['String']>;
  twitterCard?: Maybe<Scalars['String']>;
};

/** Record of type Auflistung von Featured Produkte (featuredproductlist) */
export type IFeaturedproductlistRecord = {
  __typename?: 'FeaturedproductlistRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _updatedAt: Scalars['DateTime'];
  beschreibung?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  headline?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  limit?: Maybe<Scalars['IntType']>;
  onlyhighlighted?: Maybe<Scalars['BooleanType']>;
  products: Array<IProduktRecord>;
  updatedAt: Scalars['DateTime'];
};

/** Record of type Auflistung von Featured Produkte (featuredproductlist) */
export type IFeaturedproductlistRecord_SeoMetaTagsArgs = {
  locale?: Maybe<ISiteLocale>;
};

/** Record of type Auflistung von Featured Produkte (featuredproductlist) */
export type IFeaturedproductlistRecordBeschreibungArgs = {
  markdown?: Maybe<Scalars['Boolean']>;
};

export type IProductgroupModelFilter = {
  _createdAt?: Maybe<ICreatedAtFilter>;
  createdAt?: Maybe<ICreatedAtFilter>;
  id?: Maybe<IItemIdFilter>;
  _firstPublishedAt?: Maybe<IPublishedAtFilter>;
  _publicationScheduledAt?: Maybe<IPublishedAtFilter>;
  _publishedAt?: Maybe<IPublishedAtFilter>;
  _status?: Maybe<IStatusFilter>;
  _updatedAt?: Maybe<IUpdatedAtFilter>;
  updatedAt?: Maybe<IUpdatedAtFilter>;
  _isValid?: Maybe<IBooleanFilter>;
  produkte?: Maybe<ILinksFilter>;
  seoText?: Maybe<ITextFilter>;
  beschreibung?: Maybe<ITextFilter>;
  seo?: Maybe<ISeoFilter>;
  slug?: Maybe<ISlugFilter>;
  titel?: Maybe<IStringFilter>;
  OR?: Maybe<Array<Maybe<IProductgroupModelFilter>>>;
};

/** Specifies how to filter Multiple-links fields */
export type ILinksFilter = {
  /** Search for records with an exact match. The specified values must be Record IDs */
  eq?: Maybe<Array<Maybe<Scalars['ItemId']>>>;
  /** Filter records linked to all of the specified records. The specified values must be Record IDs */
  allIn?: Maybe<Array<Maybe<Scalars['ItemId']>>>;
  /** Filter records linked to at least one of the specified records. The specified values must be Record IDs */
  anyIn?: Maybe<Array<Maybe<Scalars['ItemId']>>>;
  /** Filter records not linked to any of the specified records. The specified values must be Record IDs */
  notIn?: Maybe<Array<Maybe<Scalars['ItemId']>>>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: Maybe<Scalars['BooleanType']>;
};

/** Specifies how to filter SEO meta tags fields */
export type ISeoFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: Maybe<Scalars['BooleanType']>;
};

/** Specifies how to filter Slug fields */
export type ISlugFilter = {
  /** Search for records with an exact match */
  eq?: Maybe<Scalars['String']>;
  /** Exclude records with an exact match */
  neq?: Maybe<Scalars['String']>;
  /** Filter records that have one of the specified slugs */
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Filter records that do have one of the specified slugs */
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum IProductgroupModelOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  TitelAsc = 'titel_ASC',
  TitelDesc = 'titel_DESC',
}

/** Record of type Landingpage (landingpage) */
export type ILandingpageRecord = {
  __typename?: 'LandingpageRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _updatedAt: Scalars['DateTime'];
  content?: Maybe<Array<Maybe<ILandingpageModelContentField>>>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  slug?: Maybe<Scalars['String']>;
  titel?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

/** Record of type Landingpage (landingpage) */
export type ILandingpageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<ISiteLocale>;
};

export type ILandingpageModelContentField =
  | IFeaturedproductlistRecord
  | INewslistRecord;

/** Record of type NewsList (newslist) */
export type INewslistRecord = {
  __typename?: 'NewslistRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  headline?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  updatedAt: Scalars['DateTime'];
};

/** Record of type NewsList (newslist) */
export type INewslistRecord_SeoMetaTagsArgs = {
  locale?: Maybe<ISiteLocale>;
};

export type ILandingpageModelFilter = {
  _createdAt?: Maybe<ICreatedAtFilter>;
  createdAt?: Maybe<ICreatedAtFilter>;
  id?: Maybe<IItemIdFilter>;
  _firstPublishedAt?: Maybe<IPublishedAtFilter>;
  _publicationScheduledAt?: Maybe<IPublishedAtFilter>;
  _publishedAt?: Maybe<IPublishedAtFilter>;
  _status?: Maybe<IStatusFilter>;
  _updatedAt?: Maybe<IUpdatedAtFilter>;
  updatedAt?: Maybe<IUpdatedAtFilter>;
  _isValid?: Maybe<IBooleanFilter>;
  slug?: Maybe<ISlugFilter>;
  titel?: Maybe<IStringFilter>;
  OR?: Maybe<Array<Maybe<ILandingpageModelFilter>>>;
};

export enum ILandingpageModelOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  TitelAsc = 'titel_ASC',
  TitelDesc = 'titel_DESC',
}

export type ISite = {
  __typename?: 'Site';
  favicon?: Maybe<IFileField>;
  faviconMetaTags: Array<ITag>;
  globalSeo?: Maybe<IGlobalSeoField>;
};

export type ISiteFaviconMetaTagsArgs = {
  variants?: Maybe<Array<Maybe<IFaviconType>>>;
};

export type ISiteGlobalSeoArgs = {
  locale?: Maybe<ISiteLocale>;
};

export enum IFaviconType {
  Icon = 'icon',
  AppleTouchIcon = 'appleTouchIcon',
  MsApplication = 'msApplication',
}

export type IGlobalSeoField = {
  __typename?: 'GlobalSeoField';
  facebookPageUrl?: Maybe<Scalars['String']>;
  fallbackSeo?: Maybe<ISeoField>;
  siteName?: Maybe<Scalars['String']>;
  titleSuffix?: Maybe<Scalars['String']>;
  twitterAccount?: Maybe<Scalars['String']>;
};

export type IUploadFilter = {
  type?: Maybe<ITypeFilter>;
  inUse?: Maybe<IInUseFilter>;
  resolution?: Maybe<IResolutionFilter>;
  size?: Maybe<IUploadSizeFilter>;
  tags?: Maybe<IUploadTagsFilter>;
  smartTags?: Maybe<IUploadTagsFilter>;
  colors?: Maybe<IUploadColorsFilter>;
  orientation?: Maybe<IOrientationFilter>;
  id?: Maybe<IUploadIdFilter>;
  mimeType?: Maybe<IUploadMimeTypeFilter>;
  format?: Maybe<IUploadFormatFilter>;
  height?: Maybe<IUploadHeightFilter>;
  width?: Maybe<IUploadWidthFilter>;
  alt?: Maybe<IUploadAltFilter>;
  title?: Maybe<IUploadTitleFilter>;
  notes?: Maybe<IUploadNotesFilter>;
  author?: Maybe<IUploadAuthorFilter>;
  copyright?: Maybe<IUploadCopyrightFilter>;
  basename?: Maybe<IUploadBasenameFilter>;
  filename?: Maybe<IUploadFilenameFilter>;
  _createdAt?: Maybe<IUploadCreatedAtFilter>;
  _updatedAt?: Maybe<IUploadUpdatedAtFilter>;
  OR?: Maybe<Array<Maybe<IUploadFilter>>>;
};

/** Specifies how to filter by upload type */
export type ITypeFilter = {
  /** Search uploads with the specified type */
  eq?: Maybe<IUploadType>;
  /** Exclude uploads with the specified type */
  neq?: Maybe<IUploadType>;
  /** Search uploads with the specified types */
  in?: Maybe<Array<Maybe<IUploadType>>>;
  /** Search uploads without the specified types */
  notIn?: Maybe<Array<Maybe<IUploadType>>>;
};

export enum IUploadType {
  Image = 'image',
  Audio = 'audio',
  Video = 'video',
  Richtext = 'richtext',
  Presentation = 'presentation',
  Spreadsheet = 'spreadsheet',
  Pdfdocument = 'pdfdocument',
  Archive = 'archive',
}

/** Specifies how to filter by usage */
export type IInUseFilter = {
  /** Search uploads that are currently used by some record or not */
  eq?: Maybe<Scalars['BooleanType']>;
};

/** Specifies how to filter by upload type */
export type IResolutionFilter = {
  /** Search uploads with the specified resolution */
  eq?: Maybe<IResolutionType>;
  /** Exclude uploads with the specified resolution */
  neq?: Maybe<IResolutionType>;
  /** Search uploads with the specified resolutions */
  in?: Maybe<Array<Maybe<IResolutionType>>>;
  /** Search uploads without the specified resolutions */
  notIn?: Maybe<Array<Maybe<IResolutionType>>>;
};

export enum IResolutionType {
  Icon = 'icon',
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

/** Specifies how to filter by size */
export type IUploadSizeFilter = {
  /** Search all assets larger than the specified size */
  gt?: Maybe<Scalars['IntType']>;
  /** Search all assets smaller than the specified size */
  lt?: Maybe<Scalars['IntType']>;
  /** Search all assets larger or equal to the specified size */
  gte?: Maybe<Scalars['IntType']>;
  /** Search all assets larger or equal to the specified size */
  lte?: Maybe<Scalars['IntType']>;
  /** Search assets with the specified size */
  eq?: Maybe<Scalars['IntType']>;
  /** Search assets that do not have the specified size */
  neq?: Maybe<Scalars['IntType']>;
};

/** Specifies how to filter by tags */
export type IUploadTagsFilter = {
  /** Filter uploads linked to the specified tag */
  contains?: Maybe<Scalars['String']>;
  /** Filter uploads linked to all of the specified tags */
  allIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Filter uploads linked to at least one of the specified tags */
  anyIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Filter uploads not linked to any of the specified tags */
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Search for uploads with an exact match */
  eq?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Specifies how to filter by colors */
export type IUploadColorsFilter = {
  /** Filter uploads that have the specified colors */
  contains?: Maybe<IColorBucketType>;
  /** Filter uploads that have all of the specified colors */
  allIn?: Maybe<Array<Maybe<IColorBucketType>>>;
  /** Filter uploads that have at least one of the specified colors */
  anyIn?: Maybe<Array<Maybe<IColorBucketType>>>;
  /** Filter uploads that do not have any of the specified colors */
  notIn?: Maybe<Array<Maybe<IColorBucketType>>>;
  /** Search for uploads with an exact match */
  eq?: Maybe<Array<Maybe<IColorBucketType>>>;
};

export enum IColorBucketType {
  Red = 'red',
  Orange = 'orange',
  Pink = 'pink',
  Cyan = 'cyan',
  Purple = 'purple',
  Blue = 'blue',
  Yellow = 'yellow',
  Green = 'green',
  Brown = 'brown',
  Grey = 'grey',
  White = 'white',
  Black = 'black',
}

/** Specifies how to filter by image orientation */
export type IOrientationFilter = {
  /** Search uploads with the specified orientation */
  eq?: Maybe<IUploadOrientation>;
  /** Exclude uploads with the specified orientation */
  neq?: Maybe<IUploadOrientation>;
};

export enum IUploadOrientation {
  Landscape = 'landscape',
  Portrait = 'portrait',
  Square = 'square',
}

/** Specifies how to filter by ID */
export type IUploadIdFilter = {
  /** Search the asset with the specified ID */
  eq?: Maybe<Scalars['UploadId']>;
  /** Exclude the asset with the specified ID */
  neq?: Maybe<Scalars['UploadId']>;
  /** Search assets with the specified IDs */
  in?: Maybe<Array<Maybe<Scalars['UploadId']>>>;
  /** Search assets that do not have the specified IDs */
  notIn?: Maybe<Array<Maybe<Scalars['UploadId']>>>;
};

/** Specifies how to filter by mime type */
export type IUploadMimeTypeFilter = {
  /** Filter uploads based on a regular expression */
  matches?: Maybe<IStringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: Maybe<IStringMatchesFilter>;
  /** Search the asset with the specified mime type */
  eq?: Maybe<Scalars['String']>;
  /** Exclude the asset with the specified mime type */
  neq?: Maybe<Scalars['String']>;
  /** Search assets with the specified mime types */
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Search assets that do not have the specified mime types */
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Specifies how to filter by format */
export type IUploadFormatFilter = {
  /** Search the asset with the specified format */
  eq?: Maybe<Scalars['String']>;
  /** Exclude the asset with the specified format */
  neq?: Maybe<Scalars['String']>;
  /** Search assets with the specified formats */
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Search assets that do not have the specified formats */
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Specifies how to filter by height */
export type IUploadHeightFilter = {
  /** Search all assets larger than the specified height */
  gt?: Maybe<Scalars['IntType']>;
  /** Search all assets smaller than the specified height */
  lt?: Maybe<Scalars['IntType']>;
  /** Search all assets larger or equal to the specified height */
  gte?: Maybe<Scalars['IntType']>;
  /** Search all assets larger or equal to the specified height */
  lte?: Maybe<Scalars['IntType']>;
  /** Search assets with the specified height */
  eq?: Maybe<Scalars['IntType']>;
  /** Search assets that do not have the specified height */
  neq?: Maybe<Scalars['IntType']>;
};

/** Specifies how to filter by width */
export type IUploadWidthFilter = {
  /** Search all assets larger than the specified width */
  gt?: Maybe<Scalars['IntType']>;
  /** Search all assets smaller than the specified width */
  lt?: Maybe<Scalars['IntType']>;
  /** Search all assets larger or equal to the specified width */
  gte?: Maybe<Scalars['IntType']>;
  /** Search all assets larger or equal to the specified width */
  lte?: Maybe<Scalars['IntType']>;
  /** Search assets with the specified width */
  eq?: Maybe<Scalars['IntType']>;
  /** Search assets that do not have the specified width */
  neq?: Maybe<Scalars['IntType']>;
};

/** Specifies how to filter by default alt */
export type IUploadAltFilter = {
  /** Filter uploads based on a regular expression */
  matches?: Maybe<IStringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: Maybe<IStringMatchesFilter>;
  /** Search the uploads with the specified alt */
  eq?: Maybe<Scalars['String']>;
  /** Exclude the uploads with the specified alt */
  neq?: Maybe<Scalars['String']>;
  /** Search uploads with the specified values as default alt */
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Search uploads that do not have the specified values as default alt */
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists?: Maybe<Scalars['BooleanType']>;
};

/** Specifies how to filter by default title */
export type IUploadTitleFilter = {
  /** Filter uploads based on a regular expression */
  matches?: Maybe<IStringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: Maybe<IStringMatchesFilter>;
  /** Search the asset with the specified title */
  eq?: Maybe<Scalars['String']>;
  /** Exclude the asset with the specified title */
  neq?: Maybe<Scalars['String']>;
  /** Search assets with the specified as default title */
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Search assets that do not have the specified as default title */
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Filter assets with the specified field defined (i.e. with any value) or not */
  exists?: Maybe<Scalars['BooleanType']>;
};

/** Specifies how to filter by notes */
export type IUploadNotesFilter = {
  /** Filter uploads based on a regular expression */
  matches?: Maybe<IStringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: Maybe<IStringMatchesFilter>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: Maybe<Scalars['BooleanType']>;
};

/** Specifies how to filter by auhtor */
export type IUploadAuthorFilter = {
  /** Filter uploads based on a regular expression */
  matches?: Maybe<IStringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: Maybe<IStringMatchesFilter>;
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists?: Maybe<Scalars['BooleanType']>;
};

/** Specifies how to filter by copyright */
export type IUploadCopyrightFilter = {
  /** Filter uploads based on a regular expression */
  matches?: Maybe<IStringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: Maybe<IStringMatchesFilter>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: Maybe<Scalars['BooleanType']>;
};

/** Specifies how to filter by basename */
export type IUploadBasenameFilter = {
  /** Filter uploads based on a regular expression */
  matches?: Maybe<IStringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: Maybe<IStringMatchesFilter>;
};

/** Specifies how to filter by filename */
export type IUploadFilenameFilter = {
  /** Filter uploads based on a regular expression */
  matches?: Maybe<IStringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: Maybe<IStringMatchesFilter>;
};

/** Specifies how to filter by creation datetime */
export type IUploadCreatedAtFilter = {
  /** Search for uploads with an exact match */
  eq?: Maybe<Scalars['DateTime']>;
  /** Exclude uploads with an exact match */
  neq?: Maybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's less than the one specified */
  lt?: Maybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: Maybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: Maybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: Maybe<Scalars['DateTime']>;
};

/** Specifies how to filter by update datetime */
export type IUploadUpdatedAtFilter = {
  /** Search for uploads with an exact match */
  eq?: Maybe<Scalars['DateTime']>;
  /** Exclude uploads with an exact match */
  neq?: Maybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's less than the one specified */
  lt?: Maybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: Maybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: Maybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: Maybe<Scalars['DateTime']>;
};

export enum IUploadOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  ResolutionAsc = 'resolution_ASC',
  ResolutionDesc = 'resolution_DESC',
  FilenameAsc = 'filename_ASC',
  FilenameDesc = 'filename_DESC',
  BasenameAsc = 'basename_ASC',
  BasenameDesc = 'basename_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  FormatAsc = 'format_ASC',
  FormatDesc = 'format_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
}

export type IProdukteIndexQueryVariables = Exact<{ [key: string]: never }>;

export type IProdukteIndexQuery = { __typename?: 'Query' } & {
  produkte?: Maybe<
    { __typename?: 'ProdukteRecord' } & Pick<
      IProdukteRecord,
      'titel' | 'beschreibungstext'
    > & {
        content?: Maybe<
          Array<
            Maybe<
              | ({ __typename: 'ProductcategorylistRecord' } & Pick<
                  IProductcategorylistRecord,
                  | 'id'
                  | 'headline'
                  | 'beschreibungstext'
                  | 'insection'
                  | 'sectionvariant'
                > & {
                    productcategories: Array<
                      { __typename?: 'ProductgroupRecord' } & Pick<
                        IProductgroupRecord,
                        'id' | 'titel' | 'slug'
                      >
                    >;
                  })
              | ({ __typename: 'FeaturedproductlistRecord' } & Pick<
                  IFeaturedproductlistRecord,
                  'id' | 'headline' | 'beschreibung' | 'limit'
                > & {
                    products: Array<
                      { __typename?: 'ProduktRecord' } & Pick<
                        IProduktRecord,
                        'id' | 'titel' | 'newsIdentifier'
                      >
                    >;
                  })
            >
          >
        >;
        _seoMetaTags: Array<
          { __typename?: 'Tag' } & Pick<ITag, 'attributes' | 'content'>
        >;
      }
  >;
};

export const ProdukteIndexDocument = gql`
  query ProdukteIndex {
    produkte {
      titel
      content {
        __typename
        ... on ProductcategorylistRecord {
          id
          headline
          beschreibungstext
          insection
          sectionvariant
          productcategories {
            id
            titel
            slug
          }
        }
        ... on FeaturedproductlistRecord {
          id
          headline
          beschreibung
          limit
          products {
            id
            titel
            newsIdentifier
          }
        }
      }
      beschreibungstext
      _seoMetaTags {
        attributes
        content
      }
    }
  }
`;

/**
 * __useProdukteIndexQuery__
 *
 * To run a query within a React component, call `useProdukteIndexQuery` and pass it any options that fit your needs.
 * When your component renders, `useProdukteIndexQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProdukteIndexQuery({
 *   variables: {
 *   },
 * });
 */
export function useProdukteIndexQuery(
  baseOptions?: Apollo.QueryHookOptions<
    IProdukteIndexQuery,
    IProdukteIndexQueryVariables
  >
) {
  return Apollo.useQuery<IProdukteIndexQuery, IProdukteIndexQueryVariables>(
    ProdukteIndexDocument,
    baseOptions
  );
}
export function useProdukteIndexLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    IProdukteIndexQuery,
    IProdukteIndexQueryVariables
  >
) {
  return Apollo.useLazyQuery<IProdukteIndexQuery, IProdukteIndexQueryVariables>(
    ProdukteIndexDocument,
    baseOptions
  );
}
export type ProdukteIndexQueryHookResult = ReturnType<
  typeof useProdukteIndexQuery
>;
export type ProdukteIndexLazyQueryHookResult = ReturnType<
  typeof useProdukteIndexLazyQuery
>;
export type ProdukteIndexQueryResult = Apollo.QueryResult<
  IProdukteIndexQuery,
  IProdukteIndexQueryVariables
>;
