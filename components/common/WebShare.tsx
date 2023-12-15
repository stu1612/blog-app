"use client";

export default function WebShare() {
  const shareData = {
    title: "MDN",
    text: "Learn web development on MDN!",
    url: "https://developer.mozilla.org",
  };

  const handleClick = () => {
    if (navigator.share) {
      navigator
        .share(shareData)
        .then(() => console.log("shared"))
        .catch((err) => console.log("Error ", err));
    }
  };

  return (
    <div className="fixed bottom-[20%] right-[8%]" onClick={handleClick}>
      <button className="bg-red-500 p-2">Share</button>
    </div>
  );
}
