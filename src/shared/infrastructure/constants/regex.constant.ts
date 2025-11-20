export const REGEX = {
  UUID_V4: /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
  LETTER_NUMBER_SPACE: /^[\p{L}\p{M}\p{N}\s\u0027\u2019\u2018\u02BB\u02BC]+$/u,
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE: /^\+[1-9]\d{7,14}$/,
};
