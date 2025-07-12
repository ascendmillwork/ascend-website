import Link from "next/link";

interface ButtonProps {
  ButtonText: string;
  ButtonUrl: string;
  ButtonTextColor: string;
  CustomTextClass?: string;
  BackgroundColor?: string;
}

export default function Button({
  ButtonText,
  ButtonUrl,
  ButtonTextColor,
  CustomTextClass,
  BackgroundColor,
}: ButtonProps) {
  return (
    <Link
      href={ButtonUrl || "/"}
      className={`group relative inline-flex items-center border border-accent rounded-md 
          cursor-pointer overflow-hidden py-1 text-sm ${
            CustomTextClass ?? ""
          } ${BackgroundColor ?? ""}`}
    >
      {/* Shared sliding background */}
      <span className="absolute inset-0 bg-black w-0 group-hover:w-full transition-all duration-500 ease-out z-0" />

      {/* Text Section */}
      <span
        className={`relative px-4 py-2 border-r border-accent z-10 ${
          ButtonTextColor ?? "text-black"
        }  group-hover:text-white transition-colors duration-300`}
      >
        {ButtonText}
      </span>

      {/* Arrow Section */}
      <span className="relative pl-3 pr-4 py-2 z-10">
        <svg
          className={`w-4 h-4 ${
            ButtonTextColor ?? "text-black"
          } group-hover:text-white transition-all duration-300 relative group-hover:translate-x-1`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  );
}
