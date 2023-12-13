const token = process.env.GITHUB_ACCESS_TOKEN;

export default async function fetchGithubAPI() {
  const res = await fetch(
    `https://api.github.com/users/stu1612/repos?sort=created&per_page=4`,
    {
      headers: {
        Authorization: `token ${token}`,
      },
      next: {
        revalidate: 0,
      },
    }
  );

  return res.json();
}
