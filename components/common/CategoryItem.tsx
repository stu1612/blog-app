type Props = {
  title: string;
};

export default function CategoryItem({ title }: Props) {
  return (
    <p className="bg-sky dark:bg-ocean py-2 px-4 rounded-lg text-black font-medium text-sm lowercase cursor-pointer">
      {title}
    </p>
  );
}
