import { RichText } from "./rich-text";

export interface SettingsLogoLiteFragment {
  logo: {
    dark: {
      url: string;
      alt: string | null;
      width: number;
      height: number;
      aspectRatio: string;
      blurDataURL: string;
    };
    light: {
      url: string;
      alt: string | null;
      width: number;
      height: number;
      aspectRatio: string;
      blurDataURL: string;
    };
  };
}

export interface ButtonFragment {
  _id: string;
  label: string;
  href: string;
  type: string;
  icon?: string;
}

export interface RichTextProps {
  content?: string;
  className?: string;
}

export { RichText };
