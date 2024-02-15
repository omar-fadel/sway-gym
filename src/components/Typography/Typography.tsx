import { ReactNode } from "react";
interface TypographyProps {
  variant:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "bodyLarge"
    | "bodyMedium"
    | "bodySmall"
    | "button"
    | "label";
  children: ReactNode;
  className?: string;
}
const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  className,
}) => {
  switch (variant) {
    case "h1":
      return <h1 className={className}>{children}</h1>;
    case "h2":
      return <h2 className={className}>{children}</h2>;
    case "h3":
      return <h3 className={className}>{children}</h3>;
    case "h4":
      return <h4 className={className}>{children}</h4>;
    case "bodyLarge":
      return (
        <p
          className={className}
          style={{
            fontFamily: "GE SS Two",
            fontSize: "16pt",
            lineHeight: "24pt",
          }}
        >
          {children}
        </p>
      );
    case "bodyMedium":
      return (
        <p
          className={className}
          style={{
            fontFamily: "GE SS Two",
            fontSize: "14pt",
            lineHeight: "18pt",
          }}
        >
          {children}
        </p>
      );
    case "bodySmall":
      return (
        <p
          className={className}
          style={{
            fontFamily: "GE SS Two",
            fontSize: "12pt",
            lineHeight: "16pt",
          }}
        >
          {children}
        </p>
      );
    case "button":
      return (
        <p
          className={className}
          style={{
            fontFamily: "GE SS Two",
            fontSize: "14pt",
            lineHeight: "14pt",
            fontWeight: "bold",
          }}
        >
          {children}
        </p>
      );
    case "label":
      return (
        <p
          className={className}
          style={{
            fontFamily: "GE SS Two",
            fontSize: "14pt",
            lineHeight: "14pt",
          }}
        >
          {children}
        </p>
      );
  }
};

export default Typography;
