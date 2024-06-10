<h1 id="firstpullrequest">First Pull Request</h1>

<h4 style="color: gray;">How to make your first change?</h4>

**First of all, you need to fork the repository and set up your copy.**

1. Visit the DevEngageAnalytics repository on [GitHub](https://github.com/MathPow/DevEngageAnalytics) and click on the "Fork" button to create a copy in your GitHub account.
2. Clone the repository to your local machine using
   `>> git clone https://github.com/[your_username]/DevEngageAnalytics.git`

**Second of all, you can create a branch and push a change.**

3. Open your favorite Integrated Development Environment (IDE), such as VSCode, and open the project.
4. Create a new branch for your changes.
5. Stage your changes using
   `>> git add .`
   and commit them using
   `>> git commit -m "Your commit message".`
6. Push your changes to your forked repository using
   `>> git push origin your-branch-name`

**Finally, ensure your fork stays up-to-date with the original repository.**

7. Syncing your fork with the upstream repository using

   ```
   >> git fetch upstream
   >> git merge upstream/dev
   >> git push origin dev
   ```
