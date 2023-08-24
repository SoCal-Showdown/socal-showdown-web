# Git and GitKraken Basics

Welcome to the documentation for beginners on getting started with git and the git client, which is only good for looking through git history (learn command line ASAP!!!), GitKraken!

## Table of Contents

- [Introduction to Version Control and Git](#introduction-to-version-control-and-git)
- [Getting Started with Git](#getting-started-with-git)
- [Using GitKraken](#using-gitkraken)
- [Collaboration and Remote Repositories](#collaboration-and-remote-repositories)
- [Handling Merge Conflicts](#handling-merge-conflicts)
- [Using Git from the Command Line](#using-git-from-the-command-line)
- [Resources and Further Learning](#resources-and-further-learning)

## Introduction to Version Control and Git

Software development is a collaborative effort, and version control is a crucial tool that enables teams to work together seamlessly. Git is probably the most widely used distributed version control system. It offers a robust way to track changes, collaborate, and manage code over time.

### Core Concepts

- **Repository (Repo):** A repository, AKA repo, is a directory that holds your project and its entire history. It contains all the files, folders, and commits. If you're reading this, please teach Natalie how to open a folder.

- **Commit:** A commit represents a snapshot of your project at a specific moment. It captures changes you've made and provides a way to track the history of those changes.

- **Branch:** A branch is a parallel line of development within your repository. It's used to isolate work and experiment without affecting the main codebase.

- **Pull Request (PR):** A pull request is a request to merge changes from one branch into another. It allows for discussion, code review, and integration. There is no such thing as pushing code to the main branch. You should always create a PR. Even if you're still working on your branch, you can make a draft PR in GitHub, which will not be merged until you are done. 

- **Merge:** Merging combines the changes from one branch into another, creating a unified history.

## Getting Started with Git

To get started, follow these steps:

1. **Install Git:** Download and install Git from [git-scm.com](https://git-scm.com/). This provides the Git command-line tools for managing repositories.

2. **Configure Git:** Set your username and email using `git config --global user.name "Your Name"` and `git config --global user.email "your@example.com"`.

3. **Create a Repository:** Initialize a new repository using `git init` within your project folder. This turns the folder into a Git repository.

4. **Make Commits:** Make changes to your files, then stage and commit them using `git add .` and `git commit -m "Your commit message"`. A commit message cannot just be "changes". You need to breifly describe your changes.

5. **Branching:** Create a new branch with `git branch <branch-name>` and switch to it with `git checkout <branch-name>`.

6. **Merging:** Merge branches with `git merge <branch-name>` after switching to the target branch.

## Using GitKraken 

GitKraken provides an intuitive graphical interface for managing Git repositories. It is a lot easier using GitKraken to visualize Git, but using the command line will soon become easier and more efficient.

1. **Clone a Repository:**
   - Open GitKraken and click "Clone Repo" to copy a remote repository to your local machine.

2. **Visualize Your Codebase:**
   - Use the graph view to see the history and branches, making it easier to understand your project's evolution.

3. **Staging and Committing:**
   - Stage changes by dragging files from the "Unstaged Files" area to the "Staged Files" area.
   - Add a commit message and click "Commit" to create a commit.

4. **Branch Management:**
   - Create and switch branches using the "Branches" panel.
   - Merge branches by selecting the target and source branches and clicking "Merge Branches".

5. **Pull Requests:**
   - Create pull requests by selecting the source and target branches, adding a title and description, and clicking "Create Pull Request".

## Collaboration and Remote Repositories

Collaboration is at the HEART of Git:

1. **Pushing Changes:**
   - Push your local commits to a remote repository using `git push`.

2. **Pulling Changes:**
   - Pull remote changes to your local repository with `git pull`.

3. **Forking and Pull Requests:**
   - Fork a repository on platforms like GitHub, make changes, and create a pull request to contribute.

## Handling Merge Conflicts

Merge conflicts can occur when Git can't automatically merge changes. Don't copy me, but I used to like deleting whatever that was on the main branch to mess with Josiah lol. NEVER DO THAT. If you need support, GitKraken helps you resolve these:

1. **Identify Conflicts:**
   - GitKraken highlights conflicting areas in your files.

2. **Resolve Conflicts:**
   - Open a file, choose the version you want to keep, and save the changes.

## Using Git from the Command Line

Now, if you're interested in what I meant by "using the command line", here are some of the basics. Working with Git via the command line provides you with powerful control over your repositories. Here are some essential commands:

- **Clone a Repository:** Clone a remote repository to your local machine with `git clone <repository-url>`.

- **Check Status:** See the status of your repository with `git status`. This shows you which files have been modified, added, or deleted.

- **Review Changes:** View the changes made to a file with `git diff <filename>` before staging them.

- **Undo Changes:** Discard changes in your working directory with `git restore <filename>`.

- **Commit History:** View the commit history with `git log`. Use `git log --oneline` for a more concise view.

- **Amend Commits:** Modify the most recent commit with `git commit --amend`. Use this carefully, as it changes commit history.


## Resources and Further Learning

These were just the basics, so if you'd still like to expand on your Git knowledge, I found some more documenatation:

- [Git Documentation](https://git-scm.com/doc)
- [GitKraken Documentation](https://support.gitkraken.com/)

If you ever need any support, you can email me: kylekaos03@gmail.com

