import noImage from "../assets/no-image.jpg";

const getCroppedImageUrl = (url: string) => {
  if (!url) return noImage;

  if (url.includes("/full")) {
    return url.replace(/\/full\/.*\/0\//, "/full/400,/0/");
  }
  return url;
};

export default getCroppedImageUrl;
