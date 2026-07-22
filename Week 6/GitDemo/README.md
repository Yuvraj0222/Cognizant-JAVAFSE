# Git Fundamentals Hands-on Lab: GitDemo

Welcome to the **Git Fundamentals Hands-on Lab**. This guide is designed for absolute beginners to learn version control concepts using Git and GitHub. You will walk through installing Git, setting up global configurations, configuring a default editor, initializing repositories, tracking files, committing changes, branching, and pushing code to a remote repository.

---

## Prerequisites
Before beginning the lab, ensure you have:
* **Operating System**: Windows OS
* **Terminal**: [Git Bash](https://git-scm.com/downloads) installed
* **Account**: A [GitHub](https://github.com/) or GitLab account
* **Text Editor**: [Notepad++](https://notepad-plus-plus.org/) installed
* **Optional**: Visual Studio Code

---

## Bonus: Git Architecture & Workflow

Before diving into commands, it is crucial to understand the **four storage areas** of Git:

1. **Working Directory**: The actual folder on your computer where you create and edit files. (Untracked state).
2. **Staging Area (Index)**: A preparation area where Git tracks files that are ready to be committed in the next snapshot.
3. **Local Repository**: The `.git` database on your local disk containing all committed snapshots and version history.
4. **Remote Repository**: A hosted platform (like GitHub) that stores copies of your repository for sharing and collaboration.

### Visual Workflow Diagram

```text
  [ Working Directory ]
           │
           │  (git add <file>)
           ▼
    [ Staging Area ]
           │
           │  (git commit)
           ▼
  [ Local Repository ]
           │
           │  (git push)
           ▼
 [ Remote Repository ]
```

---

## Step-by-Step Lab Instructions

### Step 1: Git Installation & Configuration

#### A. Verify Installation
First, open **Git Bash** and check if Git is installed correctly:
```bash
git --version
```
* **Expected Output**:
  `git version 2.40.1.windows.1` *(or similar version numbers)*

#### B. Configure User Identity
Set up your global Git username and email. This metadata attaches to all your commits:
```bash
# Set your name
git config --global user.name "Your Name"

# Set your email
git config --global user.email "your_email@example.com"
```

#### C. Verify Configuration
Display all configured global variables to ensure they are set correctly:
```bash
git config --global --list
```
* **Expected Output**:
  ```text
  user.name=Your Name
  user.email=your_email@example.com
  ```

---

### Step 2: Configure Notepad++ as Git Default Editor

By default, Git opens **Vim** for commit messages, which can be difficult for beginners. We will configure **Notepad++** as the default editor.

#### A. Add Notepad++ to Windows PATH Environment Variable
Git cannot find the `notepad++` command unless its installation folder is added to Windows' Search Path:
1. Open the Windows **Start Menu**, search for **Control Panel**, and open it.
2. Go to **System and Security** > **System** (or search "Environment Variables" directly).
3. Click on **Advanced system settings** on the left panel.
4. In the System Properties window, click on **Environment Variables** at the bottom.
5. Under **User variables**, select the **Path** variable and click **Edit**.
6. Click **New** and paste the path to your Notepad++ directory:
   * For 64-bit systems: `C:\Program Files\Notepad++`
   * For 32-bit systems: `C:\Program Files (x86)\Notepad++`
7. Click **OK** on all windows to save the changes.
8. **Restart Git Bash** to load the updated Environment Variables.

#### B. Verify Notepad++ Launch
In your newly opened Git Bash terminal, type the following command to verify Notepad++ opens:
```bash
notepad++
```
*If Notepad++ opens, close it and proceed. If you receive "command not found", check your environment path.*

#### C. Configure Git Default Editor
Run the command to set Notepad++ as the default global core editor:
```bash
git config --global core.editor "notepad++.exe -multiInst -nosession"
```

#### D. Verify Config Editor
Test the editor mapping by opening the global configuration file directly:
```bash
git config --global -e
```
*Notepad++ should open. Close it without making any modifications.*

---

### Step 3: Create Local Repository

#### A. Initialize Folder
Initialize a new local Git repository inside a folder named `GitDemo`:
```bash
git init GitDemo
```
* **Expected Output**:
  `Initialized empty Git repository in C:/Users/YourUser/Desktop/yuvraj/GitDemo/.git/`

#### B. Navigate and Inspect Hidden Files
```bash
# Move into folder
cd GitDemo

# List all files including hidden ones
ls -al
```
* **Expected Output**:
  You will see a hidden directory named **`.git/`**. This directory contains Git's database, configuration, and object storage. **Never delete or modify this folder manually.**

---

### Step 4: File Operations & Tracking

#### A. Create a File
Create a new file named `welcome.txt` and add content to it:
```bash
echo "Welcome to the version control" > welcome.txt
```

#### B. View File Content
Confirm the content of the file:
```bash
cat welcome.txt
```
* **Expected Output**:
  `Welcome to the version control`

#### C. Check Status (Untracked state)
Inspect the state of your working directory:
```bash
git status
```
* **Expected Output**:
  ```text
  On branch master
  Untracked files:
    (use "git add <file>..." to include in what will be committed)
          welcome.txt

  nothing added to commit but untracked files present (use "git add" to track)
  ```
  *Note: The red color of "welcome.txt" indicates it is currently in the Working Directory and untracked by Git.*

#### D. Track File (Staging state)
Move `welcome.txt` into the Staging Area:
```bash
git add welcome.txt
```

#### E. Check Status (Staged state)
```bash
git status
```
* **Expected Output**:
  ```text
  On branch master
  Changes to be committed:
    (use "git restore --staged <file>..." to unstage)
          new file:   welcome.txt
  ```
  *Note: The green color indicates the file is in the Staging Area, ready to be committed.*

---

### Step 5: Committing Changes

#### A. Multi-line Commit (Notepad++)
Run the commit command without an inline message:
```bash
git commit
```
* **Action**:
  Notepad++ will automatically open. Type a descriptive, multi-line commit message:
  ```text
  Initial commit
  Added welcome.txt
  Created GitDemo project
  ```
  Save the file in Notepad++ and close the editor window. Git Bash will process the commit.
* **Expected Output**:
  ```text
  [master (root-commit) 8c4f2a1] Initial commit
   1 file changed, 1 insertion(+)
   create mode 100644 welcome.txt
  ```

*Alternative (Inline Commit)*:
If you want to commit quickly without opening an external editor, use the `-m` flag:
```bash
git commit -m "Initial commit - welcome.txt added"
```

#### B. Verify Clean Working Tree
Check the status of the repository:
```bash
git status
```
* **Expected Output**:
  ```text
  On branch master
  nothing to commit, working tree clean
  ```

---

### Step 6: View Version History

Display the history of commits in the repository:
```bash
git log
```
* **Expected Output**:
  ```text
  commit 8c4f2a1abf4b8cfc8d8b9487c65345a0b73c242b (HEAD -> master)
  Author: Your Name <your_email@example.com>
  Date:   Wed Jul 22 06:30:00 2026 +0530

      Initial commit
      Added welcome.txt
      Created GitDemo project
  ```

---

### Step 7: Connecting & Pushing to a Remote Repository

#### A. Connect Remote Repository
1. Log in to GitHub.
2. Create a new repository named **`GitDemo`**.
3. **Do NOT** check "Add a README file", "Add .gitignore", or "Choose a license".
4. Copy the repository URL (HTTPS or SSH).
5. Link your local repository to the remote one using `git remote add`:
```bash
git remote add origin https://github.com/USERNAME/GitDemo.git
```

#### B. Verify Connection
```bash
git remote -v
```
* **Expected Output**:
  ```text
  origin  https://github.com/USERNAME/GitDemo.git (fetch)
  origin  https://github.com/USERNAME/GitDemo.git (push)
  ```

#### C. Pull Remote Content
It is best practice to pull any remote changes before pushing:
```bash
git pull origin master
```
*Note: If your local main branch is named `main`, run `git pull origin main` instead.*

#### D. Push Local Changes
Push your code to the remote repository. The `-u` flag links your local branch to the remote branch, allowing you to use `git push` or `git pull` without arguments in the future:
```bash
git push -u origin master
```
*(Or `git push -u origin main` depending on your active branch).*

---

### Step 8: Branching Operations

#### A. Check Current Branch
List local branches:
```bash
git branch
```
* **Expected Output**:
  `* master` *(The asterisk represents the current active branch)*

#### B. Create New Branch
Create a new branch named `feature-login`:
```bash
git branch feature-login
```

#### C. Switch Branches
Switch your workspace to the newly created branch:
```bash
git checkout feature-login
```
* **Expected Output**:
  `Switched to branch 'feature-login'`

#### D. Return to Main Branch
Switch back to the primary branch:
```bash
git checkout master
```
*(Or `git checkout main` depending on your main branch name).*
* **Expected Output**:
  `Switched to branch 'master'`

---

## Detailed Git Command Reference Matrix

| Command | Purpose | Syntax | Example | Expected Output |
| :--- | :--- | :--- | :--- | :--- |
| **`git --version`** | Verify Git installation | `git --version` | `git --version` | `git version 2.40.1.windows.1` |
| **`git config`** | Configure repository variables globally or locally | `git config --global <var> <val>` | `git config --global user.name "Yuvraj"` | *None* |
| **`git init`** | Initialize local git repository | `git init <folder>` | `git init GitDemo` | `Initialized empty Git repository...` |
| **`git status`** | Check current status of files and active branch | `git status` | `git status` | `nothing to commit, working tree clean` |
| **`git add`** | Stage files for committing | `git add <file>` | `git add welcome.txt` | *None* |
| **`git commit`** | Record file snapshots to local database history | `git commit -m "<msg>"` | `git commit -m "First commit"` | `[master (root-commit) 8c4f2a1] First commit` |
| **`git remote`** | Connect local repo to remote host | `git remote add <name> <url>` | `git remote add origin <url>` | *None* |
| **`git pull`** | Fetch and merge remote changes to local branch | `git pull <remote> <branch>` | `git pull origin master` | `Already up to date.` |
| **`git push`** | Push local branch snapshots to remote host | `git push -u <remote> <branch>` | `git push -u origin master` | `Branch 'master' set up to track remote...` |
| **`git log`** | Display version commit history logs | `git log` | `git log` | Displays author, date, and commit messages |
| **`git branch`** | List, create, or delete branches | `git branch <name>` | `git branch feature-login` | Lists existing branches or creates a new one |

---

## Troubleshooting & Common Errors

### 1. `bash: git: command not found` (or "git not recognized")
* **Cause**: Git is not installed, or its installation path is not in the system environment PATH.
* **Solution**: Download and run the Git Installer. Ensure you select the option **"Git from the command line and also from 3rd-party software"** during setup.

### 2. `fatal: not a git repository (or any of the parent directories): .git`
* **Cause**: You are running Git commands inside a directory that has not been initialized.
* **Solution**: Run `git init` to initialize the directory, or run `cd <repo>` to navigate into your repository before executing Git commands.

### 3. `fatal: remote origin already exists.`
* **Cause**: You are trying to run `git remote add origin` on a repository that already has a remote named `origin`.
* **Solution**: Remove the existing remote link first, then add the new one:
  ```bash
  git remote remove origin
  git remote add origin https://github.com/USERNAME/GitDemo.git
  ```

### 4. `fatal: Nothing to commit, working tree clean`
* **Cause**: There are no changes made to your files, or the changes have not been staged yet.
* **Solution**: Edit files, run `git add <file>` to stage them, and then run `git commit`.

### 5. `Permission denied (publickey)` or Authentication Failed
* **Cause**: You do not have permission to push to the repository, or your login credentials/tokens are invalid.
* **Solution**: 
  * If using HTTPS, ensure your GitHub Personal Access Token (PAT) is configured correctly inside the Git Credential Manager.
  * If using SSH, ensure your public key (`~/.ssh/id_rsa.pub`) is generated and added to your GitHub settings.

### 6. `fatal: repository not found`
* **Cause**: The remote URL is incorrect, or the remote repository has not been created on GitHub.
* **Solution**: Double-check the URL of your repository on GitHub. Make sure it matches exactly: `https://github.com/USERNAME/GitDemo.git`.

### 7. Merge Conflicts (`CONFLICT (content): Merge conflict in...`)
* **Cause**: Both local and remote repositories have changes on the same lines of the same files.
* **Solution**:
  1. Open the conflicting file in Notepad++ or VS Code.
  2. Locate the conflict markers:
     ```text
     <<<<<<< HEAD
     Local changes here
     =======
     Remote changes here
     >>>>>>> origin/master
     ```
  3. Edit the file to keep the desired code and remove the conflict markers.
  4. Save the file.
  5. Stage and commit the resolved conflict:
     ```bash
     git add welcome.txt
     git commit -m "Resolved merge conflict in welcome.txt"
     ```
