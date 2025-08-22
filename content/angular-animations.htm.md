+++
title = "Angular - Animations"
date = "2025-08-22"
draft = false
description = "The term Animation can be defined as the transformation of HTML element from one CSS style to another over a specific period of time. It provides ability to add visual effects and transitions to your web applications. You can apply animation to almost all CSS properties."
image = "/angular/images/animation.gif"
imageBig = "/angular/images/animation.gif"
categories = ["Tutorial"]
authors = ["Cude Admin"]
avatar = "/images/avatar.webp"
+++

# Angular - Animations

URL: https://www.tutorialspoint.com/angular/angular-animations.htm

The termAnimationcan be defined as the transformation of HTML element from one CSS style to another over a specific period of time. It provides ability to add visual effects and transitions to your web applications. You can apply animation to almost all CSS properties.

The primary focus of designing a web application is to keep users engaged or grab their attention until they perform desired actions. Sure, the application needs to provide valuable information and help the visitors in their task, but visual appearance plays an important role, too. This visual effect is created using animation.

In this tutorial, we are going to learn how we can add animation to an Angular application.

Be it an Angular application or any web app, animations are used for several reasons −

InAngular, we need to learn the following five core concepts and their relationship to completely understand the workings of animation −

Staterefers to the specific state of the component. A component can have multiple defined states. It is created usingstate()method. It has two arguments as shown below −

name:Unique name of the state.

style:Style of the state defined usingstyle()method.

Here,startis the name of the state.

Stylerefers to the CSS style applied in a particular state. Thestyle()method is used to style the particular state of a component. It uses the CSS property and can have multiple items.

Here,startstate defines two CSS properties,widthwith value 200px andopacitywith value 1.

Transitionmeans the change of state from one state to another. Animation can have multiple transitions. Each transition is defined usingtransition()function. This function takes two argument −

Direction Expression between two transition state.

Details of animation usinganimate()function.

Here,transition()function defines the transition from start state to end state with animation defined inanimate()method.

Animation defines the way the transition from one state to another take place. Theanimation()function is used to set the animation details. Theanimate()takes a single argument in the form of below expression −

duration:refers the duration of the transition. It is expressed as 1s, 100ms, etc.,

delay:It is the delay time to start the transition. It is expressed similarly toduration.

easing:It specifies how to accelerate/decelerate the transition in the given time duration.

Every animation needs a trigger to start the animation. Thetrigger()method is used to set all the animation information such as state, style, transition and animation, in one place and give it a unique name. The unique name is used further to trigger the animation.

Here,enlargeis the unique name given to the particular animation. It has two state and related styles. It has two transitions, one from start to end and another from end to start. End to start state, do the reverse of the animation.

Triggercan be attached to an element as specified below −

For example,

Here,

@enlarge:trigger is set to image tag and attached to an expression.

IfisEnlargevalue is changed to true, thenendstate will be set and it triggersstart =>end transition.

IfisEnlargevalue is changed to false, thenstartstate will be set and it triggersend => start transition.

To implement animations in Angular, you need to follow these steps:

Here, we set up a <div> element that changes its background color based on hover state using Angular animations.

Step 1:Create an Angular application with a suitable name. We are naming itanimation-app.

Step 2:Install the@angular/animationsmodule to your project by running the following command −

It is optional step.

Step 3:Import theBrowserAnimationsModuleandprovideAnimationsAsync()in themain.tsfile as shown in the following code −

Step 4:Import thetrigger, transition, style, animate, stateand add the animation insideapp.component.tsfile −

In the above code,trigger()function specify an animation, andstate(),style(),animate(), andtransition()define what happens during the animation.

Step 5:Apply the[@backgroundColorChange]binding to the div element insideapp.component.tsfile −

The@backgroundColorChangebinding applies an animation trigger to the div, which transitions between thehoveredanddefaultstates based on theisHoveredproperty. Themouseenterandmouseleaveevent bindings update theisHoveredproperty to TRUE or FALSE when the mouse enters or leaves the div, respectively.

Step 6:Open the CSS file and apply the following style −

Step 7:Run the application usingng servecommand to get the output.

The@angular/animationsmodule provides the following methods −

1.

This is the main function from where an animation starts. It contains all the animation function calls. Its first argument is used to declare the trigger name, and the second one is an array of different animation functions. The trigger name is a unique identifier bound to theTemplateand the animation functions define the behavior of animations.

2.

It is used to create a named set of CSS styles. These styles are applied on successful transition to a given state. The state name can be used within other animation functions.

3.

Specifies the CSS styles that will be applied during the animation.

4.

It is used to set the animation duration and easing function for a transition.

5.

Defines how to move between different states.

6.

This function is used to define a series of styles for an element over time. It is used within animate() function.

7.

Using this function, you can run a group of animation steps in parallel. It is used within sequence() and transition() functions.

8.

When you want animations to be run within the same timeframe on child component and parent component both, use the animateChild() function.

9.

It is used to start a reusable animation.

10.

It is used to create a reusable animation.

11.

It delays the start time of animations for multiple elements so that they begin one after another instead of all at the same time.

12.

This function is used for creating a list of animation steps that play one after the other, in order.

13.

It finds inner HTML elements lies within the current element.

![Image](/angular/images/animation.gif)
