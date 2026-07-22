# Git Ignore Hands-on Lab

Welcome to the **Git Ignore Hands-on Lab**. This guide is designed for developers to learn how to prevent Git from tracking unwanted files and folders using a `.gitignore` configuration file. You will learn the importance of ignoring logs, build files, and temporary directories, and understand common glob patterns.

---

## Objectives
By completing this hands-on lab, you will learn:
1. What a `.gitignore` file is and why it is important.
2. How Git identifies and ignores unwanted files.
3. How to ignore files by their extension (e.g., `.log`).
4. How to ignore entire directories and subfolders.
5. How `git status` behaves when files are ignored.
6. How to stop tracking a file that has already been committed to the repository history.

---

## Prerequisites
This lab assumes you have completed the basic Git setup:
* **Operating System**: Windows OS
* **Terminal**: Git Bash installed
* **Tools**: Git version control, Notepad++ configured
* **Account**: GitHub or GitLab account
* **Repository**: An initialized local Git repository named `GitDemo` linked to a remote repository.

---

## Lab Scenario
You are developing a project where the application generates multiple log files (`app.log`, `server.log`, `error.log`) and directories (`logs/`, `build_logs/`, `temp_logs/`) containing temporary runtime details. You need to configure Git so that these files are ignored, keeping your repository commit history clean of temporary artifacts.

---

## Step-by-Step Lab Instructions

### Step 1: Navigate to the Repository

Open **Git Bash** and navigate to your repository directory. We will inspect the folder structure:
```bash
# Change directory to the repository
cd GitDemo

# Print current Working Directory path
pwd

# List all files including hidden files (.git folder)
ls -la
```
* **Command Explanations**:
  * `cd GitDemo`: Moves your command line context into the `GitDemo` folder.
  * `pwd`: Prints Working Directory to ensure you are in the correct path.
  * `ls -la`: Lists all directories and files, including hidden ones (starting with a dot `.`).

---

### Step 2: Create Sample Log Files

We will simulate application log generation by creating three dummy `.log` files:
```bash
# Create three log files
touch app.log
touch server.log
touch error.log

# Add dummy content to the log files
echo "Application Log" > app.log
echo "Server Log" > server.log
echo "Error Log" > error.log

# Display files in current folder
ls
```
* **Expected Output**:
  `app.log  error.log  server.log  welcome.txt`

---

### Step 3: Create Log Folders

Create directories and subfolders that will hold temporary logs:
```bash
# Create three log directories
mkdir logs
mkdir build_logs
mkdir temp_logs

# Create dummy log files inside each directory
touch logs/debug.log
touch build_logs/build.log
touch temp_logs/temp.log

# Recursively list directory contents to verify structure
ls -R
```
* **Expected Output**:
  ```text
  .:
  app.log  build_logs/  error.log  logs/  server.log  temp_logs/  welcome.txt

  ./build_logs:
  build.log

  ./logs:
  debug.log

  ./temp_logs:
  temp.log
  ```

---

### Step 4: Check Git Status (Before Ignoring)

Let's see how Git views these new files:
```bash
git status
```
* **Expected Output**:
  ```text
  On branch master
  Untracked files:
    (use "git add <file>..." to include in what will be committed)
          app.log
          build_logs/
          error.log
          logs/
          server.log
          temp_logs/

  nothing added to commit but untracked files present (use "git add" to track)
  ```
  *Explanation*: Git notices all the new log files and folders. Because they are untracked, they appear in red under **"Untracked files"**.

---

### Step 5: Create a `.gitignore` File

Create and open the `.gitignore` configuration file in Notepad++:
```bash
# Create the file
touch .gitignore

# Open in default core editor (Notepad++)
notepad++ .gitignore
```

---

### Step 6: Configure Ignore Rules

Add the following rules to your `.gitignore` file. Each rule instructs Git on how to filter files:

```text
*.log
logs/
build_logs/
temp_logs/
```

#### Rule Explanations:
1. **`*.log`**: The asterisk `*` acts as a wildcard. This rule tells Git to ignore any file in the repository that ends with the `.log` extension, regardless of its location.
2. **`logs/`**: The trailing slash `/` specifies a directory. This ignores the folder named `logs` and all of its contents (e.g., `logs/debug.log`).
3. **`build_logs/`**: Ignores the folder named `build_logs` and all nested contents recursively.
4. **`temp_logs/`**: Ignores the folder named `temp_logs` and all nested contents recursively.

*Save and close Notepad++ after entering the rules.*

---

### Step 7: Check Git Status (After Ignoring)

