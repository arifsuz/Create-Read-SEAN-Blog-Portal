# Create Read SEAN Blog Portal

## Description

#### **1. Introduction**
This Blog Portal project is a modern and responsive blogging platform, built using the SEAN stack consisting of Supabase, Express, Astro, and Node.js. The project is designed to allow users to create, manage, and read blog posts with a user-friendly interface and optimised performance.

#### **2. Technology Used**

1. **Supabase**:
   - **Database**: Supabase provides backend services that include a hosted PostgreSQL database and an automated API that can be used to store and manage data on blog posts, users, comments, and more.
   - **Auth**: An easy-to-use authentication service to manage user login and registration.

2. **Express**:
   - **Server Backend**: Express is a web framework for Node.js that is used to build a backend server. It will handle the business logic, routing, and communication between the frontend and the Supabase database.

3. **Astro**:
   - **Frontend**: Astro is a modern framework for building fast and optimised websites. It is used to build a static and dynamic user interface (UI) for this blog portal.
   
4. **Node.js**:
   - **Runtime Environment**: Node.js provides a JavaScript runtime environment that allows us to run server-side code, including Express applications and other utilities required for development.

#### **3. Key Features**

- Blog Post Management**:
  Authenticated users can create, edit and delete blog posts. Each blog post is stored in the Supabase database.

- Responsive Interface**:
  The user interface is built with Astro to ensure a responsive and fast experience across different devices.

- Fullstack Logic**:
  This website is designed to illustrate how a web-based system works by getting data by requesting approval from the API (SERVER) and then validating and retrieving data in the database and responding to the main display (client).

#### **4. Project Structure**

- **Backend**:
  - `server.js`: The main file to initialise and run the Express server.
  - `routes/`: The directory containing all the routing APIs for blog posts, users, and comments.
  - `controllers/`: The directory that contains the business logic for various CRUD operations.
  - `models/`: The data schema and models used to interact with the Supabase.

- **Frontend**:
  - `src/pages/`: A directory containing the main pages of the website, such as the home page, blog post page, and user profile page.
  - `src/components/`: Reusable UI components, such as headers, footers, and comment forms.
  - `public/`: A directory containing static assets such as images and stylesheets.

- **Configuration**:
  - `.env`: Environment configuration file that stores environment variables such as Supabase API keys and database connection information.

#### **5. Development Flow**

   1. **Project Setup**:
   - Initialise the project with Node.js and install all necessary dependencies (`express`, `supabase`, `astro`, etc).
   - Configure the Supabase and create a new project, and set up the required database and tables (users, posts, comments).

   2. **Build Backend**:
   - Create an Express server and define routing for CRUD operations on blog posts, users, and comments.
   - Integrate with Supabase to store and retrieve data.

   3. **Build Frontend**:
   - Use Astro to create pages and UI components.
   - Integrate with the backend through the API provided by the Express server.

    4. **Testing and Deployment**:
   - Test the application locally to ensure all features work correctly.
   - Deploy the application to a hosting platform of choice, such as Vercel for the frontend and Heroku for the backend.

#### **6. Conclusion**
This Blog Portal project demonstrates how the SEAN stack (Supabase, Express, Astro, Node.js) can be used to build modern responsive and high-performance web applications. Using these technologies, we can easily manage data, provide secure user authentication, and build friendly and fast user interfaces.

## Setup

Here are step-by-step instructions for setting up this project in the local environment for each stack used:

### Frontend: Astro

1. Clone this repository with `git clone <url-repo>`.
2. Move to the project directory with `cd <url-repo>`.
3. Install dependencies with `npm install`.
4. Run the local development server with `npm run dev`.

### Backend: Node.js, Express.js

1. Clone this repository with `git clone <url-repo>`.
2. Move to the project directory with `cd <url-repo>`.
3. Install dependencies with `npm install`.
4. Create the `.env` file and fill in the necessary environment variables (for example, `DATABASE_URL` for the database URL).
5. Run the server with `npm start`.

### Database: Supabase

