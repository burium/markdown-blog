+++
title = "Angular - Authentication and Authorization"
date = "2025-08-22"
draft = false
description = "Authentication is the process matching the visitor of a web application with the pre-defined set of user identity in the system. In other word, it is the process of recognizing the users identity. Authentication is very important process in the system with respect to security."
image = "/angular/images/autentication.gif"
imageBig = "/angular/images/autentication.gif"
categories = ["Tutorial"]
authors = ["Cude Admin"]
avatar = "/images/avatar.webp"
+++

# Angular - Authentication and Authorization

URL: https://www.tutorialspoint.com/angular/angular-authentication-authorization.htm

Authenticationis the process matching the visitor of a web application with the pre-defined set of user identity in the system. In other word, it is the process of recognizing the users identity. Authentication is very important process in the system with respect to security.

Authorizationis the process of giving permission to the user to access certain resource in the system. Only the authenticated user can be authorized to access a resource.

Let us learn how to do Authentication and Authorization in Angular application in this tutorial.

In a web application, a resource is referred by url. Every user in the system will be allowed access a set of urls. For example, an administrator may be assigned all the url coming under administration section.

As we know already, URLs are handled byRouting. Angular routing enables the urls to be guarded and restricted based on programming logic. So, a url may be denied for a normal user and allowed for an administrator.

Angularprovides a concept calledRouter Guardswhich can be used to prevent unauthorized access to certain part of the application through routing. Angular provides multiple guards and they are as follows:

CanActivate:Used to stop the access to a route.

CanActivateChild:Used to stop the access to a child route.

CanDeactivate:Used to stop ongoing process getting feedback from user. For example, delete process can be stop if the user replies in negative.

Resolve:Used to pre-fetch the data before navigating to the route.

CanLoad:Used to load assets.

In this example, we are going to add login and logout functionality to an angular application and secure it usingCanActivateguard. Follow the given steps:

Step 1:Create an angular application using the following command −

Step 2:Now, navigate to project root folder.

Step 3:Next, we include the Bootstrap into ournew-appapplication usingstylesoption and change the default template to use Bootstrap components. Use the below command to installBootstrapandJQueryin the project −

Now, openangular.jsonfile and set bootstrap and jquery library path −

Here,

scriptsoption is used to include JavaScript library.

Step 4:Create a new service namedAuthServiceto authenticate the user. The command given below will create a service with the nameauthinsideServicesfolder.

On successful creation of service, you may see the below output on Angular CLI −

Step 5:OpenAuthServiceand include below code:

Here,

We have written two methods,loginandlogout.

The purpose of theloginmethod is to validate the user and if the user successfully validated, it stores the information inlocalStorageand then returns true.

Authentication validation is that the user name and password should beadmin.

We have not used any backend. Instead, we have simulated a delay of 1s using Observables.

The purpose of thelogoutmethod is to invalidate the user and removes the information stored inlocalStorage.

Step 6:Create alogincomponent using below command −

Following output will be produced on running the above code −

Step 7:OpenLoginComponentand update the existing code with the below code −

Here,

Usedreactive forms.

Imported AuthService and Router and configured it in constructor.

Created an instance of FormGroup and included two instance of FormControl, one for user name and another for password.

Created a onClickSubmit to validate the user using authService and if successful, navigate to expense list.

Step 8:OpenLoginComponenttemplate and include below template code.

Here,we created a reactive form and designed a login form. And, attached theonClickSubmitmethod to the form submit action.

Step 9:OpenLoginComponentCSS file and include below CSS Code.

Here, some styles are added to design the login form.

Step 10:Create a logout component using below command −

You may see the below output −

Step 11:OpenLogoutComponentand include below code.

Here,

Step 12:Create a guard using below command −

On running the above command, Angular CLI will ask "Which type of guard would you like to create?" ChoosecanActivate.

Step 13:Open authenticateGuard and include below code −

Here,

Step 14:Let's add a new component in our application. User will be redirected to this page on successful login.

The output is as follows −

Here, the command creates theExpenseEntryListComponent and add the necessary code by default.

Step 15:Create aExpenseEntryinterface withinsrc/app/expense-entry-list.component.tsfile. Then, add a method namedgetExpenseEntries()to return list of expense entry (mock items) inExpenseEntryListComponent. Also, declare a local variable,expenseEntriesand load the mock list of expense entries.

Step 16:Open the template file,src/app/expense-entry-list/expense-entry-list.component.htmland show the mock entries in a table.

Here,

Used bootstrap table.tableandtable-stripedwill style the table according to Boostrap style standard.

UsedngForto loop over theexpenseEntriesand generate table rows.

Step 17:Opensrc/app/app.routes.tsand update below code −

Here,

Step 18:OpenAppComponenttemplate and add two login and logout link.

Step 19:OpenAppComponentand update below code −

Here, we have added the logic to identify the user status so that we can show login/logout functionality.

Step 20:Start the application using following command −

Enter admin as username and password and then, click submit. The application process the login and redirects the user to expense list page as shown below −

Finally, your can click logout and exit the application.

![Image](/angular/images/autentication.gif)
