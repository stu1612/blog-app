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
    if ("canShare" in navigator) {
      try {
        const imageUrl = post?.image?.url;
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        const file = new File([blob], "image.jpg", { type: "image/jpeg" });

        await navigator.share({
          title: "Testing....",
          text: post?.excerpt,
          url: typeof window !== "undefined" ? window.location.href : "",
          files: [file],
        });
      } catch (err) {
        console.error(err, " error");
      }
    }
  };

  // const image = await fetch(imageUrl);
  // const blob = await image.blob();
  // const file = new File([blob], "image.jpg", { type: blob.type });

  // const sharedData = {
  //   title: post?.title,
  //   text: post?.excerpt,
  //   url: typeof window !== "undefined" ? window.location.href : "",
  //   files: [file],
  // };

  // add it to the shareData
  // sharedData.files = filesArray;

  // if(navigator.share) {
  //   try {
  //     await navigator.share(sharedData);
  //     console.log('🥳 Shared via API.');
  //   } catch(error) {
  //     console.log(`😢 ${error}`);
  //   }
  // } else {
  //   // you could do a fallback solution here ...
  //   console.log('😢 Your browser does not support the web share api.')
  // }
  // if (navigator.canShare && navigator.canShare({ files: filesArray })) {
  //   await navigator
  //     .share(sharedData)
  //     .then(() => {
  //       console.log("share success");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }
  // try {
  //   const response = await fetch(imageUrl);
  //   const blob = await response.blob();
  //   const file = new File([blob], "image.jpg", { type: "image/jpeg" });

  //   const dataFiles = { files: [file] };

  //   const IS_SAFARI = isSafari();

  //   const dataText = {
  //     files: [],
  //     text: post?.excerpt,
  //     url: typeof window !== "undefined" ? window.location.href : "",
  //     title: post?.title,
  //   };

  //   await navigator.share(dataFiles);

  //   if (IS_SAFARI) {
  //     await navigator.share(dataText);
  //   }
  // } catch (err) {
  //   console.log(err);
  // }

  // try {
  //   const response = await fetch(imageUrl);
  //   const blob = await response.blob();
  //   let name = Date.now() + `${post.title}.jpg`;
  //   const file = new File([blob], name, { type: "image/jpeg" });
  //   await navigator.share({
  //     title: post?.title,
  //     text: post?.excerpt,
  //     url: typeof window !== "undefined" ? window.location.href : "",
  //     files: [file],
  //   });
  // } catch (err) {
  //   console.log(err);
  // }

  //   if (navigator.share) {
  //     const imageUrl = post?.image?.url;

  //     const response = await fetch(imageUrl);
  //     const blob = await response.blob();

  //     const file = new File([blob], "image.jpg", { type: "image/jpeg" });

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
