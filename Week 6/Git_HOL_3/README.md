# Git Branching and Merging Hands-on Lab

Welcome to the **Git Branching and Merging Hands-on Lab**. This guide is designed to teach absolute beginners how to create branches, switch between them, track and commit independent features, perform visual file diffing using P4Merge, merge code, and manage branch lifecycles locally and on remote platforms (GitHub/GitLab).

---

## Objectives
By completing this hands-on lab, you will learn to:
1. Explain what Git Branching is and why feature branches are used.
2. Differentiate between the primary (master/main) branch and custom feature branches.
3. Switch workspace contexts using `checkout` and `switch`.
4. Perform file comparisons using CLI `git diff` and visual **P4Merge** diff tooling.
5. Execute merges (`git merge`) and identify Fast-forward vs. Three-way merges.
6. Display visual commit graphs (`git log --graph`).
7. Clean up workspace history by deleting merged branches.
8. Configure P4Merge as your global Git diff and merge utility.
9. Outline the remote Pull Request (GitHub) / Merge Request (GitLab) workflow.

---

## Prerequisites
This lab assumes you have:
* **Terminal**: Git Bash installed
* **Tools**: Git installed, GitHub/GitLab account
* **Repository**: Existing local Git repository named `GitDemo` containing a `welcome.txt` baseline commit, connected to a remote repository.
* **Diff Tool**: [P4Merge](https://www.perforce.com/downloads/visual-merge-tool) installed on Windows.

---

## P4Merge Configuration

Before starting, configure **P4Merge** as the default visual diff and merge tool in Git.

#### Run Configuration Commands:
```bash
# Set P4Merge as the visual diff tool
git config --global diff.tool p4merge

# Set P4Merge as the visual merge resolution tool
git config --global merge.tool p4merge

# Disable prompting when opening P4Merge
git config --global mergetool.prompt false
```

#### Verify Configuration:
```bash
git config --global --list
```
* **Expected Output**:
  ```text
  diff.tool=p4merge
  merge.tool=p4merge
  mergetool.prompt=false
  ```

---

## Step-by-Step Lab Instructions

### Step 1: Navigate to the Repository
Open Git Bash and change directory to your local repository:
```bash
cd GitDemo
pwd
git status
```
* **Command Explanations**:
  * `cd GitDemo`: Enters the repository folder.
  * `pwd`: Prints Working Directory to ensure you are in the correct path.
  * `git status`: Verifies that the repository is in a clean state before creating branches.

---

### Step 2: Display Current Branch
```bash
git branch
```
* **Expected Output**:
  `* master`  *(or `* main`)*
  *Explanation*: The asterisk `*` and green font indicate the branch that is currently checked out in your working directory.

---

### Step 3: Create a New Feature Branch
Create a new branch named `GitNewBranch`. This creates a pointer referencing your current commit:
```bash
git branch GitNewBranch
```

---

### Step 4: List Branches
Inspect the new branches in your workspace:
```bash
# List local branches
git branch

# List remote branches
git branch -r

# List both local and remote branches
git branch -a
```
* **Expected Outputs**:
  * `git branch`: Shows `master` and `GitNewBranch`.
  * `git branch -r`: Shows `origin/master` (the tracked remote branches).
  * `git branch -a`: Lists both local and remote branches in red and green colors.

---

### Step 5: Switch to the New Branch
Switch your working directory context to the newly created branch:
```bash
git checkout GitNewBranch
```
*(Alternative: You can use `git switch GitNewBranch` in Git 2.23+).*
* **Expected Output**:
  `Switched to branch 'GitNewBranch'`

#### Verify Switch:
```bash
git branch
```
* **Expected Output**:
  `* GitNewBranch`

---

### Step 6: Create Feature Files
Create two new text files simulating feature additions:
```bash
echo "This is Feature Branch" > feature.txt
echo "Git Branching Example" > feature2.txt
ls
```
* **Expected Output**:
  `feature.txt  feature2.txt  welcome.txt`

---

### Step 7: Check Git Status
```bash
git status
```
* **Expected Output**:
  ```text
  On branch GitNewBranch
  Untracked files:
    (use "git add <file>..." to include in what will be committed)
          feature.txt
          feature2.txt
  ```

---

### Step 8: Stage Files
Stage all modifications in the current folder:
```bash
git add .
git status
```
* **Expected Output**:
  `Changes to be committed: new file: feature.txt, new file: feature2.txt` (listed in green).

---

### Step 9: Commit Changes
Commit the staged changes with a descriptive message:
```bash
git commit -m "Added feature branch files"
```
* **Commit Best Practices**:
  1. Write short, summary-style subject lines (50 characters or less).
  2. Start the commit message with a capital letter.
  3. Use the imperative mood (e.g., "Add feature" rather than "Added feature").
  4. Write a body paragraph separated by empty space if detailed explanations are required.

---

### Step 10: Verify Branch History
View the commit history of the current branch:
```bash
git log --oneline
```
* **Expected Output**:
  ```text
  9a2c3b4 (HEAD -> GitNewBranch) Added feature branch files
  8c4f2a1 (origin/master, master) Initial commit
  ```
  *Note: HEAD points to the current commit on the feature branch. The master branch is one commit behind.*

---

## Merging Section

### Step 11: Switch Back to Master
Before merging, you must always switch your working directory context to the target branch (the branch you want to merge *into*):
```bash
git checkout master
```
* **Expected Output**:
  `Switched to branch 'master'`

#### Verify Files:
Run `ls` to list the files in your directory.
* **Expected Output**:
  `welcome.txt`
  *Explanation*: The files `feature.txt` and `feature2.txt` are missing! They exist only on the `GitNewBranch` branch and will not appear on `master` until we merge.

---

### Step 12: Compare Branches (CLI Diff)
Display differences between the two branches:
```bash
git diff master GitNewBranch
```
* **Expected Output**:
  Shows additions (`+`) of `feature.txt` and `feature2.txt` because they are present on `GitNewBranch` but not on `master`.

---

### Step 13: Visual Comparison (P4Merge)
Use the configured visual difftool to compare the branches:
```bash
git difftool master GitNewBranch
```
* **P4Merge Visual Guide**:
  * P4Merge will open automatically.
  * **File comparison**: The left panel represents the source file (from `master` - which is empty), and the right panel shows the destination file (from `GitNewBranch` containing the new text).
  * **Color Indicators**:
    * **Green**: Added lines in the feature branch.
    * **Red**: Deleted lines.
    * **Yellow/Blue**: Modified lines.
  * Close P4Merge. The terminal will ask if you want to proceed to diff the second file (`feature2.txt`). Type `y` or hit Enter to view it.

---

### Step 14: Merge the Feature Branch
Merge the changes from `GitNewBranch` into your active branch (`master`):
```bash
git merge GitNewBranch
```
* **Expected Output**:
  ```text
  Updating 8c4f2a1..9a2c3b4
  Fast-forward
   feature.txt  | 1 +
   feature2.txt | 1 +
   2 files changed, 2 insertions(+)
   create mode 100644 feature.txt
   create mode 100644 feature2.txt
  ```
  *Explanation*: Because the `master` branch had no new commits since `GitNewBranch` was created, Git performed a **Fast-forward merge**. This simply moves the `master` branch pointer forward to match the commit `9a2c3b4`.

---

### Step 15: Verify Post-Merge Status
```bash
git status
ls
```
* **Expected Output**:
  `nothing to commit, working tree clean`.
  The directory now contains: `feature.txt  feature2.txt  welcome.txt`.

---

### Step 16: Display Graph History
Display the commit logs in a visual graph structure:
```bash
git log --oneline --graph --decorate --all
```
* **Expected Output**:
  ```text
  * 9a2c3b4 (HEAD -> master, GitNewBranch) Added feature branch files
  * 8c4f2a1 (origin/master) Initial commit
  ```
  *Explanation*: Both `master` and `GitNewBranch` now point to the same commit (`9a2c3b4`).

---

### Step 17: Delete the Merged Branch
Since the feature is successfully merged, delete the local `GitNewBranch` branch pointer:
```bash
git branch -d GitNewBranch
```
* **Expected Output**:
  `Deleted branch GitNewBranch (was 9a2c3b4).`
  *Note*: Git prevents accidental loss of code by only allowing branch deletion with `-d` if the branch has been successfully merged. If the branch contains unmerged work, you must force delete it using capital `-D`.

---

### Step 18: Verify Branch Cleanup
```bash
git branch
```
* **Expected Output**:
  `* master`

---

### Step 19: Push Merged Changes
Push the merged commits from your local master branch to GitHub:
```bash
git push origin master
```

---

### Step 20: Pull Requests (GitHub) / Merge Requests (GitLab) Workflow

In real production environments, developers do not merge directly on their local machines. Instead, they push their feature branches to the remote server and open a **Pull Request (PR)** or **Merge Request (MR)** for code review.

#### Collaborative Workflow Diagram:
```text
[Local Feature Branch] ──(git push)──> [Remote Feature Branch]
                                                │
                                                ▼
                                     [Create Pull Request]
                                                │
                                                ▼
                                      [Code Review & Appr]
                                                │
                                                ▼
                                       [Merge on GitHub]
                                                │
                                                ▼
[Local master] <──────(git pull)────── [Remote master]
```

#### Step-by-Step Collaborative Procedure:
1. **Push Feature Branch**: Instead of merging locally, push the branch directly to GitHub:
   ```bash
   git push origin GitNewBranch
   ```
2. **Open GitHub/GitLab**: Open your browser and navigate to your repository page.
3. **Compare & Pull Request**: GitHub will detect the new branch and show a banner: **"Compare & pull request"**. Click it.
4. **Create PR**: Write a description of your feature and click **"Create pull request"**.
5. **Code Review**: Team members inspect the changes, comment on specific lines, and verify build status.
6. **Merge**: Once approved, click the green **"Merge pull request"** button on GitHub, followed by **"Confirm merge"**.
7. **Cleanup**: Click **"Delete branch"** on GitHub to remove the remote branch.
8. **Update Local master**: Switch back to master on your computer and pull the remote merge updates:
   ```bash
   git checkout master
   git pull origin master
   git branch -d GitNewBranch
   ```

---

## Git Branching & Merging Key Concepts

* **Feature Branch**: A temporary branch created to work on a specific task (bug fix, new feature) without modifying the main line of code.
* **HEAD**: A pointer referencing your current checked-out branch and commit.
* **Checkout / Switch**: Moving HEAD and updating files in the working directory to match another branch's state.
* **Fast-forward Merge**: A merge that occurs when there is a linear path from the current branch tip to the target branch tip. Git simply moves the pointer forward.
* **Three-way Merge**: A merge that occurs when the branches have diverged (both have new commits). Git compares the two branch tips and their common ancestor, creating a new **Merge Commit**.
* **Merge Conflict**: A state where Git cannot reconcile changes to the same line of a file automatically. Git pauses the merge and asks the developer to resolve the conflicts manually.

---

## Best Practices
1. **Never Commit Directly to Master**: Keep your master/main branch clean and stable. Always write code on feature branches.
2. **Use Meaningful Branch Names**: Name branches by feature context, e.g., `feature-login`, `bugfix-header`, `docs-update`.
3. **Commit Frequently**: Small, atomic commits are easier to review, test, and merge.
4. **Pull Before Pushing**: Always pull the latest changes from the remote repository before pushing your branch to prevent conflicts.
5. **Review Code Before Merging**: Utilize GitHub Pull Requests to review code before merging.
6. **Delete Merged Branches**: Clean up local and remote branches once they are successfully merged.

---

## Troubleshooting Common Errors

### 1. `fatal: A branch named 'GitNewBranch' already exists.`
* **Cause**: You are trying to create a branch with a name that is already taken.
* **Solution**: Choose a new branch name, or delete the old branch first if it is no longer needed:
  ```bash
  git branch -d GitNewBranch
  ```

### 2. `error: cannot delete branch 'GitNewBranch' checked out at...`
* **Cause**: You cannot delete a branch that you are currently working in (HEAD is pointing to it).
* **Solution**: Switch to another branch (like `master`) first, then delete it:
  ```bash
  git checkout master
  git branch -d GitNewBranch
  ```

### 3. `error: The branch 'GitNewBranch' is not fully merged.`
* **Cause**: You are trying to delete a branch containing commits that have not been merged into your active branch.
* **Solution**: Merge the branch first. If you explicitly want to discard the commits and delete the branch, use the force flag:
  ```bash
  git branch -D GitNewBranch
  ```

### 4. `Note: switching to '8c4f2a1'. You are in 'detached HEAD' state.`
* **Cause**: You checked out a specific commit ID instead of a branch pointer. In this state, commits you make are not attached to any branch and can be lost easily.
* **Solution**: Return to your master branch immediately:
  ```bash
  git checkout master
  ```

---

## Expected Directory Structure
After completing this lab, the repository directory layout will look like this:
```text
GitDemo/
│
├── .git/               (Hidden Git database)
├── welcome.txt         (Primary text file)
├── feature.txt         (Merged from GitNewBranch)
└── feature2.txt        (Merged from GitNewBranch)
```

---

## Expected Git Graph Representation

After completing a diverged merge (Three-way merge), running `git log --graph --oneline` shows a graph similar to:

```text
*   7c2b3a9 (HEAD -> master) Merge branch 'GitNewBranch'
|\  
| * 9a2c3b4 (GitNewBranch) Added feature branch files
|/  
* 8c4f2a1 Initial commit
```
*Note: The branches diverge and converge back at the Merge Commit.*
