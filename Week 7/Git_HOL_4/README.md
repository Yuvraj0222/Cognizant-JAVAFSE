# Git Merge Conflict Resolution Hands-on Lab

Welcome to the **Git Merge Conflict Resolution Hands-on Lab**. This guide is designed for beginners to learn how merge conflicts occur in Git, how to understand conflict markers, and how to resolve conflicts both manually using text editors and visually using **P4Merge**.

---

## Objectives
By completing this hands-on lab, you will learn to:
1. Explain what a Merge Conflict is and why it occurs.
2. Analyze Git's conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`).
3. Resolve conflicts manually in a text editor like Notepad++.
4. Resolve conflicts visually using the **P4Merge** merge resolution interface.
5. Create and commit a `.gitignore` file to ignore local backup files (e.g., `*.bak`).
6. Clean up feature branches after successful conflict resolution.
7. Inspect branch divergence and merge logs using git graphs.

---

## Prerequisites
Before beginning this lab, ensure you have:
* **Terminal**: Git Bash installed
* **Tools**: Git version control, GitHub/GitLab account
* **Repository**: Existing local Git repository named `GitDemo` linked to a remote repository.
* **Diff Tool**: [P4Merge](https://www.perforce.com/downloads/visual-merge-tool) installed on Windows and configured as Git's global diff and merge tool.
* **Editor**: Notepad++ installed and set as Git's default core editor.

---

## Lab Scenario
Two developers modify the same line of the same file (`hello.xml`) simultaneously. Developer A works on a feature branch named `GitWork` and commits their changes. Developer B works directly on `master` and commits different changes. When Developer B attempts to merge `GitWork` into `master`, Git cannot determine which changes are correct. The automatic merge fails, creating a **Merge Conflict**. You must resolve this conflict to complete the merge.

---

## Step-by-Step Lab Instructions

### Step 1: Verify Master is Clean

Before creating any branches, your current workspace must be in a clean state (no modified or unstaged files):
```bash
git checkout master
git status
```
* **Expected Output**:
  ```text
  On branch master
  nothing to commit, working tree clean
  ```
* **Why a clean repository is required**: If you have uncommitted changes in your working directory and switch branches, Git will either carry those uncommitted changes over to the new branch (causing confusion) or prevent you from switching entirely if the files overlap. Starting from a clean repository ensures you know exactly what baseline commit your new branch is branching off from.

---

### Step 2: Create a Feature Branch
Create a new branch named `GitWork` and switch to it:
```bash
git checkout -b GitWork
```
*(Alternative: You can use `git switch -c GitWork` in Git 2.23+).*

#### Verify Branch:
```bash
git branch
```
* **Expected Output**:
  `* GitWork`

---

### Step 3: Create `hello.xml` on `GitWork`
Create a new file named `hello.xml` and add XML content:
```bash
touch hello.xml
notepad++ hello.xml
```
* **Action**:
  Notepad++ will open. Paste the following XML snippet:
  ```xml
  <?xml version="1.0"?>
  <message>
  Hello from GitWork Branch
  </message>
  ```
  Save and close the file.

---

### Step 4: Check Status
```bash
git status
```
* **Expected Output**:
  Shows `hello.xml` as an **Untracked File** in red. It lives only in your Working Directory.

---

### Step 5: Stage and Commit the File
Stage and commit `hello.xml` to save the feature branch snapshot:
```bash
git add hello.xml
git commit -m "Added hello.xml in GitWork branch"
```
* **Explanation**: Staging moves `hello.xml` to the Staging Area. Committing moves the file to the Local Repository, creating a permanent snapshot on the `GitWork` branch history.

---

### Step 6: Switch Back to Master
Switch back to the primary branch:
```bash
git checkout master
```
* **Expected Output**:
  `Switched to branch 'master'`
  *Note*: If you run `ls`, you will see `hello.xml` does not exist in your working directory. This is correct, as it exists only on the `GitWork` branch.

---

### Step 7: Create Conflicting `hello.xml` on Master
Create another file with the exact same name `hello.xml` in your master branch, but with different content:
```bash
touch hello.xml
notepad++ hello.xml
```
* **Action**:
  Notepad++ will open. Paste the following conflicting XML snippet:
  ```xml
  <?xml version="1.0"?>
  <message>
  Hello from Master Branch
  </message>
  ```
  Save and close the file.

---

### Step 8: Commit Master Changes
Stage and commit this conflicting file to your master branch history:
```bash
git add hello.xml
git commit -m "Added hello.xml in master"
```

---

### Step 9: Display Divergent History Graph
Display your repository history to observe branch divergence:
```bash
git log --oneline --graph --decorate --all
```
* **Expected Output**:
  ```text
  * e3f5a2b (HEAD -> master) Added hello.xml in master
  | * 9d2c1b4 (GitWork) Added hello.xml in GitWork branch
  |/  
  * 8c4f2a1 (origin/master) Initial commit
  ```
  *Explanation*: The graph symbol `|/` shows that `master` and `GitWork` have diverged. They both started at commit `8c4f2a1`, but now have independent, conflicting commits on their branch tips.

---

### Step 10: Compare Differences (CLI Diff)
Inspect the line-by-line differences between `master` and `GitWork`:
```bash
git diff master GitWork
```
* **Expected Output**:
  ```diff
  -Hello from Master Branch
  +Hello from GitWork Branch
  ```
  *Explanation*: The `-` (red) shows the line in your current branch (`master`), and the `+` (green) shows the different line on the `GitWork` branch.

---

### Step 11: Visual Comparison (P4Merge)
Launch P4Merge to visually inspect the difference before merging:
```bash
git difftool master GitWork
```
* **P4Merge Diff UI**:
  * P4Merge will open.
  * The left pane shows `hello.xml` on `master` containing `"Hello from Master Branch"`.
  * The right pane shows `hello.xml` on `GitWork` containing `"Hello from GitWork Branch"`.
  * Close P4Merge to return to the console.

---

### Step 12: Trigger the Merge Conflict
Now, attempt to merge the `GitWork` branch into your active `master` branch:
```bash
git merge GitWork
```
* **Expected Output**:
  ```text
  Auto-merging hello.xml
  CONFLICT (content): Merge conflict in hello.xml
  Automatic merge failed; fix conflicts and then commit the result.
  ```
  *Explanation*: Because the same line in `hello.xml` was modified differently on both branches, Git's automatic merge fail-safes trigger. Git pauses the merge process and marks the file as conflicted in your working directory.

---

### Step 13: Understand Git Conflict Markers
Open the conflicted `hello.xml` in Notepad++ to examine Git's conflict markings:
```bash
notepad++ hello.xml
```
* **File Contents**:
  ```xml
  <?xml version="1.0"?>
  <message>
  <<<<<<< HEAD
  Hello from Master Branch
  =======
  Hello from GitWork Branch
  >>>>>>> GitWork
  </message>
  ```

#### Conflict Marker Explanations:
* **`<<<<<<< HEAD`**: Indicates the beginning of the conflicting lines on your current branch (`master`).
* **`=======`**: The boundary line separating your changes from the incoming branch changes.
* **`>>>>>>> GitWork`**: Indicates the end of the conflicting lines on the incoming merged branch (`GitWork`).

---

### Step 14: Resolve Conflict Manually

To resolve the conflict manually, edit the file in Notepad++:
1. Delete the conflict markers (`<<<<<<< HEAD`, `=======`, and `>>>>>>> GitWork`).
2. Reconcile the text. For this lab, we want to keep **both** lines and add a confirmation.
3. Edit the file to match the following content:
   ```xml
   <?xml version="1.0"?>
   <message>
   Hello from Master Branch
   Hello from GitWork Branch
   Merge Successful
   </message>
   ```
4. Save and close the file.

---

### Step 15: Resolve Conflict Visually (Alternative: P4Merge)

If you prefer to resolve conflicts visually using **P4Merge** instead of editing text markers manually, run the following command:
```bash
git mergetool
```
* **P4Merge Merge UI Guide**:
  * P4Merge opens showing four panels:
    1. **Base (Top Center)**: The common ancestor commit before branches diverged (empty in this file region).
    2. **Local / Mine (Top Left)**: The changes on your current active branch (`master`).
    3. **Remote / Theirs (Top Right)**: The changes on the incoming branch (`GitWork`).
    4. **Merged Result (Bottom)**: The preview of the resolved file.
  * **Resolving**:
    * Click the button icons on the right side of the bottom panel to select:
      * **Blue (Left)**: Accept changes from `master` (Mine).
      * **Green (Right)**: Accept changes from `GitWork` (Theirs).
      * **Both**: Click both to keep both lines.
    * You can also edit the text in the bottom "Merged Result" panel manually to add `"Merge Successful"`.
  * Save and close P4Merge.

---

### Step 16: Verify Staged Status
Inspect your repository state:
```bash
git status
```
* **Expected Output**:
  ```text
  On branch master
  All conflicts fixed but you are still merging.
    (use "git commit" to conclude merge)

  Changes to be committed:
          modified:   hello.xml

  Untracked files:
          hello.xml.orig
  ```
  *Note*: When using a visual mergetool, Git automatically creates a `.orig` file as a backup in case the merge fails. We will ignore this later.

---

### Step 17: Complete the Merge Commit
Commit the resolved file to finalize the merge process:
```bash
git add hello.xml
git commit -m "Resolved merge conflict"
```
* **Expected Output**:
  `[master 6f8b2a1] Resolved merge conflict`

---

### Step 18: Create a Backup File
Create a manual backup file to demonstrate how to use `.gitignore`:
```bash
cp hello.xml hello.xml.bak
ls
```
* **Expected Output**:
  `hello.xml  hello.xml.bak  hello.xml.orig  welcome.txt`

---

### Step 19: Ignore Backup Files
We do not want to track backup files (`.bak`, `.orig`) in our repository repository. Create or update `.gitignore`:
```bash
notepad++ .gitignore
```
* **Action**:
  Add the following wildcard pattern to `.gitignore`:
  ```text
  *.bak
  *.orig
  ```
  Save and close the file.
* **Why backup files should not be committed**: Backup files, local configurations, and build logs are specific to your machine. Committing them litters the repository history and can overwrite other developers' local backups.

---

### Step 20: Commit the `.gitignore`
Stage and commit the ignore file:
```bash
git add .gitignore
git commit -m "Ignored backup files"
```

---

### Step 21: Check Branches
```bash
git branch
```
* **Expected Output**:
  `GitWork` and `* master`

---

### Step 22: Delete the Merged Feature Branch
Delete the temporary local feature branch `GitWork`:
```bash
git branch -d GitWork
```
* **Expected Output**:
  `Deleted branch GitWork (was 9d2c1b4).`

---

### Step 23: Display Final Merge Graph History
View the complete commit history showing the merge path:
```bash
git log --oneline --graph --decorate
```
* **Expected Output**:
  ```text
  *   6f8b2a1 (HEAD -> master) Resolved merge conflict
  |\  
  | * 9d2c1b4 (GitWork) Added hello.xml in GitWork branch
  * | e3f5a2b Added hello.xml in master
  |/  
  * 8c4f2a1 Initial commit
  ```
  *Explanation*: The graph shows that the history branched out at commit `8c4f2a1` into two tracks (`9d2c1b4` and `e3f5a2b`) and successfully merged back at commit `6f8b2a1` (the Merge Commit).

---

## Step 24 (Bonus): Push Merged Changes
Push the final merge and ignore configurations to your remote repository on GitHub:
```bash
git push origin master
```

---

## Git Conflict Key Concepts

* **Merge Conflict**: A state where Git cannot automatically combine two changes to the same line in a file. Git halts the merge and requests manual resolution.
* **Conflict Markers**: Special visual strings (`<<<<<<<`, `=======`, `>>>>>>>`) injected by Git into conflicted files to show the overlapping code regions.
* **Three-way Merge**: A merge algorithm that compares two branch tips and their common ancestor (the base) to combine changes.
* **Merge Commit**: A special commit that has two parent commits, created automatically when resolving a divergent merge.
* **HEAD**: Reference pointing to the tip of your active branch.
* **Origin**: The default name Git assigns to the remote repository URL you connected using `git remote add`.

---

## P4Merge Resolve Panel Guide
When running `git mergetool`, P4Merge provides 4 windows:
* **Base (Top Center - Yellow)**: The original file before changes diverged.
* **Local / Mine (Top Left - Blue)**: Your changes on the branch you are merging *into* (`master`).
* **Remote / Theirs (Top Right - Green)**: Incoming changes from the branch you are merging (`GitWork`).
* **Merged Result (Bottom)**: The editable preview window. You click the colored buttons next to the text lines to accept Local (blue), Remote (green), or edit manually.

---

## Best Practices
1. **Never Commit Directly to Master**: Protect your primary branch. Perform all work in feature branches and open Pull Requests.
2. **Commit Frequently**: Small commits make it easy to identify the exact commit that introduced a merge conflict.
3. **Pull Latest Changes Before Merging**: Run `git pull origin master` before merging a branch to ensure your workspace has the latest remote updates.
4. **Resolve Conflicts Carefully**: Never delete lines of code during a conflict unless you are certain they are no longer needed.
5. **Use `.gitignore`**: Always ignore editor configs, backups (`.bak`), logs, and credentials.

---

## Troubleshooting Common Errors

### 1. `fatal: Already up to date.`
* **Cause**: You are trying to merge a branch that has already been merged, or the branch has no new commits since you branched off.
* **Solution**: Check your history graph using `git log --graph` to verify if the commits are already present.

### 2. `error: You have not concluded your merge (MERGE_HEAD exists).`
* **Cause**: You are attempting to run a new merge command while a previous merge is paused in a conflict state.
* **Solution**: You must resolve the conflict and run `git commit` to conclude the merge, or abort the current merge:
  ```bash
  git merge --abort
  ```

### 3. `fatal: cannot delete branch 'GitWork' checked out at...`
* **Cause**: You cannot delete a branch while you are actively checked out in it.
* **Solution**: Checkout to another branch (like `master`) before deleting:
  ```bash
  git checkout master
  git branch -d GitWork
  ```

---

## Expected Directory Layout
```text
GitDemo/
│
├── .git/               (Hidden Git database)
├── .gitignore          (Contains ignored patterns: *.bak, *.orig)
├── welcome.txt         (Tracked baseline text file)
├── hello.xml           (Tracked resolved XML file)
└── hello.xml.bak       (Ignored backup file)
```

---

## Expected Git Graph Diagram
```text
*   6f8b2a1 (HEAD -> master) Resolved merge conflict
|\  
| * 9d2c1b4 Added hello.xml in GitWork branch
* | e3f5a2b Added hello.xml in master
|/  
* 8c4f2a1 Initial commit
```
*Note: Master and GitWork branch tips converge at the Merge Commit.*
