type SocialMedia = "facebook" | "instagram" | "linkedIn" | "snapchat" | "x";
export const getSocialMediaIconPath = (...socialMedia: SocialMedia[]) => {
  return socialMedia.map((media) => `/icons/social-media/${media}.svg`);
};
