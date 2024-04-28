import {Font} from "./Font.ts";
import {ImageFormat} from "./ImageFormat.ts";

export default class PlaceHolderImage {
  private _width: number;
  private _height: number;
  private _format: ImageFormat;
  private _bgColor: string;
  private _textColor: string;
  private _text: string;
  private _font: Font;

  constructor(width: number, height: number, format: ImageFormat = ImageFormat.SVG, bgColor: string, textColor: string,
              text: string, font: Font = Font.LATO) {
    this._width = width;
    this._height = height;
    this._format = format;
    this._bgColor = bgColor;
    this._textColor = textColor;
    this._text = text.replace(" ", "+");
    this._font = font;
  }


  get width(): number {
    return this._width;
  }

  set width(value: number) {
    this._width = value;
  }

  get height(): number {
    return this._height;
  }

  set height(value: number) {
    this._height = value;
  }

  get format(): ImageFormat {
    return this._format;
  }

  set format(value: ImageFormat) {
    this._format = value;
  }

  get bgColor(): string {
    return this._bgColor;
  }

  set bgColor(value: string) {
    this._bgColor = value;
  }

  get textColor(): string {
    return this._textColor;
  }

  set textColor(value: string) {
    this._textColor = value;
  }

  get text(): string {
    return this._text;
  }

  set text(value: string) {
    this._text = value;
  }

  get font(): Font {
    return this._font;
  }

  set font(value: Font) {
    this._font = value;
  }

  getUrl(): string {
    return `https://placehold.co/${this._width}x${this._height}/${this._bgColor}/${this._textColor}/${this._format}?text=${this._text}&font=${this._font}`;
  }
}