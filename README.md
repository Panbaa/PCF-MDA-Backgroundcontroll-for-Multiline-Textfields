# PCF to Change the background of a Multiline-Textfield in a Model Driven App

## What can be done
The problem I was facing is the opportunity to change the background in fields in a model driven app. Unfortunately, there is no easy way of doing that rather than implementing a PCF. The PCF in this solution allows to update the background color of a text field. Currently only the Multiple and TextArea are supported.

## Using it on a MDA
Import the solution into your environment. If you have a textfield inside your form - go to the components tab while you are in edit mode and use the MultilineColorChange component. If you cannot find it in the popup make sure to have a look in the search for more components tab. Once you can select it make sure to tick the show component on fields and add the two requested static values 
A rgb(xxx,yyy,zzz) value (For now only rgb works - no hex or hsl colors)
A Number (Can be any Number - will get parsed to Int and multiplied by 2.5rem for the lineheight)

As shown below:
![alt text](https://github.com/Panbaa/PCF-MDA-Backgroundcontroll-for-Multiline-Textfields/blob/main/Screenshots/Screenshot%202024-04-09%20163651.png)

Apply the changes and you will see the color in your field.

If you encounter any problem or wish more extension feel free to message me via [LinkedIn](https://de.linkedin.com/in/gilbert-lynsche-572b51241).
