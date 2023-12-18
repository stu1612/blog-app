"use client";

import { isSafari } from "@/utils/isSafari";

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
  const handleClick = async () => {
    const imageUrl = post?.image?.url;

    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const file = new File([blob], "image.jpg", { type: "image/jpeg" });

      // Prepare data for sharing files
      const dataFiles = { files: [file] };

      // Check if it's Safari
      const IS_SAFARI = isSafari();

      // Prepare data for sharing text
      const dataText = {
        files: [],
        text: post?.excerpt,
        url: typeof window !== "undefined" ? window.location.href : "",
        title: post?.title,
      };

      // Share files first
      await navigator.share(dataFiles);

      // Share text as a separate request if it's Safari
      if (IS_SAFARI) {
        await navigator.share(dataText);
      }
    } catch (err) {
      console.log(err);
    }

    // try {
    //   const response = await fetch(imageUrl);
    //   const blob = await response.blob();
    //   const file = new File([blob], "image.jpg", { type: "image/jpeg" });
    //   await navigator.share({
    //     title: post?.title,
    //     text: post?.excerpt,
    //     url: typeof window !== "undefined" ? window.location.href : "",
    //   });
    //   await navigator.share({
    //     files: [file],
    //   });
    // } catch (err) {
    //   console.log(err);
    // }
    // if (navigator.share) {
    //   const imageUrl = post?.image?.url;

    //   const response = await fetch(imageUrl);
    //   const blob = await response.blob();

    //   const file = new File([blob], "image.jpg", { type: "image/jpeg" });

    //   await navigator
    //     .share({
    //       title: post?.title,
    //       text: post?.excerpt,
    //       url: typeof window !== "undefined" ? window.location.href : "",
    //       files: [file],
    //     })
    //     .then(() => console.log("shared"))
    //     .catch((err) => console.log("Error ", err));
    // }
  };
  // const handleClick = async () => {
  //   if (navigator.share) {
  //     const imageUrl = post?.image?.url;
  //     console.log("imageUrl ", imageUrl);

  //     const response = await fetch(imageUrl);
  //     const blob = await response.blob();

  //     const file = new File([blob], "image.jpg", { type: "image/jpeg" });

  //     console.log("file ", file);

  //     await navigator
  //       .share({
  //         title: post?.title,
  //         text: post?.excerpt,
  //         url: typeof window !== "undefined" ? window.location.href : "",
  //         files: [file],
  //       })
  //       .then(() => console.log("shared"))
  //       .catch((err) => console.log("Error ", err));
  //   }
  // };

  return (
    <div className="fixed bottom-[20%] right-[8%]" onClick={handleClick}>
      <button className="bg-red-500 p-2">Share</button>
    </div>
  );
}

// const filename = imageUrl.split("/").pop() ?? "/images/git_1.jpg";

// Create a File object from the Blob
// const file = new File([blob], "image.jpg", {
//   lastModified: new Date().getTime(),
//   type: blob.type,
// });
