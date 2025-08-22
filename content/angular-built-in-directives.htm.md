+++
title = "Angular - Built-in Directives"
date = "2025-08-22"
draft = false
description = "Angular provides have many built-in directives. The built-in directive can be categorized into two type  ?"
image = "/angular/images/register-button.jpg"
imageBig = "/angular/images/register-button.jpg"
categories = ["Tutorial"]
authors = ["Cude Admin"]
avatar = "/images/avatar.webp"
+++

# Angular - Built-in Directives

URL: https://www.tutorialspoint.com/angular/angular-built-in-directives.htm

Angular provides have many built-in directives. The built-in directive can be categorized into two type  −

Some of the important directives are as follows −

Let us learn how to use builtin directive in this chapter.

NgModel is used to enable two-way data binding for HTML form elements. It is based on property and event binding. It is provided by a separate module, FormsModule. A simple example to do two way binding of a user object with name property is as follows −

Whenever user change the input field, the updated user name will be reflected to the user.name variable in the component. Similarlly, if the components variable, user.name gets changed, the input fields value will be updated as well.

Let us create a simple registration form to understand NgModel directive. Our registration form will have three input field as shown below and a button to submit the registraion form.

Step1:Create a new application, my-app using angular CLI as shown below −

Step2:Create a new registration form component, RegisterForm using angular CLI as shown below −

Step3:Open the registration form components template and a user with username, password and confirm password.

Step4:Open the registration form components style and style the form using CSS as shown below −

Step5:Include our registration form component in the app template file, app.component.html

Step6:Run the application and test the registration form

Step7:Next, import the FormsModule in application module file, app.module.ts

Step8:Next, let us add an object, user with Username, password and confirmPassword properties. user object will have empty string initially. Once the user enter the data, it will get populated through NgModel directive.

Step9:Assign the above declared components member variable to NgModel directive of username, password and confirm password input as shown below −

Here,

ngModel sets the value from user object to HTML input element. It set the user entered value to the user object in the reverse direction as well.

Step10:Create a new member method, showInfo in the component class. The purpose of the method is to collect the current user information and show it through alert() method.

Here,

preventDefault() method of event object will prevent the default action of submit button.

alert() method will show the message to the user.

Step11:Assign the showInfo method to click event of the button using event binding.

Step12:The complete listing of the component is as follows −

Step13:The complete listing of the components template is as follows −

Step14:Next, run the application, fill the form and click the register button. It will collect the information through ngModel binding and show it through alert function.

NgStyle is used to add or remove a set of HTML Style to the host HTML element or component.

'''html <div NgStyle="stylelist">

Here, style-list is an object of type Record<string, string>. All keys represent CSS properties with its corresponding values representing it's CSS values. An example object is as follows −

Let us extend our registration form component to support validation and use ngStyle to highlight required field.

Step1:Add new member variable, inputStyle in the component.

Step2:Update the showInfo() method to include validation logic and update the inputStyle object.

NgClass is used to add or remove a set of classes to the host HTML element or component.

```html <div NgClass=classlist>

Here, classlist is an object of type Record<string, boolean>. All key having truth value will be set as class for the host element. An example object is as follows −

NgNonBindable is used to prevent the processing of angular template for a piece of text. Just enclose the text with a HTML element with ngNonBindable attribute. It will just emit the template as received without processing the template expression, template statement, directives and components.

```html

It will used to showcase the angular code in an angular appliation itself without getting affected by template processing.

Angular tempalte does not has conditional logic. The conditional logic is done using NgIf directive. It either add / remove the host HTML element / component to the DOM layout based on the condition (template expression) it accepts as value.

if canShow is true, then inner content will be shown. Otherwise, the content will not be added to the DOM layout.

Angular template does not have looping logic as well. To compensate the absence of looping logic, Angular providesNgFordirective to loop over an array of item and show it as a list, gallary, rows, etc.,

It will generate n item in unoredered list, where n refers the number of item available in the items array.

Angular template does not have switch statement as well. To compensate the absence of switching logic, Angular providesNgSwitchand its related directive to select any one of the item in a collection (of items).

Here, any one of the section will be show based on the type of user.

![Image](/angular/images/register-button.jpg)
