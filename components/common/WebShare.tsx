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
  // const handleClick = async () => {
  //   if (navigator.share) {
  //     try {
  //       const imageUrl = post?.image?.url;
  //       const response = await fetch(imageUrl);
  //       const blob = await response.blob();
  //       const file = new File([blob], "image.jpg", { type: "image/jpeg" });

  //       await navigator.share({
  //         title: "Testing....",
  //         text: "Some text",
  //         url: typeof window !== "undefined" ? window.location.href : "",
  //         files: [file],
  //       });
  //     } catch (err) {
  //       console.error(err, " error");
  //     }
  //   }
  // };

  const handleClick = () => {
    console.log("help");
  };

  return (
    <div className="fixed bottom-[20%] right-[8%]" onClick={handleClick}>
      <button className="bg-red-500 p-2">Share</button>
    </div>
  );
}
