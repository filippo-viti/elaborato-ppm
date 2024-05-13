import PlaceHolderImage from "../utils/PlaceHolderImage.ts";
import { ImageFormat } from "../utils/ImageFormat.ts";

export default function HeroImage() {
  const heroImage = new PlaceHolderImage(
    1134,
    567,
    ImageFormat.JPEG,
    "gray",
    "white",
    "Lorem ipsum",
  );
  return (
    <figure>
      <img src={heroImage.getUrl()} alt={"Hero image"} />
      <figcaption>Lorem ipsum</figcaption>
    </figure>
  );
}
