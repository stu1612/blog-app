"use client";

type PostProps = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  createdAt: string;
  image: {
    url: string;
  };
  content: {
    raw: {
      children: Array<string>;
    };
  };
  categories: [{ id: string; slug: string; name: string }];
};

export default function WebShare({ post }: { post: PostProps }) {
  // const handleClick = () => {
  //   if (navigator.share) {
  //     const imageUrl = post?.image?.url;
  //     navigator
  //       .share({
  //         title: post?.title,
  //         text: post?.excerpt,
  //         url: typeof window !== "undefined" ? window.location.href : "",
  //         files: [imageUrl],
  //       })
  //       .then(() => console.log("shared"))
  //       .catch((err) => console.log("Error ", err));
  //   }
  // };
  const handleClick = async () => {
    if (navigator.share) {
      const imageUrl = post?.image?.url;

      try {
        const response = await fetch(imageUrl);
        const blob = await response.blob();

        // Create a File object from the Blob
        const file = new File([blob], "image.jpg", {
          lastModified: new Date().getTime(),
          type: blob.type,
        });

        navigator
          .share({
            title: post?.title,
            text: post?.excerpt,
            url: typeof window !== "undefined" ? window.location.href : "",
            files: [file],
          })
          .then(() => console.log("shared"))
          .catch((err) => console.log("Error ", err));
      } catch (error) {
        console.error("Error fetching or converting image to Blob:", error);
      }
    }
  };

  return (
    <div className="fixed bottom-[20%] right-[8%]" onClick={handleClick}>
      <button className="bg-red-500 p-2">Share</button>
    </div>
  );
}
