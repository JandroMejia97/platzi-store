# PlatziStore

As an practice of the [Angular Course](https://platzi.com/clases/angular/) offered at [Platzi](https://platzi.com/), an online store was developed from scratch based on [Angular](https://angular.io). Angular features were used to build an application in less time, using components, modules and routes. [Angular-Material](https://material.angular.io) was also used to design the elements of this web application. In addition, it was deployed on the Internet through [Firebase](https://firebase.google.com).

## Preview

You can preview this project by clicking on this [link](https://platzi-store-9661d.firebaseapp.com/).

## Deploying this Project

### Requirements

Cloning this Repository from GitHub is really simple. To do this you need to have some tools enough. For example.
* [Node.js and npm](https://nodejs.org/en/) version 12.8.0 or later
* [git](https://git-scm.com/downloads)
* [Angular CLI](https://cli.angular.io) version 8.3.22 or later

With these elements you can now clone and execute this project on the local server.

### Cloning

To clone this repository from GitHub you must use the `git clone` command, and pass as a parameter the url of this [repository](https://github.com/JandroMejia97/platzi-store.git). For this you must position yourself from the git console in the place you want to clone the project and use the following command: `git clone https://github.com/JandroMejia97/platzi-store.git`.

### Installing dependencies

Once the project has been cloned, it must be moved inside the **platzi-store** folder with the `cd platzi-store` command, and inside it must execute the `npm install` command. This command will download all the necessary dependencies to execute the project on the local server.

**IMPORTANT**: Remember that if you run this command from unix systems you should use `sudo npm install`, to give it permissions, and if you run it from windows remember to start the console with administrator privileges.

### Before Continuing

Before continuing, make sure you do the following:
<ol>
  <li>
    Follow the steps indicated in this <a href="https://alligator.io/angular/deploying-angular-app-to-firebase/">tutorial</a> to do the <b>"Deploying an Angular App to Firebase Hosting"</b>, with the small modification that the public directory will be <em>dist/platzi-store</em>, not just <em>dist</em>.
  </li>
  <li>
    <details>
      <summary>
        Configure the environment variables of the project.
      </summary>
      <ol>
        <li>
          From the console, run this command: `cd src && mkdir environments`.
          <details>
            <summary>Explain me?</summary>
            <p>
              <code>cd src</code> will take you to the src directory and <code>mkdir environments</code> will create the <b>environments</b> directory.
            </p>
            <p>
              The double <code>&&</code> is an addition connector to execute one command after the other.
            </p>
          </details>
        </li>
        <li>
          Then, run <code>touch environments/environment.ts environments/environment.prod.ts environments/environment.stag.ts</code> on Unix systems or <code>for a% in (environment environment .prod environment.stag) do type nul> environments\%a.ts</code> on Windows systems.
          <details>
            <summary>Explain me?</summary>
            <p>
              These commands create 3 files, which will have the variables for the development, stag and production environments.
            </p>
          </details>
        </li>
      </ol>
    </details>
  </li>
  <li>
    Open the project in any code editor and paste the following variables (they can be different in each files according to your preference) in each of the files that were created in the previous step, with YOUR OWN DATA:
	  <code><pre>
      export const environment = {
        production: false,
        apiUrl: 'https://platzi-store.herokuapp.com', // OUR YOUR OWN API REST
          firebaseConfig: {
          apiKey: '&lt;YOUR API KEY&gt;',
          authDomain: '&lt;YOUR AUTH DOMAIN&gt;',
          databaseURL: '&lt;YOUR DATABASE URL&gt;',
          projectId: '&lt;YOUR PROJECT ID&gt;',
          storageBucket: '&lt;YOUR STORAGE BUCKET&gt;',
          messagingSenderId: '&lt;YOUR MESSAGING SENDER ID&gt;',
          appId: '&lt;YOUR API ID&gt;'
        }
      };
	  </pre></code>
    <p>
      <b>IMPORTANT:</b>
      You will get these configuration variables from the <a href="https://console.firebase.google.com/">Firebase console</a> of the project that you created in step 1.
    </p>
    <p>
      <style>
        ul.breadcrumb {
          padding: 10px 16px;
          list-style: none;
        }
        /* Display list items side by side */
        ul.breadcrumb li {
          display: inline;
          font-size: 14px;
        }
        /* Add a slash symbol (/) before/behind each list item */
        ul.breadcrumb li+li:before {
          padding: 8px;
          content: "/\00a0";;
        }
      </style>
      <ul class="breadcrumb">
        <li>Project settings</li>
        <li>General</li>
        <li>Your applications</li>
        <li>Firebase SDK snippet</li>
        <li>Select "Settings"</li>
      </ul>
    </p>
  </li>
</ol>

### Ending
Ready, you have finished configuring the project. Finally use the `npm start` command to lift the server.

With this ready you can see the project running on port **4200**, just open a browser and go to [http://localhost:4200/](http://localhost:4200/). Well, this is all to clone and execute this angular project from GitHub.
touch example/environment.ts example/environment.prod.ts example/environment.stag.ts
Regards.

## References
* [Angular](https://angular.io/docs)
* [Angular Material](https://material.angular.io/components/categories)
* [Material Icons](material.io/resources/icons/)
* [Curso de Angular](https://platzi.com/clases/angular/)
* [Clonar Repositorio Angular desde GitHub](https://platzi.com/tutoriales/1153-angular/2008-clonar-repositorio-angular-desde-github/)
* [Deploying an Angular App to Firebase Hosting](https://alligator.io/angular/deploying-angular-app-to-firebase/)
* [Using windows command shell for creating multiple files](https://stackoverflow.com/questions/28965911/using-windows-command-shell-for-creating-multiple-files)