Run the status command again:
```bash
git status
```
* **Expected Output**:
  ```text
  On branch master
  Untracked files:
    (use "git add <file>..." to include in what will be committed)
          .gitignore

  nothing added to commit but untracked files present (use "git add" to track)
  ```
  *Explanation*: All `.log` files (`app.log`, `server.log`, etc.) and log folders (`logs/`, `build_logs/`, etc.) have **disappeared** from the status report. Git is now ignoring them. Only the `.gitignore` file itself appears as untracked.

---

### Step 8: Track and Commit `.gitignore`

Always track and commit the `.gitignore` file so that the ignore rules are shared with other team members:
```bash
# Stage the file
git add .gitignore

# Commit the file
git commit -m "Added gitignore file"
```
* **Expected Output**:
  `[master 4a3e2f1] Added gitignore file`

---

### Step 9: Verify Repository Status

Verify that the working tree is clean:
```bash
git status
```
* **Expected Output**:
  ```text
  On branch master
  nothing to commit, working tree clean
  ```

---

### Step 10: Push Changes to Remote Host

Push the committed ignore configuration to your remote repository:
```bash
git push origin master
```
*(Or `git push origin main` depending on your active branch name).*

---

## Git Concepts Overview

* **Working Directory**: The actual folder where you create and edit files.
* **Staging Area**: The preparation area where Git tracks files scheduled for the next commit.
* **Repository**: The committed database history containing all snapshots.
* **Tracked Files**: Files that Git already knows about. They have been staged or committed previously.
* **Untracked Files**: Files in your working directory that are not tracked by Git (i.e., not staged or committed).
* **Ignored Files**: Files that Git has been explicitly told to ignore. Git completely bypasses these files when performing status checks, staging, or committing.

---

## Common `.gitignore` Pattern Reference

| Pattern | Description | Example |
| :--- | :--- | :--- |
| **`*.log`** | Ignores files by extension | `app.log`, `error.log` |
| **`*.exe`** | Ignores executable files | `installer.exe` |
| **`*.tmp`** | Ignores temporary files | `session.tmp` |
| **`*.class`** | Ignores compiled Java bytecode files | `App.class` |
| **`__pycache__/`** | Ignores Python runtime caches | `__pycache__` directory |
| **`node_modules/`** | Ignores Node.js dependencies | `node_modules` directory |
| **`.vscode/`** | Ignores Visual Studio Code local workspace configurations | `.vscode` directory |
| **`.idea/`** | Ignores IntelliJ IDEA project configurations | `.idea` directory |
| **`build/`** | Ignores build outputs | `build` directory |
| **`target/`** | Ignores Maven build outputs | `target` directory |

---

## Best Practices
1. **Always Commit `.gitignore`**: The `.gitignore` file should be committed to the repository so all team members follow the same ignore rules.
2. **Ignore Generated Files**: Ignore files generated by compilers, dependencies (like `node_modules/`), and build scripts.
3. **Ignore IDE Settings**: Ignore folder configurations specific to your editor (like `.vscode/` or `.idea/`).
4. **Ignore Secrets**: **Never** commit passwords, API keys, database credentials, or `.env` files. Add them to `.gitignore` immediately.

---

## Troubleshooting & Common Errors

### Problem: Ignored file still appears in `git status`
* **Cause**: The file was already tracked (added or committed) *before* you added the rule to `.gitignore`. `.gitignore` only prevents untracked files from being added; it has no effect on files that are already tracked.
* **Solution**: You must tell Git to stop tracking the file by removing it from the index (staging area) using `git rm --cached`. This will remove it from Git's tracking but **keep** the file intact in your local working directory:
  ```bash
  # Remove file from Git tracking without deleting it from disk
  git rm --cached app.log

  # If you want to remove an entire folder recursively from tracking
  git rm -r --cached logs/

  # Commit the removal to save the change
  git commit -m "Stop tracking ignored log files"
  ```

---

## Expected Directory Structure

After completing this lab, the directory layout will look like this:

```text
GitDemo/
│
├── .git/               (Hidden Git database)
├── .gitignore          (Contains ignore rules)
├── welcome.txt         (Tracked text file)
├── app.log             (Ignored by *.log)
├── server.log          (Ignored by *.log)
├── error.log           (Ignored by *.log)
├── logs/               (Ignored by logs/)
│   └── debug.log
├── build_logs/         (Ignored by build_logs/)
│   └── build.log
└── temp_logs/          (Ignored by temp_logs/)
    └── temp.log
```
---
## Expected `.gitignore` File Contents
```text
*.log
logs/
build_logs/
temp_logs/
```
