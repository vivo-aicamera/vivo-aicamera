## Organization

1. Create an organization on GitHub, its name must be same as your web name, for example, `vivo-aicamera`.

2. Create a repository named `${organization_name}.github.io` in your organization, for example, `vivo-aicamera.github.io`.

3. Push all code to the main branch of the repository.

4. Create an empty branch named gh-pages.

5. Go to `Settings/Pages`, set the Branch to `gh-pages/(root)`.

6. Go to `.github/workflows/pr.yml`, replace the `vivo-aicamera.github.io` with your repository name.

7. Git push and wait the github action complete, then you can open `https://${organization_name}.github.io` to see the website.
