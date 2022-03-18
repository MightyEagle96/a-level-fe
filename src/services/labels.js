import { Facebook, Instagram, Twitter } from "@mui/icons-material";

export const WelcomePageText = {
  title: "SARNIA ROCK INTERNATIONAL",
  subtitle: " Supporting Industrial and Residential Development in Africa",
  img1Title: "Revolutionising Industry",
  img1Subtitle:
    "Pellentesque commodo diam id enim porta auctor. Praesent elementum laoreet massa, tincidunt efficitur ante volutpat et. Aenean nec urna non nisl laoreet scelerisque vel lacinia diam. Ut id turpis congue augue lobortis porttitor a vel tortor. Proin vestibulum leo sed nunc finibus lacinia. Phasellus sed arcu id massa mollis venenatis ac id odio. Nullam arcu libero, malesuada ut faucibus ut, vehicula a velit. Mauris sed nibh ac est laoreet pulvinar. Morbi sit amet vehicula risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus gravida erat et justo laoreet congue. Sed mattis massa at urna porta congue. Aliquam id elementum ex. Nunc pretium magna ac quam blandit cursus. Nulla mollis felis vel lacus elementum lobortis. Nam quis eleifend arcu, vitae gravida neque.",
  img2Title: "Shaping Development",
  img2Subtitle:
    "Aenean accumsan massa sit amet ante vehicula, faucibus convallis turpis porta. Etiam aliquam, mauris in imperdiet tincidunt, mi enim scelerisque diam, tincidunt euismod nulla lectus sit amet ante. Fusce congue enim tincidunt vulputate laoreet. Aliquam pretium id leo in hendrerit. Aenean finibus ipsum arcu, nec dignissim massa aliquet posuere. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce blandit accumsan sapien, ac mattis dolor laoreet sit amet. Pellentesque dictum posuere pretium. Proin eleifend pharetra consequat. Quisque eu ipsum sit amet arcu suscipit egestas",
};

export const ProductLabels = [
  "Doors",
  "Industrial doors",
  "Loading Bay Technology",
  "Doors for construction projects",
  "Access control systems",
  "Frames",
];

export const FooterLabels = [
  { label: "Contact", path: "/contact" },
  { label: "About Us", path: "/aboutUs" },
  { label: "Address", path: "/address" },
];

export const SocialMediaHandles = [
  { icon: <Twitter />, url: "https://twitter.com" },
  { icon: <Facebook />, url: "https://facebook.com" },
  { icon: <Instagram />, url: "https://instagram.com" },
];

export const truncate = (str, num) => {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + "...";
};
