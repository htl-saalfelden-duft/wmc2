# Flex-Demo

* display hinzufügen
* item stylen
  
````css
.item {
    margin: 10px;
    line-height: 75px;
    width: 75px;
    text-align: center;
    font-size: 40px;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
}
````

* container 
````css
.container {
    display: flex;
    flex-direction: row|column|row-reverse|column-reverse;
    justify-content: center|left|right|space-between;
    flex-wrap: wrap|nowrap;
    align-items: center;
}

````

* item
````css
.item {
    flex-grow: 1;
}
````
````css
#item3 {
    order: 1;
    flex-shrink: 1;
    flex-basis: 200px; /*Initial length*/
    flex: 0 0 200px; /*not growing, not shrinking and base 200px*/
    align-self: center; /*Align single item*/
}
````