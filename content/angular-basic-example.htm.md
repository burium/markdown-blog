+++
title = "Angular - Basic Example"
date = "2025-08-22"
draft = false
description = "In this tutorial, we will learn complete step-by-step working of an angular application. This chapter is part of the Angular Tutorial. We recommend you go through all the previous chapters before moving ahead in this chapter. We have covered all angular concepts from beginner to advanced."
image = "/angular/images/angular-example-application.jpg"
imageBig = "/angular/images/angular-example-application.jpg"
categories = ["Tutorial"]
authors = ["Cude Admin"]
avatar = "/images/avatar.webp"
+++

# Angular - Basic Example

URL: https://www.tutorialspoint.com/angular/angular-basic-example.htm

In this tutorial, we will learn complete step-by-step working of an angular application. This chapter is part of theAngular Tutorial. We recommend you go through all the previous chapters before moving ahead in this chapter. We have covered all angular concepts from beginner to advanced.

Let us create an Angular application to check our day-to-day expenses. Let us giveExpenseManageras our choice for our new application.

We are going to implement the following concepts of Angular in our application −

Use the below command to create the new application −

Here,

newis one of the commands of the ng CLI. It is used to create new applications. It will ask some basic questions in order to create a new application. It is enough to let the application choose the default choices.

Once the basic questions are answered, a new Angular application will be created with the nameexpense-manager.

Let us move into the our newly created application folder using the following command −

Let us start the application using the below command −

The application will start on thehttp://localhost:4200port. Change the title of the application to better reflect our application. Opensrc/app/app.component.tsand rename the title as specified below −

Our final application will be rendered in the browser as shown below −

To create a new component, we useng generate componentcommand. Write this command in Angular CLI as shown below −

On running the above command, following output will be displayed in CLI −

Here,

Addtitleproperty to ExpenseEntryComponent. Its path is as follows:src/app/expense-entry/expense-entry.component.ts.

Update template,src/app/expense-entry/expense-entry.component.htmlwith below code −

Opensrc/app/app.component.htmland include newly created component in it.

Here,

app-expense-entryis the selector value and it can be used as regular HTML Tag.

We also need to import this component insideimports[]array of@componentdecorator.

The output of the application is as shown below −

Let's include Bootstrap into ourExpenseManagerapplication usingstylesoption and change the default template to use bootstrap components. Open CLI and go to ExpenseManager application using the below command −

InstallbootstrapandJQuerylibrary using below commands −

To read more about using bootstrap in angular application, we recommend checking this chapter:Adding Bootstrap in Angular.

Now, openangular.jsonfile and set bootstrap and jquery library path −

Here,

scriptsoption is used to include JavaScript library.JavaScriptregistered throughscriptswill be available to all Angular components in the application.

Openapp.component.htmland change the content as specified below −

Here, we have used bootstrap navigation and containers.

Opensrc/app/expense-entry/expense-entry.component.htmland place below content.

Now, you can see the updated output which is as follows −

CreateExpenseEntryinterface withinsrc/app/expense-entry.component.tsfile and add id, amount, category, Location, spendOn and createdOn. Also, create an object ofExpenseEntryobject. The updated code will look like −

Update the component template also,src/app/expense-entry/expense-entry.component.htmlwith the code specified below −

The output of the application is as follows −

Let's add a new component in ourExpenseManagerapplication to list the expense entries.

Create a new component,ExpenseEntryListusing below command −

The output is as follows −

Here, the command creates theExpenseEntryListComponent and add the necessary code by default.

Create the sameExpenseEntryinterface withinsrc/app/expense-entry-list.component.tsfile. Then, add a method namedgetExpenseEntries()to return list of expense entry (mock items) inExpenseEntryListComponent. Also, declare a local variable,expenseEntriesand load the mock list of expense entries.

Open the template file,src/app/expense-entry-list/expense-entry-list.component.htmland show the mock entries in a table.

Here,

Used bootstrap table.tableandtable-stripedwill style the table according to Boostrap style standard.

UsedngForto loop over theexpenseEntriesand generate table rows.

OpenAppComponenttemplate,src/app/app.component.htmland includeExpenseEntryListComponentand comment theExpenseEntryComponentas shown below −

Import the component insideAppComponent−

Finally, run the application. The output of the application is as shown below −

Let us use the pipe in the ourExpenseManagerapplication

OpenExpenseEntryListComponent'stemplate, i.e.,src/app/expense-entry-list/expense-entry-list.component.htmland include pipe inentry.spendOnas mentioned below −

Here, we have used the date pipe to show the spend on date in the short format.

Finally, the output of the application is as shown below −

![Image](/angular/images/angular-example-application.jpg)
![Image](/angular/images/html-tag-example-app.jpg)
![Image](/angular/images/angular-bootstrap-app.jpg)
![Image](/angular/images/angular-interface.jpg)
![Image](/angular/images/expense-entry-list-component.jpg)
![Image](/angular/images/pipes.jpg)
