import { RichText } from "@graphcms/rich-text-react-renderer";
import Image, { ImageProps } from "next/image";
import { BlogPost } from "@/types";

import { RichTextContent } from "@graphcms/rich-text-types";

interface CMSRichTextProps {
  content: RichTextContent;
}

interface CustomImageRendererProps extends ImageProps {
  src: string;
  height: number;
  width: number;
  alt: string;
}

const customImageRenderer: React.FC<CustomImageRendererProps> = ({
  src,
  height,
  width,
  alt,
}) => (
  <div className="w-full  flex justify-center my-4">
    <Image
      src={src}
      height={height}
      width={width}
      alt={alt}
      objectFit="cover"
    />
  </div>
);

export default function CMSRichText({ content }: CMSRichTextProps) {
  // const content = data?.post.content.raw;

  return (
    <RichText
      content={content}
      renderers={{
        h1: ({ children }) => (
          <h1
            className={`mb-8 leading-loose text-red-500 lg:text-4xl xl:text-5xl font-bold`}
          >
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2 className={`mb-4 font-light text-xl lg:text-2xl   `}>
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className={`text lg:text-3xl text-pink-400 xl:text-4xl`}>
            {children}
          </h3>
        ),
        p: ({ children }) => <p className={`my-4 font-medium`}>{children}</p>,
        ul: ({ children }) => (
          <ul className={`list-disc list-inside my-4 text `}>{children}</ul>
        ),
        li: ({ children }) => (
          <li className={`my-2 text-blue-900 `}>{children}</li>
        ),
        // img: ({ src, height, width, alt }: CustomImageProps) => (
        //   <div className="w-full  flex justify-center my-4">
        //     <Image
        //       src={src}
        //       height={height}
        //       width={width}
        //       alt={alt}
        //       objectFit="cover"
        //     />
        //   </div>
        // ),
        img: customImageRenderer as any,

        code: ({ children }) => (
          <code
            className={`bg-gray-100 dark:bg-gray-800 rounded-md flex flex-wrap text-sm `}
          >
            {children}
          </code>
        ),
        code_block: ({ children }) => (
          <pre
            className={`rounded-md text-sm bg-yellow-300 dark:bg-teal-300 text-black flex justify-center `}
          >
            <div className="p-5 overflow-auto">{children}</div>
          </pre>
        ),
      }}
    />
  );
}
