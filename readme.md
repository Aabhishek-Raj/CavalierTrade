# 🛠️ CavalierTrade – Microservices Project

[CavalierTrade] is a cutting-edge trading platform tailored for modern investors who thrive on confidence, precision, and innovation. The name reflects a fusion of elegance and audacity—combining the bold, adventurous spirit of a "Cavalier" with a fresh, modern twist.

Designed to offer a seamless, high-performance trading experience, CavalierTrade empowers users to navigate the financial markets with unparalleled expertise and finesse.

As a premium brand, CavalierTrade stands for trust, reliability, and innovation, offering a forward-thinking approach to wealth management. Whether you're a seasoned trader or new to the financial markets, CavalierTrade provides the tools and insights needed to execute strategies with precision, paving the way for informed and confident decision-making.

--------------------------------------------------------

## 🧠 Project Structure Strategy

Each microservice is stored in its **own Git branch**, not in separate folders within the same branch. This simulates a scalable architecture managed by multiple independent teams.

### 🗂️ Branch Naming Convention

<service-name>/<branch-type>


✅ Examples:
# service branches
- `auth-service/main`
- `client-service/main`
# feature branches
- `product-service/feat/image-upload`
- `payment-service/fix/race-condition`

--------------------------------------------------------

# ✅ **3. Add Explanation: Why This Branch Strategy**

```md
## ❓ Why This Branching Strategy?

This repo mimics how large companies (Uber, Netflix) manage microservices:

- Each service has **its own long-living main branch**
- Feature branches exist per service (e.g., `auth-service/feat/login-bug`)
- The `master` branch acts as the **integration + deployment environment**
- No service pollutes another service’s code
- Developers can work independently without merge conflicts
- The system is only tested end-to-end on `master`

--------------------------------------------------------

## ▶️ Running the Full Microservice Suite (Integration Mode)

Only possible on the `master` branch.

```bash
git checkout master
git pull origin master

docker-compose up --build
```

--------------------------------------------------------

## 📁 Local Setup Instructions

📌 1. Clone the Repository

```bash
git clone https://github.com/your-username/carvaliertrade.git
cd carvaliertrade
```

--------------------------------------------------------

# 🧑‍💻 Setting up branches Initially

📌 Create a New Branch for each Service
📌 To simulate isolated service development:

```bash
# Create and switch to service branch
git checkout -b auth-service/main

# Push the new branch to GitHub:
git push -u origin auth-service/main

# Repeat this for each service:
git checkout -b client-service/main
git push -u origin client-service/main
```

--------------------------------------------------------

# 🧑‍💻 Working on a Service Locally

```bash
git checkout auth-service/main
git pull origin auth-service/main

git checkout -b auth-service/feat/login-bug
git checkout -b client-service/fix/button-reload
git checkout -b payment-service/chore/logging-update
# Work, add, and commit changes using Conventional Commits (e.g., fix(auth):...)

# make changes
git add .
git commit -m "[auth-service] Add JWT middleware and route guards"
git push -u auth-service/feat/login-bug
```

--------------------------------------------------------

# 🔀 [RECOMMENTED] Merging to Service Branch 
Instead of CLI, use GitHub GUI pull requests to simulate a real-world multi-dev environment.

**PR Target:**
```bash
base: auth-service/main
compare: auth-service/feat/login-bug
```

--------------------------------------------------------

# ✅ Commit Message Format

Use **Conventional Commit** format to ensure consistency and readability:

<type>(<scope>): <message>

📌 Examples

```bash
feat(auth): add JWT auth middleware
fix(client): handle form validation edge case
chore(init): readme added
refactor(product): split controller logic
test(auth): add unit tests for login
```

📌 Allowed types:

- feat → New feature
- fix → Bug fix
- chore → Non-functional (e.g., docs, tooling)
- efactor → Code restructuring
- test → Testing only

--------------------------------------------------------


# 🔀 [RECOMMENTED] Merging to Master (Integration) 
Instead of CLI, use GitHub GUI pull requests to simulate a real-world multi-dev environment.

Steps:
1. Go to GitHub → Pull Requests.
2. Click "New pull request".
3. Choose base: master, compare: auth-service/main.
4. Create the PR.
5. Add a description: what was added, why, and any test coverage.
6. (Optional): Request review (or self-approve in simulation).
7. Click Merge pull request once confident.

Repeat the above for all other service branches.

--------------------------------------------------------

# 🔀 [NOT-RECOMMENTED] Merging to Master (Integration)

This is for integrating all services after testing.

```bash
# 1. Switch to master or create it if not exists:
git checkout -b master

# 2. Merge each service branch one-by-one:

git merge auth-service/main --allow-unrelated-histories
git merge client-service/main --allow-unrelated-histories
git merge product-service/main --allow-unrelated-histories

## Resolve any conflicts manually.

# 3.Push to GitHub:
git push -u origin master
```

--------------------------------------------------------