1. Create an account on [Supabase](https://supabase.io/).
2. Create a new project and follow the instructions to set up the database.
3. In the `.env` file in your backend project, set `SUPABASE_URL` and `SUPABASE_KEY` to the values provided by Supabase.

## Usage

### GET
```
/**
 * Retrieves the blog with the given ID.
 *
 * @param {string} id - ID of the blog to retrieve.
 * @returns {object} - A response object containing a success message.
 */
app.get(‘/:id’, (req, res) => {
    const id = req.params.id;
    
    // Do the logic to retrieve the blog with the given ID
    
    const blog = // Retrieve the blog from the database based on the ID
    
    if (!blog) {
        return res.status(404).json({ message: ‘Blog not found’ });
    }
    
    return res.json({ message: ‘Blog retrieved successfully’, blog });
});
```

### POST
```
/**
 * Create a new blog.
 *
 * @param {object} req - A request object containing the blog data to be created.
 * @param {object} res - A response object that will return a success message.
 */
app.post(‘/’, (req, res) => {
    const { title, content } = req.body;
    
    // Do the logic to create a new blog
    
    const newBlog = {
        id: ‘456’,
        title,
        content
    };
    
    return res.status(201).json({ message: ‘Blog created successfully’, blog: newBlog });
});
```

**Endpoint:**

```ENDPOINT
http://localhost:3030/
```

**Response:**

```json
{
    ‘message’: ‘Blog retrieved successfully’,
    ‘blog’: {
        ‘id’: ‘123’,
        ‘title’: ‘Sample Blog’,
        ‘content’: ‘This is a sample blog post’
}
```

## Tech Stack

**Client:** Astro

### Frontend: Astro

[Astro (https://astro.build/) is a modern static site generator that lets you build faster websites with less JavaScript. Astro lets you write components in your favourite languages (such as JavaScript, TypeScript, JSX and more) and then render them as static HTML at build time. The result is an extremely fast and optimised website.

**Servers:** Node, Express

### Backend: Node.js, Express.js

[Node.js](https://nodejs.org/) is a JavaScript runtime that lets you run JavaScript on a server. Node.js is very popular for backend development because it allows you to use JavaScript, a language that many frontend developers are familiar with, on the server.

[Express.js](https://expressjs.com/) is a web framework for Node.js that simplifies web application development. Express.js provides features such as routing, middleware, and template engine, which make it easier to build web applications and APIs.

**Database:** Supabase

### Database: Supabase

[Supabase](https://supabase.io/) is an open source alternative to Firebase. Like Firebase, Supabase provides various backend services such as real-time database, authentication, storage, and serverless functions. However, unlike Firebase, Supabase uses PostgreSQL, a powerful and flexible SQL database, as its main database.

## NODE JS Installation
Node.js installation on different operating systems has slight differences. The following is an installation guide for various operating systems: Windows, macOS, and Linux.

### Windows

1. **Download the Node.js Installer**:
   Visit the [official Node.js website](https://nodejs.org/) and download the appropriate Windows installer (LTS or Current).

2. **Run the Installer**:
   Run the downloaded installer file (`.msi`). This will open the setup window.

3. **Follow the Installation Guide**:
   Follow the steps indicated by the installer. Usually you just need to press the ‘Next’ button a few times and agree to the licence. Make sure to tick the ‘Automatically install the necessary tools’ option if offered.

4. **Verify Installation**:
   Once the installation is complete, open Command Prompt or PowerShell, and run the following commands to make sure Node.js and npm are installed correctly:
   ```bash
   node -v
   ```
   ```bash
   npm -v
   ```
   The command will display the installed versions of Node.js and npm.

### macOS

1. **Using Homebrew**:
   If you are using Homebrew, installing Node.js is very simple. Run the following command in Terminal:
   ```bash
   brew install node
   ```

2. **Download the Node.js Installer**:
   Alternatively, you can download the installer from [the official Node.js website](https://nodejs.org/). Download the macOS version (`.pkg`) and run the installer.

3. **Verify Installation**:
   Open Terminal and run the following commands to make sure Node.js and npm are installed correctly:
   ```bash
   node -v
   ```
   ```bash
   npm -v
   ```

### Linux

Installing Node.js on Linux can be done in several ways, one of the recommended ways is using the Node Version Manager (nvm).

1. **Install nvm**:
   Run the following command to download and install nvm:
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
   ```
   Once the installation is complete, close and reopen the terminal or run the following command to load nvm:
   ```bash
   source ~/.bashrc
   ```

2. **Install Node.js Using nvm**:
   With nvm installed, you can install the latest version of Node.js with the command:
   ```bash
   nvm install node
   ```
   You can also install a specific version, for example:
   ```bash
   nvm install 14.17.0
   ```

3. **Verify Installation**:
   Run the following command to make sure Node.js and npm are installed correctly:
   ```bash
   node -v
   ```
   ```bash
   npm -v
   ```

By following the above guide according to the operating system you are using, you can easily install Node.js and start developing JavaScript applications in your local environment.

## ASTRO Installation
Astro is a modern framework for building fast, static websites. Installing Astro is quite simple and can be done by following a few basic steps. The following is a general guide to installing Astro:

### Prerequisites
1. **Node.js**: Make sure you have the latest version of Node.js installed on your computer. You can download it from [official Node.js website](https://nodejs.org/).

2. **npm**: npm is usually pre-installed with Node.js. However, if you prefer to use yarn, it is also supported.

### Astro Installation Steps

1. **Create a New Project with Astro**:
   You can create a new project by using the `npm init astro` or `yarn create astro` command. Here's an example using npm:
   ```bash
   npm init astro
   ```

2. **Follow the Interactive Guide**:
   After running the above command, you will be prompted to answer a few questions to configure your project, such as the project name and the template you want to use.

3. **Move to Project Directory**:
   Move to the directory of the newly created project:
   ```bash
   cd your-project-name
   ```

4. **Install Dependencies**:
   After creating the project and moving to the project directory, install all the required dependencies with the command:
   ```bash
   npm install
   ```
   or if using yarn:
   ```bash
   yarn install
   ```


5. **Run the Development Server**:
   Once all dependencies are installed, you can start the development server with the command:
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```

   The development server will be running and you can access your project through your browser by going to `http://localhost:3000` for example.

### Deploying an Astro Project
Once you have finished developing your site with Astro, you can build it for production and deploy it. To build the project, use the following command:
```bash
npm run build
```
or
```bash
yarn build
```

Your project will be built and the output will reside in the `dist` folder (or the one specified in the Astro configuration). You can deploy the contents of this folder to a static host of your choice, such as Netlify, Vercel, or GitHub Pages.

### Additional Notes
- **Authorised Documentation**: For more information and detailed guides, visit [Astro official documentation](https://docs.astro.build/).
- **Templates and Sample Projects**: Astro provides various templates and sample projects that can help you get started quickly.

By following the steps above, you should be able to install and start a project with Astro without any problems. Good luck!

## Contribution

If you would like to contribute to this project, you can follow these steps:

1. Fork this repository to your GitHub account.
2. Clone the forked repository to your local computer.
3. Move to the project directory with `cd <repo-name>`.
4. Create a new branch for the feature or fix you want to add with `git checkout -b <branch-name>`.
5. Make the necessary changes to the code.
6. Commit your changes with a clear and descriptive message using `git commit -m ‘Description of changes’`.
7. Push the branch to your GitHub repository with `git push origin <branch-name>`.
8. Open the forked repository page on GitHub and create a new pull request.
9. Fill in the pull request description clearly explaining the changes you made.
10. Wait for a response and discussion from the repository owner.

Be sure to follow the rules and contribution guidelines set by this project. These may include things like code of conduct, writing style, and code review process.

The pull request process involves proposing code changes to the main repository. Once a pull request is made, the repository owner will review your changes and decide whether or not to merge them into the main repository. Discussions and fixes may be required before the pull request can be accepted.

Be sure to understand and follow the pull request process established by this project. This may include steps such as code testing, peer review of code, and documentation requirements.

Always communicate with the repository owner and project team to ensure that your contributions match their needs and expectations.

**Developed by: Muhamad Nur Arif**

**Website:** https://arifsuz.vercel.app/

**LinkedIn:** https://www.linkedin.com/in/marif8/

## License

[MIT License](https://choosealicense.com/licenses/mit/)

Copyright (c) 2024 Muhamad Nur Arif

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.#