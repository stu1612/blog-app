import Button from "../common/Button";

export default function Welcome() {
  return (
    <div>
      <h3 className="font-h3 bg-hyper clip-text hidden lg:block">
        Welcome, to my Blog site ✋
      </h3>
      <div className="flex flex-row gap-5 flex-wrap py-4">
        <p className="font-normal font-p">
          I hope you find my blog articles of interest, my goal is to test
          myself learning new things, improve my understanding of current trends
          whilst having fun coding ! If you have any advice for me, would like
          to collaborate together or would like me to build a test application
          to help your learnign please reach out.
        </p>
        <Button text="Contact me" />
      </div>
    </div>
  );
}
