# This project is webiste for Digital Marketing & PR ,web designing and web developing.

# Project Directory Structure

```
xerow-digital/
├── backend_xero_digital/
│   ├── db_setup.py        # databse connection setup
│   ├── main.py
│   ├── requirements.txt
├── front_digital_solution/
│   ├── src/
│   │   ├── assests/      # images
│   │   ├── components/   #having components
│   │   │   ├── About.css
│   │   │   ├── About.tsx
│   │   │   ├── Contact.css
│   │   │   ├── Contact.tsx
│   │   │   ├── ErrorPage.css
│   │   │   ├── ErrorPage.tsx
│   │   │   ├── Footer.css
│   │   │   ├── Footer.tsx
│   │   │   ├── Home.css
│   │   │   ├── Home.tsx
│   │   │   ├── Navbar.css
│   │   │   ├── Navbar.tsx
│   │   │   ├── PrivacyPolicy.css
│   │   │   ├── PrivacyPolicy.tsx
│   │   │   ├── Services.css
│   │   │   ├── Services.tsx
│   │   ├── App.tsx
│   │   ├── config.ts
│   │   ├── index.css      # css for index.html
│   │   ├── index.html     # main html file having root element
│   │   ├── index.tsx      # server
│   │   ├── main.tsx       # entry point, setup root element and renders components
│   ├── package.json
│   ├── tsconfig.json
├── super-digital-solution/  #Directory for admin dashboard (git submodule)
│   ├── super_back/          # Admin dashboard backend
│   │   ├── api/
│   │   │   ├── __init__.py
│   │   │   ├── admin.py
│   │   │   ├── contact.py
│   │   ├── core/
│   │   │   ├── __init__.py
│   │   │   ├── database.py
│   │   │   ├── scurity.py   #password hasing and verify
│   │   ├── models/
│   │   │   ├── __init__.py
│   │   │   ├── admin.py
│   │   │   ├── base.py
│   │   │   ├── contact.py
│   │   ├── schemas/
│   │   │   ├── __init__.py
│   │   │   ├── admin.py
│   │   │   ├── contact.py
│   │   ├── dependencies.py   # authentication
│   │   ├── main.py
│   │   ├── requirements.txt
│   ├── super_front/         # Admin dashboard frontend
│   │   ├── css/
│   │   │   ├── dashboardstyle.css
│   │   │   ├── style.css
│   │   ├── images/
│   │   ├── js/
│   │   │   ├── auth.js
│   │   │   ├── dashboard.js
│   │   ├── dashboard.html
│   │   ├── index.html
│   │   ├── README.md     #readme for admin peoject
├── .gitignore
├── .gitmodules
└── README.md
```


### Prerequisits for running the project locally
Make sure you have [git](https://git-scm.com) installed obviously.
Make sure you have [bun](https://bun.sh) installed.
## Steps to clone this repo and start working


1. Clone this repsitory
```bash
git clone https://gitlab.com/xerofenix/xerow-digital
```
or
```bash
git clone https://github.com/xerofenix/digital-solution.git
```
and enter to cloned folder

2. Create a git branch
```bash
git branch <your-choice-of-branch-name>
```
3. Change the branch
```bash
git switch <your-branch-name>
```
Make sure to enter the same branch name in step 3 that you created in step 2.

Now run the project. Open a termianl in the same directory and enter
```bash
bun run dev
```
You will see the output
`$ bun --hot src/index.tsx`
`🚀 Server running at http://localhost:3000/`
`Bundled page in 43ms: src/index.html`

Congratulations! You did it.

Now open your browser and go to `htt://localhost:300` or simply press ctrl+click  on `http://localhost:3000` in your terminal. you will see something

![The first page right now](front_digital_solution/image-3.png)
